import React from "react"
import Header from "../Header/Header"

type Props = { children: any }

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen min-w-screen flex justify-center ">
      <Header />
      <main className="w-full ">{children}</main>
    </div>
  )
}
