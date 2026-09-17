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
    default: "CrowdStock — The People's Stock",
    template: "%s — CrowdStock",
  },
  description:
    "CrowdStock sets a new stock value every hour, together. Set your value — or let Auto Stock set it for you — and the closer you land to the People's Hourly Stock Value, the more you earn.",
  keywords: [
    "CrowdStock",
    "the people's stock",
    "hourly stock value",
    "auto stock",
    "shared growth",
    "community wallet app",
  ],
  openGraph: {
    title: "CrowdStock — The People's Stock",
    description:
      "24 hourly stock rounds. Set your value, stay close to the People's Hourly Stock Value, cash out instantly.",
    url: siteUrl,
    siteName: "CrowdStock",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrowdStock — The People's Stock",
    description:
      "24 hourly stock rounds. Set your value, stay close to the People's Hourly Stock Value, cash out instantly.",
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
