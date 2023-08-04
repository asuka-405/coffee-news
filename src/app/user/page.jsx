"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAuthContext } from "../../context/AuthContext"

export default function UserHome() {
  const { user } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (!user) router.push("/auth/signin")
    console.log(user)
  }, [user])

  return <h1>{user.email}</h1>
}
