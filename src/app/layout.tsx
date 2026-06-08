import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'CareerAI Copilot | AI Resume & Job Application Optimizer',
  description: 'AI Resume & Job Application Copilot that rewrites your resume and cover letter to perfectly match any job URL. Land your dream job faster!',
  keywords: ["AI resume, job application, cover letter, resume optimizer, AI copilot, career, job search, ATS friendly, interview, hiring"],
  openGraph: {
    "title": "CareerAI Copilot | AI Resume & Job Application Optimizer",
    "description": "AI Resume & Job Application Copilot that rewrites your resume and cover letter to perfectly match any job URL. Land your dream job faster!",
    "url": "https://careeraicopilot.com",
    "siteName": "CareerAI Copilot",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/remotely-working-engineer-home-office-coding-computer-monitor_482257-120137.jpg",
        "alt": "AI assisting job seeker with resume and cover letter"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "CareerAI Copilot | AI Resume & Job Application Optimizer",
    "description": "AI Resume & Job Application Copilot that rewrites your resume and cover letter to perfectly match any job URL. Land your dream job faster!",
    "images": [
      "http://img.b2bpic.net/free-photo/remotely-working-engineer-home-office-coding-computer-monitor_482257-120137.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
