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
  apiKey: "AIzaSyB1vYWRJbZpXMHbRyLhRoTV22GIVhwzl-s",
  authDomain: "coffee-news-aec05.firebaseapp.com",
  projectId: "coffee-news-aec05",
  storageBucket: "coffee-news-aec05.appspot.com",
  messagingSenderId: "285957998457",
  appId: "1:285957998457:web:427c899bdc3bf6a6b851a8",
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
