"use client";

import { useState } from "react";
import SlotPicker from "@/components/SlotPicker";

const SOURCE = "book-demo";

export default function BookingForm() {
  const [sent, setSent] = useState(false);
  const [sentName, setSentName] = useState("there");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [details, setDetails] = useState({});
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
      setDetails(data);
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
      <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}><span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", color: "var(--priD)" }}>STEP 1 OF 2 · A FEW QUICK QUESTIONS</span><span style={{ fontSize: "24px", fontWeight: "700" }}>Tell us about your clinic</span></span>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
      <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", fontWeight: "600", color: "var(--muted)" }}>Your name<input name="name" type="text" required autoComplete="name" style={{ minHeight: "50px", padding: "0 16px", borderRadius: "14px", border: "1.5px solid var(--line)", fontSize: "16px", fontFamily: "inherit", color: "var(--ink)", background: "#FFFFFF" }} /></label>
      <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", fontWeight: "600", color: "var(--muted)" }}>Clinic name<input name="clinic" type="text" required style={{ minHeight: "50px", padding: "0 16px", borderRadius: "14px", border: "1.5px solid var(--line)", fontSize: "16px", fontFamily: "inherit", color: "var(--ink)", background: "#FFFFFF" }} /></label>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
      <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", fontWeight: "600", color: "var(--muted)" }}>Work email<input name="email" type="email" required autoComplete="email" style={{ minHeight: "50px", padding: "0 16px", borderRadius: "14px", border: "1.5px solid var(--line)", fontSize: "16px", fontFamily: "inherit", color: "var(--ink)", background: "#FFFFFF" }} /></label>
      <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", fontWeight: "600", color: "var(--muted)" }}>Phone<input name="phone" type="tel" autoComplete="tel" style={{ minHeight: "50px", padding: "0 16px", borderRadius: "14px", border: "1.5px solid var(--line)", fontSize: "16px", fontFamily: "inherit", color: "var(--ink)", background: "#FFFFFF" }} /></label>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
      <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", fontWeight: "600", color: "var(--muted)" }}>Specialty<select name="specialty" style={{ minHeight: "50px", padding: "0 16px", borderRadius: "14px", border: "1.5px solid var(--line)", fontSize: "16px", fontFamily: "inherit", color: "var(--ink)", background: "#FFFFFF" }}><option>Chiropractic</option><option>Surgery</option><option>Eye clinic</option><option>Physical therapy</option><option>Regenerative</option><option>Med spa</option><option>Dental</option><option>Other</option></select></label>
      <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", fontWeight: "600", color: "var(--muted)" }}>Locations<select name="locations" style={{ minHeight: "50px", padding: "0 16px", borderRadius: "14px", border: "1.5px solid var(--line)", fontSize: "16px", fontFamily: "inherit", color: "var(--ink)", background: "#FFFFFF" }}><option>1</option><option>2 to 3</option><option>4+</option></select></label>
      </div>
      <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", fontWeight: "600", color: "var(--muted)" }}>Biggest challenge right now<select name="challenge" style={{ minHeight: "50px", padding: "0 16px", borderRadius: "14px", border: "1.5px solid var(--line)", fontSize: "16px", fontFamily: "inherit", color: "var(--ink)", background: "#FFFFFF" }}><option>Not enough new patients</option><option>Leads don't turn into bookings</option><option>Too many no-shows</option><option>No time to follow up</option><option>Something else</option></select></label>
      <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", fontWeight: "600", color: "var(--muted)" }}>Anything we should know before the call?<textarea name="goal" rows="3" style={{ padding: "14px 16px", borderRadius: "14px", border: "1.5px solid var(--line)", fontSize: "16px", fontFamily: "inherit", background: "#FFFFFF", color: "var(--ink)", resize: "vertical" }}></textarea></label>
      <button type="submit" disabled={sending} style={{ minHeight: "58px", border: "0", borderRadius: "999px", background: "var(--pri)", color: "#FFFFFF", fontWeight: "700", fontSize: "17px", fontFamily: "inherit", cursor: "pointer" }}>Continue to pick a time</button>
      <span style={{ fontSize: "13px", color: "var(--muted)", textAlign: "center" }}>Fields marked by your browser are required. We reply within one business day.</span>
      {error && (<p role="alert" style={{ margin: 0, color: "#B42318", fontSize: 14 }}>{error}</p>)}</form>
      </>)}
      {sent && (<>
      <div role="status" style={{ display: "flex", flexDirection: "column", gap: "18px", padding: "8px 4px" }}>
      <span style={{ width: "72px", height: "72px", borderRadius: "999px", background: "var(--pri)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 26px rgba(0,119,182,0.3)" }}><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></span>
      <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "30px", letterSpacing: "-0.02em" }}>Thanks,{" "}{sentName}! Now pick a time.</span>
      <span style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--muted)" }}>Step 2 of 2. Choose a slot below and we'll confirm it by email.</span>
      <SlotPicker name={sentName} details={details} /><button type="button" onClick={resetForm} style={{ alignSelf: "flex-start", minHeight: "48px", padding: "0 22px", borderRadius: "999px", border: "1.5px solid var(--line)", background: "#FFFFFF", color: "var(--ink)", fontWeight: "600", fontFamily: "inherit", cursor: "pointer" }}>Edit my details</button>
      </div>
      </>)}
    </>
  );
}
