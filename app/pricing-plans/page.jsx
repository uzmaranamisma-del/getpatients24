import { OG_IMAGES } from "@/lib/site";
import Link from "next/link";
import PricingPlans from "@/components/PricingPlans";

export const metadata = {
  title: "Clinic Marketing Pricing: Plans from $297/mo | GetPatients24",
  description: "Simple pricing for clinic marketing and patient acquisition. Organic and paid growth plans from $297/month, one-time $997 setup, live in 7 to 10 working days.",
  alternates: { canonical: "/pricing-plans" },
  openGraph: { title: "Clinic Marketing Pricing: Plans from $297/mo | GetPatients24", description: "Simple pricing for clinic marketing and patient acquisition. Organic and paid growth plans from $297/month, one-time $997 setup, live in 7 to 10 working days.", url: "/pricing-plans", siteName: "GetPatients24", type: "website", images: OG_IMAGES },
};

export default function PricingPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(180deg, var(--soft) 0%, #FFFFFF 100%)", padding: "96px 0 64px", position: "relative", overflow: "hidden", isolation: "isolate" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: "0", zIndex: "-1", backgroundImage: "url(/hero-team-review.webp)", backgroundSize: "cover", backgroundPosition: "center center" }}></div><div aria-hidden="true" style={{ position: "absolute", inset: "0", zIndex: "-1", background: "radial-gradient(ellipse 62% 78% at 50% 50%, rgba(242,251,253,0.93) 0%, rgba(236,249,252,0.8) 55%, rgba(202,240,248,0.5) 100%)" }}></div><div aria-hidden="true" style={{ position: "absolute", inset: "0", zIndex: "-1", background: "linear-gradient(180deg, rgba(255,255,255,0) 60%, #FFFFFF 100%)" }}></div>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "22px" }}>
      <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--priD)" }}>PRICING PLANS</span>
      <h1 style={{ margin: "0", maxWidth: "960px", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(44px, 5.6vw, 78px)", lineHeight: "1.0", letterSpacing: "-0.04em" }}>Pricing that grows{" "}<span style={{ color: "var(--pri)" }}>with your practice.</span></h1>
      <p style={{ margin: "0", maxWidth: "700px", fontSize: "20px", lineHeight: "1.6", color: "var(--muted)" }}>Every plan is built around one thing: more patients you can actually measure. Pick the stage your clinic is at today, and move up when you're ready.</p>
      </div>
      </section>

      <section style={{ padding: "24px 0 64px", background: "#FFFFFF" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "28px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-end", justifyContent: "space-between" }}>
      <h2 style={{ margin: "0", maxWidth: "640px", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(32px, 3.8vw, 48px)", lineHeight: "1.08", letterSpacing: "-0.035em" }}>No two clinics are the same.{" "}<span style={{ color: "var(--pri)" }}>Neither are their growth plans.</span></h2>
      <p style={{ margin: "0", maxWidth: "460px", fontSize: "17px", lineHeight: "1.65", color: "var(--muted)" }}>Choose{" "}<b>Organic</b>{" "}to build a strong base on Google, reviews and social, or{" "}<b>Paid</b>{" "}to add a full advertising engine. Four plans, four stages of growth.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
      <div style={{ borderRadius: "28px", background: "var(--soft)", padding: "32px", display: "flex", flexDirection: "column", gap: "14px" }}>
      <span style={{ display: "flex", alignItems: "center", gap: "14px" }}><span style={{ width: "52px", height: "52px", borderRadius: "16px", background: "var(--pri)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"></path></svg></span><span style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", color: "var(--priD)" }}>ONE-TIME SETUP · ALL PLANS</span><span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "36px", letterSpacing: "-0.03em" }}>$997</span></span></span>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px" }}><span style={{ padding: "12px 16px", borderRadius: "14px", background: "#FFFFFF", fontWeight: "600", fontSize: "15px", display: "flex", gap: "10px", alignItems: "center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "1px", stroke: "var(--pri)" }}><path d="M20 6 9 17l-5-5"></path></svg>Onboarding{" "}&amp;{" "}strategy</span><span style={{ padding: "12px 16px", borderRadius: "14px", background: "#FFFFFF", fontWeight: "600", fontSize: "15px", display: "flex", gap: "10px", alignItems: "center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "1px", stroke: "var(--pri)" }}><path d="M20 6 9 17l-5-5"></path></svg>CRM configuration</span><span style={{ padding: "12px 16px", borderRadius: "14px", background: "#FFFFFF", fontWeight: "600", fontSize: "15px", display: "flex", gap: "10px", alignItems: "center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "1px", stroke: "var(--pri)" }}><path d="M20 6 9 17l-5-5"></path></svg>Integrations{" "}&amp;{" "}tracking</span><span style={{ padding: "12px 16px", borderRadius: "14px", background: "#FFFFFF", fontWeight: "600", fontSize: "15px", display: "flex", gap: "10px", alignItems: "center" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "1px", stroke: "var(--pri)" }}><path d="M20 6 9 17l-5-5"></path></svg>Automations{" "}&amp;{" "}launch</span></div>
      </div>
      <div style={{ borderRadius: "28px", background: "var(--night)", color: "#FFFFFF", padding: "32px", display: "flex", flexDirection: "column", gap: "14px", justifyContent: "center" }}>
      <span style={{ display: "flex", alignItems: "center", gap: "14px" }}><span style={{ width: "52px", height: "52px", borderRadius: "16px", background: "var(--hi)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--ink)" }}><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg></span><span style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", color: "var(--hi)" }}>AVERAGE LAUNCH TIME</span><span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "36px", letterSpacing: "-0.03em" }}>7 to 10 working days</span></span></span>
      <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#DCEBF5" }}>Counted from the end of onboarding. Your website, automations and campaigns go live together, so nothing waits on anything else.</span>
      </div>
      </div>
      </div>
      </section>

      <section style={{ padding: "32px 0 104px", background: "#FFFFFF" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: "36px" }}>
      <PricingPlans />
      <span style={{ fontSize: "13px", color: "var(--muted)", textAlign: "center", maxWidth: "760px" }}>*Estimated ROI is an illustration based on typical patient values, not a guarantee. Results depend on your specialty, market, offer and ad budget. Ad spend is paid directly to Google and Meta.</span>
      </div>
      </section>

      <section style={{ padding: "0 0 112px", background: "var(--ground)" }}>
      <div style={{ maxWidth: "880px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "36px" }}>
      <h2 style={{ margin: "0", textAlign: "center", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.2vw, 52px)", letterSpacing: "-0.035em" }}>Pricing questions</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <details open style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "22px", padding: "24px 28px" }}><summary style={{ fontSize: "18px", fontWeight: "700", cursor: "pointer" }}>Is the $997 setup fee required?</summary><p style={{ margin: "14px 0 0", fontSize: "16px", lineHeight: "1.7", color: "var(--muted)" }}>Yes. It is a one-time fee on every plan and covers onboarding, setup, integrations, automations, CRM configuration and launch.</p></details>
      <details style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "22px", padding: "24px 28px" }}><summary style={{ fontSize: "18px", fontWeight: "700", cursor: "pointer" }}>Is ad spend included in the monthly price?</summary><p style={{ margin: "14px 0 0", fontSize: "16px", lineHeight: "1.7", color: "var(--muted)" }}>No. Your plan covers strategy and management. Ad spend is paid directly to Google and Meta, and the amount depends on the budget you choose.</p></details>
      <details style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "22px", padding: "24px 28px" }}><summary style={{ fontSize: "18px", fontWeight: "700", cursor: "pointer" }}>Can I upgrade my plan later?</summary><p style={{ margin: "14px 0 0", fontSize: "16px", lineHeight: "1.7", color: "var(--muted)" }}>Yes. As your clinic grows you can move to any plan that fits your goals, including from Organic to Paid.</p></details>
      <details style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "22px", padding: "24px 28px" }}><summary style={{ fontSize: "18px", fontWeight: "700", cursor: "pointer" }}>How long does onboarding take?</summary><p style={{ margin: "14px 0 0", fontSize: "16px", lineHeight: "1.7", color: "var(--muted)" }}>Most clinics are live within 7 to 10 working days after onboarding, depending on the size of the project.</p></details>
      <details style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "22px", padding: "24px 28px" }}><summary style={{ fontSize: "18px", fontWeight: "700", cursor: "pointer" }}>Do I need an existing website?</summary><p style={{ margin: "14px 0 0", fontSize: "16px", lineHeight: "1.7", color: "var(--muted)" }}>No. We can improve the website you already have, or build you a new one as part of your plan.</p></details>
      </div>
      </div>
      </section>
      <section style={{ padding: "0 24px 112px", background: "var(--ground)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", borderRadius: "40px", background: "var(--pri)", color: "#FFFFFF", padding: "clamp(44px, 6vw, 80px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "32px" }}>
      <h2 style={{ margin: "0", maxWidth: "720px", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.2vw, 56px)", lineHeight: "1.05", letterSpacing: "-0.035em" }}>Ready to make patient growth predictable?</h2>
      <Link href="/book-demo" style={{ display: "inline-flex", alignItems: "center", minHeight: "60px", padding: "0 32px", borderRadius: "999px", background: "#FFFFFF", color: "var(--ink)", fontWeight: "700", fontSize: "17px", textDecoration: "none" }}>Book a free meeting</Link>
      </div>
      </section>
    </>
  );
}
