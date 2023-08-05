"use client"

import NewsView from "@/components/newsView/newsView"
import { useAuthContext } from "@/context/AuthContext"
import getLiked from "@fire/firestore/getLiked"
import { useEffect, useState } from "react"
import "./liked.css"

/**
 * @returns {JSX.Element} Liked Page
 * @description Liked Page
 * @version 1.0.0
 * @example
 * import Liked from "@app/user/liked/page"
 * const Component = () => {
 * return <Liked />
 * }
 * export default Component
 * @see https://www.npmjs.com/package/next
 */

const page = () => {
  // user from auth context
  const { user } = useAuthContext()
  // liked news state
  const [likedNews, setLikedNews] = useState([])
  // get liked news from firestore
  useEffect(() => {
    /**
     *  @desc Immediately Invoked Function Expression
     *  @see https://developer.mozilla.org/en-US/docs/Glossary/IIFE
     */
    ;(async () => {
      const res = (await getLiked(user)).res
      if (res) {
        setLikedNews(res)
      }
    })()
  }, [])

  return (
    <div className="saved-news">
      <NewsView savedNews={likedNews} />
    </div>
  )
}

export default page
