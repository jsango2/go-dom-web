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
const WrapOut = styled.div`
  position: relative;
  width: 100%;
  height: 318px;
`
const FooterText = styled.div`
  justify-content: end;
  margin-top: 45px;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 0.06em;
  text-align: center;
  @media only screen and (max-width: 57em) {
    width: 80%;
  }
  @media only screen and (max-width: 440px) {
    margin-top: 45px;
  }
`
const LogoMob = styled.div`
  width: 227px;
  @media only screen and (max-width: 440px) {
    width: 145px;
  }
`
const Podnaslov = styled.div`
  margin-top: 22px;
  font-weight: 300;
  font-size: 20px;
  letter-spacing: 0.225em;
  text-align: center;
  @media only screen and (max-width: 440px) {
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
