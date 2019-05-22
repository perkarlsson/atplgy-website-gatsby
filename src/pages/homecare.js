import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Homecare = () => (
  <Layout>
    <SEO title="Homecare" />
    <h1>Homecare</h1>
    <p>
      Lightweight, compassionate veterinary care in the comfort of your home. 2
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Homecare
