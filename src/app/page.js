"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

// main page, not accessible to anyone
// redirects to /private
export default function Home() {
  useEffect(() => {
    router.push("/private")
  }, [])
  const router = useRouter()
  return <main>main</main>
}
