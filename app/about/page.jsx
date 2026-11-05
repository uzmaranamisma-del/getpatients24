import Link from "next/link";

export const metadata = {
  title: "About Us | GetPatients24",
  description: "Meet GetPatients24, the clinic growth team behind patient acquisition and AI booking systems.",
};

export default function AboutPage() {
  return (
    <>
      <section style={{ background: "#FFFFFF", padding: "96px 0 104px", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", left: "50%", top: "20px", transform: "translateX(-50%)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "260px", lineHeight: "1", letterSpacing: "-0.05em", color: "var(--soft)", whiteSpace: "nowrap" }}>ABOUT</div>
      <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "56px" }}>
      <div style={{ flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
      <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--priD)" }}>ABOUT RELIANTWARE</span>
      <h1 style={{ margin: "0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "clamp(44px, 5.4vw, 74px)", lineHeight: "1.0", letterSpacing: "-0.04em" }}>We help clinics grow without the marketing headache.</h1>
      <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.7", color: "var(--muted)" }}>GetPatients24 started with a simple observation: clinics were paying for marketing, but losing patients between the click and the appointment. So we built a system that covers the whole journey, and we run it for you.</p>
      </div>
      <div style={{ flex: "1 1 420px", minWidth: "0", height: "440px", borderRadius: "36px", background: "linear-gradient(160deg, var(--soft) 0%, #FFFFFF 100%)", border: "1px solid var(--line)", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden", padding: "24px 24px 0" }}>
      <svg viewBox="0 0 420 380" aria-hidden="true" style={{ width: "100%", maxWidth: "460px", height: "auto", display: "block" }}>
      <circle cx="210" cy="200" r="160" fill="#CAF0F8"></circle>
      <rect x="250" y="70" width="130" height="80" rx="16" fill="#FFFFFF" stroke="#CDE7EF" strokeWidth="2"></rect>
      <rect x="266" y="118" width="14" height="18" rx="3" fill="#90E0EF"></rect><rect x="288" y="106" width="14" height="30" rx="3" fill="#48CAE4"></rect><rect x="310" y="96" width="14" height="40" rx="3" fill="#00B4D8"></rect><rect x="332" y="84" width="14" height="52" rx="3" fill="#0077B6"></rect>
      <circle cx="70" cy="110" r="28" fill="#0077B6"></circle><rect x="66" y="94" width="8" height="32" rx="3" fill="#FFFFFF"></rect><rect x="54" y="106" width="32" height="8" rx="3" fill="#FFFFFF"></rect>
      <path d="M120 380 C120 290 150 250 210 250 C270 250 300 290 300 380 Z" fill="#FFFFFF" stroke="#023E8A" strokeWidth="3"></path>
      <path d="M180 252 L210 300 L240 252" fill="none" stroke="#023E8A" strokeWidth="3" strokeLinejoin="round"></path>
      <rect x="198" y="226" width="24" height="30" rx="8" fill="#E8B48F"></rect>
      <circle cx="210" cy="190" r="46" fill="#F2C9A8"></circle>
      <path d="M164 186 C164 150 186 136 212 136 C240 136 258 154 256 186 C246 168 230 160 210 162 C190 164 174 172 164 186 Z" fill="#023E8A"></path>
      <circle cx="194" cy="196" r="4" fill="#023E8A"></circle><circle cx="226" cy="196" r="4" fill="#023E8A"></circle>
      <path d="M198 214 Q210 222 222 214" fill="none" stroke="#023E8A" strokeWidth="3" strokeLinecap="round"></path>
      <path d="M176 262 C160 300 170 330 196 332" fill="none" stroke="#0077B6" strokeWidth="5" strokeLinecap="round"></path>
      <circle cx="200" cy="334" r="9" fill="#00B4D8"></circle>
      <rect x="250" y="300" width="34" height="8" rx="4" fill="#0077B6"></rect>
      </svg>
      </div>
      </div>
      </section>
      <section style={{ padding: "112px 0", background: "var(--ground)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "24px" }}>
      <div style={{ background: "var(--ink)", color: "#FFFFFF", borderRadius: "32px", padding: "44px", display: "flex", flexDirection: "column", gap: "16px" }}><span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--hi)" }}>OUR MISSION</span><h2 style={{ margin: "0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "34px", lineHeight: "1.15", letterSpacing: "-0.02em" }}>Help every good clinic stay fully booked with the right patients.</h2></div>
      <div style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "32px", padding: "44px", display: "flex", flexDirection: "column", gap: "16px" }}><span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--secD)" }}>OUR APPROACH</span><h2 style={{ margin: "0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "34px", lineHeight: "1.15", letterSpacing: "-0.02em" }}>Systems over campaigns. Bookings over clicks. Partners over vendors.</h2></div>
      </div>
      </section>
      <section style={{ padding: "112px 0", background: "#FFFFFF" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "44px" }}>
      <h2 style={{ margin: "0", textAlign: "center", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.2vw, 56px)", letterSpacing: "-0.035em" }}>What we believe</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "18px" }}>
      <div style={{ background: "var(--ground)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "36px", color: "var(--pri)" }}>01</span><h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>Transparency</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>You see every lead, every booking and every dollar.</p></div>
      <div style={{ background: "var(--ground)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "36px", color: "var(--pri)" }}>02</span><h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>Patient respect</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>Honest messaging that builds trust before the first visit.</p></div>
      <div style={{ background: "var(--ground)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "36px", color: "var(--pri)" }}>03</span><h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>Speed</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>Fast replies win patients. We build everything around that.</p></div>
      <div style={{ background: "var(--ground)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "36px", color: "var(--pri)" }}>04</span><h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>Ownership</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>We own the result from first click to first appointment.</p></div>
      </div>
      </div>
      </section>
      <section style={{ padding: "96px 0", background: "#FFFFFF" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "18px" }}>
      <div style={{ background: "var(--soft)", borderRadius: "28px", padding: "30px", display: "flex", flexDirection: "column", gap: "6px" }}><span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "48px", color: "var(--priD)" }}>24/7</span><span style={{ fontWeight: "600", color: "var(--muted)" }}>Patient follow-up</span></div>
      <div style={{ background: "var(--soft2)", borderRadius: "28px", padding: "30px", display: "flex", flexDirection: "column", gap: "6px" }}><span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "48px", color: "var(--secD)" }}>1 team</span><span style={{ fontWeight: "600", color: "var(--muted)" }}>Ads to appointment</span></div>
      <div style={{ background: "var(--ground)", border: "1px solid var(--line)", borderRadius: "28px", padding: "30px", display: "flex", flexDirection: "column", gap: "6px" }}><span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "32px" }}>US{" "}&amp;{" "}Canada</span><span style={{ fontWeight: "600", color: "var(--muted)" }}>Where we work</span></div>
      <div style={{ background: "var(--ink)", color: "#FFFFFF", borderRadius: "28px", padding: "30px", display: "flex", flexDirection: "column", gap: "6px" }}><span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "32px", color: "var(--hi)" }}>7 specialties</span><span style={{ fontWeight: "600", color: "#C4D2E0" }}>Clinic types we serve</span></div>
      </div>
      </section>
      <section style={{ padding: "0 24px 112px", background: "#FFFFFF" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", borderRadius: "40px", background: "var(--pri)", color: "#FFFFFF", padding: "clamp(44px, 6vw, 80px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "32px" }}>
      <h2 style={{ margin: "0", maxWidth: "720px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.2vw, 56px)", lineHeight: "1.05", letterSpacing: "-0.035em" }}>Let's grow your clinic together.</h2>
      <Link href="/book-demo" style={{ display: "inline-flex", alignItems: "center", minHeight: "60px", padding: "0 32px", borderRadius: "999px", background: "#FFFFFF", color: "var(--ink)", fontWeight: "700", fontSize: "17px", textDecoration: "none" }}>Book a free demo</Link>
      </div>
      </section>
    </>
  );
}
