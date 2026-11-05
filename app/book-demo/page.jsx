import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Book a Demo | GetPatients24",
  description: "Book your free patient growth strategy call with GetPatients24.",
};

export default function BookDemoPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(180deg, var(--soft) 0%, #FFFFFF 100%)", padding: "96px 0 64px" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "22px" }}>
      <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--priD)" }}>BOOK A DEMO</span>
      <h1 style={{ margin: "0", maxWidth: "940px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "clamp(44px, 5.6vw, 78px)", lineHeight: "1.0", letterSpacing: "-0.04em" }}>Book your{" "}<span style={{ color: "var(--pri)" }}>patient growth</span>{" "}strategy call</h1>
      <p style={{ margin: "0", maxWidth: "700px", fontSize: "20px", lineHeight: "1.6", color: "var(--muted)" }}>See how GetPatients24 can help your clinic attract, qualify and book more of the right patients, straight into your calendar.</p>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}><span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 18px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid var(--line)", fontSize: "15px", fontWeight: "600" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--pri)" }}><path d="M20 6 9 17l-5-5"></path></svg>Free 30-minute call</span><span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 18px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid var(--line)", fontSize: "15px", fontWeight: "600" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--pri)" }}><path d="M20 6 9 17l-5-5"></path></svg>No obligation</span><span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 18px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid var(--line)", fontSize: "15px", fontWeight: "600" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--pri)" }}><path d="M20 6 9 17l-5-5"></path></svg>Clear next steps</span></div>
      </div>
      </section>

      <section style={{ padding: "40px 0 112px", background: "#FFFFFF" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "56px" }}>
      <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
      <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--priD)" }}>CHOOSE A TIME THAT WORKS FOR YOU</span>
      <h2 style={{ margin: "0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4vw, 52px)", lineHeight: "1.05", letterSpacing: "-0.035em" }}>A few quick questions, then pick your slot.</h2>
      <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.7", color: "var(--muted)" }}>Your answers help us prepare, so we can spend the call on your clinic instead of the basics. Whatever you decide afterwards, you'll leave with a clear picture of what to do next.</p>
      <div style={{ borderRadius: "28px", background: "var(--ink)", color: "#FFFFFF", padding: "30px", display: "flex", flexDirection: "column", gap: "16px" }}>
      <span style={{ display: "flex", alignItems: "center", gap: "14px" }}><span style={{ width: "48px", height: "48px", borderRadius: "14px", background: "var(--hi)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--ink)" }}><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"></path></svg></span><span style={{ fontSize: "20px", fontWeight: "700" }}>You'll leave with clarity</span></span>
      <span style={{ fontSize: "16px", lineHeight: "1.65", color: "#C4D2E0" }}>Whether we work together or not, you'll know where your bookings are slipping and the next three things to fix.</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "16px", fontWeight: "600" }}>
      <span style={{ display: "flex", gap: "12px", alignItems: "center" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--pri)" }}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"></path></svg>Prefer to talk now?{" "}<a href="tel:+17866198997" style={{ color: "var(--pri)" }}>+1 786 619 8997</a></span>
      <span style={{ display: "flex", gap: "12px", alignItems: "center" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--pri)" }}><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-10 6L2 7"></path></svg><a href="mailto:info@reliantware.com" style={{ color: "var(--pri)" }}>info@reliantware.com</a></span>
      </div>
      </div>
      <div id="book" style={{ flex: "1 1 460px", minWidth: "0", scrollMarginTop: "120px", background: "var(--ground)", border: "1px solid var(--line)", borderRadius: "32px", padding: "36px", display: "flex", flexDirection: "column", gap: "16px", boxShadow: "0 30px 60px rgba(11,31,58,0.08)" }}>
      <BookingForm />
      </div>
      </div>
      </section>

      <section style={{ padding: "104px 0", background: "var(--ground)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "40px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "12px" }}>
      <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--priD)" }}>ON THE CALL</span>
      <h2 style={{ margin: "0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.2vw, 54px)", letterSpacing: "-0.035em" }}>What we'll cover</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "18px" }}>
      <div style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px" }}><span style={{ width: "52px", height: "52px", borderRadius: "16px", background: "var(--soft)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--pri)" }}><path d="M3 3v18h18M7 14l4-4 4 4 5-5"></path></svg></span><h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>Your current patient flow</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>How patients find you, contact you and book today, from first click to first visit.</p></div>
      <div style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px" }}><span style={{ width: "52px", height: "52px", borderRadius: "16px", background: "var(--soft)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--pri)" }}><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg></span><h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>Better patients, better conversion</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>How to attract the patients you want most, and turn more of them into booked visits.</p></div>
      <div style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px" }}><span style={{ width: "52px", height: "52px", borderRadius: "16px", background: "var(--soft)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--pri)" }}><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"></path></svg></span><h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>What is holding bookings back</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>The specific bottlenecks costing you appointments, from slow replies to missed calls.</p></div>
      <div style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px" }}><span style={{ width: "52px", height: "52px", borderRadius: "16px", background: "var(--soft)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--pri)" }}><path d="M21 21l-4.3-4.3M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path></svg></span><h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>Gaps in marketing and follow-up</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>Where your ads, website and follow-up leave money on the table, and how to close the gaps.</p></div>
      </div>
      </div>
      </section>

      <section style={{ padding: "0 24px 112px", background: "var(--ground)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", borderRadius: "40px", background: "var(--ink)", padding: "clamp(36px, 5vw, 64px)", display: "flex", flexDirection: "column", gap: "32px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "20px" }}>
      <h2 style={{ margin: "0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "clamp(32px, 3.8vw, 48px)", letterSpacing: "-0.035em", color: "#FFFFFF" }}>A quick note before you book</h2>
      <a href="#book" style={{ display: "inline-flex", alignItems: "center", minHeight: "54px", padding: "0 26px", borderRadius: "999px", background: "var(--hi)", color: "var(--ink)", fontWeight: "800", textDecoration: "none" }}>Pick my time</a>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
      <div style={{ borderRadius: "24px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", padding: "26px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "30px", color: "var(--hi)" }}>01</span><span style={{ fontSize: "19px", fontWeight: "700", color: "#FFFFFF" }}>We prepare for your call</span><span style={{ fontSize: "15px", lineHeight: "1.6", color: "#C4D2E0" }}>Your answers shape the agenda, so the call is about your clinic, not a generic pitch.</span></div>
      <div style={{ borderRadius: "24px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", padding: "26px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "30px", color: "var(--hi)" }}>02</span><span style={{ fontSize: "19px", fontWeight: "700", color: "#FFFFFF" }}>For clinics ready to act</span><span style={{ fontSize: "15px", lineHeight: "1.6", color: "#C4D2E0" }}>This call is for owners and managers who want to grow and are open to putting a plan in place.</span></div>
      <div style={{ borderRadius: "24px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", padding: "26px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "30px", color: "var(--hi)" }}>03</span><span style={{ fontSize: "19px", fontWeight: "700", color: "#FFFFFF" }}>Please show up on time</span><span style={{ fontSize: "15px", lineHeight: "1.6", color: "#C4D2E0" }}>We block real time to research your clinic. If something changes, just reschedule.</span></div>
      <div style={{ borderRadius: "24px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", padding: "26px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "30px", color: "var(--hi)" }}>04</span><span style={{ fontSize: "19px", fontWeight: "700", color: "#FFFFFF" }}>Limited calls each week</span><span style={{ fontSize: "15px", lineHeight: "1.6", color: "#C4D2E0" }}>We keep a small number of strategy calls open each week so every one gets proper attention.</span></div>
      </div>
      </div>
      </section>
    </>
  );
}
