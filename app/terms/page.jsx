import { CONTACT_EMAIL } from "@/lib/site";
export const metadata = {
  title: "Terms & Conditions | GetPatients24",
  description: "The terms that apply to using the GetPatients24 website and services.",
};

export default function TermsPage() {
  return (
    <>
      <section style={{ background: "#FFFFFF", padding: "80px 0 56px", borderBottom: "1px solid var(--line)" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "16px" }}>
      <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--priD)" }}>LEGAL</span>
      <h1 style={{ margin: "0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: "800", fontSize: "clamp(40px, 5vw, 64px)", lineHeight: "1.05", letterSpacing: "-0.04em" }}>Terms{" "}&amp;{" "}Conditions</h1>
      <span style={{ fontSize: "15px", color: "var(--muted)" }}>Last updated: [Date]</span>
      <div style={{ padding: "16px 20px", borderRadius: "16px", background: "#FFF7E6", border: "1px solid #F5D9A8", color: "#7A4B00", fontSize: "15px", lineHeight: "1.6" }}>Template only. Have a qualified lawyer draft or review the final text for your business and the US and Canadian jurisdictions you serve.</div>
      </div>
      </section>
      <section style={{ padding: "64px 0 112px" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "36px", fontSize: "16px", lineHeight: "1.75", color: "var(--muted)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}><h2 style={{ margin: "0", fontSize: "22px", fontWeight: "700", color: "var(--ink)" }}>1. Agreement to terms</h2><p style={{ margin: "0" }}>[Who these terms apply to and how they are accepted.]</p></div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}><h2 style={{ margin: "0", fontSize: "22px", fontWeight: "700", color: "var(--ink)" }}>2. Services</h2><p style={{ margin: "0" }}>[Description of GetPatients24 services, and that specific deliverables are set out in each client agreement.]</p></div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}><h2 style={{ margin: "0", fontSize: "22px", fontWeight: "700", color: "var(--ink)" }}>3. Fees, billing{" "}&amp;{" "}ad spend</h2><p style={{ margin: "0" }}>[Payment terms, billing cycle, late payments, and how advertising spend is handled.]</p></div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}><h2 style={{ margin: "0", fontSize: "22px", fontWeight: "700", color: "var(--ink)" }}>4. Term{" "}&amp;{" "}cancellation</h2><p style={{ margin: "0" }}>[Minimum term, notice period and what happens at cancellation.]</p></div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}><h2 style={{ margin: "0", fontSize: "22px", fontWeight: "700", color: "var(--ink)" }}>5. Client responsibilities</h2><p style={{ margin: "0" }}>[Access, approvals, accurate information and compliance with healthcare advertising rules.]</p></div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}><h2 style={{ margin: "0", fontSize: "22px", fontWeight: "700", color: "var(--ink)" }}>6. Results disclaimer</h2><p style={{ margin: "0" }}>[Statement on performance expectations and that results vary.]</p></div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}><h2 style={{ margin: "0", fontSize: "22px", fontWeight: "700", color: "var(--ink)" }}>7. Intellectual property</h2><p style={{ margin: "0" }}>[Ownership of websites, ad creative, content and accounts.]</p></div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}><h2 style={{ margin: "0", fontSize: "22px", fontWeight: "700", color: "var(--ink)" }}>8. Limitation of liability</h2><p style={{ margin: "0" }}>[Liability limits.]</p></div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}><h2 style={{ margin: "0", fontSize: "22px", fontWeight: "700", color: "var(--ink)" }}>9. Governing law</h2><p style={{ margin: "0" }}>[Jurisdiction.]</p></div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}><h2 style={{ margin: "0", fontSize: "22px", fontWeight: "700", color: "var(--ink)" }}>10. Contact</h2><p style={{ margin: "0" }}>{CONTACT_EMAIL} · [Business address]</p></div>
      </div>
      </section>
    </>
  );
}
