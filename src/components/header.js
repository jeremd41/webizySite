import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import styled from "styled-components"

const Menu = styled.header`
  width: 100%100%;
`

class Header extends Component {
  render() {
    return <Menu />
  }
}

export default Header
