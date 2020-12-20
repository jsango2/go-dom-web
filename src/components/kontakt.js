import React, { useState, useEffect } from "react"
import Banka from "../images/banka.svg"
import Pismo from "../images/psimo.svg"
import Telefon from "../images/telefon ikona.svg"
import Lokacija from "../images/location.svg"
import Indians from "../images/indian.jpg"

import styled from "styled-components"

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 487px;
  background-color: #d85f39;
  padding-top: 59px;
  @media only screen and (max-width: 48em) {
    height: 417px;
  }
`
const WrapOrangeText = styled.div`
  margin-left: 208px;
  @media only screen and (max-width: 76em) {
    margin-left: 16%;
  }
  @media only screen and (max-width: 48em) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 0;
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

const TelefonWrap = styled.div`
  display: inline-block;

  position: relative;
  top: 5px;
  @media only screen and (max-width: 48em) {
    display: none;
  }
`
const AdresaWrap = styled.div`
  width: 192px;
  line-height: 19px;
  @media only screen and (max-width: 48em) {
    text-align: center;
    width: 180px;
  }
`
const AdresaWrap2 = styled.div`
  width: 192px;
  line-height: 19px;
  @media only screen and (max-width: 48em) {
    text-align: center;
    width: 240px;
  }
`
const Razmak = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: white;
  margin: 0 0 31px 0;
  @media only screen and (max-width: 48em) {
    margin-bottom: 3px;
  }
`
const Razmak2 = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: white;
  margin: 0 0 31px 0;
  @media only screen and (max-width: 48em) {
    margin-bottom: 13px;
  }
`

const PhotoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  position: absolute;
  z-index: 15;
  width: 640px;
  height: 547px;
  top: -180px;
  right: 0;
  overflow: hidden;
  @media only screen and (max-width: 76em) {
    width: 48%;
  }
  @media only screen and (max-width: 48em) {
    display: none;
  }
`
const PhotoWrapMobile = styled.div`
  align-items: center;
  justify-content: center;
  font-size: 42px;
  z-index: 15;
  width: 100%;
  height: 417px;

  overflow: hidden;
  display: none;

  @media only screen and (max-width: 48em) {
    display: flex;
  }
`

const Kontakt = () => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <>
      <Wrap>
        <WrapOrangeText>
          <Naslov id="kontakt">/ KONTAKT</Naslov>
          <Razmak>
            <TelefonWrap>
              <span>
                <img
                  src={Telefon}
                  alt="logo"
                  style={{
                    marginRight: "21px",
                    position: "relative",
                    top: "5px",
                  }}
                />
              </span>{" "}
            </TelefonWrap>
            +385 (0) 91 6318 536
          </Razmak>
          <Razmak>
            <TelefonWrap>
              <span>
                <img
                  src={Pismo}
                  alt="logo"
                  style={{
                    marginRight: "21px",
                    position: "relative",
                    top: "5px",
                  }}
                />
              </span>
            </TelefonWrap>
            info@go-dom.hr
          </Razmak>
          <Razmak2>
            <TelefonWrap>
              <span>
                <img
                  src={Lokacija}
                  alt="logo"
                  style={{
                    marginRight: "21px",
                    position: "relative",
                    top: "3px",
                  }}
                />
              </span>
            </TelefonWrap>
            <AdresaWrap>Slavonska 1, Mrljane, 23364 Otok Pašman</AdresaWrap>
          </Razmak2>
          <Razmak>
            <TelefonWrap>
              <span>
                <img
                  src={Banka}
                  alt="logo"
                  style={{
                    marginRight: "21px",
                    position: "relative",
                    top: "3px",
                  }}
                />
              </span>
            </TelefonWrap>

            <AdresaWrap2>
              OIB: 10517562883
              <br /> IBAN: HR7424070001100605535 <br />
              (OTP BANKA)
            </AdresaWrap2>
          </Razmak>
        </WrapOrangeText>

        <PhotoWrap style={{ transform: `translateY(${offsetY * 0.04}px)` }}>
          <img
            src={Indians}
            style={{ objectFit: "contain" }}
            height="100%"
            alt="logo"
          />
        </PhotoWrap>
      </Wrap>{" "}
      <PhotoWrapMobile>
        <img
          src={Indians}
          style={{ objectFit: "contain" }}
          height="width%"
          alt="logo"
        />
      </PhotoWrapMobile>
    </>
  )
}

export default Kontakt
