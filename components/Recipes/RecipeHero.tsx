import React from "react"
import { urlFor } from "../../sanity"
import { Image as Img } from "../../typings"

type Props = { heroImage: Img; recipeImage: Img; title: string }

export default function RecipeHero({ heroImage, recipeImage, title }: Props) {
  console.log("🚀 ~ file: RecipeHero.tsx:7 ~ RecipeHero ~ heroImage", heroImage)
  return (
    <div className="w-full h-full pt-16 flex justify-center items-center relative border-b border-tw-dark-pink overflow-hidden">
      <div
        className="w-full h-full absolute top-0 left-0 bg-repeat opacity-50"
        style={{
          backgroundImage: `url(${urlFor(heroImage)
            .width(1440)
            .height(900)
            .url()})`
        }}
      ></div>
      <div className="absolute w-full h-full opacity-60 ">
        {recipeImage ? (
          <img
            loading="lazy"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-150 ease-out"
            src={urlFor(recipeImage).width(1920).height(480).url()}
            alt={`Image of ${title}`}
          />
        ) : null}
      </div>
      <div className="z-10 max-w-lg uppercase text-h4 mx-4 md:mx-0 md:text-h3 text-center tracking-wide font-bold font-serif p-8 inset-0 border-2 border-tw-text-pink bg-white/30">
        {title}
      </div>
    </div>
  )
}
