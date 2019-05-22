import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Hospice = () => (
  <Layout>
    <SEO title="Hospice care" />
    <h1>Hospice care</h1>
    <p>Veterinary hospice care in the comfort of your home.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Hospice
