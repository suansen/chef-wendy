interface SanityBody {
  _createdAt: string
  _id: string
  _rev: string
  _updatedAt: string
}

interface Hero {
  _type: "hero"
  callToAction: string
  image: Image
  tagline: string
  title: string
}

interface Image {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
  crop: any | undefined
  hotspot: any | undefined
}

interface Category extends SanityBody {
  _type: "category"
  title
}

interface Slug {
  _type: "slug"
  current: string
}

export interface BlockContent {
  _key: string
  _type: string
  children: { marks: string[]; text: string }[]
  markDefs: string[]
  style: string
  listItem: string | undefined
}

export interface HomePage extends SanityBody {
  _type: "pageHome"
  hero: Hero
  title: string
}

export interface RecipePage extends SanityBody {
  _type: "pageRecipe"
  image: Image
}

export interface Ingredient extends SanityBody {
  _type: "ingredient"
  image: Image
  name
}

export interface IngredientComponent {
  _key: string
  ingredient: Ingredient
  unit: string | undefined
  wholeNumber: number | undefined
  fraction: string | undefined
}

export interface Chef extends SanityBody {
  _type: "chef"
  image: Image
  name: string
  bio: Block[]
}

export interface Recipe extends SanityBody {
  _type: "recipe"
  name: string
  tag: string
  category: { title: string }
  mainImage: Image
  chef: Chef
  instructions: BlockContent[]
  ingredients: IngredientComponent[]
  likes: number
  slug: Slug
}

export interface RecipeShort extends SanityBody {
  _type: "recipe"
  name: string
  tag: string
  category: { title: string }
  mainImage: Image
  slug: Slug
}
