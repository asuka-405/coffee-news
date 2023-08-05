import isLoggedIn from "@fire/auth/isLoggedIn"
import firebaseApp from "@fire/firebase.config"
import { doc, getFirestore, setDoc } from "firebase/firestore"
import getLiked from "./getLiked"

// initialize firebase firestore
const db = getFirestore(firebaseApp)

/**
 * @param {firebase.firestore.DocumentData} article
 * @returns {Promise<void>}
 * @description remove article from liked_articles in firestore
 * @example
 * await removeLiked(article)
 * @see https://firebase.google.com/docs/firestore/manage-data/delete-data
 */
export default async function removeLiked(article) {
  // get user
  const user = isLoggedIn()
  // if user is logged in, remove article from liked_articles
  if (user) {
    // get liked articles
    let { res, err } = await getLiked(user)
    // filter out article
    if (Array.isArray(res)) res = res.filter((item) => item.url !== article.url)
    else res = []

    try {
      // set liked_articles to filtered array
      const likesRef = doc(db, "users", user.uid)
      await setDoc(likesRef, { liked_articles: res }, { merge: false })
    } catch (e) {
      console.log(e)
    }
  }
}
