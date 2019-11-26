import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import facebook from "../images/facebook.png"
import linkedin from "../images/linkedin.png"

import Latest from "./latest"

const Wrapper = styled.div`
   {
    background: #3f3b3a;
    height: auto;
    width: 100%;
    padding: 10px;

    footer {
      display: flex;
      justify-content: space-around;
      margin: 15px;
    }

    .copyright {
      text-align: left;
      color: #fff;
      font-size: 15px;
    }
  }
`
const Plan = styled.section`
   {
    color: #fff;
    width: 20%;

    h5 {
      text-align: center;
      padding: 3px;
      border-bottom: 3px solid #bb1d13;
      font-size: 16px;
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    li {
      width: 100%;
      padding: 10px;
      text-align: left;
    }
    a:hover {
      color: #bb1d13;
    }
  }
`
const Post = styled.section`
   {
    color: #fff;
    width: 20%;
    height: 90%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h5 {
      text-align: center;
      padding: 3px;
      border-bottom: 3px solid #bb1d13;
      font-size: 16px;
    }
  }
`
const Section = styled.section`
   {
    color: #fff;
    width: 20%;

    h5 {
      text-align: center;
      padding: 3px;
      border-bottom: 3px solid #bb1d13;
      font-size: 16px;
    }

    img {
      width: 40px;
      margin: 5px;
    }
  }
`

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <footer>
          <Plan>
            <h5>Plan du site</h5>
            <ul>
              <li>
                <Link to="/">Acceuil</Link>
              </li>
              <li>
                <Link to="presta">Services</Link>
              </li>
              <li>
                <Link to="conseil">Conseil</Link>
              </li>
              <li>
                <Link to="about">A propos</Link>
              </li>
              <li>
                <Link to="blog">Blog</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </Plan>
          <Post>
            <h5>Derniers article</h5>
            <Latest />
          </Post>
          <Section>
            <h5>Coordonées</h5>
            <p>Tel: 06 60 72 63 86</p>
            <p>Webizy-france</p>
            <p>41700 Contres</p>
            <a href="https://www.facebook.com/webizyfrance/">
              <img src={facebook} alt="logo facebook" />
            </a>
            <a href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-diard/">
              <img src={linkedin} alt="logo linkedin" />
            </a>
          </Section>
        </footer>
        <div className="copyright">
          © {new Date().getFullYear()}, Webizy All rights reserved
        </div>
      </Wrapper>
    )
  }
}

export default Footer
