import Link from "next/link"
import React from "react"
import { urlFor } from "../../sanity"
import { Recipe } from "../../typings"

type Props = { recipe: Recipe }

export default function FeaturedRecipeCard({ recipe }: Props) {
  return (
    <Link
      href={`/recipes/${recipe.slug.current}`}
      className=" w-72 h-96 bg-tw-white relative group shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-out"
    >
      <div className="absolute top-0 left-0 w-64 h-[22rem] m-4 border-2 border-tw-pink group-hover:border-red-400 z-20 transition-colors duration-150 ease-out" />
      <div className="w-full h-40 overflow-hidden">
        <img
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-150 ease-out"
          src={urlFor(recipe?.mainImage).width(288).height(160).url()}
          alt={`Image of ${recipe?.name}`}
        />
      </div>
      <div className="h-56 px-8 py-8 text-center flex flex-col justify-between text-xl  ">
        <div className="tracking-widest font-bold uppercase text-black/70">
          {recipe.name}
        </div>
        <div className="font-serif tracking-wider text-tw-dark-pink-hover text-lg">
          {recipe.category.title}
        </div>
      </div>
    </Link>
  )
}
