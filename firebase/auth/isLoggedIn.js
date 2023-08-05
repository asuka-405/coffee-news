import { getAuth } from "firebase/auth"

// checks if user is logged in
export default function isLoggedIn() {
  const user = getAuth().currentUser
  return user
}
