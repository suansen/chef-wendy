import "../styles/globals.css"
import { Montserrat, Karla, Noto_Serif } from "@next/font/google"
import { AppProps } from "next/app"
import Layout from "../components/Layout/Layout"
// import "@/styles/globals.css"

const montserrat = Montserrat({
  subsets: ["latin"]
})

const karla = Karla({
  subsets: ["latin"]
})

const bellafair = Noto_Serif({
  subsets: ["latin"],
  weight: "400"
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --karla-font: ${karla.style.fontFamily};
            --montserrat-font: ${montserrat.style.fontFamily};
            --bellafair-font: ${bellafair.style.fontFamily};
          }
        `}
      </style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
export default MyApp
