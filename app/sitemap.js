import { SITE_URL } from "@/lib/site";

const BASE = SITE_URL;

const ROUTES = [
  "", "/how-we-help", "/done-for-you-patient-acquisition", "/website-ai-booking-system", "/pricing-plans", "/offer",
  "/about", "/book-demo", "/chiropractic", "/regenerative-clinics", "/physical-therapy-clinics",
  "/dental-clinics", "/med-spa", "/eye-clinics", "/surgeons", "/privacy-policy", "/terms",
];

export default function sitemap() {
  return ROUTES.map((r) => ({
    url: `${BASE}${r}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : r === "/book-demo" || r === "/pricing-plans" || r === "/offer" ? 0.9 : 0.7,
  }));
}
