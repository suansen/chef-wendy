import React from "react"
import { IngredientComponent } from "../../typings"

type Props = { ingredients: IngredientComponent[] }

export default function Ingredients({ ingredients }: Props) {
  return (
    <div className="pb-8 md:pb-0">
      <h2 className="text-p md:text-h4 text-tw-text font-bold uppercase pb-4">
        Ingredients
      </h2>
      <div className="space-y-2 text-sm md:text-base">
        {ingredients.map((ingredient, i) => (
          <div className="py-2 border-b border-tw-dark-pink" key={i}>
            <span className="font-bold text-tw-text-pink">
              {ingredient?.wholeNumber ? ingredient?.wholeNumber : ""}
              {ingredient.fraction ? `${ingredient.fraction}` : ""}
            </span>
            <em>{` ${ingredient?.unit ? `${ingredient?.unit} of` : ""} `} </em>
            <span>{ingredient.ingredient.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
