import setData from "./crud/create"

/**
 * @param {firebase.User} user
 * @param {firebase.firestore.DocumentData} userData
 * @returns {Promise<void>}
 * @description save user data to firestore
 * @example
 * await saveUserData(user, userData)
 * @see https://firebase.google.com/docs/firestore/manage-data/add-data
 */
export default async function saveUserData(user, userData) {
  setData(user, userData)
}
