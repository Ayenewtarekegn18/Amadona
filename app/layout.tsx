import type React from "react"
import { Raleway } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ThemeProvider } from "./components/ThemeProvider"
import "./globals.css"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-raleway",
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
    <html lang="en" className={raleway.variable}>
      <body className="font-sans min-h-screen flex flex-col bg-app text-app transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
