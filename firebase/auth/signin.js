import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import firebaseApp from "../firebase.config"

const auth = getAuth(firebaseApp)

async function signIn(email, password) {
  let user, error
  try {
    const fetchedUser = await signInWithEmailAndPassword(auth, email, password)
    user = fetchedUser
  } catch (e) {
    console.log(e)
    error = e
  }
  return { user, error }
}

export default signIn
