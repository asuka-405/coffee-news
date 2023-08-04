import firebaseApp from "@fire/firebase.config"
import { doc, getFirestore, setDoc } from "firebase/firestore"

const db = getFirestore(firebaseApp)

export default setData = async (collection, id, data) => {
  const docRef = doc(db, collection, id)
  let res, err

  try {
    const docSnap = await setDoc(docRef, data)
    res = docSnap
  } catch (e) {
    console.log(e)
    throw e
  }
  return { res, err }
}
