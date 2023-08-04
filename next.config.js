/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/news/:query*",
        destination: "https://newsapi.org/:query*",
      },
    ]
  },
}

module.exports = nextConfig
