import React from "react"
import { Link } from "gatsby"
import "../styles/styles.css"
import Header from "./header"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <div>
        <h1>
          <Header />
          <Link>{title}</Link>
        </h1>
        <div>{children}</div>
      </div>
    )
  }
}

export default Layout
