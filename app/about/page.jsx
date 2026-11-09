import Link from "next/link";

export const metadata = {
  title: "About Us | GetPatients24",
  description: "Meet GetPatients24, the clinic growth team behind patient acquisition and AI booking systems.",
};

export default function AboutPage() {
  return (
    <>
      <section style={{ background: "#FFFFFF", padding: "96px 0 104px", position: "relative", overflow: "hidden", isolation: "isolate" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: "0", zIndex: "-1", backgroundImage: "url(/hero-team-review.webp)", backgroundSize: "cover", backgroundPosition: "center center" }}></div><div aria-hidden="true" style={{ position: "absolute", inset: "0", zIndex: "-1", background: "radial-gradient(ellipse 62% 78% at 50% 50%, rgba(242,251,253,0.93) 0%, rgba(236,249,252,0.8) 55%, rgba(202,240,248,0.5) 100%)" }}></div><div aria-hidden="true" style={{ position: "absolute", inset: "0", zIndex: "-1", background: "linear-gradient(180deg, rgba(255,255,255,0) 60%, #FFFFFF 100%)" }}></div>
      <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "56px" }}>
      <div style={{ flex: "1 1 100%", maxWidth: "920px", margin: "0 auto", minWidth: "0", alignItems: "center", textAlign: "center", display: "flex", flexDirection: "column", gap: "22px" }}>
      <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--priD)" }}>ABOUT GETPATIENTS24</span>
      <h1 style={{ margin: "0", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(44px, 5.4vw, 74px)", lineHeight: "1.0", letterSpacing: "-0.04em" }}>We help clinics grow without the marketing headache.</h1>
      <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.7", color: "var(--muted)" }}>GetPatients24 started with a simple observation: clinics were paying for marketing, but losing patients between the click and the appointment. So we built a system that covers the whole journey, and we run it for you.</p>
      </div>
      </div>
      </section>
      <section style={{ padding: "112px 0", background: "var(--ground)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "24px" }}>
      <div style={{ background: "var(--night)", color: "#FFFFFF", borderRadius: "32px", padding: "44px", display: "flex", flexDirection: "column", gap: "16px" }}><span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--hi)" }}>OUR MISSION</span><h2 style={{ margin: "0", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "34px", lineHeight: "1.15", letterSpacing: "-0.02em" }}>Help every good clinic stay fully booked with the right patients.</h2></div>
      <div style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "32px", padding: "44px", display: "flex", flexDirection: "column", gap: "16px" }}><span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--secD)" }}>OUR APPROACH</span><h2 style={{ margin: "0", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "34px", lineHeight: "1.15", letterSpacing: "-0.02em" }}>Systems over campaigns. Bookings over clicks. Partners over vendors.</h2></div>
      </div>
      </section>
      <section style={{ padding: "112px 0", background: "#FFFFFF" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "44px" }}>
      <h2 style={{ margin: "0", textAlign: "center", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.2vw, 56px)", letterSpacing: "-0.035em" }}>What we believe</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "18px" }}>
      <div style={{ background: "var(--ground)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "36px", color: "var(--pri)" }}>01</span><h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>Transparency</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>You see every lead, every booking and every dollar.</p></div>
      <div style={{ background: "var(--ground)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "36px", color: "var(--pri)" }}>02</span><h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>Patient respect</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>Honest messaging that builds trust before the first visit.</p></div>
      <div style={{ background: "var(--ground)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "36px", color: "var(--pri)" }}>03</span><h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>Speed</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>Fast replies win patients. We build everything around that.</p></div>
      <div style={{ background: "var(--ground)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "36px", color: "var(--pri)" }}>04</span><h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>Ownership</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>We own the result from first click to first appointment.</p></div>
      </div>
      </div>
      </section>
      <section style={{ padding: "96px 0", background: "#FFFFFF" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "18px" }}>
      <div style={{ background: "var(--soft)", borderRadius: "28px", padding: "30px", display: "flex", flexDirection: "column", gap: "6px" }}><span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "48px", color: "var(--priD)" }}>24/7</span><span style={{ fontWeight: "600", color: "var(--muted)" }}>Patient follow-up</span></div>
      <div style={{ background: "var(--soft2)", borderRadius: "28px", padding: "30px", display: "flex", flexDirection: "column", gap: "6px" }}><span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "48px", color: "var(--secD)" }}>1 team</span><span style={{ fontWeight: "600", color: "var(--muted)" }}>Ads to appointment</span></div>
      <div style={{ background: "var(--ground)", border: "1px solid var(--line)", borderRadius: "28px", padding: "30px", display: "flex", flexDirection: "column", gap: "6px" }}><span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "32px" }}>US{" "}&amp;{" "}Canada</span><span style={{ fontWeight: "600", color: "var(--muted)" }}>Where we work</span></div>
      <div style={{ background: "var(--night)", color: "#FFFFFF", borderRadius: "28px", padding: "30px", display: "flex", flexDirection: "column", gap: "6px" }}><span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "32px", color: "var(--hi)" }}>7 specialties</span><span style={{ fontWeight: "600", color: "#C4D2E0" }}>Clinic types we serve</span></div>
      </div>
      </section>
      <section style={{ padding: "0 24px 112px", background: "#FFFFFF" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", borderRadius: "40px", background: "var(--pri)", color: "#FFFFFF", padding: "clamp(44px, 6vw, 80px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "32px" }}>
      <h2 style={{ margin: "0", maxWidth: "720px", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.2vw, 56px)", lineHeight: "1.05", letterSpacing: "-0.035em" }}>Let's grow your clinic together.</h2>
      <Link href="/book-demo" style={{ display: "inline-flex", alignItems: "center", minHeight: "60px", padding: "0 32px", borderRadius: "999px", background: "#FFFFFF", color: "var(--ink)", fontWeight: "700", fontSize: "17px", textDecoration: "none" }}>Book a free demo</Link>
      </div>
      </section>
    </>
  );
}
