"use client"
import NavMenu from "@component/navMenu/navMenu"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

// metadata for private users
export const metadata = {
  title: "News 🍵",
  description: "Read the latest news from around the world",
}

export default function RootLayout({ children }) {
  /**
   * @type {{to: string, text: string}[]}
   * @description links for the nav menu
   */

  const links = [
    { to: "/user/liked", text: "Liked" },
    { to: "/user/dashboard", text: "Profile" },
    { to: "/user/signout", text: "SignOut" },
    { to: "/auth/signin", text: "Signin" },
    { to: "/private", text: "Private Mode" },
  ]
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <NavMenu links={links} />
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
