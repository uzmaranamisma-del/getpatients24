import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://reliantware.com"),
  title: {
    default: "GetPatients24 | Patient Growth for Medical Clinics",
    template: "%s",
  },
  description:
    "GetPatients24 brings medical and wellness clinics more of the right patients with done-for-you marketing, fast follow-up and AI booking.",
  openGraph: {
    siteName: "GetPatients24",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#023E8A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600;700&family=Outfit:wght@600;700;800&display=swap"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="site">
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
