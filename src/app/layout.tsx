import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://crowdstock.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CrowdStock — Play the Crowd. Beat the Average.",
    template: "%s — CrowdStock",
  },
  description:
    "CrowdStock runs 24 live prediction rounds a day. Pick a number, and the closer you land to the crowd's average, the more you win. Auto Play, instant wallet, and real-time results.",
  keywords: [
    "CrowdStock",
    "prediction game",
    "crowd average game",
    "stock prediction app",
    "auto play",
    "daily rounds",
  ],
  openGraph: {
    title: "CrowdStock — Play the Crowd. Beat the Average.",
    description:
      "24 live rounds, every hour. Pick a number, chase the crowd average, cash out instantly.",
    url: siteUrl,
    siteName: "CrowdStock",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrowdStock — Play the Crowd. Beat the Average.",
    description:
      "24 live rounds, every hour. Pick a number, chase the crowd average, cash out instantly.",
  },
  icons: {
    icon: "/brand/favicon.png",
    apple: "/brand/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1214",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text selection:bg-primary">
        {children}
      </body>
    </html>
  );
}
