"use client"

import NewsView from "@/components/newsView/newsView"
import { useAuthContext } from "@/context/AuthContext"
import getLiked from "@fire/firestore/getLiked"
import { useEffect, useState } from "react"
import "./liked.css"

const page = () => {
  const { user } = useAuthContext()
  const [likedNews, setLikedNews] = useState([])
  useEffect(() => {
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
