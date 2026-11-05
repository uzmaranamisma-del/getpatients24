"use client";

import { useMemo, useState } from "react";

const TIMES = ["10:00 AM", "11:30 AM", "2:30 PM", "4:00 PM"];

// Next 5 working days, starting tomorrow.
function nextWorkingDays(count = 5) {
  const days = [];
  const d = new Date();
  while (days.length < count) {
    d.setDate(d.getDate() + 1);
    const wd = d.getDay();
    if (wd !== 0 && wd !== 6) days.push(new Date(d));
  }
  return days;
}

const fmtDay = (d) => d.toLocaleDateString("en-US", { weekday: "short" });
const fmtDate = (d) => d.toLocaleDateString("en-US", { month: "short", day: "numeric" });

export default function SlotPicker({ name, details }) {
  const days = useMemo(() => nextWorkingDays(), []);
  const [day, setDay] = useState(0);
  const [time, setTime] = useState("");
  const [state, setState] = useState("pick"); // pick | sending | done | error

  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;

  async function confirm() {
    if (!time) return;
    setState("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...details,
          source: "book-demo-slot",
          slot: `${fmtDay(days[day])} ${fmtDate(days[day])}, ${time}`,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }),
      });
      if (!res.ok) throw new Error();
      setState("done");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div role="status" style={{ borderRadius: 18, background: "var(--soft)", padding: 20, display: "flex", flexDirection: "column", gap: 6 }}>
        <span style={{ fontWeight: 800, fontSize: 18 }}>You're booked, {name}!</span>
        <span style={{ fontSize: 15, lineHeight: 1.6, color: "var(--muted)" }}>
          {fmtDay(days[day])} {fmtDate(days[day])} at {time}. We'll confirm your call by email shortly.
        </span>
      </div>
    );
  }

  const chip = (selected) => ({
    padding: "12px 8px",
    borderRadius: 14,
    border: `1.5px solid ${selected ? "var(--pri)" : "var(--line)"}`,
    background: selected ? "var(--soft)" : "#FFFFFF",
    color: selected ? "var(--priD)" : "var(--ink)",
    fontFamily: "inherit",
    fontWeight: 700,
    fontSize: 14,
    cursor: "pointer",
    textAlign: "center",
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div role="radiogroup" aria-label="Day" style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: 8 }}>
        {days.map((d, i) => (
          <button key={i} type="button" role="radio" aria-checked={day === i} onClick={() => { setDay(i); setTime(""); }} style={chip(day === i)}>
            {fmtDay(d)}
            <br />
            <span style={{ fontWeight: 500, fontSize: 13 }}>{fmtDate(d)}</span>
          </button>
        ))}
      </div>
      <div role="radiogroup" aria-label="Time" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 8 }}>
        {TIMES.map((t) => (
          <button key={t} type="button" role="radio" aria-checked={time === t} onClick={() => setTime(t)} style={chip(time === t)}>
            {t}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={confirm}
        disabled={!time || state === "sending"}
        style={{ minHeight: 54, border: 0, borderRadius: 999, background: "var(--pri)", color: "#FFFFFF", fontWeight: 700, fontSize: 16, fontFamily: "inherit", cursor: time ? "pointer" : "not-allowed", opacity: time ? 1 : 0.55 }}
      >
        {state === "sending" ? "Booking..." : time ? `Confirm ${fmtDay(days[day])} at ${time}` : "Pick a time to continue"}
      </button>
      {state === "error" && (
        <p role="alert" style={{ margin: 0, color: "#B42318", fontSize: 14 }}>
          We couldn't book that slot. Please call +1 786 619 8997.
        </p>
      )}
      {bookingUrl && (
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, fontWeight: 600 }}>
          Or open the full calendar →
        </a>
      )}
    </div>
  );
}
