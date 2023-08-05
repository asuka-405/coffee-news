"use client"

import firebaseApp from "@fire/firebase.config"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/navigation"
import React from "react"

// initialize firebase auth
const auth = getAuth(firebaseApp)

// create context
export const AuthContext = React.createContext()
// create custom hook
export const useAuthContext = () => React.useContext(AuthContext)

/**
 * @param {React.ReactNode} children
 * @returns {React.ReactNode}
 * @description provides user data to children
 * @example
 * <AuthContextProvider>
 *  <App />
 * </AuthContextProvider>
 * @see https://reactjs.org/docs/hooks-reference.html#usecontext
 */
export const AuthContextProvider = ({ children }) => {
  // set user and loading state
  const [user, setUser] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  const router = useRouter()

  // listen for auth state changes
  React.useEffect(() => {
    // unsubscribe from onAuthStateChanged
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        setLoading(false)
      } else {
        setUser(null)
        router.push("/private")
      }
    })
    // call unsubscribe on unmount
    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  )
}
