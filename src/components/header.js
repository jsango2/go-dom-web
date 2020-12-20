import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import logo from "../images/LOGO DOM.png"
import Headroom from "react-headroom"
import styled from "styled-components"

const HeaderWrap = styled.div`
  margin: 0 auto;
  max-width: 100%;
  padding: 1.85rem 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 60em) {
    display: block;
    padding: 0 0;
  }
`
const Telefon = styled.div`
  @media only screen and (max-width: 60em) {
    display: none;
  }
`

const Logo = styled.div`
  ${"" /* display: inline-block; */}
  margin-bottom: 0;
  margin-right: 15px;
  margin-left: 170px;
  width: 110px;
  @media only screen and (max-width: 60em) {
    position: relative;
    top: 15px;
    margin-left: 70px;
  }
  @media only screen and (max-width: 40em) {
    position: relative;
    top: 15px;
    margin-left: 50px;
    width: 80px;
  }
  @media only screen and (max-width: 30em) {
    position: relative;
    top: 15px;
    margin-left: 20px;
    width: 60px;
  }
`

const Header = () => {
  const [display, setDisplay] = useState("")

  return (
    <Headroom
      disableInlineStyles
      onPin={() => setDisplay("animation")}
      onUnpin={() => setDisplay("")}
      style={{
        zIndex: "9999",
      }}
    >
      <header
        className="headerShadow"
        style={{
          position: "relative",
          background: `white`,
          zIndex: "9999",
        }}
      >
        <HeaderWrap className={`header-wrap`}>
          <div className="logoHeader">
            <Link to="/">
              <Logo>
                <img src={logo} alt="logo" />
              </Logo>
            </Link>

            <div
              className="title-group"
              style={{
                display: `flex`,
                flexDirection: `column`,
                justifyContent: `center`,
                alignItems: `flex-start`,
              }}
            ></div>
          </div>

          <nav className={`primary-nav ${display}`}>
            <Telefon
              href="tel:+385 (0) 91 6318 536"
              className="LinkHeader"
              style={{ fontSize: "16px", color: "#B2B2B2", cursor: "pointer" }}
            >
              +385 (0) 91 6318 536
            </Telefon>

            <AnchorLink
              offset={100}
              to="/#projekti"
              className="LinkHeaderProjekti"
              activeClassName="active"
            >
              PROJEKTI
            </AnchorLink>

            <AnchorLink
              to="/#kontakt"
              className="LinkHeader"
              activeClassName="active"
            >
              KONTAKT
            </AnchorLink>
          </nav>
        </HeaderWrap>
      </header>
    </Headroom>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDesc: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDesc: ``,
}

export default Header
