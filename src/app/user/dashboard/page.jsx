"use client"
import { useAuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import "./dashboard.css"

/**
 * @returns {JSX.Element} Dashboard Page
 * @description Dashboard Page
 * @version 1.0.0
 * @example
 * import Dashboard from "@app/user/dashboard/page"
 * const Component = () => {
 * return <Dashboard />
 * }
 * export default Component
 * @see https://www.npmjs.com/package/next
 */

export default function dashboard() {
  // user from auth context
  const { user } = useAuthContext()
  const router = useRouter()

  return (
    <div class="user-profile-frame">
      <div class="center">
        <div class="profile">
          <div class="image">
            <div class="circle-1"></div>
            <div class="circle-2"></div>
            <img
              src="/assets/images/user.png"
              width="70"
              height="70"
              alt="Jessica Potter"
            />
          </div>

          <div class="name">{user.name || "unknown"}</div>
          <div class="job">{user.email}</div>

          <div class="actions">
            <button
              class="btn"
              onClick={(e) => {
                e.preventDefault()
                router.push("/user/feed")
              }}
            >
              Show Feed
            </button>
          </div>
        </div>

        <div class="stats">
          <div class="box">
            <span class="value"></span>
            <span class="parameter"></span>
          </div>
          <div class="box">
            <span class="value"></span>
            <span class="parameter"></span>
          </div>

          <div class="box">
            <span class="value"></span>
            <span class="parameter"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
