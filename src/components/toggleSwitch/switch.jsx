import { useEffect, useRef } from "react"
import "./switch.css"

const ToggleSwitch = ({ checked }) => {
  const checkboxRef = useRef(null)
  useEffect(() => {
    checkboxRef.current.addEventListener("change", (e) => {
      checked(e.target.checked)
    })
  }, [])

  return (
    <span>
      <div className="toggle-switch-container">
        <label className="toggle-switch">
          <input ref={checkboxRef} type="checkbox" /> <div></div>
        </label>
      </div>
    </span>
  )
}

export default ToggleSwitch
