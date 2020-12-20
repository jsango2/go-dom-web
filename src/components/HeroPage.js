import React from "react"

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
        }}
      >
        {props.lokacija}
      </div>
      <div
        style={{
          color: "white",
          //   position: "absolute",
          fontSize: "38px",
          fontWeight: "700",
          marginTop: "10px",
          width: "80%",
          textAlign: "center",
          lineHeight: "45px",
          zIndex: "30",
        }}
      >
        {props.imeProjekta}
      </div>
      <div
        style={{
          color: "white",
          width: "85%",
          maxWidth: "590px",
          textAlign: "center",
          //   position: "absolute",
          fontSize: "20px",
          fontWeight: "300",
          lineHeight: "25.9px",
          marginTop: "20px",
          zIndex: "30",
        }}
      >
        {props.kratkiTekst}
      </div>
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
