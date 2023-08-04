import setData from "./crud/create"

export default async function saveUserData(user, userData) {
  setData(user, userData)
}
