"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    router.push("/private")
  }, [])
  const router = useRouter()
  return <main>main</main>
}
