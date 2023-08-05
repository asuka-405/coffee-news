"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAuthContext } from "../../context/AuthContext"

export default function UserHome() {
  // user from auth context
  const { user } = useAuthContext()
  const router = useRouter()

  // redirect to signin page if user is not logged in
  // redirect to dashboard if user is logged in
  useEffect(() => {
    if (!user) router.push("/auth/signin")
    else router.push("/user/dashboard")
  }, [user])

  return <h1>{user.email}</h1>
}
