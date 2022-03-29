import React from "react"
import Layout from "../components/common/Layout"
import Hero from "../components/landing/Hero"
import AboutContent from "../components/about/AboutContent"
import TextContent from "../components/contact/TextContent"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutContent />
      <TextContent />
    </Layout>
  )
}
