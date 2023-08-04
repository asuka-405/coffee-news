import firebaseApp from "@fire/firebase.config"

import isLoggedIn from "@fire/auth/isLoggedIn"
import { doc, getFirestore, setDoc } from "firebase/firestore"
import getLiked from "./getLiked"

const db = getFirestore(firebaseApp)

export default async function updateLike(article) {
  const user = isLoggedIn()
  if (user) {
    let { res, err } = await getLiked(user)

    if (Array.isArray(res)) res = res.filter((item) => item.url !== article.url)
    else res = []

    try {
      const likesRef = doc(db, "users", user.uid)
      await setDoc(
        likesRef,
        { liked_articles: [...res, article] },
        { merge: true }
      )
    } catch (e) {
      console.log(e)
    }
  }
}
