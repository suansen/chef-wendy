import React from "react"
import { BlockContent } from "../../typings"

type Props = { instructions: BlockContent[] }

export default function Instructions({ instructions }: Props) {
  console.log(
    "🚀 ~ file: Instructions.tsx:7 ~ Instructions ~ instructions",
    instructions
  )
  return (
    <div className="px-8">
      <h2 className="text-sh1 font-bold uppercase pb-4 text-tw-text text-p md:text-h4">
        Instructions
      </h2>
      <div className="space-y-4">
        {/* <PortableText value={instructions} components={components} /> */}
        {instructions.map((instruction, i) => (
          <div className=" min-h-[4rem] flex gap-x-4" key={i}>
            <div className="text-p md:text-h4 font-bold text-tw-text-pink">
              {instruction?.listItem === "number" ? i + 1 : "- "}
            </div>{" "}
            <div className="pt-4 text-sm md:text-base">{` ${instruction?.children[0]?.text}`}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
