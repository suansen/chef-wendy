import { GetStaticProps } from "next"
import { groq } from "next-sanity"
import FeaturedRecipes from "../components/Home/FeaturedRecipes"
import HomeHeroSection from "../components/Home/HomeHeroSection"
import { sanityClient } from "../sanity"
import { HomePage, Recipe } from "../typings"

type Props = { homeData: HomePage; recipes: Recipe[] }

export default function Home({ homeData, recipes }: Props) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full">
        <HomeHeroSection hero={homeData.hero} />
      </section>
      {/* Featured Recipes */}
      <section className="flex justify-center">
        <FeaturedRecipes recipes={recipes} />
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const homeQuery = groq`
  *[_type == "pageHome"][0]
`

  const featuredRecipesQuery = groq`
  *[_type == "recipe" && tag == "featured"]{
  category -> {title},
  _type,
    name,
    tag,
    category -> {title},
    mainImage,
    slug
}
`

  const homeData: HomePage = await sanityClient.fetch(homeQuery)
  const recipes: Recipe[] = await sanityClient.fetch(featuredRecipesQuery)

  return {
    props: {
      homeData,
      recipes
    }
    // revalidate every 1 hour
    // revalidate: 3600
  }
}
