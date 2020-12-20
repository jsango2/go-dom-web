import React from "react"
import styled from "styled-components"

import Quote from "../images/quote.svg"
import Background from "../images/image radnici.png"
import { StaticQuery, graphql } from "gatsby"
import { Carousel } from "react-responsive-carousel"
import styles from "react-responsive-carousel/lib/styles/carousel.css"

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 480px;
  @media only screen and (max-width: 48em) {
    height: 495px;
  }
`
// const VisibleContent = styled.div`
//   width: 100%;
//   height: 100%;
//   position: relative;
// `
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #71a8bfe6;
  z-index: 2;
  //
`

const BackgroundL = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
`
const AutorTestimoniala = styled.div`
  textalign: center;
  font-size: 22px;
  font-weight: 300;
  line-height: 28.49px;
  margin-top: 50px;
  color: white;
  @media only screen and (max-width: 48em) {
    margin-top: 140px;
  }
  @media only screen and (max-width: 360px) {
    font-size: 16px;
    line-height: 19.5px;
  }
`
const ZanimanjeAutora = styled.div`
       text-align: center;
                      font-size: 22px;
                      font-style: italic;
                      font-weight: 300
                      line-height: 28.49px;
                      color: white;

  @media only screen and (max-width: 360px) {
    font-size: 16px;
    line-height: 19.5px;
  }
`

const Paragraf = styled.div`
  width: 668px;
  height: 110px;
  text-align: center;
  font-size: 22px;
  font-weight: 300;
  line-height: 28.49px;
  margin: 170px auto 0 auto;
  color: white;
  @media only screen and (max-width: 48em) {
    width: 90%;
    margin-top: 130px;
  }
  @media only screen and (max-width: 360px) {
    font-size: 16px;
    line-height: 19.5px;
  }
`

const Testimonial = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          wpgraphql {
            testimonial_plural {
              edges {
                node {
                  title
                  content
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Wrap>
            <Overlay />

            <BackgroundL>
              {" "}
              <img src={Background} alt="background" />
            </BackgroundL>
            <img
              src={Quote}
              alt="logo"
              width="96"
              style={{
                position: "absolute",
                zIndex: "100",
                top: "60px",
                left: "47%",
                display: "inline-block",
                opacity: "0.6",
              }}
            />

            <Carousel
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              interval={3100}
            >
              {data.wpgraphql.testimonial_plural.edges.map(testimonial => (
                <div className="visibleContent" key={testimonial.node.title}>
                  <Paragraf
                    dangerouslySetInnerHTML={{
                      __html: testimonial.node.content,
                    }}
                  />

                  <AutorTestimoniala>
                    {testimonial.node.title}
                  </AutorTestimoniala>
                  <ZanimanjeAutora>Privatni investitor</ZanimanjeAutora>
                </div>
              ))}
            </Carousel>
          </Wrap>
        </>
      )}
    ></StaticQuery>
  )
}

export default Testimonial
