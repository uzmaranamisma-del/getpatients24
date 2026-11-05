import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://getpatients24.com"),
  title: {
    default: "Get More Patients for Your Clinic | GetPatients24",
    template: "%s",
  },
  description:
    "Get more of the right patients for your clinic. GetPatients24 runs done-for-you marketing, fast lead follow-up and AI booking for dental, med spa & more.",
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
