// GetPatients24 logo (Concept A: booked calendar + medical plus + 24 badge).
// `size` is the wordmark font size in px; `dark` switches to the version for dark backgrounds.

export function LogoIcon({ size = 40, dark = false }) {
  const c = dark
    ? { bg: "#48CAE4", inner: "#023E8A", plus: "#FFFFFF", badge: "#FFFFFF", badgeTxt: "#023E8A", ring: "#023E8A" }
    : { bg: "#0077B6", inner: "#FFFFFF", plus: "#00B4D8", badge: "#48CAE4", badgeTxt: "#023E8A", ring: "#FFFFFF" };
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" style={{ flex: "none", display: "block" }}>
      <rect x="4" y="10" width="50" height="48" rx="13" fill={c.bg} />
      <rect x="15" y="4" width="6" height="13" rx="3" fill={c.bg} />
      <rect x="37" y="4" width="6" height="13" rx="3" fill={c.bg} />
      <rect x="10" y="22" width="38" height="30" rx="8" fill={c.inner} />
      <rect x="25.5" y="27" width="7" height="20" rx="3" fill={c.plus} />
      <rect x="19" y="33.5" width="20" height="7" rx="3" fill={c.plus} />
      <circle cx="50" cy="16" r="13" fill={c.badge} stroke={c.ring} strokeWidth="3" />
      <text x="50" y="20.5" textAnchor="middle" fontFamily="Outfit, sans-serif" fontWeight="800" fontSize="12.5" fill={c.badgeTxt}>
        24
      </text>
    </svg>
  );
}

export default function Logo({ size = 26, dark = false }) {
  const t = dark
    ? { get: "#90E0EF", main: "#FFFFFF", pill: "#48CAE4", pillTxt: "#023E8A" }
    : { get: "#0077B6", main: "#023E8A", pill: "#0077B6", pillTxt: "#FFFFFF" };
  return (
    <span role="img" aria-label="GetPatients24" style={{ display: "inline-flex", alignItems: "center", gap: Math.round(size * 0.3), lineHeight: 1 }}>
      <LogoIcon size={Math.round(size * 1.45)} dark={dark} />
      <span
        aria-hidden="true"
        style={{ fontFamily: "'Outfit', sans-serif", fontSize: size, letterSpacing: "-0.035em", display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" }}
      >
        <span style={{ fontWeight: 600, color: t.get }}>Get</span>
        <span style={{ fontWeight: 800, color: t.main }}>Patients</span>
        <span
          style={{
            marginLeft: Math.round(size * 0.14),
            fontWeight: 800,
            fontSize: Math.round(size * 0.78),
            color: t.pillTxt,
            background: t.pill,
            padding: `${Math.round(size * 0.1)}px ${Math.round(size * 0.22)}px`,
            borderRadius: Math.round(size * 0.28),
            letterSpacing: "-0.02em",
          }}
        >
          24
        </span>
      </span>
    </span>
  );
}
