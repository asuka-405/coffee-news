"use client"

import signIn from "@fire/auth/signin"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import "../auth.css"

/**
 * @returns {JSX.Element} SignIn Page
 * @description SignIn Page
 * @version 1.0.0
 * @example
 * import SignIn from "@app/auth/signin/page"
 * const Component = () => {
 * return <SignIn />
 * }
 * export default Component
 * @see https://www.npmjs.com/package/next
 */
const signin = () => {
  // state management
  // email input state
  const [email, setEmail] = useState("")
  // password input state
  const [password, setPassword] = useState("")
  // popup display state
  const [popupDisplay, setPopupDisplay] = useState("none")
  // popup content state
  const [popupContent, setPopupContent] = useState("")

  const router = useRouter()

  /**
   * @param {Event} e
   * @returns {Promise<void>}
   * @description handleSignIn
   */

  const handleSignIn = async (e) => {
    e.preventDefault()
    // sign in user with email and password from firebase auth
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
