import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div>
          <h1>hello</h1>
        </div>
      </Layout>
    )
  }
}

export default Index
