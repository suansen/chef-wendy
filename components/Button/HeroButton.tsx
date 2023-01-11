import Link from "next/link"
import React from "react"

type Props = { children: any }

export default function HeroButton({ children }: Props) {
  return (
    <Link
      href="/recipes"
      className="w-fit flex justify-center items-center px-8 py-4 animate-text transition-all duration-500 bg-gradient-to-r from-tw-text-pink via-tw-text to-tw-dark-pink text-white hover:from-red-500 hover:via-pink-700 hover:to-tw-dark-pink"
    >
      <div className="hidden md:block">{children}</div>
      <div className="md:hidden">Explore</div>
    </Link>
  )
}
