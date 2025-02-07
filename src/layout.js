import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HoverSidebar from "@/components/HoverSidebar"
import AiChatBox from "@/components/AiChatBox"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "RentSwap - Buy, Sell, and Rent Items",
  description: "Your premier destination for buying, selling, and renting items.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <HoverSidebar />
        {children}
        <AiChatBox />
        <Footer />
      </body>
    </html>
  )
}