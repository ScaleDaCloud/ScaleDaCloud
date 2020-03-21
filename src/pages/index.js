import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Start from "../components/start"
// import About from "../components/about"
// import Services from "../components/services"
// import ShowCase from "../components/showcase"
// import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <>
      <SEO title="Hi there!" />
      <Start></Start>
    </>
  </Layout>
)

export default IndexPage
