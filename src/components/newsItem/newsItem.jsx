import { useRef } from "react"
import "./newsItem.css"

const NewsItem = ({ article, isGrid, updateLike, isLiked }) => {
  // initiate styles variable for grid or list view
  let styles = {}

  // if grid view
  if (isGrid) {
    styles = {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "left",
      alignItems: "center",
      gap: "1em",
      width: "max-content",
      maxWidth: "40vw",
      padding: "1em",
    }
  }

  // ref for heart icon
  const heartRef = useRef(null)
  // if post is liked, add glow class
  if (isLiked) {
    if (!heartRef.current) return
    heartRef.current.classList.add("let-heart-glow")
  }

  return (
    <article className="card" style={styles}>
      <img
        className="card-image"
        src={article.urlToImage}
        alt={article.title}
      />
      <div>
        <div className="card-header">
          <a href="#">{article.title}</a>
          <button
            ref={heartRef}
            className="icon-button"
            onClick={() => updateLike(article, isLiked)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              display="block"
              id="Heart"
            >
              <path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
            </svg>
          </button>
        </div>
        <div className="card-footer">
          <div className="card-meta card-meta--views">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              display="block"
              id="EyeOpen"
            >
              <path d="M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19c-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5c4.182 0 7.764 4.013 9.257 5.962z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            2,465
          </div>
          <div className="card-meta card-meta--date">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              display="block"
              id="Calendar"
            >
              <rect x="2" y="4" width="20" height="18" rx="4" />
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <path d="M2 10h20" />
            </svg>
            {article.time}
          </div>
        </div>
      </div>
    </article>
  )
}

export default NewsItem
