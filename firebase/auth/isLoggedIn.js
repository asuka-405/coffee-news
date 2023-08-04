import { getAuth } from "firebase/auth"

export default function isLoggedIn() {
  const user = getAuth().currentUser
  return user
}
