import React, { Component } from "react"
import { Link } from "gatsby"

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/" className="logo">
          Webi<span>z</span>y
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="navicon" />
        </label>
        <ul className="menu">
          <li>
            <Link to="/">Services</Link>
          </li>
          <li>
            <Link to="/">Conseil</Link>
          </li>
          <li>
            <Link to="/">A propos</Link>
          </li>
          <li>
            <Link to="blog">Blog</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header
