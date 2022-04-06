import React from "react"
import Layout from "../components/common/Layout"
import Hero from "../components/landing/Hero"
import AboutContent from "../components/about/AboutContent"
import TextContent from "../components/contact/TextContent"
import Head from "../components/common/Head"

export default function Home() {
  return (
    <Layout>
      <Head
        title="HOME"
        description="We are an open-source community initiated by EMD Labs, joining hands with enthusiastic individuals from Sri Lanka and worldwide to tackle the energy crisis locally by developing open-source and closed-loop projects."
      />
      <Hero />
      <AboutContent />
      <TextContent />
    </Layout>
  )
}
