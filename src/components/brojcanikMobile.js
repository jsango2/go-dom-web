import React from "react"
import styled from "styled-components"
import Counter from "./counter"

const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 436px;
  margin: 0 auto;
  @media only screen and (min-width: 48em) {
    display: none;
    ${"" /* margin: 50px auto; */}
  }
`
const WrapPar = styled.div`
  display: flex;
  height: 136px;
  margin-bottom: 26px;
`
// const NumberLinija = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   padding-top: 20px;

//   align-items: center;
//   flex-direction: column;
//   position: relative;
//   width: 221px;
//   height: 136px;
//   border-right: 2px solid rgba(0, 0, 0, 0.2);
//   border-left: 2px solid rgba(0, 0, 0, 0.2);
//   @media only screen and (max-width: 48em) {
//   }
//   @media only screen and (max-width: 360px) {
//   }
// `

const Number = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 221px;
  height: 136px;
  @media only screen and (max-width: 420px) {
    width: 150px;
  }
`

const BrojcanikMobile = () => {
  return (
    <Wrap>
      <WrapPar>
        <Number>
          {" "}
          <div
            id="value"
            style={{
              color: "#D85F39",
              fontWeight: "700",
              fontSize: "38px",
              marginBottom: "10px",
            }}
          >
            <Counter target={1999} duration={3} />
          </div>
          <div
            style={{
              color: "#393939",
              fontWeight: "300",
              fontSize: "16px",
              textAlign: "center",
            }}
          >
            GODINA OSNUTKA
          </div>
        </Number>
        <div
          style={{
            width: "2px",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        ></div>
        <Number>
          {" "}
          <div
            style={{
              color: "#D85F39",
              fontWeight: "700",
              fontSize: "38px",
              marginBottom: "10px",
            }}
          >
            <Counter target={18} duration={2.5} />
          </div>
          <div
            style={{
              color: "#393939",
              fontWeight: "300",
              fontSize: "16px",
            }}
          >
            ZAPOSLENIH
          </div>
        </Number>
      </WrapPar>
      <WrapPar>
        {" "}
        <Number>
          {" "}
          <div
            style={{
              color: "#D85F39",
              fontWeight: "700",
              fontSize: "38px",
              marginBottom: "10px",
            }}
          >
            <Counter target={20} duration={2.7} />
          </div>
          <div
            style={{
              color: "#393939",
              fontWeight: "300",
              fontSize: "16px",
              textAlign: "center",
            }}
          >
            PROJEKATA GODIŠNJE
          </div>
        </Number>
        <div
          style={{
            width: "2px",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        ></div>
        <Number>
          {" "}
          <div
            style={{
              color: "#D85F39",
              fontWeight: "700",
              fontSize: "38px",
              marginBottom: "10px",
            }}
          >
            <Counter target={445} duration={3.1} />
          </div>
          <div
            style={{
              color: "#393939",
              fontWeight: "300",
              fontSize: "16px",
            }}
          >
            KLIJENATA
          </div>
        </Number>
      </WrapPar>
    </Wrap>
  )
}
export default BrojcanikMobile
