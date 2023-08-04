import firebaseApp from "@fire/firebase.config"
import { getAuth, signOut } from "firebase/auth"

const auth = getAuth(firebaseApp)

export default async function curUserSignOut() {
  try {
    await signOut(auth)
  } catch (e) {
    console.log(e)
  }
}
