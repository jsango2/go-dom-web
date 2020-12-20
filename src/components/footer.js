import React from "react"
import styled from "styled-components"
import Logo from "../images/LogoVelikiBijeli.svg"
import { Link } from "gatsby"

const Wrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 183px;
  width: 100%;
  height: 460px;
  background-color: #71a8bf;
  color: white;
  bottom: 0;
  z-index: 20;

  clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 100%);
  @media only screen and (max-width: 380px) {
    height: 360px;
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 100%);
    padding-top: 100px;
  }
`
const WrapOut = styled.div`
  position: relative;
  width: 100%;
  height: 318px;
`
const FooterText = styled.div`
  justify-content: end;
  margin-top: 55px;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 0.06em;
  text-align: center;
  @media only screen and (max-width: 57em) {
    width: 80%;
  }
  @media only screen and (max-width: 380px) {
    margin-top: 30px;
  }
`
const LogoMob = styled.div`
  width: 227px;
  @media only screen and (max-width: 380px) {
    width: 145px;
  }
`
const Podnaslov = styled.div`
  margin-top: 22px;
  font-weight: 300;
  font-size: 20px;
  letter-spacing: 0.225em;
  text-align: center;
  @media only screen and (max-width: 380px) {
    font-size: 13px;
    margin-top: 13px;
  }
`

const Footer = () => (
  <WrapOut>
    <Wrap>
      <div>
        <Link to="/">
          <LogoMob>
            <img src={Logo} alt="LogoDom" width="100%" />
          </LogoMob>
        </Link>
      </div>
      <Podnaslov>GRADIMO VAŠE SNOVE</Podnaslov>
      <FooterText>
        Dom G.O. | Slavonska 1, Mrljane, 23364 Otok Pašman | Copyright © 2020. |
        Web design: www.sutra.hr
      </FooterText>
    </Wrap>
  </WrapOut>
)

export default Footer
