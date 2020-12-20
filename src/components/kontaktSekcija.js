import React, { useState, useEffect } from "react"
import Banka from "../images/banka.svg"
import Pismo from "../images/psimo.svg"
import Telefon from "../images/telefon ikona.svg"
import Lokacija from "../images/location.svg"
import Indians from "../images/indian.jpg"
import styled from "styled-components"

const Wrap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 487px;
  @media only screen and (max-width: 48em) {
    flex-direction: column;
    height: auto;
  }
`
const OrangePart = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 48%;
  height: 100%;
  padding-top: 59px;
  padding-left: 16%;
  background-color: #d85f39;
  @media only screen and (max-width: 48em) {
    width: 100%;
    height: 417px;
    justify-content: flex-start;
    align-items: center;
    padding-left: 0;
  }
`
const PhotoPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  position: relative;
  z-index: 15;
  width: 52%;
  height: 100%;
  background-color: #d85f39;
  @media only screen and (max-width: 76em) {
    width: 52%;
  }
  @media only screen and (max-width: 48em) {
    display: none;
  }
`
const PhotoAbsoluteParallax = styled.div`
  position: absolute;
  z-index: 15;
  width: 100%;
  height: 105%;
  background-color: black;
  top: -170px;
  @media only screen and (max-width: 76em) {
  }
  @media only screen and (max-width: 48em) {
  }
`
const PhotoWrapMobile = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  z-index: 15;
  width: 100vw;
  height: 417px;
  overflow: hidden;
  display: none;

  @media only screen and (max-width: 48em) {
    display: flex;
  }
`
const Naslov = styled.div`
  font-size: 38px;
  font-weight: 700;
  color: white;
  margin: 0 0 61px 0;

  @media only screen and (max-width: 48em) {
    margin-top: 5px;
  }
`
const KontaktText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: white;
  width: 230px;
  @media only screen and (max-width: 48em) {
    margin-top: 5px;
    text-align: center;
  }
`
const MiniWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 38px;
  font-weight: 700;
  color: white;
  margin: 0 0 31px 0;

  @media only screen and (max-width: 48em) {
    margin: 0 0 10px 0;

    img {
      display: none;
    }
  }
`
const MiniWrapBanka = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 38px;
  font-weight: 700;
  color: white;
  margin: 20px 0 31px 0;

  @media only screen and (max-width: 48em) {
    img {
      display: none;
    }
  }
`
const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  text-align: center;
  background-color: transparent;
  z-index: 10;
  margin-left: 130px;
  border: 1px solid white;
  width: 50%;
  height: 103px;
  color: white;
  font-weight: 700;
  font-size: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 76em) {
    margin: 40px auto 0 auto;
  }
  @media only screen and (max-width: 48em) {
    margin: 0 auto;
  }
`
const KontaktSekcija = () => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <Wrap>
      <OrangePart>
        <Naslov id="kontakt">/ KONTAKT</Naslov>
        <MiniWrap>
          <img
            src={Telefon}
            alt="logo"
            style={{
              marginRight: "21px",
            }}
          />
          <KontaktText style={{ marginTop: "0" }}>
            +385 (0) 91 6318 536
          </KontaktText>
        </MiniWrap>
        <MiniWrap>
          <img
            src={Pismo}
            alt="logo"
            style={{
              marginRight: "21px",
              position: "relative",
              top: "3px",
            }}
          />
          <KontaktText style={{ marginTop: "0" }}>info@go-dom.hr</KontaktText>
        </MiniWrap>
        <MiniWrap>
          <img
            src={Lokacija}
            alt="logo"
            style={{
              marginRight: "21px",
              position: "relative",
              top: "5px",
            }}
          />
          <KontaktText style={{ marginTop: "0" }}>
            Slavonska 1, Mrljane, 23364 Otok Pašman
          </KontaktText>
        </MiniWrap>
        <MiniWrapBanka>
          <img
            src={Banka}
            alt="logo"
            style={{
              marginRight: "21px",
              position: "relative",
              top: "17px",
            }}
          />
          <KontaktText style={{ marginTop: "0" }}>
            OIB: 10517562883 <br />
            IBAN: HR7424070001100605535 (OTP BANKA)
          </KontaktText>
        </MiniWrapBanka>
      </OrangePart>
      <PhotoPart>
        <PhotoAbsoluteParallax
          style={{ transform: `translateY(${offsetY * 0.04}px)` }}
        ></PhotoAbsoluteParallax>
      </PhotoPart>
      <PhotoWrapMobile>
        <img
          src={Indians}
          style={{ objectFit: "contain", filter: "grayscale(100%)" }}
          height="120%"
          alt="logo"
        />
        <Button>POŠALJITE NAM UPIT I DOGOVORITE SASTANAK</Button>
      </PhotoWrapMobile>
    </Wrap>
  )
}

export default KontaktSekcija
