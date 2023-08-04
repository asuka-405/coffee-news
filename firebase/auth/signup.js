import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth"
import firebaseApp from "../firebase.config"

const auth = getAuth(firebaseApp)

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
