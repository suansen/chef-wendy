import React from "react"
import { urlFor } from "../../sanity"
import { Hero } from "../../typings"
import HeroButton from "../Button/HeroButton"

type Props = { hero: Hero }

export default function HomeHeroSection({ hero }: Props) {
  return (
    <>
      <div
        className="h-screen md:h-[80vh] w-full py-16 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${urlFor(hero.image)
            .width(1440)
            .height(900)
            .url()})`
        }}
      >
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-2">
          <div className="flex flex-col justify-center m-16 p-8 md:p-16 border border-x-tw-dark-pink bg-tw-pink/10 backdrop-blur-lg col-span-1 md:col-span-2 xl:col-span-1">
            <div className="text-h4 md:text-h3 font-bold leading-none text-white bg-clip">
              {hero.title}
            </div>
            <div className="text-white/70 py-4 md:text-p font-secondary max-w-sm">
              {hero.tagline}
            </div>
            <div>
              <HeroButton>{hero.callToAction}</HeroButton>
            </div>
          </div>
          <div />
        </div>
      </div>
    </>
  )
}
