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
  title: "JobsInkPK - Latest KPK Jobs, Government & Private Jobs in Pakistan",
  description: "JobsInkPK brings you daily updates on KPK Jobs, Government Jobs, Private Jobs, NTS, ETEA, KPPSC, PPSC, FPSC, WAPDA, NADRA, Police, Army, Navy, Air Force, Bank Jobs, internships, scholarships, admissions, and career opportunities across Pakistan.",
  keywords: ["jobs in pakistan",
    "Pakistan Jobs",
    "Today's Jobs",
    "Daily Jobs Pakistan",
    "Government Jobs Pakistan",
    "Private Jobs Pakistan",
    "KPK Jobs",
    "Khyber Pakhtunkhwa Jobs",
    "Punjab Jobs",
    "Sindh Jobs",
    "Balochistan Jobs",
    "AJK Jobs",
    "Gilgit Baltistan Jobs",
    "Federal Government Jobs",
    "Provincial Government Jobs",
    "Online Jobs Pakistan",
    "Apply Online Jobs",
    "NTS Jobs",
    "ETEA Jobs",
    "PPSC Jobs",
    "FPSC Jobs",
    "KPPSC Jobs",
    "BPSC Jobs",
    "SPSC Jobs",
    "AJKPSC Jobs",
    "WAPDA Jobs",
    "NADRA Jobs",
    "Pakistan Railway Jobs",
    "Police Jobs",
    "Pak Army Jobs",
    "Pakistan Navy Jobs",
    "Pakistan Air Force Jobs",
    "FIA Jobs",
    "ASF Jobs",
    "Bank Jobs Pakistan",
    "Teaching Jobs Pakistan",
    "Medical Jobs Pakistan",
    "Engineering Jobs Pakistan",
    "IT Jobs Pakistan",
    "Internships Pakistan",
    "Scholarships Pakistan",
    "Admissions Pakistan",
    "Fresh Graduate Jobs",
    "Career Opportunities Pakistan",
    "Walk-in Interviews Pakistan",
    "Latest Vacancies Pakistan"],
  icons: {
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", rel: "shortcut icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: "index, follow",
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${ptSans.variable} ${arimo.className} h-full antialiased`}
    >
      <head>
        <meta name="google-site-verification" content="bJBzMveePqI6TnPkULD80gIVsMLRZAglc8eupcJOkt0" />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
