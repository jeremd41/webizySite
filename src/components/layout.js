import React from "react"
import "../styles/styles.css"
import Header from "./header"
import Footer from "./footer"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <h1>
          <Header />
        </h1>
        <div>{children}</div>
        <Footer />
      </div>
    )
  }
}

export default Layout
