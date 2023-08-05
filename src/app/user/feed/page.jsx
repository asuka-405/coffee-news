"use client"

import NewsView from "@/components/newsView/newsView"
import React from "react"

/**
 * @returns {JSX.Element} Feed Page for logged in users
 * @description Feed Page for logged in users
 * @version 1.0.0
 * @example
 * import Feed from "@app/user/feed/page"
 * const Component = () => {
 * return <Feed />
 * }
 * export default Component
 * @see https://www.npmjs.com/package/next
 */

const page = () => {
  return (
    <>
      <NewsView isPrivate={false} />
    </>
  )
}

export default page
