"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

export const SPECIALTIES = [
  { href: "/chiropractic", label: "Chiropractic" },
  { href: "/regenerative-clinics", label: "Regenerative Medicine" },
  { href: "/physical-therapy-clinics", label: "Physical Therapy" },
  { href: "/dental-clinics", label: "Dental Clinics" },
  { href: "/med-spa", label: "Med Spas" },
  { href: "/eye-clinics", label: "Eye Clinics" },
  { href: "/surgeons", label: "Surgeons" },
];

export const SERVICES = [
  { href: "/done-for-you-patient-acquisition", label: "Done-For-You Patient Acquisition" },
  { href: "/website-ai-booking-system", label: "Website + AI Booking System" },
];

const PHONE = "+1 786 619 8997";
const PHONE_HREF = "tel:+17866198997";
const EMAIL = "info@reliantware.com";

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function PhoneIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const inList = (list) => list.some((i) => i.href === pathname);
  const section = pathname === "/"
    ? "home"
    : pathname === "/how-we-help" || inList(SPECIALTIES)
      ? "who"
      : inList(SERVICES)
        ? "services"
        : pathname.replace("/", "");

  const navClass = (key) => "nav-link" + (section === key ? " active" : "");
  const current = (href) => (pathname === href ? "page" : undefined);

  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", padding: "4px 10px", borderRadius: 999, background: "var(--hi)", color: "var(--ink)" }}>FREE</span>
            Get a free patient flow review for your clinic
            <Link href="/book-demo" style={{ fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 3 }}>
              Claim yours
            </Link>
          </span>
          <span className="contact" style={{ display: "flex", flexWrap: "wrap", gap: "8px 22px" }}>
            <a href={PHONE_HREF} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <PhoneIcon size={15} color="var(--hi)" />
              {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--hi)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
              {EMAIL}
            </a>
          </span>
        </div>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="brand" aria-label="GetPatients24 home">
            <Logo size={26} />
          </Link>

          <nav aria-label="Main" className="nav-pill">
            <Link href="/" className={navClass("home")} aria-current={current("/")}>Home</Link>
            <div className="nav-item">
              <Link href="/how-we-help" className={navClass("who")} aria-current={current("/how-we-help")}>
                Who We Help
                <Chevron />
              </Link>
              <div className="dropdown">
                {SPECIALTIES.map((s) => (
                  <Link key={s.href} href={s.href} aria-current={current(s.href)}>{s.label}</Link>
                ))}
                <Link href="/how-we-help" className="all">All specialties →</Link>
              </div>
            </div>
            <div className="nav-item">
              <Link href={SERVICES[0].href} className={navClass("services")}>
                Services
                <Chevron />
              </Link>
              <div className="dropdown">
                {SERVICES.map((s) => (
                  <Link key={s.href} href={s.href} aria-current={current(s.href)}>{s.label}</Link>
                ))}
              </div>
            </div>
            <Link href="/pricing-plans" className={navClass("pricing-plans")} aria-current={current("/pricing-plans")}>Pricing</Link>
            <Link href="/about" className={navClass("about")} aria-current={current("/about")}>About</Link>
          </nav>

          <span className="header-actions">
            <a href={PHONE_HREF} aria-label="Call GetPatients24" className="call-btn">
              <PhoneIcon />
            </a>
            <Link href="/book-demo" className="cta-btn">
              Book a demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </Link>
            <button
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </span>
        </div>

        <nav id="mobile-menu" aria-label="Mobile" className={"mobile-menu" + (open ? " open" : "")}>
          <Link href="/" aria-current={current("/")}>Home</Link>
          <span className="group">WHO WE HELP</span>
          <Link href="/how-we-help" className="sub" aria-current={current("/how-we-help")}>All specialties</Link>
          {SPECIALTIES.map((s) => (
            <Link key={s.href} href={s.href} className="sub" aria-current={current(s.href)}>{s.label}</Link>
          ))}
          <span className="group">SERVICES</span>
          {SERVICES.map((s) => (
            <Link key={s.href} href={s.href} className="sub" aria-current={current(s.href)}>{s.label}</Link>
          ))}
          <span className="group">COMPANY</span>
          <Link href="/pricing-plans" aria-current={current("/pricing-plans")}>Pricing</Link>
          <Link href="/about" aria-current={current("/about")}>About</Link>
          <a href={PHONE_HREF}>Call {PHONE}</a>
          <Link href="/book-demo" className="cta-btn menu-cta">Book a demo</Link>
        </nav>
      </header>
    </>
  );
}
