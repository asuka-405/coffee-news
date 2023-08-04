"use client"
import NewsItem from "@component/newsItem/newsItem"
import Modern from "@component/searchBox/modern"
import updateLike from "@fire/firestore/updateLikes"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import ToggleSwitch from "../toggleSwitch/switch"
import "./newsView.css"

const NewsView = ({ isPrivate, savedNews }) => {
  const [twoColLayout, setTwoColLayout] = useState({})

  const router = useRouter()

  const [checked, setChecked] = useState(false)
  const [isGrid, setIsGrid] = useState(false) // false = list, true = grid
  useEffect(() => {
    if (!checked) {
      setIsGrid(false)
      setTwoColLayout({})
    } // grid
    else {
      setIsGrid(true)
      setTwoColLayout({
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
        width: "100%",
      })
    } // list
  }, [checked])

  const [news, setNews] = useState(savedNews || [])
  useEffect(() => {
    if (savedNews) setNews(savedNews)
  }, [savedNews])

  const popupRef = useRef(null)

  const renderNews = ({ news, error }) => {
    if (error) {
      popupRef.current.style.display = "block"
      popupRef.current.children[1].innerHTML = error
      popupRef.current.children[0].addEventListener("click", () => {
        popupRef.current.style.display = "none"
      })
    } else setNews(news)
  }

  return (
    <div>
      <ToggleSwitch checked={setChecked} />
      {savedNews ? "" : <Modern renderNews={renderNews} />}
      <div className="news card-list" style={twoColLayout}>
        {news.map((article, key) => (
          <NewsItem
            article={article}
            key={key}
            isGrid={isGrid}
            updateLike={(article) => {
              if (isPrivate) return router.push("/auth/signin")
              updateLike(article)
            }}
          />
        ))}
      </div>
      <div ref={popupRef} id="popup" style={{ display: "none" }}>
        <span>&times;</span>
        <p></p>
      </div>
    </div>
  )
}

export default NewsView
