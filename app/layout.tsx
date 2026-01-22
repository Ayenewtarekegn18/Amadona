import type React from "react"
import { Inter, Elsie } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ThemeProvider } from "./components/ThemeProvider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

const elsie = Elsie({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-elsie",
  display: "swap",
})

export const metadata = {
  title: "Amadoniyas Gem and Mineral World",
  description: "Showcasing Ethiopia's and Africa's Gemstones, Minerals, and Energy Resources",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${elsie.variable}`}>
      <body className="font-sans min-h-screen flex flex-col bg-app text-app transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
