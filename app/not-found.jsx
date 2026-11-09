import Link from "next/link";

export const metadata = { title: "Page not found | GetPatients24" };

export default function NotFound() {
  return (
    <section style={{ padding: "120px 24px", textAlign: "center", background: "linear-gradient(180deg, var(--soft) 0%, #FFFFFF 100%)" }}>
      <p style={{ margin: 0, fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", color: "var(--priD)" }}>404</p>
      <h1 style={{ margin: "12px 0", fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "-0.04em" }}>
        This page took a sick day.
      </h1>
      <p style={{ margin: "0 auto 28px", maxWidth: 520, fontSize: 18, lineHeight: 1.6, color: "var(--muted)" }}>
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link href="/" className="cta-btn">Back to home</Link>
    </section>
  );
}
