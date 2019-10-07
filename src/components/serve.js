import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Consulting from "../images/consulting.png"
import Education from "../images/education.png"
import Software from "../images/software1.png"

const Flex = styled.div`
   {
    width: 100%;
    margin: 15px auto;
    h1 {
      text-align: center;
    }

    .btn {
      background: #bb1d13;
      display: block;
      border: none;
      width: 200px;
      height: 50px;
      color: #fff;
      font-weight: bold;
      border-radius: 10px;
      text-align: center;
      line-height: 45px;
      margin: 25px auto;
      box-shadow: 1px 5px 13px #bb1d13

      :hover {
        transition: 0.5s;
        opacity: 0.9;
        box-shadow: 1px 6px 18px #bb1d13;
      }
    }
  }
`
const Unline = styled.div`
   {
    width: 10%;
    text-align: center;
    margin: 7px auto 0 auto;
    border-top: 7px solid #bb1d13;
  }
`

const List = styled.ul`
   {
    display: flex;
    margin-top: 60px;
    justify-content: space-around;
    list-style-type: none;

    @media (max-width: 762px) {
      flex-direction: column;
      margin: 20px auto;
    }
  }
`

const Item = styled.li`
   {
    text-align: center;
    width: 30%;

    img {
      width: 50%;
      height: auto;
    }

    .software {
      width: 25%;
      height: auto;
    }

    @media (max-width: 762px) {
      width: 60%;
      margin: 20px 15%;
    }
  }
`

class Serve extends Component {
  render() {
    return (
      <Flex>
        <h1>Nous développons votre performance de demain</h1>
        <Unline />
        <List>
          <Item>
            <img src={Software} alt="Développement" className="software" />
            <h3>Développement</h3>
            <p>
              Progiciel web adapté à vos contraintes. EDI , Automatisation de
              tâches, API, synchronisation avec logiciel externe …
            </p>
          </Item>
          <Item>
            <img src={Consulting} alt="Consulting" />
            <h3>Consulting</h3>
            <p>
              Audit, analyse de l’existant et conseil pour simplifier et
              optimiser votre informatiques
            </p>
          </Item>
          <Item>
            <img src={Education} alt="Formation" />
            <h3>Formation</h3>
            <p>Formation et sensibilisation spécifique de vos équipes</p>
          </Item>
        </List>
        <Link to="/" className="btn">
          En savoir plus
        </Link>
      </Flex>
    )
  }
}

export default Serve
