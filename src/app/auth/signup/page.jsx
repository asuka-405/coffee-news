"use client"

import signUp from "@fire/auth/signup"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import "../auth.css"

const signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [popupDisplay, setPopupDisplay] = useState("none")
  const [popupContent, setPopupContent] = useState("")

  const router = useRouter()

  const handleAuth = async (e) => {
    e.preventDefault()
    const { user, error } = await signUp(email, password, name)
    if (error) {
      console.log(error)
      setPopupDisplay("block")
      setPopupContent(error.message)
    } else router.push("/user/dashboard")
  }

  return (
    <div id="auth-container">
      <form onSubmit={handleAuth}>
        <h1>SignUp</h1>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
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
        <button type="submit">Sign Up</button>
        <a onClick={() => router.push("/auth/signin")}>
          Already have an account? SignIn
        </a>
      </form>
      <div id="popup" style={{ display: popupDisplay }}>
        <span onClick={() => setPopupDisplay("none")}>&times;</span>
        <p>{popupContent}</p>
      </div>
    </div>
  )
}

export default signup
