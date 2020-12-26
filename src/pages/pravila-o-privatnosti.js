import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

const Wrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 173px;
  width: 100%;
  height: 460px;
  background-color: #71a8bf;
  color: white;
  bottom: 0;
  z-index: 30;

  clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 100%);
  @media only screen and (max-width: 520px) {
    height: 370px;
    clip-path: polygon(0 0, 100% 14%, 100% 100%, 0 100%);
    padding-top: 80px;
  }
`

const PravilaPrivatnosti = () => (
  <>
    <Header />
    <Wrap></Wrap>
    <Footer />
  </>
)
export default PravilaPrivatnosti
