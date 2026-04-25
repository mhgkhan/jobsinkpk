import { Geist, Geist_Mono, Arimo, PT_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const arimo = Arimo({
  variable: "--font-aramo",
  subsets: ["latin"],
  weight: ["400", "500", "700"]
})
const ptSans = PT_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700"]
})


export const metadata = {
  title: "Latest Jobs in Pakistan | Govt & Private Jobs – Jobsinkpk",
  description: "Explore daily updated jobs in Pakistan including govt, private, and freelance opportunities. Start your career today with Jobsinkpk.",
  keywords: ["jobs in pakistan",
    "pakistan jobs 2026",
    "latest jobs in pakistan",
    "govt jobs pakistan",
    "private jobs pakistan",
    "online jobs pakistan",
    "jobsinkpk",
    "careers pakistan",
    "naukri pakistan",
    "pakistan jobs today",
    "latest govt jobs 2026 pakistan",
    "jobs in pakistan for freshers",
    "online jobs in pakistan without investment",
    "jobs in kpk",
    "jobs in punjab pakistan",
    "jobs in sindh pakistan",
    "jobs in balochistan pakistan",
    "daily jobs updates pakistan",
    "apply jobs online pakistan",
    "new jobs in pakistan"],

};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${ptSans.variable} ${arimo.className} h-full antialiased`}
    >
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
