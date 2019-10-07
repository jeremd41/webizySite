import React, { Component } from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"

const Wrapper = styled.div`
   {
    background: #3f3b3a;
    height: 376px;
    width: 100%;
    padding: 10px;
    border-top: 7px solid #111;

    footer {
      display: flex;
      justify-content: space-around;
      margin: 15px;
    }
  }
`
const Plan = styled.section`
   {
    color: #fff;

    h5 {
      text-align: center;
      padding: 3px;
      border-bottom: 3px solid #bb1d13;
      font-size: 16px;
    }

    ul {
      list-style-type: none;
    }
    li {
      width: 100%;
      padding: 10px;
    }
    a:hover {
      color: #bb1d13;
    }
  }
`
const Post = styled.section`
   {
    color: #fff;

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
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/">Conseil</Link>
              </li>
              <li>
                <Link to="/">A propos</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </Plan>
          <Post>
            <h5>Derniers posts</h5>
          </Post>
          <Section>
            <h5>Reseaux</h5>
          </Section>
        </footer>
      </Wrapper>
    )
  }
}

export default Footer

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
