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
  background-color: black;
  overflow: hidden;
  @media only screen and (max-width: 57em) {
    width: 47vw;
    height: 47vw;
  }
`
const PhotoGrid = props => (
  <Wrap>
    <SinglePhoto>
      {props.foto.foto1 !== null ? (
        <img
          src={props.foto.foto1.sourceUrl}
          alt="foto1"
          style={{
            position: "relative",
            height: "100%",
            objectFit: "contain",
          }}
        />
      ) : (
        <div
          style={{
            position: "relative",
            height: "100%",
            objectFit: "contain",
          }}
        ></div>
      )}
    </SinglePhoto>
    <SinglePhoto>
      {props.foto.foto2 !== null ? (
        <img
          src={props.foto.foto2.sourceUrl}
          alt="foto1"
          style={{
            position: "relative",
            height: "100%",
            objectFit: "contain",
          }}
        />
      ) : (
        <div
          style={{
            position: "relative",
            height: "100%",
            objectFit: "contain",
          }}
        ></div>
      )}
    </SinglePhoto>{" "}
    <SinglePhoto>
      {props.foto.foto3 !== null ? (
        <img
          src={props.foto.foto3.sourceUrl}
          alt="foto1"
          style={{
            position: "relative",
            height: "100%",
            objectFit: "contain",
          }}
        />
      ) : (
        <div
          style={{
            position: "relative",
            height: "100%",
            objectFit: "contain",
          }}
        ></div>
      )}
    </SinglePhoto>{" "}
    <SinglePhoto>
      {props.foto.foto4 !== null ? (
        <img
          src={props.foto.foto4.sourceUrl}
          alt="foto1"
          style={{
            position: "relative",
            height: "100%",
            objectFit: "contain",
          }}
        />
      ) : (
        <div
          style={{
            position: "relative",
            height: "100%",
            objectFit: "contain",
          }}
        ></div>
      )}
    </SinglePhoto>{" "}
    <SinglePhoto>
      {props.foto.foto5 !== null ? (
        <img
          src={props.foto.foto5.sourceUrl}
          alt="foto1"
          style={{
            position: "relative",
            height: "100%",
            objectFit: "contain",
          }}
        />
      ) : (
        <div
          style={{
            position: "relative",
            height: "100%",
            objectFit: "contain",
          }}
        ></div>
      )}
    </SinglePhoto>
    <SinglePhoto>
      {props.foto.foto6 !== null ? (
        <img
          src={props.foto.foto6.sourceUrl}
          alt="foto1"
          style={{
            position: "relative",
            height: "100%",
            objectFit: "contain",
          }}
        />
      ) : (
        <div
          style={{
            position: "relative",
            height: "100%",
            objectFit: "contain",
          }}
        ></div>
      )}
    </SinglePhoto>
  </Wrap>
)

export default PhotoGrid
