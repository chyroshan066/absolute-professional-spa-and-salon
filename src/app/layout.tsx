import type { Metadata, Viewport } from "next";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "@/styles/open-iconic-bootstrap.min.css";
import "@/styles/animate.css";
import "@/styles/owl.carousel.min.css";
import "@/styles/owl.theme.default.min.css";
import "@/styles/magnific-popup.css";
import "@/styles/aos.css";
import "@/styles/bootstrap-datepicker.css";
import "@/styles/jquery.timepicker.css";
import "@/styles/flaticon.css";
import "@/styles/icomoon.css";
import "@/styles/ionicons.min.css";
import "./globals.css";
import IonicScripts from "@/utils/IonicScripts";
import AnalyticsWrapper from "@/utils/AnalyticsWrapper";
import { open_sans, prata } from "./fonts";
import ScriptsAndProviders from "@/utils/ScriptsAndProviders";
import { NavBar } from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Footer/Footer";
import { Loader } from "@/components/Loader";
import { baseURL, spaBusinessStructuredData, spaServicesStructuredData, spaTreatmentsStructuredData } from "@/constants";

export const metadata: Metadata = {
  title: "Best Spa in Jhapa | Absolute Professional Spa & Salon - Birtamode, Dhulabari, Panitanki",
  description: "Best spa in Jhapa, Nepal offering Warrior Thai, Sports Massage, Hot Stone, Pain Potli & Aromatherapy. Visit our spa in Birtamode, spa in Dhulabari or spa in Panitanki for premium wellness treatments.",
  keywords: [
    "spa in Jhapa",
    "best spa in Jhapa",
    "spa in Birtamode",
    "best spa in Birtamode",
    "spa in Dhulabari",
    "best spa in Dhulabari",
    "spa in Panitanki",
    "best spa in Panitanki",
    "spa near me Jhapa",
    "massage center in Birtamode",
    "massage center in Dhulabari",
    "spa and salon Jhapa",
    "professional spa Birtamode",
    "top spa in Dhulabari",
    "spa services Panitanki",
    "Thai massage in Jhapa",
    "hot stone massage Birtamode",
    "sports massage Dhulabari",
    "pain relief spa Jhapa",
    "aromatherapy Birtamode",
    "Swedish massage Panitanki",
    "Absolute Professional Spa",
    "Warrior Thai massage",
    "pain potli treatment",
    "stress relief spa",
    "therapeutic massage Nepal",
    "wellness center Jhapa",
  ],
  authors: [{ name: "Absolute Professional Spa & Salon" }],
  creator: "Absolute Professional Spa & Salon",
  publisher: "Absolute Professional Spa & Salon",
  metadataBase: new URL("https://www.absoluteprofessionalspa.com.np"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon_io/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon_io/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon_io/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/favicon_io/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        url: '/favicon_io/favicon.ico',
        sizes: '32x32'
      },
    ],
    shortcut: '/favicon_io/favicon.ico',
    apple: '/favicon_io/apple-touch-icon.png',
  },
  manifest: '/favicon_io/site.webmanifest',
  openGraph: {
    title: "Best Spa in Jhapa | Absolute Professional Spa - Birtamode, Dhulabari, Panitanki",
    description: "Visit the best spa in Jhapa! Absolute Professional Spa & Salon offers premium massage and wellness services. Find us in Birtamode, Dhulabari, and Panitanki.",
    type: "website",
    locale: "en_US",
    url: `${baseURL}`,
    siteName: "Absolute Professional Spa & Salon",
    images: [
      {
        url: "/images/preview.webp",
        width: 1200,
        height: 630,
        alt: "Best Spa in Jhapa - Absolute Professional Spa & Salon",
      }
    ],
  },
  category: "Health & Wellness",
  classification: "Spa and Massage Therapy Services",
  referrer: "origin-when-cross-origin",
  applicationName: "Absolute Professional Spa & Salon",
  generator: "Next.js",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(spaBusinessStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(spaServicesStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(spaTreatmentsStructuredData),
          }}
        />
      </head>

      <body
        className={`${open_sans.variable} ${prata.variable}`}
        suppressHydrationWarning={true}
      >
        <ScriptsAndProviders>

          <NavBar />
          {children}
          <Footer />
          <Loader />

        </ScriptsAndProviders>

        <AnalyticsWrapper />
        <IonicScripts />
      </body>
    </html>
  );
}
