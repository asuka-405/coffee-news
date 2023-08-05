"use client"

import curUserSignOut from "@fire/auth/signout"
import { useRouter } from "next/navigation"
import { useState } from "react"
import "../../auth/auth.css"

const SignOut = () => {
  // state management
  // popup display state
  const [popupDisplay, setPopupDisplay] = useState("none")
  // popup content state
  const [popupContent, setPopupContent] = useState("")

  const router = useRouter()

  return (
    <div id="auth-container">
      <form onSubmit={() => curUserSignOut()}>
        <h1>SignOut</h1>
        <button type="submit">Sign me out</button>
        <a onClick={() => router.push("/user/feed")}>No! I want to read news</a>
      </form>
      <div id="popup" style={{ display: popupDisplay }}>
        <span onClick={() => setPopupDisplay("none")}>&times;</span>
        <p>{popupContent}</p>
      </div>
    </div>
  )
}

export default SignOut
