import { OG_IMAGES } from "@/lib/site";
import JotformEmbed from "@/components/JotformEmbed";

const FORM_ID = "263196607336059";
const TITLE = "Doctor Referral Program Questionnaire | GetPatients24";
const DESC = "Tell us about your clinic, the doctors you want referrals from and your goals, and we'll build a doctor referral program around your practice.";

export const metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/doctor-referral-program" },
  openGraph: { title: TITLE, description: DESC, url: "/doctor-referral-program", siteName: "GetPatients24", type: "website", images: OG_IMAGES },
};

const SECTIONS = [
  { t: "Contact information", d: "Who you are and how to reach you." },
  { t: "About your practice", d: "Treatments, ideal patients, insurance and patient value." },
  { t: "The doctors we'll reach out to", d: "Specialties, area to target and current referrers." },
  { t: "Your goals and process", d: "Monthly target, how you take referrals and what sets you apart." },
];

const NEXT = [
  "We review your answers within 1 working day",
  "We map the local doctors who fit your clinic",
  "You get a referral plan on a short call",
];

const icon = (d) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ stroke: "var(--pri)" }}>{d}</svg>
);

export default function DoctorReferralPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(180deg, var(--soft) 0%, #FFFFFF 100%)", padding: "88px 0 48px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px" }}>
          <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--priD)" }}>DOCTOR REFERRAL PROGRAM</span>
          <h1 style={{ margin: "0", maxWidth: "900px", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(40px, 5vw, 68px)", lineHeight: "1.04", letterSpacing: "-0.04em" }}>Get steady referrals from{" "}<span style={{ color: "var(--pri)" }}>doctors near you.</span></h1>
          <p style={{ margin: "0", maxWidth: "660px", fontSize: "19px", lineHeight: "1.6", color: "var(--muted)" }}>Answer a few questions about your clinic, the doctors you want to hear from and your goals. We use it to build a referral program around your practice.</p>
          <div className="ref-chips" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
            {[
              [icon(<><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></>), "About 5 minutes"],
              [icon(<><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></>), "17 short questions"],
              [icon(<><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></>), "Kept private"],
            ].map(([ic, l]) => (
              <span key={l} style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 16px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid var(--line)", fontSize: "14px", fontWeight: "600" }}>{ic}{l}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "16px 0 112px", background: "#FFFFFF" }}>
        <div className="ref-wrap" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "32px" }}>
          <aside className="ref-side" style={{ flex: "1 1 300px", maxWidth: "380px", minWidth: "0", position: "sticky", top: "110px", display: "flex", flexDirection: "column", gap: "18px" }}>
            <div style={{ borderRadius: "28px", background: "var(--soft)", padding: "28px", display: "flex", flexDirection: "column", gap: "18px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--priD)" }}>WHAT WE'LL ASK</span>
              <ol style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                {SECTIONS.map((s, i) => (
                  <li key={s.t} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ flex: "none", width: "30px", height: "30px", borderRadius: "999px", background: "var(--pri)", color: "#FFFFFF", fontWeight: "700", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                    <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}><b style={{ fontSize: "15.5px" }}>{s.t}</b><span style={{ fontSize: "14px", lineHeight: "1.5", color: "var(--muted)" }}>{s.d}</span></span>
                  </li>
                ))}
              </ol>
            </div>
            <div style={{ borderRadius: "28px", background: "var(--night)", color: "#FFFFFF", padding: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--hi)" }}>WHAT HAPPENS NEXT</span>
              {NEXT.map((n) => (
                <span key={n} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "15px", lineHeight: "1.5", color: "#DCEBF5" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px", stroke: "var(--hi)" }}><path d="M20 6 9 17l-5-5"></path></svg>{n}</span>
              ))}
            </div>
          </aside>

          <div className="ref-form" style={{ flex: "2 1 560px", minWidth: "0", borderRadius: "32px", background: "#FFFFFF", border: "1px solid var(--line)", boxShadow: "0 24px 60px rgba(11,31,58,0.07)", padding: "18px", overflow: "hidden" }}>
            <JotformEmbed formId={FORM_ID} title="GetPatients24 Doctor Referral Program Questionnaire" />
          </div>
        </div>
      </section>
    </>
  );
}
