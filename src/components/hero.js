import React from "react"
import styled from "styled-components"
import { Carousel } from "react-responsive-carousel"
import Vert1 from "../images/vert1.png"
import Vert2 from "../images/vert2.png"
// import Vert3 from "../images/vert3.png"
import Vert4 from "../images/slika1.jpg"
import Vert7 from "../images/slika3.jpg"
import Vert5 from "../images/vert5.png"
import styles from "react-responsive-carousel/lib/styles/carousel.css"

const HeroDiv = styled.div`
  display: flex;
  align-items: center;

  ${"" /* justify-content: center; */}
  position: relative;
  width: 99.9%;
  height: 635px;
  ${"" /* background-color: pink; */}
  overflow: hidden;
  @media only screen and (max-width: 76em) {
    height: 450px;
  }
`
const SingleCarousel = styled.div`
  position: relative;
  width: 33.3%;
  @media only screen and (max-width: 48em) {
    display: none;
  }
`
const SingleCarouselMobile = styled.div`
  display: none;
  @media only screen and (max-width: 48em) {
    display: block;
    width: 100%;
  }
`
const TextHero = styled.div`
  font-weight: 700;
  color: white;
  font-size: 48px;
  line-height: 59px;
  text-align: center;
  z-index: 990;
  @media only screen and (max-width: 76em) {
    font-size: 38px;
  }
  @media only screen and (max-width: 48em) {
    font-size: 36px;
  }
`
const WrapText = styled.div`
  position: absolute;
  width: 668px;
  height: 100%;
  left: 23%;
  top: 40%;
  z-index: 990;
  @media only screen and (max-width: 76em) {
    width: 468px;
  }
  @media only screen and (max-width: 48em) {
    margin-top: 180px;
    top: 50%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -50%);
  }
`

const Post = styled.div`
  position: relative;
  height: 635px;
  margin: 0;
`
const PostMobile = styled.div`
  position: relative;
  height: 635px;
  margin: 0;
`
const TankaLinija = styled.div`
  position: absolute;
  width: 100%;
  height: 3px;
  z-index: 800;
  background-color: white;
  opacity: 1;
  bottom: 0;
  z-index: 801;
  @media only screen and (max-width: 76em) {
    display: none;
  }
`
const Hero = () => (
  <HeroDiv>
    <TankaLinija />
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: "800",
        backgroundColor: "black",
        opacity: "0.20",
      }}
    ></div>
    <WrapText>
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        showIndicators={false}
      >
        <TextHero>IZVODIMO SVE VRSTE GRAĐEVINSKIH RADOVA</TextHero>

        <TextHero>OTOCI PAŠMAN I UGLJAN NAŠ SU DOM</TextHero>

        <TextHero> OSTVARITE S NAMA SVOJE SNOVE</TextHero>
      </Carousel>
    </WrapText>
    <SingleCarouselMobile>
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6050}
        showIndicators={false}
        axis="vertical"
      >
        <PostMobile>
          <img
            src={Vert1}
            alt="vert1"
            style={{
              width: "100%",
              objectFit: "contain",
            }}
          />
        </PostMobile>
        <PostMobile>
          <img
            src={Vert2}
            alt="vert1"
            style={{
              width: "100%",
              objectFit: "contain",
            }}
          />
        </PostMobile>
        <PostMobile>
          <img
            src={Vert5}
            alt="vert1"
            style={{
              width: "100%",
              objectFit: "contain",
            }}
          />
        </PostMobile>
      </Carousel>
    </SingleCarouselMobile>
    <SingleCarousel>
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6050}
        showIndicators={false}
        axis="vertical"
      >
        <Post>
          <img
            src={Vert1}
            alt="vert1"
            style={{
              height: "635px",
            }}
          />
        </Post>
        <Post>
          <img
            src={Vert2}
            alt="vert1"
            style={{
              height: "635px",
            }}
          />
        </Post>
        <Post>
          <img
            src={Vert5}
            alt="vert1"
            style={{
              height: "635px",
            }}
          />
        </Post>
      </Carousel>
    </SingleCarousel>
    <SingleCarousel>
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        showIndicators={false}
        axis="vertical"
      >
        <Post>
          <img
            src={Vert5}
            alt="vert1"
            style={{
              height: "635px",
            }}
          />
        </Post>
        <Post>
          <img
            src={Vert4}
            alt="vert1"
            style={{
              height: "635px",
            }}
          />
        </Post>
        <Post>
          <img
            src={Vert1}
            alt="vert1"
            style={{
              height: "635px",
            }}
          />
        </Post>
      </Carousel>
    </SingleCarousel>
    <SingleCarousel>
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6150}
        showIndicators={false}
        axis="vertical"
      >
        <Post>
          <img
            src={Vert1}
            alt="vert1"
            style={{
              height: "635px",
            }}
          />
        </Post>
        <Post>
          <img
            src={Vert5}
            alt="vert1"
            style={{
              height: "635px",
            }}
          />
        </Post>
        <Post>
          <img
            src={Vert7}
            alt="vert1"
            style={{
              height: "635px",
            }}
          />
        </Post>
      </Carousel>
    </SingleCarousel>
  </HeroDiv>
)

export default Hero
