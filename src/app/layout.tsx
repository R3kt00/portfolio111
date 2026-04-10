import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Leo | Full Stack Dev",
  description: "Leo. K | Developer Portfolio",
  icons: {
    icon: "https://imgur.com/a/nhxVVOM"
  },
  openGraph: {
    title: "Leo | Full Stack Dev",
    description: "View my portfolio of development projects.",
    url: "https://r3kt.tech",
    siteName: "R3kt",
    images: [
      {
        url: "https://imgur.com/a/nhxVVOM",
        width: 256,
        height: 256,
        alt: "Leo. K | Developer Portfolio",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leo | Full Stack Dev",
    description: "Leo. K | Developer Portfolio",
    images: ["https://imgur.com/a/nhxVVOM"],
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-mono`}>
        {children}
      </body>
    </html>
  )
}
