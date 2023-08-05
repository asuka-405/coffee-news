import { fetchNews } from "@/app/newsFetcher"
import { useEffect, useRef, useState } from "react"
import "./modern.css"

const Modern = ({ renderNews }) => {
  // ref to news search box
  const newsRef = useRef(null)

  // update news
  const updateNews = async (e) => {
    e.preventDefault()
    await fetchNews(newsRef.current.value).then((res) => {
      renderNews(res)
    })
  }

  // update news on component mount
  useEffect(() => {
    ;(async () => {
      await updateNews({ preventDefault: () => {} })
    })()
  }, [])

  return (
    <div className="search-box-modern">
      <div className="modern_content modern_flex-col">
        <span>Search your favourite topics</span>
        <form className="modern_flex-row">
          <div className="InputContainer">
            <input
              ref={newsRef}
              placeholder="Is elon musk chinese...?"
              defaultValue="elon musk"
            />
          </div>
          <div className="Icon">
            <button type="submit" onClick={updateNews}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#657789"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modern
