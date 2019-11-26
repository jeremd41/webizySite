import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

const Wrapper = styled.section`
   {
    color: #fff;
    display: flex;

    .etiquette {
      width: 100%;
      background: #bb1d13;
      height: 200px;
      margin-right: auto;
      margin-left: auto;
      text-align: center;
      border: 3px solid #fff;
    }

    h1 {
      font-size: 15px;
      font-weight: normal;
    }

    p {
      font-size: 12px;
    }
  }
`

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Wrapper>
        {posts &&
          posts.map(({ node: post }) => (
            <Link to={post.fields.slug}>
              <div className="etiquette" key={post.id}>
                <h1>{post.frontmatter.title}</h1>
                <p>{post.frontmatter.description}</p>
              </div>
            </Link>
          ))}
      </Wrapper>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 3
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
