import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth"
import firebaseApp from "../firebase.config"

// initialize firebase auth
const auth = getAuth(firebaseApp)

/**
 * @param {string} email
 * @param {string} password
 * @param {string} displayName
 * @returns {Promise<{user: firebase.User, error: firebase.auth.Error}>}
 * @description sign up user with email and password
 * @example
 * const { user, error } = await signUp(email, password, displayName)
 * if (error) console.log(error)
 * else console.log(user)
 * @see https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createuserwithemailandpassword
 */

async function signUp(email, password, displayName) {
  let user, error
  try {
    const fetchedUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    })
    user = fetchedUser
  } catch (e) {
    console.log(e)
    error = e
  }
  return { user, error }
}

export default signUp
