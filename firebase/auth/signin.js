import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import firebaseApp from "../firebase.config"

// initialize firebase auth
const auth = getAuth(firebaseApp)

/**
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{user: firebase.User, error: firebase.auth.Error}>}
 * @description sign in user with email and password
 * @example
 * const { user, error } = await signIn(email, password)
 * if (error) console.log(error)
 * else console.log(user)
 * @see https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signinwithemailandpassword
 *
 */
async function signIn(email, password) {
  let user, error
  try {
    // sign in user with email and password
    // if successful, returns a firebase.User
    // if unsuccessful, returns a firebase.auth.Error
    const fetchedUser = await signInWithEmailAndPassword(auth, email, password)
    user = fetchedUser
  } catch (e) {
    error = e
  }
  return { user, error }
}

export default signIn
