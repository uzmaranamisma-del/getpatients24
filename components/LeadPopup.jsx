"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

// Site-wide popup lead form. It opens once per visitor, on whichever comes first:
// DELAY_MS on the page, scrolling SCROLL_RATIO of the page, or (desktop) moving
// the mouse out towards the browser tabs. Closing it hides it for HIDE_DAYS; a
// submitted lead hides it for good. Leads post to /api/lead like every other form.

const DELAY_MS = 15000;
const SCROLL_RATIO = 0.45;
const HIDE_DAYS = 7;
const STORAGE_KEY = "gp24-popup";
const SKIP_PATHS = ["/book-demo", "/privacy-policy", "/terms"];
const PHONE = "+1 786 619 8997";

function readState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  } catch {
    return null;
  }
}

function writeState(value) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    /* storage blocked: popup may show again next visit, which is fine */
  }
}

function isSuppressed() {
  const s = readState();
  if (!s) return false;
  if (s.submitted) return true;
  return typeof s.closedAt === "number" && Date.now() - s.closedAt < HIDE_DAYS * 86400000;
}

export default function LeadPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const firstField = useRef(null);
  const dialog = useRef(null);
  const lastFocus = useRef(null);
  const shown = useRef(false);

  const skip = SKIP_PATHS.some((p) => pathname === p || pathname?.startsWith(p + "/"));

  const show = useCallback(() => {
    if (shown.current || isSuppressed()) return;
    shown.current = true;
    lastFocus.current = document.activeElement;
    setOpen(true);
  }, []);

  // Triggers
  useEffect(() => {
    if (skip || shown.current || isSuppressed()) return;

    const timer = setTimeout(show, DELAY_MS);

    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max >= SCROLL_RATIO) show();
    }

    function onMouseOut(e) {
      if (!e.relatedTarget && e.clientY <= 0) show();
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseout", onMouseOut);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, [skip, show]);

  const close = useCallback(() => {
    setOpen(false);
    if (!sent) writeState({ closedAt: Date.now() });
    const el = lastFocus.current;
    if (el && typeof el.focus === "function") el.focus();
  }, [sent]);

  // While open: lock page scroll, focus the form, Escape closes, Tab stays inside.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstField.current?.focus(), 50);

    function onKey(e) {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab" || !dialog.current) return;
      const items = dialog.current.querySelectorAll(
        'button:not([disabled]), input:not([type="hidden"]):not([tabindex="-1"]), select, textarea, a[href]'
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  async function submit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "popup", page: window.location.pathname }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSent(true);
      writeState({ submitted: true });
    } catch {
      setError(`Something went wrong. Please call us on ${PHONE} or try again.`);
    } finally {
      setSending(false);
    }
  }

  if (!open) return null;

  return (
    <div className="lp-backdrop" onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div
        ref={dialog}
        className="lp-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lp-title"
        aria-describedby="lp-desc"
      >
        <button type="button" className="lp-close" onClick={close} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {!sent ? (
          <form onSubmit={submit} className="lp-form">
            <span className="lp-eyebrow">Free for clinics</span>
            <h2 id="lp-title" className="lp-title">Get more patients this month</h2>
            <p id="lp-desc" className="lp-desc">
              Book a free 20-minute patient flow review. We'll show you where new patients are slipping away and how to win them back.
            </p>

            <label className="lp-label">
              Your name
              <input ref={firstField} name="name" type="text" required autoComplete="name" placeholder="Dr. Jane Smith" className="lp-input" />
            </label>
            <label className="lp-label">
              Work email
              <input name="email" type="email" required autoComplete="email" placeholder="you@clinic.com" className="lp-input" />
            </label>
            <label className="lp-label">
              Phone <span className="lp-optional">(optional)</span>
              <input name="phone" type="tel" autoComplete="tel" placeholder="+1 555 123 4567" className="lp-input" />
            </label>
            <label className="lp-label">
              Clinic type
              <select name="specialty" className="lp-input" defaultValue="">
                <option value="" disabled>Choose one</option>
                <option>Physiotherapy</option>
                <option>Chiropractic</option>
                <option>Dental</option>
                <option>Med Spa</option>
                <option>Eye clinic</option>
                <option>Regenerative medicine</option>
                <option>Surgical practice</option>
                <option>Other</option>
              </select>
            </label>

            {/* Honeypot for bots; hidden from people and screen readers */}
            <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="lp-hp" />

            <button type="submit" disabled={sending} className="lp-submit">
              {sending ? "Sending…" : "Get my free review"}
            </button>
            {error && <p role="alert" className="lp-error">{error}</p>}
            <span className="lp-fine">We reply within one business day. No spam, ever.</span>
          </form>
        ) : (
          <div role="status" className="lp-done">
            <span className="lp-check" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <h2 id="lp-title" className="lp-title">You're in!</h2>
            <p id="lp-desc" className="lp-desc">We'll email you within one business day to book your free patient flow review.</p>
            <button type="button" onClick={close} className="lp-submit">Close</button>
          </div>
        )}
      </div>
    </div>
  );
}
