import firebaseApp from "@fire/firebase.config"
import { doc, getDoc, getFirestore } from "firebase/firestore"

const db = getFirestore(firebaseApp)

export default async function getLiked(user) {
  const docRef = doc(db, "users", user.uid)
  let res, err

  try {
    const docSnap = await getDoc(docRef)
    res = docSnap.data().liked_articles
  } catch (e) {
    console.log(e)
    err = e
  }
  return { res, err }
}
