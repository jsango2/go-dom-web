import React from "react"
import styled from "styled-components"

const Wrap = styled.div`
  position: relative;
  width: 99.9%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`
const SinglePhoto = styled.div`
  position: relative;
  width: 424px;
  height: 320px;
  background-color: white;
  overflow: hidden;
  @media only screen and (max-width: 57em) {
    width: 47vw;
    height: 47vw;
  }
`
const PhotoGrid = props => (
  <Wrap>
    {props.foto.foto1 !== null ? (
      <SinglePhoto>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${props.foto.foto1.sourceUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover ",
          }}
        ></div>
      </SinglePhoto>
    ) : (
      <div
        style={{
          position: "relative",
          height: "0",
          backgroundColor: "white",
        }}
      ></div>
    )}

    {props.foto.foto2 !== null ? (
      <SinglePhoto>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${props.foto.foto2.sourceUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover ",
          }}
        ></div>{" "}
      </SinglePhoto>
    ) : (
      <div
        style={{
          position: "relative",
          height: "0",
          backgroundColor: "white",
        }}
      ></div>
    )}

    {props.foto.foto3 !== null ? (
      <SinglePhoto>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${props.foto.foto3.sourceUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover ",
          }}
        ></div>
      </SinglePhoto>
    ) : (
      <div
        style={{
          position: "relative",
          height: "0",
          backgroundColor: "white",
        }}
      ></div>
    )}

    {props.foto.foto4 !== null ? (
      <SinglePhoto>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${props.foto.foto4.sourceUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover ",
          }}
        ></div>{" "}
      </SinglePhoto>
    ) : (
      <div
        style={{
          position: "relative",
          height: "0",
          backgroundColor: "white",
        }}
      ></div>
    )}

    {props.foto.foto5 !== null ? (
      <SinglePhoto>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${props.foto.foto5.sourceUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover ",
          }}
        ></div>{" "}
      </SinglePhoto>
    ) : (
      <div
        style={{
          position: "relative",
          height: "0",
          backgroundColor: "white",
        }}
      ></div>
    )}

    {props.foto.foto6 !== null ? (
      <SinglePhoto>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${props.foto.foto6.sourceUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover ",
          }}
        ></div>
      </SinglePhoto>
    ) : (
      <div
        style={{
          position: "relative",
          height: "0",
          backgroundColor: "white",
        }}
      ></div>
    )}
  </Wrap>
)

export default PhotoGrid
