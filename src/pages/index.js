import React, { useState, useEffect, useRef } from "react"
import Radnici from "../images/radniciSQ.jpg"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"
import { AiOutlineClose } from "react-icons/ai"
import Layout from "../components/layout"
import { IoIosArrowDropdown, IoIosArrowDropright } from "react-icons/io"
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Logo from "../images/LogoVelikiBijeli.svg"

// import ProjektiHome from "../components/projekti"
// import Projekti from "./projekti"
import SEO from "../components/seo"
import { useHasBeenVisible } from "./../components/useVisibility"

const Wrap = styled.div`
  position: relative;
  height: auto;

  @media only screen and (min-width: 48em) {
    overflow: hidden;
  }
`

const Podnaslov = styled.div`
  width: 551px;
  text-align: center;
  margin: 0 auto;
  font-weight: 300;
  font-size: 22px;
  line-height: 28.5px;
  color: #393939;
  @media only screen and (max-width: 48em) {
    width: 80%;
  }
`
const MobilneKategorijeWrapPop = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  z-index: 99999;
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: white;
  opacity: 1;
  text-align: center;
  margin: 0 auto;
  line-height: 28.5px;
  color: #393939;
  ${"" /* box-shadow: 0px 0px 15px -7px rgba(0, 0, 0, 0.19); */}
  @media only screen and (max-width: 42em) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 100px 0 60px 20px;
    color: #393939;

    ${"" /* border: 1px solid #000;
    outline: 2px dashed #fff; */}
    ${"" /* outline-offset: -15px; */}
  }
`
// const Logo = styled.div`
//   position: absolute;
//   top: 60px;
//   margin-bottom: 0;
//   margin-right: 15px;
//   margin-left: 20px;
// `
const Linkovi = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 31px auto 25px auto;
  flex-wrap: wrap;
  position: relative;
  width: 1000px;
  height: auto;
  @media only screen and (max-width: 76em) {
    width: 95%;
  }
  @media only screen and (max-width: 48em) {
    display: none;
  }
`
const Icon = styled(IoIosArrowDropright)`
  position: relative;
  transition: all 0.3s linear;
`

const Links = styled.div`
  cursor: pointer;
  position: relative;
  margin: 5px 19px;
  color: #c4c4c4;
  font-weight: 300;
  font-size: 18px;
  -webkit-transition: color 1s;
  -moz-transition: color 1s;
  -ms-transition: color 1s;
  -o-transition: color 1s;
  transition: color 1s;

  &:hover {
    color: #71a8bf;
    font-weight: 800;
    font-size: 17.3px;
  }
  &:visited {
    color: #71a8bf;
    font-weight: 800;
    font-size: 17.3px;
  }
  @media only screen and (max-width: 48em) {
    margin: 15px 19px;
  }
`
const LinksMob = styled.div`
  display: flex;

  cursor: pointer;
  position: relative;
  margin: 5px 19px 25px 19px;
  color: #71a8bf !important;
  font-weight: 300;
  font-size: 18px;
  -webkit-transition: color 1s;
  -moz-transition: color 1s;
  -ms-transition: color 1s;
  -o-transition: color 1s;
  transition: color 1s;
  z-index: 99999;

  &:hover {
    color: #71a8bf;
    font-weight: 800;
    font-size: 17.3px;
  }
  &:visited {
    color: #71a8bf;
    font-weight: 800;
    font-size: 17.3px;
  }
  @media only screen and (max-width: 48em) {
    margin: 20px 19px;
  }
`

const CmsSinglePost = styled.div`
  display: flex;
  flex-direction: column;
  ${"" /* box-sizing: border-box; */}
  margin: 5px 3px 0 3px;
  position: relative;
  z-index: 8;
  width: 266px;
  min-width: 266px;
  background-color: rgb(178, 178, 178);
  &:nth-child(odd) {
    background-color: rgb(113, 168, 191);
  }
  height: 470px;
  a {
    text-decoration: none;
  }
  transition: all 0.4s ease-in-out;
  &:nth-child(odd):hover {
    background-color: #5d99b2;
  }
  :hover {
    ${"" /* transform: scale(1.01); */}
    -webkit-box-shadow: 0px 0px 15px -8px #000000;
    box-shadow: 0px 0px 15px -8px #000000;
    background-color: #a0a0a0;
  }
  -webkit-animation: fade-in 1s ease-out both;
  animation: fade-in 1s ease-out both;
  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  &:hover .fotka {
    transform: scale(1.03);
  }
  @media only screen and (max-width: 580px) {
    flex-direction: row;
    width: 100vw;
    min-width: 280px;
    height: 235px;
  }
  @media only screen and (max-width: 410px) {
    flex-direction: column;
    width: 92vw;
    min-width: 280px;
    height: 470px;
  }
  &:hover .ikona {
    transform: rotate(90deg);
  }
`
const GornjiDio = styled.div`
  text-decoration: none;

  position: relative;
  z-index: 20;
  padding: 27px 27px 0 27px;
  width: 100%;
  height: 235px;
  @media only screen and (max-width: 440px) {
    flex-direction: row;
    width: 100%;
    min-width: 200px;
    height: 235px;
    padding: 20px 17px 15px 17px;
  }
`
const DonjiDio = styled.div`
  position: relative;
  width: 100%;
  height: 235px;
  overflow: hidden;
  @media only screen and (max-width: 410) {
    flex-direction: row;
    width: 100%;
    height: 235px;
  }
`
const WrapProjekti = styled.div`
  ${"" /* margin: 0 auto; */}
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 95%;
  min-height: 480px;
  font-size: 0;
  margin: 0 auto;
  @media only screen and (max-width: 410) {
    flex-direction: row;
    width: 100%;
    height: 235px;
  }
`
const Button = styled.div`
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: transparent;
  z-index: 10;
  margin-left: 130px;
  border: 1px solid #393939;
  width: 197px;
  height: 37px;
  color: #393939;
  font-weight: 300;
  font-size: 16px;
  @media only screen and (max-width: 76em) {
    margin: 40px auto 0 auto;
  }
  @media only screen and (max-width: 48em) {
    margin: 40px auto 40px auto;
    display: flex;
  }
`
const MobPopHeader = styled.div`
position: absolute;
padding-top: 15px;
padding-left:49px;
top:0;
left:0;
z:99999;
height:67px;
width: 100%;
background-color: #71A8BF;
  }
`

const LogoMob = styled.div`
  width: 78px;
  @media only screen and (max-width: 440px) {
    width: 78px;
  }
`

const IndexPage = ({ data }) => {
  // ------visibility lazy loading------------

  const halfPage = useRef()
  const preload = useRef()
  const hasScrolled = useHasBeenVisible(halfPage)
  const isScrolling = useHasBeenVisible(preload)

  // --------------------------------------

  const [kategorija, setKategorija] = useState("SVI")
  const [current, setCurrent] = useState(null)
  const [isOpen, setisOpen] = useState(false)
  const [query, setQuery] = useState(data.wpgraphql.posts.edges)

  var queryData = data.wpgraphql.posts.edges
  useEffect(() => {
    var filteredData = queryData.filter(elem =>
      elem.node.categories.edges.some(elem => elem.node.name === kategorija)
    )
    setQuery(filteredData)
    if (kategorija === "SVI") {
      setQuery(
        queryData.filter(elem =>
          elem.node.categories.edges.some(elem => elem.node.name === "FEATURED")
        )
      )
    }
  }, [kategorija])

  const handleClick = (e, id) => {
    setisOpen(false)
    setKategorija(e.target.innerText)
    current === id ? setCurrent(null) : setCurrent(id)
  }

  return (
    <Layout isOpen={isOpen}>
      <SEO title="Home" />

      {/* <ProjektiHome></ProjektiHome> */}
      <Wrap>
        <div
          style={{
            position: "relative",
            margin: "120px auto 0 auto",
            zIndex: "2",
            width: "33.5px",
            height: "3px",
            backgroundColor: "#71A8BF",
          }}
        ></div>
        <div
          id="projekti"
          style={{
            fontWeight: "bold",
            fontSize: "35px",
            color: "#71A8BF",
            marginTop: "25px",
            marginBottom: "31px",
            textAlign: "center",
          }}
        >
          PROJEKTI
        </div>
        <Podnaslov>
          Raznovrsnost naše ponude prikazana je kroz uspješne primjere odrađenih
          projekata
        </Podnaslov>
        <Button onClick={() => setisOpen(true)}>ODABERI KATEGORIJU</Button>
        <MobilneKategorijeWrapPop
          className={`sidebar ${isOpen ? "show-sidebar" : ""} `}
        >
          <div
            style={{
              zIndex: "0 !important",
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundImage: `url(${Radnici})`,
              backgroundPosition: "center",
              backgroundSize: "cover ",
              opacity: "0.07",
            }}
          ></div>
          <MobPopHeader>
            <LogoMob>
              <img src={Logo} alt="LogoDom" width="100%" />
            </LogoMob>
            <AiOutlineClose
              onClick={() => setisOpen(false)}
              style={{
                cursor: "pointer",
                position: "absolute",
                fontSize: "24px",
                color: "white",
                top: "21px",
                right: "18px",
                opacity: "0.7",
                zIndex: "99999",
              }}
            />
          </MobPopHeader>

          <LinksMob
            className={`sidebarLink ${isOpen ? "show-Link" : ""} `}
            onClick={e => handleClick(e, 0)}
          >
            <Icon
              style={{
                color: "#D85F39",
                fontSize: "24px",
                top: "1.3px",
                marginRight: "15px",
              }}
            />
            SVI
          </LinksMob>

          <LinksMob
            style={{ textAlign: "left" }}
            className={`sidebarLink ${isOpen ? "show-Link" : ""} `}
            onClick={e => handleClick(e, 1)}
          >
            {" "}
            <Icon
              style={{
                color: "#D85F39",
                fontSize: "24px",
                top: "1.3px",
                marginRight: "15px",
                flexShrink: "0",
              }}
            />
            KLJUČ U RUKE
          </LinksMob>

          <LinksMob
            style={{ textAlign: "left" }}
            className={`sidebarLink ${isOpen ? "show-Link" : ""} `}
            onClick={e => handleClick(e, 2)}
          >
            {" "}
            <Icon
              style={{
                color: "#D85F39",
                fontSize: "24px",
                top: "1.3px",
                marginRight: "15px",
                flexShrink: "0",
              }}
            />
            REKONSTRUKCIJA
          </LinksMob>
          <LinksMob
            style={{ textAlign: "left" }}
            className={`sidebarLink ${isOpen ? "show-Link" : ""} `}
            onClick={e => handleClick(e, 3)}
          >
            {" "}
            <Icon
              style={{
                color: "#D85F39",
                fontSize: "24px",
                top: "1.3px",
                marginRight: "15px",
                flexShrink: "0",
              }}
            />
            TRADICIONALNA GRADNJA I KAMEN
          </LinksMob>
          <LinksMob
            style={{ textAlign: "left" }}
            className={`sidebarLink ${isOpen ? "show-Link" : ""} `}
            onClick={e => handleClick(e, 4)}
          >
            {" "}
            <Icon
              style={{
                color: "#D85F39",
                fontSize: "24px",
                top: "1.3px",
                marginRight: "15px",
                flexShrink: "0",
              }}
            />
            FASADE I IZOLACIJE
          </LinksMob>
          <LinksMob
            style={{ textAlign: "left" }}
            className={`sidebarLink ${isOpen ? "show-Link" : ""} `}
            onClick={e => handleClick(e, 5)}
          >
            {" "}
            <Icon
              style={{
                color: "#D85F39",
                fontSize: "24px",
                top: "1.3px",
                marginRight: "15px",
                flexShrink: "0",
              }}
            />
            UREĐENJE INTERIJERA
          </LinksMob>
          <LinksMob
            style={{ textAlign: "left" }}
            className={`sidebarLink ${isOpen ? "show-Link" : ""} `}
            onClick={e => handleClick(e, 6)}
          >
            {" "}
            <Icon
              style={{
                color: "#D85F39",
                fontSize: "24px",
                top: "1.3px",
                marginRight: "15px",
                flexShrink: "0",
              }}
            />
            BAZENSKI SUSTAVI
          </LinksMob>
        </MobilneKategorijeWrapPop>

        <Linkovi>
          <Links
            className={current === 0 ? "blueLink" : ""}
            onClick={e => handleClick(e, 0)}
          >
            SVI
          </Links>

          <Links
            className={current === 1 ? "blueLink" : ""}
            onClick={e => handleClick(e, 1)}
          >
            KLJUČ U RUKE
          </Links>

          <Links
            className={current === 2 ? "blueLink" : ""}
            onClick={e => handleClick(e, 2)}
          >
            REKONSTRUKCIJA
          </Links>
          <Links
            className={current === 3 ? "blueLink" : ""}
            onClick={e => handleClick(e, 3)}
          >
            TRADICIONALNA GRADNJA I KAMEN
          </Links>
          <Links
            className={current === 4 ? "blueLink" : ""}
            onClick={e => handleClick(e, 4)}
          >
            FASADE I IZOLACIJE
          </Links>
          <Links
            className={current === 5 ? "blueLink" : ""}
            onClick={e => handleClick(e, 5)}
          >
            UREĐENJE INTERIJERA
          </Links>
          <Links
            className={current === 6 ? "blueLink" : ""}
            onClick={e => handleClick(e, 6)}
          >
            BAZENSKI SUSTAVI
          </Links>
        </Linkovi>
        <div
          style={{
            margin: "0 auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {hasScrolled || isScrolling ? (
            <WrapProjekti>
              {query.slice(0, 12).map(post => (
                <CmsSinglePost key={post.node.id}>
                  {" "}
                  <GornjiDio className="gornji">
                    {" "}
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/objekt/${post.node.slug}`}
                    >
                      <div
                        style={{
                          fontWeight: "500",
                          fontSize: "11px",
                          lineHeight: "13px",
                          marginBottom: "12px",
                          fontFamily: "Montserrat Alternates",
                          color: "white",
                          opacity: "0.5",
                        }}
                      >
                        {post.node.categories.edges[0].node.name ===
                        "FEATURED" ? (
                          <div>{post.node.categories.edges[1].node.name}</div>
                        ) : (
                          post.node.categories.edges[0].node.name
                        )}
                        {/* {post.node.categories.edges[0].node.name} */}
                      </div>
                      <div
                        style={{
                          maxWidth: "213px",
                          width: "160px",
                          fontWeight: "700",
                          fontSize: "16px",
                          lineHeight: "19.5px",
                          color: "#FFF",
                          marginBottom: "12px",
                          textTransform: "uppercase",
                        }}
                      >
                        {post.node.title}
                      </div>
                      <div
                        style={{
                          width: "100%",
                          fontWeight: "400",
                          fontStyle: "normal",
                          fontSize: "14px",
                          lineHeight: "19px",
                          color: "#FFF",
                          marginBottom: "15px",
                        }}
                      >
                        {post.node.dodatniOpis.kratkiOpisFront}
                      </div>{" "}
                    </Link>
                  </GornjiDio>
                  <DonjiDio>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/objekt/${post.node.slug}`}
                    >
                      <Icon
                        className="ikona"
                        style={{
                          position: "absolute",
                          zIndex: "21",
                          color: "white",
                          fontSize: "24px",
                          top: "10px",
                          right: "10px",
                        }}
                      />
                      <div
                        // src={post.node.dodatniOpis.frontForografija.sourceUrl}
                        alt="logo"
                        className="fotka"
                        style={{
                          position: "relative",
                          transition: "all .5s ease-in-out",
                          height: "100%",
                          width: "100%",
                          backgroundSize: "cover",
                          backgroundImage: `url(${post.node.dodatniOpis.frontForografija.sourceUrl})`,
                          backgroundPosition: "center",
                          // transform: "scale(1.1)",
                        }}
                      />
                    </Link>
                  </DonjiDio>
                </CmsSinglePost>
              ))}
            </WrapProjekti>
          ) : (
            <div
              style={{
                minHeight: "450px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              ref={halfPage}
            >
              <Loader type="Rings" color="#71A8BF" height={100} width={100} />
            </div>
          )}
        </div>
      </Wrap>
    </Layout>
  )
}

export const query = graphql`
  {
    wpgraphql {
      posts {
        edges {
          node {
            id
            title
            dodatniOpis {
              kratkiOpisFront
              frontForografija {
                sourceUrl(size: MEDIUM_LARGE)
              }
            }
            categories {
              edges {
                node {
                  name
                }
              }
            }
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
