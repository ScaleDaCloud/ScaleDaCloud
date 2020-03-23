import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Start from "../components/start"
import Services from "../components/services"
import About from "../components/about"
import ShowCase from "../components/showcase"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <>
      <SEO title="Hi there!" />
      <Start></Start>
      <About></About>
      <Services></Services>
      <ShowCase></ShowCase>
      <Contact></Contact>
    </>
  </Layout>
)

export default IndexPage
