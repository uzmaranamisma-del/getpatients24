import { OG_IMAGES } from "@/lib/site";
import Link from "next/link";

const TITLE = "10 High-Ticket Patients Guaranteed or 100% Refund | GetPatients24";
const DESC = "Our offer for clinics: 10 high-ticket patients booked in your first 90 days, or we refund 100% of what you paid us. No fine-print games.";

export const metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/offer" },
  openGraph: { title: TITLE, description: DESC, url: "/offer", siteName: "GetPatients24", type: "website", images: OG_IMAGES },
};

const check = (stroke = "var(--pri)", size = 18) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", stroke }}><path d="M20 6 9 17l-5-5"></path></svg>
);

const STEPS = [
  { n: "01", t: "Strategy call", d: "We look at your clinic, your best treatments and your area, and agree what a high-ticket patient means for you." },
  { n: "02", t: "We build and launch", d: "Campaigns, landing pages, AI booking and follow-up go live in 7 to 10 working days." },
  { n: "03", t: "Patients get booked", d: "Our team qualifies and follows up every enquiry until they book. You see every booking in your dashboard." },
  { n: "04", t: "10 or your money back", d: "If you don't have 10 high-ticket patients booked within 90 days of launch, you get 100% of our fees back." },
];

const INCLUDED = [
  "Meta & Google ad campaigns",
  "Treatment-specific landing pages",
  "AI booking assistant, 24/7",
  "Patient call & SMS follow-up team",
  "CRM, reminders & no-show cuts",
  "Live results dashboard",
];

const TERMS = [
  { t: "What counts", d: "A new patient booked for one of the high-ticket treatments we agree on at the strategy call." },
  { t: "The window", d: "90 days, counted from the day your campaigns go live." },
  { t: "What's refunded", d: "100% of what you paid GetPatients24: setup and management fees. Ad spend goes straight to Google and Meta, so it isn't part of the refund." },
  { t: "Your part", d: "Keep the agreed ad budget running, answer booked patients on time, and keep the appointment slots open that we agreed on." },
];

const FAQ = [
  { q: "Is this really a 100% refund?", a: "Yes. If we don't hit 10 high-ticket patients booked in 90 days and you did your part, we refund every dollar you paid us. No partial credit, no extra months." },
  { q: "What is a high-ticket patient?", a: "It depends on your specialty. For a dental clinic it might be implants or Invisalign, for a med spa body contouring, for a regenerative clinic PRP or stem cell. We agree the list together before we start." },
  { q: "Why do you offer this?", a: "Because our system works when it's set up properly, and we would rather carry the risk than ask you to. It also keeps us focused on the only number that matters to you: patients." },
  { q: "Is there a limit on clinics?", a: "Yes. We take a small number of clinics per area each month so we never compete against our own clients." },
];

export default function OfferPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(180deg, var(--soft) 0%, #FFFFFF 100%)", padding: "96px 0 72px", position: "relative", overflow: "hidden", isolation: "isolate" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "22px" }}>
          <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--priD)" }}>OUR OFFER</span>
          <h1 style={{ margin: "0", maxWidth: "980px", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(42px, 5.6vw, 78px)", lineHeight: "1.02", letterSpacing: "-0.04em" }}>10 high-ticket patients.{" "}<span style={{ color: "var(--pri)" }}>Or 100% of your money back.</span></h1>
          <p style={{ margin: "0", maxWidth: "680px", fontSize: "20px", lineHeight: "1.6", color: "var(--muted)" }}>We book 10 high-value patients into your clinic within 90 days of launch. If we don't, you get every dollar you paid us back.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
            <Link href="/book-demo" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "56px", padding: "0 30px", borderRadius: "999px", background: "var(--pri)", color: "#FFFFFF", fontWeight: "700", fontSize: "16px", textDecoration: "none" }}>Claim the offer<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="M13 6l6 6-6 6"></path></svg></Link>
            <a href="#terms" style={{ display: "inline-flex", alignItems: "center", minHeight: "56px", padding: "0 28px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid var(--line)", color: "var(--ink)", fontWeight: "700", fontSize: "16px", textDecoration: "none" }}>Read the terms</a>
          </div>
        </div>
      </section>

      <section style={{ padding: "8px 0 80px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <div className="offer-seal" style={{ borderRadius: "32px", background: "var(--night)", color: "#FFFFFF", padding: "48px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>
            <div className="offer-badge" style={{ flex: "none", width: "190px", height: "190px", borderRadius: "999px", background: "radial-gradient(circle at 30% 25%, var(--hi), var(--pri) 70%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#FFFFFF", boxShadow: "0 0 0 10px rgba(255,255,255,0.06), 0 20px 50px rgba(0,0,0,0.35)" }}>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "58px", lineHeight: "1", letterSpacing: "-0.04em" }}>100%</span>
              <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.12em", marginTop: "6px" }}>MONEY BACK</span>
            </div>
            <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--hi)" }}>THE GUARANTEE</span>
              <h2 style={{ margin: "0", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(28px, 3.2vw, 42px)", lineHeight: "1.1", letterSpacing: "-0.03em" }}>10 high-ticket patients in 90 days, or a full refund.</h2>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#C4D2E0" }}>No "extra months for free", no store credit. If we miss the number, the money you paid us comes back to you.</p>
              <div className="offer-stats" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px", marginTop: "6px" }}>
                {[["10", "high-ticket patients"], ["90", "days from launch"], ["100%", "of our fees back"]].map(([v, l]) => (
                  <span key={l} style={{ borderRadius: "18px", background: "rgba(255,255,255,0.07)", padding: "16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "30px", color: "#FFFFFF" }}>{v}</span>
                    <span style={{ fontSize: "13px", color: "#C4D2E0" }}>{l}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 96px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "36px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "14px" }}>
            <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--priD)" }}>HOW IT WORKS</span>
            <h2 style={{ margin: "0", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(32px, 3.8vw, 48px)", lineHeight: "1.08", letterSpacing: "-0.035em" }}>Four steps to{" "}<span style={{ color: "var(--pri)" }}>10 new patients</span></h2>
          </div>
          <div className="offer-steps" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "18px" }}>
            {STEPS.map((s, i) => (
              <div key={s.n} style={{ borderRadius: "26px", background: i === 3 ? "var(--pri)" : "var(--soft)", color: i === 3 ? "#FFFFFF" : "var(--ink)", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "15px", color: i === 3 ? "var(--hi)" : "var(--pri)" }}>STEP {s.n}</span>
                <h3 style={{ margin: "0", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "22px", letterSpacing: "-0.02em" }}>{s.t}</h3>
                <p style={{ margin: "0", fontSize: "15.5px", lineHeight: "1.6", color: i === 3 ? "#E3F3FB" : "var(--muted)" }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "88px 0", background: "var(--soft)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center" }}>
          <div style={{ flex: "1 1 360px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--priD)" }}>WHAT YOU GET</span>
            <h2 style={{ margin: "0", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(30px, 3.6vw, 46px)", lineHeight: "1.08", letterSpacing: "-0.035em" }}>The full system,{" "}<span style={{ color: "var(--pri)" }}>run by our team.</span></h2>
            <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.65", color: "var(--muted)" }}>Everything it takes to turn ad clicks into booked, high-value patients. You focus on treatment, we handle the rest.</p>
          </div>
          <div className="offer-list" style={{ flex: "1 1 420px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
            {INCLUDED.map((x) => (
              <span key={x} style={{ padding: "16px 18px", borderRadius: "16px", background: "#FFFFFF", fontWeight: "600", fontSize: "15px", display: "flex", gap: "10px", alignItems: "center" }}>{check()}{x}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="terms" style={{ padding: "96px 0", background: "#FFFFFF", scrollMarginTop: "90px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "32px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "14px" }}>
            <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--priD)" }}>THE TERMS, IN PLAIN ENGLISH</span>
            <h2 style={{ margin: "0", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(32px, 3.8vw, 48px)", lineHeight: "1.08", letterSpacing: "-0.035em" }}>No hidden fine print</h2>
          </div>
          <div className="offer-terms" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {TERMS.map((t) => (
              <div key={t.t} style={{ borderRadius: "22px", border: "1px solid var(--line)", background: "#FFFFFF", padding: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <h3 style={{ margin: "0", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "18px" }}>{t.t}</h3>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 104px", background: "var(--ground)" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto", padding: "88px 24px 0", display: "flex", flexDirection: "column", gap: "32px" }}>
          <h2 style={{ margin: "0", textAlign: "center", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(32px, 4vw, 50px)", letterSpacing: "-0.035em" }}>Offer questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {FAQ.map((f, i) => (
              <details key={f.q} open={i === 0} style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "22px", padding: "24px 28px" }}>
                <summary style={{ fontSize: "18px", fontWeight: "700", cursor: "pointer" }}>{f.q}</summary>
                <p style={{ margin: "14px 0 0", fontSize: "16px", lineHeight: "1.7", color: "var(--muted)" }}>{f.a}</p>
              </details>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link href="/book-demo" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "56px", padding: "0 30px", borderRadius: "999px", background: "var(--pri)", color: "#FFFFFF", fontWeight: "700", fontSize: "16px", textDecoration: "none" }}>Book your strategy call</Link>
          </div>
        </div>
      </section>
    </>
  );
}
