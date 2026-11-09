import Link from "next/link";

export const metadata = {
  title: "Done-For-You Patient Acquisition | GetPatients24",
  description: "Done-for-you patient acquisition: ads, landing pages, follow-up and booking, managed end to end for your clinic.",
};

export default function PatientAcquisitionPage() {
  return (
    <>
      <section style={{ background: "var(--night)", color: "#FFFFFF", padding: "100px 0 110px", position: "relative", overflow: "hidden", isolation: "isolate" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: "0", zIndex: "-1", backgroundImage: "url(/hero-team-review.webp)", backgroundSize: "cover", backgroundPosition: "center center" }}></div><div aria-hidden="true" style={{ position: "absolute", inset: "0", zIndex: "-1", background: "radial-gradient(ellipse 62% 78% at 50% 50%, rgba(6,18,31,0.93) 0%, rgba(6,18,31,0.84) 55%, rgba(6,18,31,0.62) 100%)" }}></div><div aria-hidden="true" style={{ position: "absolute", inset: "0", zIndex: "-1", background: "linear-gradient(180deg, rgba(0,119,182,0.18) 0%, rgba(6,18,31,0) 50%, rgba(6,18,31,0.6) 100%)" }}></div>
      <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "56px" }}>
      <div style={{ flex: "1 1 100%", maxWidth: "920px", margin: "0 auto", minWidth: "0", alignItems: "center", textAlign: "center", display: "flex", flexDirection: "column", gap: "24px" }}>
      <span style={{ alignSelf: "center", fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", padding: "8px 14px", borderRadius: "999px", background: "rgba(255,255,255,0.1)", color: "var(--hi)" }}>SERVICE · FULL SERVICE</span>
      <h1 style={{ margin: "0", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(44px, 5.6vw, 80px)", lineHeight: "1.0", letterSpacing: "-0.04em" }}>Done-For-You Patient Acquisition</h1>
      <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.6", color: "#C4D2E0", maxWidth: "680px" }}>We plan, launch and manage everything that brings new patients to your clinic, from the first ad to the confirmed appointment. You get a full calendar without hiring a marketing team.</p>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px" }}>
      <Link href="/book-demo" style={{ display: "inline-flex", alignItems: "center", minHeight: "58px", padding: "0 30px", borderRadius: "999px", background: "var(--pri)", color: "#FFFFFF", fontWeight: "700", fontSize: "17px", textDecoration: "none" }}>Book a free demo</Link>
      <Link href="/pricing-plans" style={{ display: "inline-flex", alignItems: "center", minHeight: "58px", padding: "0 28px", borderRadius: "999px", border: "1.5px solid rgba(255,255,255,0.3)", color: "#FFFFFF", fontWeight: "600", fontSize: "17px", textDecoration: "none" }}>See pricing</Link>
      </div>
      </div>
      </div>
      </section>

      <section style={{ padding: "112px 0", background: "#FFFFFF" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "48px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "14px" }}>
      <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--priD)" }}>WHAT'S INCLUDED</span>
      <h2 style={{ margin: "0", maxWidth: "820px", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.2vw, 56px)", lineHeight: "1.05", letterSpacing: "-0.035em" }}>Everything it takes to fill your schedule.</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))", gap: "18px" }}>
      <div style={{ background: "var(--ground)", borderRadius: "26px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px" }}><span style={{ width: "52px", height: "52px", borderRadius: "16px", background: "var(--pri)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 11l18-8-8 18-2-8z"></path></svg></span><h3 style={{ margin: "0", fontSize: "21px", fontWeight: "700" }}>Paid ads management</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>Meta and Google campaigns built around your treatments, budget and service area.</p></div>
      <div style={{ background: "var(--ground)", borderRadius: "26px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px" }}><span style={{ width: "52px", height: "52px", borderRadius: "16px", background: "var(--pri)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M3 9h18"></path></svg></span><h3 style={{ margin: "0", fontSize: "21px", fontWeight: "700" }}>Treatment landing pages</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>Fast, mobile-first pages with one clear goal: get the patient to enquire.</p></div>
      <div style={{ background: "var(--ground)", borderRadius: "26px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px" }}><span style={{ width: "52px", height: "52px", borderRadius: "16px", background: "var(--pri)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 3H2l8 9.5V19l4 2v-8.5z"></path></svg></span><h3 style={{ margin: "0", fontSize: "21px", fontWeight: "700" }}>Lead qualification</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>Short screening questions so only real-fit patients reach your team.</p></div>
      <div style={{ background: "var(--ground)", borderRadius: "26px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px" }}><span style={{ width: "52px", height: "52px", borderRadius: "16px", background: "var(--night)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--hi)" }}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></span><h3 style={{ margin: "0", fontSize: "21px", fontWeight: "700" }}>Instant follow-up</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>SMS, email and AI calling that reach every lead within minutes, day or night.</p></div>
      <div style={{ background: "var(--ground)", borderRadius: "26px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px" }}><span style={{ width: "52px", height: "52px", borderRadius: "16px", background: "var(--night)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--hi)" }}><rect x="3" y="4" width="18" height="17" rx="3"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg></span><h3 style={{ margin: "0", fontSize: "21px", fontWeight: "700" }}>Appointment booking</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>Qualified patients booked straight into your calendar or practice software.</p></div>
      <div style={{ background: "var(--ground)", borderRadius: "26px", padding: "32px", display: "flex", flexDirection: "column", gap: "12px" }}><span style={{ width: "52px", height: "52px", borderRadius: "16px", background: "var(--night)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--hi)" }}><path d="M3 3v18h18"></path><path d="M7 16v-4M12 16V8M17 16v-7"></path></svg></span><h3 style={{ margin: "0", fontSize: "21px", fontWeight: "700" }}>Reporting{" "}&amp;{" "}optimisation</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>A live view of leads, bookings and cost per patient, plus monthly reviews.</p></div>
      </div>
      </div>
      </section>

      <section style={{ padding: "112px 0", background: "var(--ground)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "48px" }}>
      <div style={{ maxWidth: "760px", display: "flex", flexDirection: "column", gap: "14px" }}>
      <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--priD)" }}>YOUR FIRST 90 DAYS</span>
      <h2 style={{ margin: "0", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.2vw, 56px)", lineHeight: "1.05", letterSpacing: "-0.035em" }}>A clear roadmap from kickoff to scale.</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "18px" }}>
      <div style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "12px" }}><span style={{ alignSelf: "flex-start", fontSize: "13px", fontWeight: "700", padding: "6px 12px", borderRadius: "999px", background: "var(--soft)", color: "var(--priD)" }}>Week 1</span><h3 style={{ margin: "0", fontSize: "22px", fontWeight: "700" }}>Discover{" "}&amp;{" "}plan</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>Clinic audit, ideal patient profile, offers and tracking setup.</p></div>
      <div style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "12px" }}><span style={{ alignSelf: "flex-start", fontSize: "13px", fontWeight: "700", padding: "6px 12px", borderRadius: "999px", background: "var(--soft)", color: "var(--priD)" }}>Weeks 2–3</span><h3 style={{ margin: "0", fontSize: "22px", fontWeight: "700" }}>Build{" "}&amp;{" "}launch</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>Pages, ads, follow-up flows and booking go live.</p></div>
      <div style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "12px" }}><span style={{ alignSelf: "flex-start", fontSize: "13px", fontWeight: "700", padding: "6px 12px", borderRadius: "999px", background: "var(--soft)", color: "var(--priD)" }}>Month 2</span><h3 style={{ margin: "0", fontSize: "22px", fontWeight: "700" }}>Optimise</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>We test ads, offers and scripts to lower cost per booked patient.</p></div>
      <div style={{ background: "var(--night)", color: "#FFFFFF", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "12px" }}><span style={{ alignSelf: "flex-start", fontSize: "13px", fontWeight: "700", padding: "6px 12px", borderRadius: "999px", background: "var(--pri)" }}>Month 3+</span><h3 style={{ margin: "0", fontSize: "22px", fontWeight: "700" }}>Scale</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#C4D2E0" }}>More budget behind winners, new treatments and new locations.</p></div>
      </div>
      </div>
      </section>

      <section style={{ padding: "112px 0", background: "#FFFFFF" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "24px" }}>
      <div style={{ background: "var(--soft2)", borderRadius: "32px", padding: "44px", display: "flex", flexDirection: "column", gap: "18px" }}>
      <h2 style={{ margin: "0", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "34px", letterSpacing: "-0.02em" }}>A great fit if you…</h2>
      <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "14px", fontSize: "17px" }}>
      <li style={{ display: "flex", gap: "12px" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", stroke: "var(--secD)" }}><path d="M20 6 9 17l-5-5"></path></svg>Have capacity for more new patients each week</li>
      <li style={{ display: "flex", gap: "12px" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", stroke: "var(--secD)" }}><path d="M20 6 9 17l-5-5"></path></svg>Want one partner instead of several vendors</li>
      <li style={{ display: "flex", gap: "12px" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", stroke: "var(--secD)" }}><path d="M20 6 9 17l-5-5"></path></svg>Care about cost per booked patient, not clicks</li>
      <li style={{ display: "flex", gap: "12px" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", stroke: "var(--secD)" }}><path d="M20 6 9 17l-5-5"></path></svg>Can invest an ad budget of $1,500+/month</li>
      </ul>
      </div>
      <div style={{ background: "var(--ground)", border: "1px solid var(--line)", borderRadius: "32px", padding: "44px", display: "flex", flexDirection: "column", gap: "18px" }}>
      <h2 style={{ margin: "0", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "34px", letterSpacing: "-0.02em" }}>Probably not right if you…</h2>
      <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "14px", fontSize: "17px", color: "var(--muted)" }}>
      <li style={{ display: "flex", gap: "12px" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B42318" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}><path d="M18 6 6 18M6 6l12 12"></path></svg>Are already fully booked with a waitlist</li>
      <li style={{ display: "flex", gap: "12px" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B42318" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}><path d="M18 6 6 18M6 6l12 12"></path></svg>Want results without any ad spend</li>
      <li style={{ display: "flex", gap: "12px" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B42318" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none" }}><path d="M18 6 6 18M6 6l12 12"></path></svg>Only need a one-off campaign</li>
      </ul>
      </div>
      </div>
      </section>

      <section style={{ padding: "112px 0", background: "var(--ground)" }}>
      <div style={{ maxWidth: "880px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "36px" }}>
      <h2 style={{ margin: "0", textAlign: "center", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.2vw, 52px)", letterSpacing: "-0.035em" }}>Questions clinics ask</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <details open style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "22px", padding: "24px 28px" }}><summary style={{ fontSize: "18px", fontWeight: "700" }}>How quickly will I see new patients?</summary><p style={{ margin: "14px 0 0", fontSize: "16px", lineHeight: "1.7", color: "var(--muted)" }}>Most clinics go live within 7 to 10 working days after onboarding. Once campaigns are running, we review lead quality and bookings with you every week.</p></details>
      <details style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "22px", padding: "24px 28px" }}><summary style={{ fontSize: "18px", fontWeight: "700" }}>Is ad spend included in your fee?</summary><p style={{ margin: "14px 0 0", fontSize: "16px", lineHeight: "1.7", color: "var(--muted)" }}>Ad spend is paid directly to Google and Meta from your own card, so you always stay in control of the budget. Our monthly fee covers strategy, management and follow-up.</p></details>
      </div>
      </div>
      </section>
      <section style={{ padding: "0 24px 112px", background: "var(--ground)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", borderRadius: "40px", background: "var(--pri)", color: "#FFFFFF", padding: "clamp(44px, 6vw, 80px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "32px" }}>
      <h2 style={{ margin: "0", maxWidth: "720px", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.2vw, 56px)", lineHeight: "1.05", letterSpacing: "-0.035em" }}>Ready for a fuller calendar?</h2>
      <Link href="/book-demo" style={{ display: "inline-flex", alignItems: "center", minHeight: "60px", padding: "0 32px", borderRadius: "999px", background: "#FFFFFF", color: "var(--ink)", fontWeight: "700", fontSize: "17px", textDecoration: "none" }}>Book a free demo</Link>
      </div>
      </section>
    </>
  );
}
