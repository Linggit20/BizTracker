import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BizTracker - Simplify Profit Tracking",
  description: "Simplify profit tracking for your business and make informed decisions.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen bg-background ${inter.className}`}>
        <div className="flex min-h-screen flex-col bg-background">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
