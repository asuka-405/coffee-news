"use client"
import NewsView from "@component/newsView/newsView"

/**
 * @returns {JSX.Element} News Page for private users
 * @description News Page for private users
 * @version 1.0.0
 * @example
 * import News from "@app/private/page"
 * const Component = () => {
 * return <News />
 * }
 * export default Component
 */
const page = () => {
  return <NewsView isPrivate="true" />
}

export default page
