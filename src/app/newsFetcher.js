import axios from "axios"

const url = "/api/news"

export const fetchNews = async (query) => {
  console.log(query)
  const endpoint = `${url}/v2/everything?q=${query}`

  const headers = {
    // "X-Api-Key": process.env.PRIVATE_NEWS_API_KEY,
    "X-Api-Key": "6b42ee8df51247109e870e4f1d6b59cf",
  }

  let news, error

  await axios
    .get(endpoint, { headers })
    .then((response) => {
      news = response.data.articles
    })
    .catch((e) => {
      error = e
    })

  return { news, error }
}
