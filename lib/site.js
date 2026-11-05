// Single source of truth for the site's domain and contact email.
// Set NEXT_PUBLIC_SITE_URL (e.g. https://getpatients24.com) and the email follows it: info@<domain>.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://getpatients24.com").replace(/\/+$/, "");
export const DOMAIN = new URL(SITE_URL).hostname.replace(/^www\./, "");
export const CONTACT_EMAIL = `info@${DOMAIN}`;
