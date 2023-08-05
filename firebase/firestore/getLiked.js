import firebaseApp from "@fire/firebase.config"
import { doc, getDoc, getFirestore } from "firebase/firestore"

// initialize firebase firestore
const db = getFirestore(firebaseApp)

/**
 * @param {firebase.User} user
 * @returns {Promise<{res: Array, err: firebase.firestore.FirestoreError}>}
 * @description get liked articles from firestore
 * @example
 * const { res, err } = await getLiked(user)
 * if (err) console.log(err)
 * else console.log(res)
 * @see https://firebase.google.com/docs/firestore/query-data/get-data
 *
 */

export default async function getLiked(user) {
  const docRef = doc(db, "users", user.uid)
  let res, err

  try {
    // get document snapshot
    // if successful, returns a firebase.firestore.DocumentSnapshot
    // if unsuccessful, returns a firebase.firestore.FirestoreError
    const docSnap = await getDoc(docRef)
    // get liked articles from document snapshot
    res = docSnap.data().liked_articles
  } catch (e) {
    console.log(e)
    err = e
  }
  return { res, err }
}
