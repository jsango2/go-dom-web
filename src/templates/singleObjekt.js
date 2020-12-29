import React, { useRef } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Header from "../components/header"
import HeroPage from "../components/HeroPage"
import PostJenDvaTri from "../components/postjendvatri"
import PhotoGrid from "../components/postPhotosGrid"
import Footer from "../components/footer"
import { Link } from "gatsby"
import { IoIosArrowDropright } from "react-icons/io"
import { useHasBeenVisible } from "./../components/useVisibility"
import Loader from "react-loader-spinner"

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`
const Icon = styled(IoIosArrowDropright)`
  transition: all 0.3s linear;
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
  &:hover .ikona {
    transform: rotate(90deg);
  }
  @media only screen and (max-width: 580px) {
    flex-direction: row;
    width: 100vw;
    min-width: 280px;
    height: 235px;
  }
  @media only screen and (max-width: 410px) {
    flex-direction: column;
    width: 99vw;
    min-width: 280px;
    height: 470px;
  }
`
const GornjiDio = styled.div`
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
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 235px;
  overflow: hidden;
  @media only screen and (max-width: 48em) {
    flex-direction: row;
    width: 100%;
    height: 235px;
  }
`
const Objekt = ({ data }) => {
  // ------visibility lazy loading------------

  const halfPage = useRef()
  const preload = useRef()
  const hasScrolled = useHasBeenVisible(halfPage)
  const isScrolling = useHasBeenVisible(preload)

  // --------------------------------------

  return (
    <>
      <Wrap>
        <Header />
        <div style={{ position: "relative" }}>
          <HeroPage
            lokacija={data.wpgraphql.post.dodatniOpis.lokacijaObjekta}
            imeProjekta={data.wpgraphql.post.title}
            kratkiTekst={data.wpgraphql.post.dodatniOpis.kratkiOpisFront}
            photoFull={
              data.wpgraphql.post.dodatniOpis.frontForografija.sourceUrl
            }
          />
        </div>
        <PostJenDvaTri data={data.wpgraphql.post.dodatniOpis} />
        <PhotoGrid
          foto={data.wpgraphql.post.dodatniOpis}
          // foto2={data.wpgraphql.post.dodatniOpis.foto2.sourceUrl}
          // foto3={data.wpgraphql.post.dodatniOpis.foto3.sourceUrl}
          // foto4={data.wpgraphql.post.dodatniOpis.foto4.sourceUrl}
          // foto5={data.wpgraphql.post.dodatniOpis.foto5.sourceUrl}
          // foto6={data.wpgraphql.post.dodatniOpis.foto6.sourceUrl}
        />
        <div
          style={{
            fontWeight: "300",
            fontSize: "28px",
            lineHeight: "34px",
            textAlign: "center",
            marginBottom: "30px",
            marginTop: "90px",
          }}
        >
          Pogledajte i ostale projekte
        </div>

        <div
          style={{
            margin: "0 auto 250px auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "95%",
            flexWrap: "wrap",
            minHeight: "480px",
          }}
        >
          {hasScrolled || isScrolling ? (
            <>
              {data.wpgraphql.posts.edges.slice(0, 6).map(post => (
                <CmsSinglePost key={post.node.id}>
                  <GornjiDio className="gornji">
                    <Link to={`/objekt/${post.node.slug}`}>
                      <div
                        style={{
                          fontWeight: "500",
                          fontSize: "11px",
                          lineHeight: "13px",
                          marginBottom: "13px",
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
                      </div>
                      <div
                        style={{
                          maxwidth: "213px",
                          fontWeight: "700",
                          fontSize: "16px",
                          lineHeight: "19.5px",
                          color: "#FFF",
                          marginBottom: "15px",
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
                      </div>
                    </Link>
                  </GornjiDio>
                  <DonjiDio>
                    <Link to={`/objekt/${post.node.slug}`}>
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
                    </Link>
                  </DonjiDio>
                </CmsSinglePost>
              ))}{" "}
            </>
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
        <Footer />
      </Wrap>
    </>
  )
}

export const query = graphql`
  query MyQuery($slug: ID!) {
    wpgraphql {
      post(id: $slug, idType: SLUG) {
        dodatniOpis {
          kratkiOpisFront
          foto1 {
            sourceUrl(size: MEDIUM_LARGE)
          }
          foto2 {
            sourceUrl(size: MEDIUM_LARGE)
          }
          foto3 {
            sourceUrl(size: MEDIUM_LARGE)
          }
          foto4 {
            sourceUrl(size: MEDIUM_LARGE)
          }
          foto5 {
            sourceUrl(size: MEDIUM_LARGE)
          }
          foto6 {
            sourceUrl(size: MEDIUM_LARGE)
          }
          kratkiOpisObjektaUNaslovuPosta
          kratkiOpisUPostu1
          kratkiOpisUPostu2
          kratkiOpisUPostu3
          lokacijaObjekta
          frontForografija {
            sourceUrl(size: TWENTYTWENTY_FULLSCREEN)
          }
          naslovMiniPost1
          naslovMiniPost2
          naslovMiniPost3
        }
        title
      }
      posts {
        edges {
          node {
            id
            title
            dodatniOpis {
              kratkiOpisFront
              frontForografija {
                sourceUrl(size: MEDIUM)
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

export default Objekt
