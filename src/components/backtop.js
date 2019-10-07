import React, { Component } from "react"
import styled from "styled-components"

const Parallax = styled.div`{
  background: url("https://www.supplychaindigital.com/sites/default/files/styles/slider_detail/public/bizclik-drupal-prod/topic/image/GettyImages-597938858_0.jpg?itok=E7dPDEPr") 
  min-height: 600px;
  position:relative;
  opacity: 0.7;
  background-position:center;
  background-size:cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  }`

class Backtop extends Component {
  render() {
    return (
      <div>
        <Parallax />
      </div>
    )
  }
}

export default Backtop
