"use client"
import NewsItem from "@component/newsItem/newsItem"
import Modern from "@component/searchBox/modern"
import updateLike from "@fire/firestore/updateLikes"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import ToggleSwitch from "../toggleSwitch/switch"
import "./newsView.css"

const NewsView = ({ isPrivate, savedNews }) => {
  // current structural css of news view
  const [structure, setStructure] = useState({})

  const router = useRouter()

  // toggle switch state
  const [checked, setChecked] = useState(false)

  // grid or list view state
  const [isGrid, setIsGrid] = useState(false)

  // for list view, set styles
  // if window width is less than 640px, set styles for mobile
  // else set styles for desktop
  let listStyles = {}
  useEffect(() => {
    listStyles =
      window.innerWidth < 640
        ? {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "1em",
            width: "90vw",
          }
        : {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            width: "100%",
          }
  }, [])

  // if toggle switch is checked, set grid view
  // else set list view
  useEffect(() => {
    if (!checked) {
      setIsGrid(false)
      setStructure({})
    } // grid
    else {
      setIsGrid(true)
      setStructure(listStyles)
    } // list
  }, [checked])

  // news state
  // if saved news, set news to saved news
  // else set news to empty array
  const [news, setNews] = useState(savedNews || [])

  // if saved news changes, update news
  useEffect(() => {
    if (savedNews) setNews(savedNews)
  }, [savedNews])

  // popup ref
  const popupRef = useRef(null)

  // render news
  const renderNews = ({ news, error }) => {
    // if error, display popup
    if (error) {
      popupRef.current.style.display = "block"
      popupRef.current.children[1].innerHTML = error
      popupRef.current.children[0].addEventListener("click", () => {
        popupRef.current.style.display = "none"
      }) // else set news
    } else setNews(news)
  }

  return (
    <div>
      <ToggleSwitch checked={setChecked} />
      {savedNews ? "" : <Modern renderNews={renderNews} />}
      <div className="news card-list" style={structure}>
        {news.map((article, key) => (
          <NewsItem
            article={article}
            key={key}
            isGrid={isGrid}
            isLiked={savedNews ? true : false}
            updateLike={(article, isLiked) => {
              if (isPrivate) return router.push("/auth/signin")
              updateLike(article, isLiked)
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
