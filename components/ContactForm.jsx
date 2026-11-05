"use client";

import { useState } from "react";

const SOURCE = "homepage-contact";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sentName, setSentName] = useState("there");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const notSent = !sent;

  async function submitForm(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: SOURCE, page: window.location.pathname }),
      });
      if (!res.ok) throw new Error("Request failed");
      const n = String(data.name || data.clinic || "").trim();
      setSentName(n || "there");
      setSent(true);
    } catch (err) {
      setError("Something went wrong. Please call us on +1 786 619 8997 or try again.");
    } finally {
      setSending(false);
    }
  }

  function resetForm() {
    setSent(false);
  }

  return (
    <>
      {notSent && (<>
      <form onSubmit={submitForm} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <span style={{ fontSize: "20px", fontWeight: "700" }}>Get your free patient flow review</span>
      <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", fontWeight: "600", color: "var(--muted)" }}>Your name<input name="name" type="text" required autoComplete="name" placeholder="Dr. Jane Smith" style={{ minHeight: "50px", padding: "0 16px", borderRadius: "14px", border: "1.5px solid var(--line)", fontSize: "16px", fontFamily: "inherit", color: "var(--ink)", background: "#FFFFFF" }} /></label>
      <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", fontWeight: "600", color: "var(--muted)" }}>Clinic name<input name="clinic" type="text" required placeholder="Your clinic" style={{ minHeight: "50px", padding: "0 16px", borderRadius: "14px", border: "1.5px solid var(--line)", fontSize: "16px", fontFamily: "inherit", color: "var(--ink)", background: "#FFFFFF" }} /></label>
      <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", fontWeight: "600", color: "var(--muted)" }}>Work email<input name="email" type="email" required autoComplete="email" placeholder="you@clinic.com" style={{ minHeight: "50px", padding: "0 16px", borderRadius: "14px", border: "1.5px solid var(--line)", fontSize: "16px", fontFamily: "inherit", color: "var(--ink)", background: "#FFFFFF" }} /></label>
      <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", fontWeight: "600", color: "var(--muted)" }}>Clinic type<select name="type" style={{ minHeight: "50px", padding: "0 14px", borderRadius: "14px", border: "1.5px solid var(--line)", fontSize: "16px", fontFamily: "inherit", color: "var(--ink)", background: "#FFFFFF" }}><option>Physiotherapy</option><option>Chiropractic</option><option>Dental</option><option>Med Spa</option><option>Eye clinic</option><option>Surgical practice</option><option>Other</option></select></label>
      <button type="submit" disabled={sending} style={{ minHeight: "56px", border: "0", borderRadius: "999px", background: "var(--pri)", color: "#FFFFFF", fontWeight: "700", fontSize: "17px", fontFamily: "inherit", cursor: "pointer" }}>Book my free call</button>
      <span style={{ fontSize: "13px", color: "var(--muted)", textAlign: "center" }}>We reply within one business day. No spam, ever.</span>
      {error && (<p role="alert" style={{ margin: 0, color: "#B42318", fontSize: 14 }}>{error}</p>)}</form>
      </>)}
      {sent && (<>
      <div role="status" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "14px", padding: "24px 8px" }}>
      <span style={{ width: "72px", height: "72px", borderRadius: "999px", background: "var(--pri)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 26px rgba(0,119,182,0.3)" }}><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></span>
      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "26px" }}>Thanks,{" "}{sentName}!</span>
      <span style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--muted)" }}>Your request is in. We'll email you within one business day to schedule your free patient flow review.</span>
      <button type="button" onClick={resetForm} style={{ minHeight: "48px", padding: "0 22px", borderRadius: "999px", border: "1.5px solid var(--line)", background: "#FFFFFF", color: "var(--ink)", fontWeight: "600", fontFamily: "inherit", cursor: "pointer" }}>Send another request</button>
      </div>
      </>)}
    </>
  );
}
