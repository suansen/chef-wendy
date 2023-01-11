import { GetStaticPaths } from "next"
import React, { useEffect, useState } from "react"
import Ingredients from "../../components/Recipes/Ingredients"
import Instructions from "../../components/Recipes/Instructions"
import RecipeHero from "../../components/Recipes/RecipeHero"
import { sanityClient } from "../../sanity"
import { Recipe, RecipePage as RecipePageType, Slug } from "../../typings"

type Props = { recipe: Recipe; pageRecipeData: RecipePageType }

export default function RecipePage({ pageRecipeData, recipe }: Props) {
  console.log("🚀 ~ file: [slug].tsx:12 ~ RecipePage ~ recipe", recipe)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (recipe !== undefined) setLoading(false)
  }, [recipe])

  return (
    <>
      {loading ? (
        <div className="">loading</div>
      ) : (
        <div className="pb-16">
          {/* Recipe Hero */}
          <section className="min-w-screen h-[50vh] text-tw-text">
            <RecipeHero
              recipeImage={recipe?.mainImage}
              heroImage={pageRecipeData?.image}
              title={recipe?.name}
            />
          </section>

          {/* Main */}
          <section className="grid grid-cols-1 md:grid-cols-3 pt-8 max-w-7xl place-content-center mx-auto">
            {/* Ingredients */}
            <div className=" md:col-span-1 border-r border-tw-dark-pink flex md:justify-center px-8 md:px-0">
              <Ingredients ingredients={recipe?.ingredients} />
            </div>
            {/* Instructions */}
            <div className="md:col-span-2 border-r border-tw-dark-pink flex justify-center">
              <Instructions instructions={recipe.instructions} />
            </div>
          </section>
        </div>
      )}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(
    `*[_type == "brand" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug: Slug) => ({ params: { slug } })),
    fallback: true
  }
}

export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"

  const { slug = "" } = context.params

  const recipe: Recipe = await sanityClient.fetch(
    `
    *[_type == "recipe" && slug.current == $slug][0]{
      ...,
      category -> {title},
      chef ->,
      'ingredients': ingredients[]{
        ...,
        ingredient->
      }
    }
  `,
    { slug }
  )

  const pageRecipeData: RecipePageType = await sanityClient.fetch(
    `
    *[_type == "pageRecipe"][0]
  `
  )

  return {
    props: {
      recipe,
      pageRecipeData
    }
  }
}
