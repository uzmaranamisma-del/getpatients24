import { NextResponse } from "next/server";

// Receives every form on the site (homepage contact, book-demo questions, chosen demo slot).
// Set LEAD_WEBHOOK_URL (for example an n8n, Make or Zapier webhook) to forward leads to your CRM.
// Without it, leads are only written to the server log.

const MAX_FIELD = 2000;

function clean(body) {
  const out = {};
  for (const [k, v] of Object.entries(body || {})) {
    if (typeof v !== "string" && typeof v !== "number") continue;
    out[String(k).slice(0, 60)] = String(v).slice(0, MAX_FIELD);
  }
  return out;
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

  const payload = { ...lead, receivedAt: new Date().toISOString() };
  const webhook = process.env.LEAD_WEBHOOK_URL;

  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error("[lead] webhook failed", err);
      return NextResponse.json({ ok: false, error: "Could not save lead" }, { status: 502 });
    }
  } else {
    console.log("[lead]", JSON.stringify(payload));
  }

  return NextResponse.json({ ok: true });
}
