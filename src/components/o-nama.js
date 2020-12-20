import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Quote from "../images/quote.svg"
import Guy from "../images/guy.jpg"

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 665px;
  @media only screen and (max-width: 76em) {
    display: flex;
  }
  @media only screen and (max-width: 48em) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`
const LukaHero = styled.div`
  position: relative;
  left: 171px;
  top: -82px;
  z-index: 950;
  width: 533px;
  height: 528px;
  background-color: #71a8bf;
  @media only screen and (max-width: 76em) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 55%;
    left: 0;
    top: 0;
  }
  @media only screen and (max-width: 48em) {
    width: 100%;
    height: auto;
    padding-bottom: 56px;
  }
`
const OnamaHero = styled.div`
  position: absolute;
  left: auto;
  top: 113px;
  left: 640px;
  bottom: 0%;
  z-index: 1;
  width: 473px;
  height: 458px;
  background-color: #eaeaea;
  @media only screen and (max-width: 76em) {
    transform: none !important;
    position: static;
    width: 45%;
    height: 528px;
  }
  @media only screen and (max-width: 48em) {
    width: 100%;
    height: auto;
    padding-bottom: 56px;
  }
`
const Pwrap = styled.div`
  font-weight: 300;
  font-size: 22px;
  line-height: 28.5px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  color: white;
  margin-top: 24px;
  margin-left: 60px;
  width: 239px;
  height: 226px;
  @media only screen and (max-width: 76em) {
    margin-left: 0px;
    width: 249px;
  }
  @media only screen and (max-width: 48em) {
    margin: 0 auto;
    width: 66%;
    height: auto;
  }
`
const LukaPikunic = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;

  position: relative;
  color: white;
  margin-top: 52px;
  margin-left: 60px;
  width: 192px;
  height: 34px;
  @media only screen and (max-width: 76em) {
    margin-left: -50px;
  }
  @media only screen and (max-width: 48em) {
    right: -25%;
  }
`
const OnamaText = styled.div`
  color: #393939;
  width: 258px;
  height: 179px;
  font-weight: 500;
  line-height: 19px;
  font-size: 14px;
  margin: 0 0 35px 130px;
  @media only screen and (min-width: 48em) (max-width: 76em) {
    margin-left: 22%;
  }
  @media only screen and (max-width: 48em) {
    margin: 0 auto;
    width: 66%;
    height: auto;
  }
`
const OnamaNaslov = styled.div`
  color: #71a8bf;
  font-weight: bold;
  font-size: 35px;
  margin: 70px auto 30px 125px;
  @media only screen and (max-width: 76em) {
    margin-left: 22%;
  }
  @media only screen and (max-width: 320px) {
    margin-left: 17%;
  }
`
const Linija = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 2;
  width: 33.5px;
  height: 3px;
  background-color: #71a8bf;
  @media only screen and (max-width: 48em) {
    display: none;
  }
`

const Img = styled.div`
  display: inline-block;
  margin-bottom: 0;
  margin-left: 159px;
  margin-top: 32px;
  @media only screen and (max-width: 76em) {
    margin-left: -150px;
  }
`

const LukaFoto = styled.div`
  position: absolute;
  top: 82px;
  right: 0;
  z-index: 2;
  margin-top: 0;
  width: 198px;
  height: 253px;
  @media only screen and (max-width: 76em) {
    display: none;
  }
`
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: transparent;
  z-index: 2;
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
  @media only screen and (max-width: 320px) {
    margin: 40px auto 0 17%;
  }
`

const Onama = () => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <Wrap>
      <LukaHero style={{}}>
        <Img>
          <img src={Quote} alt="logo" width="96" />
        </Img>

        <Pwrap>
          Izvodimo sve vrste građevinskih radova, a više samostalnih radnih
          skupina omogućuje nam da brzo odgovorimo na zahtjeve naših klijenata.
        </Pwrap>

        <LukaPikunic>
          LUKA PIKUNIĆ <br />
          <span style={{ color: "#393939" }}>INŽENJER GRAĐEVINE</span>{" "}
        </LukaPikunic>
        <LukaFoto>
          {" "}
          <img
            src={Guy}
            style={{ objectFit: "contain" }}
            width="100%"
            alt="logo"
          />
        </LukaFoto>
      </LukaHero>

      <OnamaHero style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
        <OnamaNaslov> O NAMA</OnamaNaslov>

        <OnamaText>
          {" "}
          Građevinski obrt Dom ovlaštena je izvođačka firma s 22 godine dugom
          tradicijom poslovanja na širem Zadarskom području (posebno na otocima
          Pašmanu i Ugljanu). Prikupljeno iskustvo koristimo da bi povezali
          moderne potrebe i zahtjeve u gradnji uvažajući tradicionalne stilove i
          način gradnje u Dalmaciji.
        </OnamaText>

        <Button>POŠALJITE NAM UPIT</Button>
      </OnamaHero>
      <Linija />
    </Wrap>
  )
}

export default Onama
