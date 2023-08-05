import axios from "axios"

// links to --> https://newsapi.org/
const url = "/api/news"

/**
 * @param {string} query
 * @returns {Promise<{news: Array, error: Error}>}
 * @description fetch news from newsapi.org
 * @example
 * const { news, error } = await fetchNews(query)
 * if (error) console.log(error)
 * else console.log(news)
 * @see https://newsapi.org/docs/get-started
 */

export const fetchNews = async (query) => {
  // generate endpoint
  const endpoint = `${url}/v2/everything?q=${query}`
  // set headers
  const headers = {
    // "X-Api-Key": process.env.PRIVATE_NEWS_API_KEY,
    "X-Api-Key": "6b42ee8df51247109e870e4f1d6b59cf",
  }

  let news, error

  // fetch news
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
