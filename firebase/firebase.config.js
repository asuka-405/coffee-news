import { getApps, initializeApp } from "firebase/app"
import {
  CACHE_SIZE_UNLIMITED,
  persistentLocalCache,
  persistentMultipleTabManager,
} from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: process.env.PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.PUBLIC_FIREBASE_MEASUREMENT_ID,
// }

const firebaseConfig = {
  apiKey: process.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
}

let firebaseApp = getApps().length
  ? getApps()[0]
  : initializeApp(firebaseConfig)

export default firebaseApp

// {
//   localCache: persistentLocalCache({
//     tabManager: persistentMultipleTabManager(),
//   }),
//   cacheSizeBytes: CACHE_SIZE_UNLIMITED,
// }
