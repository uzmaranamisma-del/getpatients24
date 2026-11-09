"use client";

import { useEffect, useRef } from "react";
import { BOOKING_PATH, CAL_LINK, CAL_NAMESPACE, CAL_URL } from "@/lib/site";

const EMBED_SRC = "https://app.cal.com/embed/embed.js";
const CAL_CONFIG = { layout: "month_view", useSlotsViewOnSmallScreen: "true" };

// Loads Cal.com's embed once (same loader as Cal's "element-click" snippet).
// Returns the namespaced Cal API, or null if the script failed to load (e.g. an ad blocker).
export function getCal() {
  if (typeof window === "undefined") return null;
  const w = window;
  if (!w.__gp24Cal) {
    w.__gp24Cal = { failed: false };
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal; let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {}; cal.q = cal.q || [];
          const s = d.createElement("script");
          s.src = A;
          s.onerror = () => { w.__gp24Cal.failed = true; };
          d.head.appendChild(s);
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); }
          else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(w, EMBED_SRC, "init");
    w.Cal("init", CAL_NAMESPACE, { origin: "https://app.cal.com" });
    w.Cal.config = w.Cal.config || {};
    w.Cal.config.forwardQueryParams = true;
    w.Cal.ns[CAL_NAMESPACE]("ui", { hideEventTypeDetails: false, layout: "month_view" });
  }
  if (w.__gp24Cal.failed) return null;
  return w.Cal.ns[CAL_NAMESPACE];
}

export function openMeetingPopup() {
  const cal = getCal();
  if (!cal) {
    window.open(CAL_URL, "_blank", "noopener");
    return;
  }
  cal("modal", { calLink: CAL_LINK, config: CAL_CONFIG });
}

// Mounted once in the layout: every "Book a meeting" link on the site (any link to
// the booking page) opens the Cal.com calendar in a popup instead of navigating.
export function MeetingLinks() {
  useEffect(() => {
    getCal();
    function onClick(e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target instanceof Element ? e.target.closest("a[href]") : null;
      if (!a || a.closest("[data-no-cal]")) return;
      let url;
      try { url = new URL(a.getAttribute("href"), window.location.href); } catch { return; }
      if (url.origin !== window.location.origin || url.pathname !== BOOKING_PATH || url.hash) return;
      e.preventDefault();
      openMeetingPopup();
    }
    // Capture phase, so this runs before Next.js <Link> navigates.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}

// Cal.com calendar shown inline on the booking page, pre-filled with the visitor's answers.
export function CalInline({ name, email, notes }) {
  const box = useRef(null);
  useEffect(() => {
    const cal = getCal();
    if (!cal || !box.current) return;
    box.current.innerHTML = "";
    cal("inline", {
      elementOrSelector: box.current,
      calLink: CAL_LINK,
      config: { ...CAL_CONFIG, ...(name ? { name } : {}), ...(email ? { email } : {}), ...(notes ? { notes } : {}) },
    });
  }, [name, email, notes]);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div ref={box} style={{ width: "100%", minHeight: 520, overflow: "auto", borderRadius: 18, background: "#FFFFFF", border: "1px solid var(--line)" }} />
      <a href={CAL_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, fontWeight: 600, color: "var(--pri)" }}>
        Calendar not loading? Open it on cal.com →
      </a>
    </div>
  );
}
