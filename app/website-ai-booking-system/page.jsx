import Link from "next/link";

export const metadata = {
  title: "Website + AI Patient Booking System | GetPatients24",
  description: "A clinic website plus an AI booking assistant that answers, qualifies and books patients 24/7.",
};

export default function AIBookingSystemPage() {
  return (
    <>
      <section style={{ background: "#FFFFFF", padding: "96px 0 110px", position: "relative", overflow: "hidden", isolation: "isolate" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: "0", zIndex: "-1", backgroundImage: "url(/hero-team-review.webp)", backgroundSize: "cover", backgroundPosition: "center center" }}></div><div aria-hidden="true" style={{ position: "absolute", inset: "0", zIndex: "-1", background: "radial-gradient(ellipse 62% 78% at 50% 50%, rgba(242,251,253,0.93) 0%, rgba(236,249,252,0.8) 55%, rgba(202,240,248,0.5) 100%)" }}></div><div aria-hidden="true" style={{ position: "absolute", inset: "0", zIndex: "-1", background: "linear-gradient(180deg, rgba(255,255,255,0) 60%, #FFFFFF 100%)" }}></div>
      <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "56px" }}>
      <div style={{ flex: "1 1 100%", maxWidth: "920px", margin: "0 auto", minWidth: "0", alignItems: "center", textAlign: "center", display: "flex", flexDirection: "column", gap: "24px" }}>
      <span style={{ alignSelf: "center", fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", padding: "8px 14px", borderRadius: "999px", background: "var(--soft2)", color: "var(--secD)" }}>SERVICE · FOUNDATION</span>
      <h1 style={{ margin: "0", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(44px, 5.6vw, 78px)", lineHeight: "1.0", letterSpacing: "-0.04em" }}>A clinic website that{" "}<span style={{ color: "var(--pri)" }}>books patients</span>{" "}while you sleep.</h1>
      <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.6", color: "var(--muted)", maxWidth: "680px" }}>A fast, modern website paired with an AI assistant that answers questions, qualifies visitors and books appointments 24/7, by chat, text or phone.</p>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px" }}>
      <Link href="/book-demo" style={{ display: "inline-flex", alignItems: "center", minHeight: "58px", padding: "0 30px", borderRadius: "999px", background: "var(--pri)", color: "#FFFFFF", fontWeight: "700", fontSize: "17px", textDecoration: "none" }}>See a live demo</Link>
      <Link href="/pricing-plans" style={{ display: "inline-flex", alignItems: "center", minHeight: "58px", padding: "0 28px", borderRadius: "999px", background: "#FFFFFF", border: "1.5px solid var(--line)", color: "var(--ink)", fontWeight: "600", fontSize: "17px", textDecoration: "none" }}>See pricing</Link>
      </div>
      </div>
      </div>
      </section>

      <section style={{ padding: "112px 0", background: "var(--ground)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "48px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "14px" }}>
      <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--priD)" }}>WHAT YOU GET</span>
      <h2 style={{ margin: "0", maxWidth: "820px", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.2vw, 56px)", lineHeight: "1.05", letterSpacing: "-0.035em" }}>Your website, your front desk and your follow-up, in one.</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))", gap: "18px" }}>
      <div style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "26px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px" }}><span style={{ width: "52px", height: "52px", borderRadius: "16px", background: "var(--soft)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--priD)" }}><rect x="2" y="4" width="20" height="14" rx="2"></rect><path d="M8 22h8M12 18v4"></path></svg></span><h3 style={{ margin: "0", fontSize: "21px", fontWeight: "700" }}>Conversion-focused website</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>Fast, mobile-first design with treatment pages, reviews and clear calls to book.</p></div>
      <div style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "26px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px" }}><span style={{ width: "52px", height: "52px", borderRadius: "16px", background: "var(--soft)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--priD)" }}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></span><h3 style={{ margin: "0", fontSize: "21px", fontWeight: "700" }}>24/7 AI chat assistant</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>Answers common questions in your clinic's voice and guides visitors to book.</p></div>
      <div style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "26px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px" }}><span style={{ width: "52px", height: "52px", borderRadius: "16px", background: "var(--soft)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--priD)" }}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"></path></svg></span><h3 style={{ margin: "0", fontSize: "21px", fontWeight: "700" }}>AI receptionist for calls</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>Picks up missed and after-hours calls, takes details and books the visit.</p></div>
      <div style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "26px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px" }}><span style={{ width: "52px", height: "52px", borderRadius: "16px", background: "var(--soft2)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--secD)" }}><rect x="3" y="4" width="18" height="17" rx="3"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg></span><h3 style={{ margin: "0", fontSize: "21px", fontWeight: "700" }}>Online booking{" "}&amp;{" "}calendar sync</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>Live availability connected to your calendar or practice software.</p></div>
      <div style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "26px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px" }}><span style={{ width: "52px", height: "52px", borderRadius: "16px", background: "var(--soft2)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--secD)" }}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.7 21a2 2 0 0 1-3.4 0"></path></svg></span><h3 style={{ margin: "0", fontSize: "21px", fontWeight: "700" }}>Reminders{" "}&amp;{" "}review requests</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>Automatic reminders cut no-shows, and happy patients get asked for a review.</p></div>
      <div style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "26px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px" }}><span style={{ width: "52px", height: "52px", borderRadius: "16px", background: "var(--soft2)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--secD)" }}><path d="M3 3v18h18"></path><path d="M7 16v-4M12 16V8M17 16v-7"></path></svg></span><h3 style={{ margin: "0", fontSize: "21px", fontWeight: "700" }}>Lead inbox{" "}&amp;{" "}dashboard</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>Every enquiry, conversation and booking in one simple place.</p></div>
      </div>
      </div>
      </section>

      <section style={{ padding: "112px 0", background: "#FFFFFF" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "40px" }}>
      <h2 style={{ margin: "0", textAlign: "center", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.2vw, 56px)", lineHeight: "1.05", letterSpacing: "-0.035em" }}>What changes for your clinic</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "24px" }}>
      <div style={{ background: "var(--ground)", border: "1px solid var(--line)", borderRadius: "32px", padding: "40px", display: "flex", flexDirection: "column", gap: "16px" }}>
      <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "#B42318" }}>BEFORE</span>
      <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "14px", fontSize: "17px", color: "var(--muted)" }}>
      <li style={{ display: "flex", gap: "12px" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B42318" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}><path d="M18 6 6 18M6 6l12 12"></path></svg>Visitors leave without contacting you</li>
      <li style={{ display: "flex", gap: "12px" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B42318" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}><path d="M18 6 6 18M6 6l12 12"></path></svg>After-hours calls go to voicemail</li>
      <li style={{ display: "flex", gap: "12px" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B42318" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}><path d="M18 6 6 18M6 6l12 12"></path></svg>Staff spend hours on phone tag</li>
      <li style={{ display: "flex", gap: "12px" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B42318" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}><path d="M18 6 6 18M6 6l12 12"></path></svg>No-shows leave gaps in the day</li>
      </ul>
      </div>
      <div style={{ background: "var(--night)", color: "#FFFFFF", borderRadius: "32px", padding: "40px", display: "flex", flexDirection: "column", gap: "16px" }}>
      <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--hi)" }}>AFTER</span>
      <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "14px", fontSize: "17px", color: "#E6EEFA" }}>
      <li style={{ display: "flex", gap: "12px" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", stroke: "var(--hi)" }}><path d="M20 6 9 17l-5-5"></path></svg>Visitors get answers and book on the spot</li>
      <li style={{ display: "flex", gap: "12px" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", stroke: "var(--hi)" }}><path d="M20 6 9 17l-5-5"></path></svg>Every call answered, day or night</li>
      <li style={{ display: "flex", gap: "12px" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", stroke: "var(--hi)" }}><path d="M20 6 9 17l-5-5"></path></svg>Front desk focuses on patients in the clinic</li>
      <li style={{ display: "flex", gap: "12px" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", stroke: "var(--hi)" }}><path d="M20 6 9 17l-5-5"></path></svg>Reminders keep the schedule full</li>
      </ul>
      </div>
      </div>
      </div>
      </section>

      <section style={{ padding: "112px 0", background: "var(--pri)", color: "#FFFFFF" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "48px" }}>
      <h2 style={{ margin: "0", textAlign: "center", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.2vw, 56px)", lineHeight: "1.05", letterSpacing: "-0.035em" }}>Live in 2 weeks. Here's how.</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "18px" }}>
      <div style={{ background: "#FFFFFF", color: "var(--ink)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "40px", color: "var(--pri)" }}>1</span><h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>Kickoff call</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>We learn your services, hours, pricing and common patient questions.</p></div>
      <div style={{ background: "#FFFFFF", color: "var(--ink)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "40px", color: "var(--pri)" }}>2</span><h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>Design{" "}&amp;{" "}build</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>We design the site and train the AI on your clinic's information.</p></div>
      <div style={{ background: "#FFFFFF", color: "var(--ink)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "40px", color: "var(--pri)" }}>3</span><h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>Connect{" "}&amp;{" "}test</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>Calendar, phone and forms are connected and tested end to end.</p></div>
      <div style={{ background: "var(--night)", color: "#FFFFFF", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "40px", color: "var(--hi)" }}>4</span><h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>Launch{" "}&amp;{" "}support</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#C4D2E0" }}>You go live, and we keep improving answers and conversion each month.</p></div>
      </div>
      </div>
      </section>

      <section style={{ padding: "112px 0", background: "var(--ground)" }}>
      <div style={{ maxWidth: "880px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "36px" }}>
      <h2 style={{ margin: "0", textAlign: "center", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.2vw, 52px)", letterSpacing: "-0.035em" }}>Common questions</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <details open style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "22px", padding: "24px 28px" }}><summary style={{ fontSize: "18px", fontWeight: "700" }}>Will the AI give medical advice?</summary><p style={{ margin: "14px 0 0", fontSize: "16px", lineHeight: "1.7", color: "var(--muted)" }}>No. It answers general questions about your clinic and services, and hands anything clinical to your team.</p></details>
      <details style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "22px", padding: "24px 28px" }}><summary style={{ fontSize: "18px", fontWeight: "700" }}>Can I keep my current website?</summary><p style={{ margin: "14px 0 0", fontSize: "16px", lineHeight: "1.7", color: "var(--muted)" }}>Yes. We can add the AI assistant and online booking to the website you already have, or build you a new one if it is holding you back.</p></details>
      </div>
      </div>
      </section>
      <section style={{ padding: "0 24px 112px", background: "var(--ground)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", borderRadius: "40px", background: "var(--night)", color: "#FFFFFF", padding: "clamp(44px, 6vw, 80px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "32px" }}>
      <h2 style={{ margin: "0", maxWidth: "720px", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.2vw, 56px)", lineHeight: "1.05", letterSpacing: "-0.035em" }}>See the AI book a patient, live.</h2>
      <Link href="/book-demo" style={{ display: "inline-flex", alignItems: "center", minHeight: "60px", padding: "0 32px", borderRadius: "999px", background: "var(--pri)", color: "#FFFFFF", fontWeight: "700", fontSize: "17px", textDecoration: "none" }}>Book a free demo</Link>
      </div>
      </section>
    </>
  );
}
