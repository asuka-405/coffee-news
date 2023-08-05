import { getApps, initializeApp } from "firebase/app"
// import {
//   CACHE_SIZE_UNLIMITED,
//   persistentLocalCache,
//   persistentMultipleTabManager,
// } from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: process.env.PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
// }

/**
 * @type {import("firebase/app").FirebaseOptions}
 * @description firebase config
 * @see https://firebase.google.com/docs/web/setup#available-libraries
 */
const firebaseConfig = {
  apiKey: "AIzaSyB1vYWRJbZpXMHbRyLhRoTV22GIVhwzl-s",
  authDomain: "coffee-news-aec05.firebaseapp.com",
  projectId: "coffee-news-aec05",
  storageBucket: "coffee-news-aec05.appspot.com",
  messagingSenderId: "285957998457",
  appId: "1:285957998457:web:427c899bdc3bf6a6b851a8",
}

/**
 * @type {import("firebase/app").FirebaseApp}
 * @description firebase app
 * @see https://firebase.google.com/docs/reference/js/firebase.app.App
 */
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
