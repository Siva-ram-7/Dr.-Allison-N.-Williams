import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StructuredData } from "@/components/seo/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://croftoncare.com'),
  title: {
    default: "Dr. Allison N. Williams, MD | Crofton Family Practice - MDVIP Concierge Medicine",
    template: "%s | Dr. Allison N. Williams, MD"
  },
  description: "Experience personalized concierge medicine with Dr. Allison N. Williams, MD at Crofton Family Practice. Board-certified family physician offering MDVIP membership with 24/7 access, comprehensive wellness programs, and preventive care in Crofton, Maryland.",
  keywords: [
    "Concierge Medicine",
    "Primary Care",
    "Family Medicine",
    "Dr. Allison Williams",
    "MDVIP",
    "Crofton",
    "Maryland",
    "Concierge Doctor",
    "Personalized Healthcare",
    "Preventive Medicine",
    "Wellness Programs",
    "Crofton Family Practice",
    "MDVIP Doctor",
    "Family Physician Maryland"
  ],
  authors: [{ name: "Dr. Allison N. Williams, MD" }],
  creator: "Dr. Allison N. Williams, MD",
  publisher: "Crofton Family Practice",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Dr. Allison N. Williams, MD - Crofton Family Practice",
    title: "Dr. Allison N. Williams, MD | Concierge Medicine & Primary Care",
    description: "Board-certified family physician offering personalized MDVIP concierge medicine in Crofton, Maryland. 24/7 physician access, comprehensive wellness programs, and preventive care.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Allison N. Williams, MD - Crofton Family Practice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Allison N. Williams, MD | Concierge Medicine & Primary Care",
    description: "Experience personalized concierge medicine with Dr. Allison N. Williams, MD. MDVIP membership with 24/7 access and comprehensive wellness programs.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  category: "Healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background text-foreground">
        <StructuredData />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

    