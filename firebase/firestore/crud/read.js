import firebaseApp from "@fire/firebase.config"
import { doc, getDoc, getFirestore } from "firebase/firestore"

const db = getFirestore(firebaseApp)

export default getData = async (collection, id) => {
  const docRef = doc(db, collection, id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data())
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!")
  }
  return docSnap.data()
}
