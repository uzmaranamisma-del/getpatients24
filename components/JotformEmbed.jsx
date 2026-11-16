"use client";

import { useEffect, useRef, useState } from "react";

// Embeds a Jotform form and grows the iframe to the form's real height.
// Jotform forms post "setHeight:<px>:<formId>" to the parent page while they render.
export default function JotformEmbed({ formId, title, minHeight = 2200 }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(minHeight);

  useEffect(() => {
    const onMessage = (e) => {
      if (typeof e.data !== "string" || !/jotform/.test(e.origin)) return;
      const [cmd, value, id] = e.data.split(":");
      if (id && id !== String(formId)) return;
      if (cmd === "setHeight") {
        const h = parseInt(value, 10);
        if (h > 200) setHeight(h + 20);
      } else if (cmd === "scrollIntoView" && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [formId]);

  return (
    <iframe
      ref={ref}
      id={`JotFormIFrame-${formId}`}
      title={title}
      src={`https://form.jotform.com/${formId}?isIframeEmbed=1`}
      allow="geolocation; microphone; camera; fullscreen"
      scrolling="no"
      style={{ display: "block", width: "100%", minWidth: "100%", height: `${height}px`, border: "none", background: "transparent" }}
    />
  );
}
