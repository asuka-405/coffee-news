import firebaseApp from "@fire/firebase.config"
import { getAuth, signOut } from "firebase/auth"

// initialize firebase auth
const auth = getAuth(firebaseApp)

/**
 * @returns {Promise<void>}
 * @description sign out current user
 * @example
 * await signOut()
 * @see https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signout
 */

export default async function curUserSignOut() {
  try {
    await signOut(auth)
  } catch (e) {
    console.log(e)
  }
}
