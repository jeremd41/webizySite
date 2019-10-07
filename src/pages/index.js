import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Iback from "../images/laptop3.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Serve from "../components/serve"

const Parallax = styled.div`
   {
    background-image: url(${Iback});
    width: 100%;
    height: 100%;
    min-height: 700px;
    display flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    top: 0;
    left: 0;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 60px;

    .btn {
      background: #bb1d13;
      display: inline-block;
      border: none;
      width: 200px;
      height: 50px;
      color: #fff;
      font-weight: bold;
      border-radius: 10px;
      text-align: center;
      line-height: 45px;
      margin: 50px auto;
      box-shadow: 1px 5px 13px #bb1d13

      :hover {
        transition: 0.5s;
        opacity: 0.9;
        box-shadow: 1px 6px 18px #bb1d13;
      }
    }
    
    

    @media (max-width: 762px) {
      min-height: 400px;
    }
  }
`
const Text = styled.span`
   {
    display: inline-block;
    width: 50%;
    height: 90%;
    font-size: 45px;
    text-align: center;
    text-transform: uppercase;
    margin: 4% 25%;
    color: black;
    font-weight: 1000;

    @media screen and (max-width: 762px) {
      width: 95%;
      margin: 25% 3%;
    }
  }
`

class Index extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Parallax>
          <Text>Au </Text>
          <p>
            {" "}
            Spécialites en développement de progiciel logistique et transport{" "}
          </p>
          <Link to="/" className="btn">
            Nos services
          </Link>
        </Parallax>
        <Serve />
      </Layout>
    )
  }
}

export default Index
