import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Every form on the site posts here (homepage form, Book Demo questions, chosen demo slot).
// Each submission is emailed to LEAD_TO_EMAIL (default getpatients24@gmail.com) through Gmail SMTP.
// Optional: LEAD_WEBHOOK_URL also forwards the lead as JSON to n8n / Make / Zapier / a CRM.

export const runtime = "nodejs";

const TO = process.env.LEAD_TO_EMAIL || "getpatients24@gmail.com";
const MAX_FIELD = 2000;

const LABELS = {
  name: "Name",
  clinic: "Clinic",
  email: "Email",
  phone: "Phone",
  specialty: "Specialty",
  locations: "Locations",
  challenge: "Biggest challenge",
  goal: "Notes",
  message: "Message",
  slot: "Chosen demo time",
  timezone: "Visitor time zone",
  source: "Form",
  page: "Page",
  receivedAt: "Received",
};

function clean(body) {
  const out = {};
  for (const [k, v] of Object.entries(body || {})) {
    if (typeof v !== "string" && typeof v !== "number") continue;
    const val = String(v).trim().slice(0, MAX_FIELD);
    if (val) out[String(k).slice(0, 60)] = val;
  }
  return out;
}

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

function emailBody(lead) {
  const rows = Object.entries(lead)
    .map(([k, v]) => `<tr><td style="padding:8px 12px;border-bottom:1px solid #e6edf3;color:#3f5a70;white-space:nowrap;vertical-align:top">${esc(LABELS[k] || k)}</td><td style="padding:8px 12px;border-bottom:1px solid #e6edf3;color:#06121f;font-weight:600">${esc(v).replace(/\n/g, "<br>")}</td></tr>`)
    .join("");
  const html = `<div style="font-family:Arial,sans-serif;max-width:560px">
<h2 style="margin:0 0 4px;color:#023e8a">New lead from GetPatients24</h2>
<p style="margin:0 0 16px;color:#3f5a70">${lead.slot ? "A demo time was chosen." : "A form was submitted on the website."}</p>
<table style="border-collapse:collapse;width:100%;border:1px solid #e6edf3;border-radius:8px">${rows}</table>
<p style="margin:16px 0 0;color:#3f5a70;font-size:13px">Reply to this email to answer the lead directly.</p></div>`;
  const text = Object.entries(lead).map(([k, v]) => `${LABELS[k] || k}: ${v}`).join("\n");
  return { html, text };
}

function transport() {
  if (process.env.MAIL_DRY_RUN === "1") {
    return nodemailer.createTransport({ streamTransport: true, newline: "unix", buffer: true });
  }
  if (!process.env.SMTP_PASS) return null;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 465),
    secure: (process.env.SMTP_PORT || "465") === "465",
    auth: { user: process.env.SMTP_USER || TO, pass: process.env.SMTP_PASS },
  });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const lead = clean(body);

  // Honeypot: real visitors never fill a hidden "website" field.
  if (lead.website) return NextResponse.json({ ok: true });

  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 422 });
  }

  lead.receivedAt = new Date().toISOString();
  const tasks = [];

  const mailer = transport();
  if (mailer) {
    const who = [lead.name, lead.clinic].filter(Boolean).join(" · ") || "Website visitor";
    const { html, text } = emailBody(lead);
    tasks.push(
      mailer
        .sendMail({
          from: `"GetPatients24 Website" <${process.env.SMTP_USER || TO}>`,
          to: TO,
          replyTo: lead.email || undefined,
          subject: `${lead.slot ? "Demo booked" : "New lead"}: ${who}`,
          text,
          html,
        })
        .then((info) => {
          if (process.env.MAIL_DRY_RUN === "1") console.log("[lead] dry-run email\n" + info.message.toString());
        })
    );
  } else {
    console.warn("[lead] SMTP_PASS is not set, so this lead was not emailed:", JSON.stringify(lead));
  }

  if (process.env.LEAD_WEBHOOK_URL) {
    tasks.push(
      fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      }).then((r) => {
        if (!r.ok) throw new Error(`Webhook responded ${r.status}`);
      })
    );
  }

  const results = await Promise.allSettled(tasks);
  const failed = results.filter((r) => r.status === "rejected");
  failed.forEach((f) => console.error("[lead] delivery failed:", f.reason));

  if (tasks.length && failed.length === tasks.length) {
    return NextResponse.json({ ok: false, error: "Could not deliver lead" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
