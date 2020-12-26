import React from "react"
import styled from "styled-components"

const Naslov = styled.div`
  font-weight: 700;
  color: white;
  font-size: 38px;
  line-height: 45px;
  text-align: center;
  width: 80%;
  z-index: 30;
  @media only screen and (max-width: 455px) {
    font-size: 30px;
  }
`
const TextHero = styled.div`
  font-weight: 300;
  color: white;
  font-size: 20px;
  line-height: 25.9px;
  text-align: center;
  width: 85%;
  max-width: 590px;
  margin-top: 20px;
  z-index: 30;
  @media only screen and (max-width: 455px) {
    font-size: 16px;
  }
`

export default function HeroPage(props) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "381px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <img
        style={{
          position: "absolute",
          width: "100%",
          minWidth: "600px",
          objectFit: "contain",
        }}
        src={props.photoFull}
        alt="background"
      />

      <div
        style={{
          color: "white",
          //   position: "absolute",
          fontSize: "16px",
          fontWeight: "300",
          zIndex: "30",
          marginTop: "30px",
        }}
      >
        {props.lokacija}
      </div>
      <Naslov>{props.imeProjekta}</Naslov>
      <TextHero>{props.kratkiTekst}</TextHero>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity: "0.4",
        }}
      ></div>
    </div>
  )
}
