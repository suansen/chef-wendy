import Link from "next/link"
import React from "react"
import Logo from "./Logo"
import Navbar from "./Navbar"
import { textStyle } from "../../utils/styling"

export default function Header() {
  return (
    <div className="fixed top-0 h-16 flex items-center justify-center w-full bg-white/10 backdrop-blur-md z-40 border-b border-tw-dark-pink">
      <div className="max-w-7xl w-full flex items-center justify-between px-8 2xl:px-0 font-bold">
        <Link className={`${textStyle.hover}`} href={"/"}>
          <Logo />
        </Link>
        <nav>
          <Navbar />
        </nav>
        <div />
      </div>
    </div>
  )
}
