import { OG_IMAGES } from "@/lib/site";
import Link from "next/link";

export const metadata = {
  title: "Healthcare Marketing for Clinics | GetPatients24",
  description: "See how GetPatients24 helps chiropractors, dentists, med spas, eye clinics, physical therapists, regenerative clinics and surgeons book more patients.",
  alternates: { canonical: "/how-we-help" },
  openGraph: { title: "Healthcare Marketing for Clinics | GetPatients24", description: "See how GetPatients24 helps chiropractors, dentists, med spas, eye clinics, physical therapists, regenerative clinics and surgeons book more patients.", url: "/how-we-help", siteName: "GetPatients24", type: "website", images: OG_IMAGES },
};

export default function HowWeHelpPage() {
  return (
    <>
      <section style={{ background: "#FFFFFF", padding: "96px 0 104px", position: "relative", overflow: "hidden", isolation: "isolate" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: "0", zIndex: "-1", backgroundImage: "url(/hero-team-review.webp)", backgroundSize: "cover", backgroundPosition: "center center" }}></div><div aria-hidden="true" style={{ position: "absolute", inset: "0", zIndex: "-1", background: "radial-gradient(ellipse 62% 78% at 50% 50%, rgba(242,251,253,0.93) 0%, rgba(236,249,252,0.8) 55%, rgba(202,240,248,0.5) 100%)" }}></div><div aria-hidden="true" style={{ position: "absolute", inset: "0", zIndex: "-1", background: "linear-gradient(180deg, rgba(255,255,255,0) 60%, #FFFFFF 100%)" }}></div>
      <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "24px" }}>
      <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--priD)" }}>HOW WE HELP</span>
      <h1 style={{ margin: "0", maxWidth: "980px", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(44px, 5.6vw, 80px)", lineHeight: "1.0", letterSpacing: "-0.04em" }}>One connected system that turns{" "}<span style={{ color: "var(--pri)" }}>searches into patients</span>.</h1>
      <p style={{ margin: "0", maxWidth: "720px", fontSize: "20px", lineHeight: "1.6", color: "var(--muted)" }}>Most clinics juggle an ad agency, a web designer and a busy front desk. We bring all of it together, so every enquiry is captured, qualified, booked and tracked.</p>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px" }}>
      <Link href="/book-demo" style={{ display: "inline-flex", alignItems: "center", minHeight: "58px", padding: "0 30px", borderRadius: "999px", background: "var(--pri)", color: "#FFFFFF", fontWeight: "700", fontSize: "17px", textDecoration: "none" }}>Book a free meeting</Link>
      <a href="#niches" style={{ display: "inline-flex", alignItems: "center", minHeight: "58px", padding: "0 28px", borderRadius: "999px", background: "#FFFFFF", border: "1.5px solid var(--line)", color: "var(--ink)", fontWeight: "600", fontSize: "17px", textDecoration: "none" }}>Find your specialty</a>
      </div>
      </div>
      </section>
      <section style={{ padding: "112px 0", background: "var(--ground)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "48px" }}>
      <div style={{ maxWidth: "760px", display: "flex", flexDirection: "column", gap: "14px" }}>
      <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--priD)" }}>THE PATIENT JOURNEY</span>
      <h2 style={{ margin: "0", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.2vw, 56px)", lineHeight: "1.05", letterSpacing: "-0.035em" }}>We own every step between “interested” and “in the chair”.</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "18px" }}>
      <div style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "12px" }}><span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "44px", color: "var(--line)" }}>01</span><h3 style={{ margin: "0", fontSize: "21px", fontWeight: "700" }}>Get found</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>Ads, local SEO and a strong Google profile put you in front of patients nearby.</p></div>
      <div style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "12px" }}><span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "44px", color: "var(--line)" }}>02</span><h3 style={{ margin: "0", fontSize: "21px", fontWeight: "700" }}>Get chosen</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>Treatment pages, reviews and clear offers that make your clinic the obvious pick.</p></div>
      <div style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "12px" }}><span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "44px", color: "var(--line)" }}>03</span><h3 style={{ margin: "0", fontSize: "21px", fontWeight: "700" }}>Get booked</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--muted)" }}>Instant replies, qualification and AI booking turn enquiries into appointments.</p></div>
      <div style={{ background: "var(--night)", color: "#FFFFFF", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "12px" }}><span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "44px", color: "var(--hi)" }}>04</span><h3 style={{ margin: "0", fontSize: "21px", fontWeight: "700" }}>Get them through the door</h3><p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#C4D2E0" }}>Reminders and easy rescheduling keep show-up rates high.</p></div>
      </div>
      </div>
      </section>
      <section id="niches" style={{ padding: "112px 0", background: "#FFFFFF" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "48px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "14px" }}>
      <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--priD)" }}>WHO WE HELP</span>
      <h2 style={{ margin: "0", maxWidth: "820px", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.2vw, 56px)", lineHeight: "1.05", letterSpacing: "-0.035em" }}>Built for the specialty you practise.</h2>
      <p style={{ margin: "0", maxWidth: "640px", fontSize: "18px", lineHeight: "1.6", color: "var(--muted)" }}>Every specialty has different patients, treatments and buying cycles. Pick yours to see how we approach it.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "18px" }}>
      <Link href="/chiropractic" style={{ textDecoration: "none", color: "var(--ink)", background: "var(--ground)", border: "1px solid var(--line)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontSize: "22px", fontWeight: "700" }}>Chiropractic</span><span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--muted)" }}>Back, neck and posture patients ready to start care.</span><span style={{ fontWeight: "700", color: "var(--pri)" }}>See the chiropractic page →</span></Link>
      <Link href="/surgeons" style={{ textDecoration: "none", color: "var(--ink)", background: "var(--ground)", border: "1px solid var(--line)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontSize: "22px", fontWeight: "700" }}>Surgeons</span><span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--muted)" }}>Qualified consults for elective and specialist procedures.</span><span style={{ fontWeight: "700", color: "var(--pri)" }}>See the surgeons page →</span></Link>
      <Link href="/eye-clinics" style={{ textDecoration: "none", color: "var(--ink)", background: "var(--ground)", border: "1px solid var(--line)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontSize: "22px", fontWeight: "700" }}>Eye Clinics</span><span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--muted)" }}>Vision correction, cataract and routine eye care enquiries.</span><span style={{ fontWeight: "700", color: "var(--pri)" }}>See the eye clinic page →</span></Link>
      <Link href="/physical-therapy-clinics" style={{ textDecoration: "none", color: "var(--ink)", background: "var(--ground)", border: "1px solid var(--line)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontSize: "22px", fontWeight: "700" }}>Physical Therapy</span><span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--muted)" }}>Injury, pain and rehab patients who commit to a plan.</span><span style={{ fontWeight: "700", color: "var(--pri)" }}>See the physical therapy page →</span></Link>
      <Link href="/regenerative-clinics" style={{ textDecoration: "none", color: "var(--ink)", background: "var(--ground)", border: "1px solid var(--line)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontSize: "22px", fontWeight: "700" }}>Regenerative{" "}&amp;{" "}Integrative</span><span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--muted)" }}>Educated patients for higher-value, cash-pay treatments.</span><span style={{ fontWeight: "700", color: "var(--pri)" }}>See the regenerative page →</span></Link>
      <Link href="/med-spa" style={{ textDecoration: "none", color: "var(--ink)", background: "var(--ground)", border: "1px solid var(--line)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontSize: "22px", fontWeight: "700" }}>Med Spas</span><span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--muted)" }}>Aesthetic clients who book, return and refer.</span><span style={{ fontWeight: "700", color: "var(--pri)" }}>See the med spa page →</span></Link>
      <Link href="/dental-clinics" style={{ textDecoration: "none", color: "var(--ink)", background: "var(--ground)", border: "1px solid var(--line)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontSize: "22px", fontWeight: "700" }}>Dental Clinics</span><span style={{ fontSize: "15px", lineHeight: "1.55", color: "var(--muted)" }}>New patients for implants, aligners and family care.</span><span style={{ fontWeight: "700", color: "var(--pri)" }}>See the dental page →</span></Link>
      <Link href="/book-demo" style={{ textDecoration: "none", color: "#FFFFFF", background: "var(--pri)", borderRadius: "26px", padding: "30px", display: "flex", flexDirection: "column", gap: "10px" }}><span style={{ fontSize: "22px", fontWeight: "700" }}>Don't see your specialty?</span><span style={{ fontSize: "15px", lineHeight: "1.55", color: "#E6EEFA" }}>We work with most patient-based clinics. Let's talk.</span><span style={{ fontWeight: "700" }}>Book a meeting →</span></Link>
      </div>
      </div>
      </section>
      <section style={{ padding: "112px 0", background: "var(--ground)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "48px" }}>
      <div style={{ maxWidth: "760px", display: "flex", flexDirection: "column", gap: "14px" }}>
      <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--priD)" }}>TWO WAYS TO WORK WITH US</span>
      <h2 style={{ margin: "0", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.2vw, 56px)", lineHeight: "1.05", letterSpacing: "-0.035em" }}>Choose the level of help you need.</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "24px" }}>
      <div style={{ background: "var(--night)", color: "#FFFFFF", borderRadius: "32px", padding: "44px", display: "flex", flexDirection: "column", gap: "18px" }}>
      <span style={{ alignSelf: "flex-start", fontSize: "13px", fontWeight: "700", padding: "7px 14px", borderRadius: "999px", background: "var(--pri)" }}>FULL SERVICE</span>
      <h3 style={{ margin: "0", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "34px", lineHeight: "1.1", letterSpacing: "-0.02em" }}>Done-For-You Patient Acquisition</h3>
      <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#C4D2E0" }}>We run your ads, pages, follow-up and booking end to end. You just see patients.</p>
      <Link href="/done-for-you-patient-acquisition" style={{ alignSelf: "flex-start", marginTop: "8px", display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 24px", borderRadius: "999px", background: "#FFFFFF", color: "var(--ink)", fontWeight: "700", textDecoration: "none" }}>Explore service</Link>
      </div>
      <div style={{ background: "#FFFFFF", border: "1px solid var(--line)", borderRadius: "32px", padding: "44px", display: "flex", flexDirection: "column", gap: "18px" }}>
      <span style={{ alignSelf: "flex-start", fontSize: "13px", fontWeight: "700", padding: "7px 14px", borderRadius: "999px", background: "var(--soft2)", color: "var(--secD)" }}>FOUNDATION</span>
      <h3 style={{ margin: "0", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "34px", lineHeight: "1.1", letterSpacing: "-0.02em" }}>Website + AI Patient Booking System</h3>
      <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "var(--muted)" }}>A high-converting clinic website with AI that answers, qualifies and books patients 24/7.</p>
      <Link href="/website-ai-booking-system" style={{ alignSelf: "flex-start", marginTop: "8px", display: "inline-flex", alignItems: "center", minHeight: "52px", padding: "0 24px", borderRadius: "999px", background: "var(--pri)", color: "#FFFFFF", fontWeight: "700", textDecoration: "none" }}>Explore service</Link>
      </div>
      </div>
      </div>
      </section>
      <section style={{ padding: "0 24px 112px", background: "var(--ground)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", borderRadius: "40px", background: "var(--pri)", color: "#FFFFFF", padding: "clamp(44px, 6vw, 80px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "32px" }}>
      <h2 style={{ margin: "0", maxWidth: "720px", fontFamily: "'Poppins', sans-serif", fontWeight: "800", fontSize: "clamp(34px, 4.2vw, 56px)", lineHeight: "1.05", letterSpacing: "-0.035em" }}>Let's map your patient flow together.</h2>
      <Link href="/book-demo" style={{ display: "inline-flex", alignItems: "center", minHeight: "60px", padding: "0 32px", borderRadius: "999px", background: "#FFFFFF", color: "var(--ink)", fontWeight: "700", fontSize: "17px", textDecoration: "none" }}>Book a free meeting</Link>
      </div>
      </section>
    </>
  );
}
