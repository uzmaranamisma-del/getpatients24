const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://getpatients24.com";

const ROUTES = [
  "", "/how-we-help", "/done-for-you-patient-acquisition", "/website-ai-booking-system", "/pricing-plans",
  "/about", "/book-demo", "/chiropractic", "/regenerative-clinics", "/physical-therapy-clinics",
  "/dental-clinics", "/med-spa", "/eye-clinics", "/surgeons", "/privacy-policy", "/terms",
];

export default function sitemap() {
  return ROUTES.map((r) => ({
    url: `${BASE}${r}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : r === "/book-demo" || r === "/pricing-plans" ? 0.9 : 0.7,
  }));
}
