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
    <>
      {/* <div
        style={{
          background: `url(${Pravokutnik}) `,
          top: "60%",
          left: "35vw",
          position: "absolute",
          height: "1500px",
          width: "400px",
          zIndex: "0",
          opacity: "0.3",
          transform: `translateY(${offsetY * 0.1}px)`,
        }}
      >
      </div> */}
      <div className={` ${isOpen ? "dark" : ""} `}></div>
      <div
        style={{
          background: `url(${Blueprint}) `,
          top: "40%",
          left: "35vw",
          position: "absolute",
          height: "2000px",
          width: "2000px",

          // left: "30%",
          zIndex: "0",
          opacity: "0.03",
          // transform: "translate(-50%, -50%)",
          transform: `translateY(${offsetY * 0.1}px)`,
          // transform: `translateY(${offsetY * 0.2}px)`,
        }}
      >
        {" "}
        {/* <img src={Pravokutnik} alt="kvadrat" /> */}
      </div>
      <div
        style={{
          background: `url(${Pravokutnik}) `,
          top: "120%",
          left: "25vw",
          position: "absolute",
          height: "200px",
          width: "1100px",

          // left: "30%",
          zIndex: "0",
          opacity: "0.4",
          // transform: "translate(-50%, -50%)",
          transform: `translateY(${offsetY * 0.1}px)`,
          // transform: `translateY(${offsetY * 0.2}px)`,
        }}
      >
        {" "}
        {/* <img src={Pravokutnik} alt="kvadrat" /> */}
      </div>

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
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
