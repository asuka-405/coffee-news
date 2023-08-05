"use client"
import { useRouter } from "next/navigation"
import { useRef } from "react"
import "./navMenu.css"

const NavMenu = ({ links }) => {
  const router = useRouter()

  // reference to nav element
  const navRef = useRef(null)

  // toggle nav menu
  const toggleNav = () => {
    navRef.current.querySelector(".close").style.display = "inline"
    navRef.current.querySelector(".links").style.display = "flex"
  }
  const closeNav = () => {
    navRef.current.querySelector(".close").style.display = "none"
    navRef.current.querySelector(".links").style.display = "none"
  }

  return (
    <nav className="main-nav" ref={navRef}>
      <span className="logo">News 🍵</span>
      <ul className="links">
        <span className="close" onClick={closeNav}>
          &times;
        </span>
        {links.map((link, key) => (
          <li key={key}>
            <a
              onClick={(e) => {
                e.preventDefault()
                router.push(link.to)
              }}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <span className="toggle" onClick={toggleNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="#fff"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            className="toggle"
            fill="#fff"
            d="M4 18h17v-2H4v2zM4 13h17v-2H4v2zM4 6v2h17V6H4z"
          />
        </svg>
      </span>
    </nav>
  )
}

export default NavMenu
