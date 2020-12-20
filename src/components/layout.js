import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import styled from "styled-components"

import Header from "./header"
// import Sidebar from "./sidebar"
// import RecentPosts from "./recent-posts"
import "./layout.css"
// import igIcon from "../images/instagram-icon.svg"
// import twtrIcon from "../images/twitter-icon.svg"
import Hero from "./hero"
import Onama from "./o-nama"
import Usluge from "./usluge"
import Brojcanik from "./brojcanik"
import Testimonial from "./testimonial"
// import Test from "./test"
import Jedandvatri from "./jedandvatri"
import Dogovorite from "./dogovorite"
import Video from "./video"
import Footer from "./footer"
import Blueprint from "../images/blueprint.svg"
import Pravokutnik from "../images/pravokutnik.svg"
import KontaktSekcija from "./kontaktSekcija"

const Layout = ({ isOpen, children }) => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <div style={{ width: "100%", height: "auto", overflow: "hidden" }}>
      <div className={` ${isOpen ? "dark" : ""} `}></div>

      <Header />
      <Hero />
      <Onama />
      <Usluge />
      {children}

      <Brojcanik />
      <Testimonial />

      <KontaktSekcija />
      <Jedandvatri />
      <Dogovorite />
      <Video />
      <Footer />
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
