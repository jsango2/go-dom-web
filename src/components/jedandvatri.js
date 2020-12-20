import React from "react"
import styled from "styled-components"
import Background from "../images/radniciVisoko.png"
import Jedan from "../images/1.svg"
import Dva from "../images/2.svg"
import Tri from "../images/3.svg"

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-bottom: 250px;
  @media only screen and (max-width: 48em) {
    display: none;
  }
`
const Broj1 = styled.div`
  z-index: 10;
  position: relative;
  margin: 0 28px 0 0;
  width: 265px;
  height: 352px;
  @media only screen and (max-width: 76em) {
    margin: -40px 28px 0 15px;
  }
`
const Broj2 = styled.div`
  z-index: 10;
  position: relative;
  top: 35px;
  left: 40px;
  width: 270px;
  height: 352px;
  @media only screen and (max-width: 76em) {
    left: 0px;
  }
`
const Broj3 = styled.div`
  z-index: 10;
  position: relative;
  top: 70px;
  left: 90px;
  width: 270px;
  height: 352px;
  @media only screen and (max-width: 76em) {
    top: 105px;
    left: 15px;
  }
`
const Text = styled.div`
  z-index: 10;
  position: absolute;
`
const WrapBrojeva = styled.div`
  display: flex;
  align-items: center;
  margin-left: 120px;
  justify-content: flex-start;
  padding-top: 125px;
  @media only screen and (max-width: 76em) {
    margin-left: 3%;
  }
`

const Jedandvatri = () => (
  <Wrap>
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#71A8BFE6",
        zIndex: "2",
      }}
    ></div>
    <div
      style={{
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
      }}
    >
      {" "}
      <img src={Background} alt="background" />
    </div>
    <WrapBrojeva>
      <Broj1>
        <img src={Jedan} alt="jedan" />
        <Text style={{ top: "90px", left: "120px" }}>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "700",
              color: "white",
              marginBottom: "14px",
            }}
          >
            NAZOVITE NAS
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "21px",
              color: "white",
              marginBottom: "14px",
            }}
          >
            Dogovorite besplatni sastanak na području otoka Pašmana ili Ugljana,
            ili u Zadru. Ukoliko se nalazite van Zadra, uvodni sastanak je
            moguće održati online.
          </div>
        </Text>
      </Broj1>

      <Broj2>
        <img src={Dva} alt="jedan" />
        <Text style={{ top: "90px", left: "125px" }}>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "700",
              color: "white",
              marginBottom: "14px",
            }}
          >
            SASTANAK
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "21px",
              color: "white",
              marginBottom: "14px",
            }}
          >
            Dogovorite besplatni sastanak na području otoka Pašmana ili Ugljana,
            ili u Zadru. Ukoliko se nalazite van Zadra, uvodni sastanak je
            moguće održati online.
          </div>
        </Text>
      </Broj2>

      <Broj3>
        <img src={Tri} alt="jedan" />
        <Text style={{ top: "90px", left: "125px" }}>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "700",
              color: "white",
              marginBottom: "14px",
            }}
          >
            PONUDA
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "21px",
              color: "white",
              marginBottom: "14px",
            }}
          >
            Dogovorite besplatni sastanak na području otoka Pašmana ili Ugljana,
            ili u Zadru. Ukoliko se nalazite van Zadra, uvodni sastanak je
            moguće održati online.
          </div>
        </Text>
      </Broj3>
    </WrapBrojeva>
  </Wrap>
)

export default Jedandvatri
