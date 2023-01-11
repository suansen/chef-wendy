import { GetStaticProps } from "next"
import { groq } from "next-sanity"
import React from "react"
import FeaturedRecipeCard from "../../components/Card/FeaturedRecipeCard"
import { sanityClient } from "../../sanity"
import { Recipe } from "../../typings"

type Props = { recipes: Recipe[] }

export default function Recipes({ recipes }: Props) {
  return (
    <div className="py-16">
      <h1 className="text-center py-8 text-h3 font-bold tracking-wider animate-text transition-all duration-500 bg-gradient-to-r from-red-600 via-red-500 to-tw-dark-pink bg-clip-text text-transparent">
        recipes.
      </h1>
      {/* Categories */}
      <section></section>
      {/* recipes */}
      <section className="flex justify-center">
        <div className="flex flex-wrap justify-center max-w-7xl gap-8">
          {recipes.map((recipe, i) => (
            <FeaturedRecipeCard key={i} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const recipesQuery = groq`
  *[_type == "recipe"]{
  ...,
  category -> {title},
  chef ->,
  'ingredients': ingredients[]{
    ...,
    ingredient->
  }
}
`
  const recipes: Recipe[] = await sanityClient.fetch(recipesQuery)

  return {
    props: {
      recipes
    }
    // revalidate every 1 hour
    // revalidate: 3600
  }
}
