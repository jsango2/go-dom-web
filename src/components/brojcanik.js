import React from "react"
import styled from "styled-components"
import Counter from "./counter"

const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 344px;
  margin: 0 auto;
  @media only screen and (max-width: 48em) {
    flex-direction: column;
  }
`
const WrapPar = styled.div`
  position: relative;
  display: flex;
  @media only screen and (max-width: 48em) {
    margin-bottom: 26px;
  }
  @media only screen and (max-width: 360px) {
    margin-bottom: 50px;
  }
`
const NumberLinija = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 20px;

  align-items: center;
  flex-direction: column;
  position: relative;
  width: 221px;
  height: 136px;
  border-right: 2px solid rgba(0, 0, 0, 0.2);
  border-left: 2px solid rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 48em) {
    border-right: 0px;
  }
  @media only screen and (max-width: 360px) {
    width: 150px;
  }
`

const Number = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 221px;
  height: 136px;
  @media only screen and (max-width: 360px) {
    width: 150px;
  }
`

const Brojcanik = () => {
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
              marginBottom: "39px",
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
        <NumberLinija>
          {" "}
          <div
            style={{
              color: "#D85F39",
              fontWeight: "700",
              fontSize: "38px",
              marginBottom: "39px",
            }}
          >
            <Counter target={14} duration={2.5} />
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
        </NumberLinija>
      </WrapPar>
      <WrapPar style={{ marginLeft: "3px" }}>
        <Number style={{ borderRight: "2px solid rgba(0, 0, 0, 0.2)" }}>
          {" "}
          <div
            style={{
              color: "#D85F39",
              fontWeight: "700",
              fontSize: "38px",
              marginBottom: "39px",
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
        <Number>
          {" "}
          <div
            style={{
              color: "#D85F39",
              fontWeight: "700",
              fontSize: "38px",
              marginBottom: "39px",
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
export default Brojcanik
