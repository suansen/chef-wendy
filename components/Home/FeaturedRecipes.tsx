import React from "react"
import { Recipe } from "../../typings"
import FeaturedRecipeCard from "../Card/FeaturedRecipeCard"

type Props = { recipes: Recipe[] }

export default function FeaturedRecipes({ recipes }: Props) {
  return (
    <div className="px-4 md:px-0 w-full py-16 max-w-7x space-y-8">
      <div className="flex justify-center">
        <h2
          className={`w-fit text-h4 md:text-h3 text-center font-bold animate-text transition-all duration-500 bg-gradient-to-r from-tw-text-pink via-tw-text to-tw-dark-pink bg-clip-text text-transparent`}
        >
          Featured Recipes
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {recipes.map((recipe, i) => (
          <FeaturedRecipeCard key={i} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}
