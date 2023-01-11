import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"
import { textStyle } from "../../utils/styling"

const styles = {
  navlink: "relative group",
  underline:
    "absolute origin-left w-full border-b-2 border-tw-dark-pink group-hover:scale-x-100 bottom-0 left-0 transition-all duration-300 ease-out",
  currentPath: "scale-x-0",
  path: "scale-x-100",
  text: "text-tw-dark-pink hover:text-tw-text"
}

export default function Navbar() {
  const path = useRouter().asPath

  return (
    <div className="flex gap-x-4 md:gap-x-8 font-bol text-nav">
      <Link
        className={`${styles.navlink} ${styles.text} ${textStyle.hover}`}
        href="/"
      >
        home
        <div
          className={`${styles.underline} ${
            path === "/" ? "scale-x-100" : "scale-x-0"
          }`}
        ></div>
      </Link>
      <Link
        className={`${styles.navlink}  ${styles.text} ${textStyle.hover}`}
        href="/recipes"
      >
        recipes
        <div
          className={`${styles.underline} ${
            path === "/recipes" ? "scale-x-100" : "scale-x-0"
          }`}
        ></div>
      </Link>
    </div>
  )
}
