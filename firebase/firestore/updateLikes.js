import firebaseApp from "@fire/firebase.config"

import isLoggedIn from "@fire/auth/isLoggedIn"
import { doc, getFirestore, setDoc } from "firebase/firestore"
import getLiked from "./getLiked"
import removeLiked from "./removeLiked"

// initialize firebase firestore
const db = getFirestore(firebaseApp)

/**
 * @param {firebase.firestore.DocumentData} article
 * @param {boolean} isLiked
 * @returns {Promise<void>}
 * @description update liked_articles in firestore
 * @example
 * await updateLike(article, isLiked)
 * @see https://firebase.google.com/docs/firestore/manage-data/delete-data
 */

export default async function updateLike(article, isLiked) {
  if (isLiked) return await removeLiked(article)

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
