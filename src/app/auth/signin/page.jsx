"use client"

import signIn from "@fire/auth/signin"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import "../auth.css"

const signin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [popupDisplay, setPopupDisplay] = useState("none")
  const [popupContent, setPopupContent] = useState("")
  const router = useRouter()

  const handleSignIn = async (e) => {
    e.preventDefault()
    const { user, error } = await signIn(email, password)
    if (error) {
      console.log(error)
      setPopupDisplay("block")
      setPopupContent(error.message)
    } else router.push("/user/dashboard")
    console.log(user)
  }
  return (
    <div id="auth-container">
      <form onSubmit={handleSignIn}>
        <h1>SignIn</h1>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Sign In</button>
        <a onClick={() => router.push("/auth/signup")}>
          Dont have an account? SignUp
        </a>
      </form>
      <div id="popup" style={{ display: popupDisplay }}>
        <span onClick={() => setPopupDisplay("none")}>&times;</span>
        <p>{popupContent}</p>
      </div>
    </div>
  )
}

export default signin
