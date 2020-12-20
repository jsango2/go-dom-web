import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Logo from "../images/LOGO VELIKI.svg"
import Boss from "../images/indianboss.jpg"

const Wrap = styled.div`
  position: relative;

  width: 100%;
  height: 400px;
`
const PhotoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  position: absolute;
  z-index: 20;
  width: 668px;
  height: 490px;
  top: -310px;
  overflow: hidden;
  @media only screen and (max-width: 72em) {
    display: none;
  }
`
const OrangeWrap = styled.div`
  position: relative;
  padding: 70px 100px;
  z-index: 19;
  width: 100%;
  height: 400px;
  background-color: #d85f39;
  @media only screen and (max-width: 72em) {
    padding: 70px 0;
  }
`
const TextWrap = styled.div`
  margin-left: auto;
  width: 400px;
  right: 0;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 72em) {
    margin: 0 auto;
  }
  @media only screen and (max-width: 380px) {
    margin: 0 auto;

    width: 70%;
  }
`

const Text = styled.div`
  margin-top: 37.4px;
  text-align: center;
  width: 350px;
  font-size: 28px;
  font-weight: 300;
  color: white;
  line-height: 34px;
  @media only screen and (max-width: 360px) {
    font-size: 22px;
    line-height: 28.5px;
    width: 100%;
  }
`

const Dogovorite = () => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <Wrap>
      <PhotoWrap style={{ transform: `translateY(${offsetY * 0.04}px)` }}>
        <img
          src={Boss}
          style={{ objectFit: "contain" }}
          height="100%"
          alt="logo"
        />
      </PhotoWrap>
      <OrangeWrap>
        <TextWrap>
          <img src={Logo} alt="logo" />
          <Text>
            Dogovorite suradnju i uživajte u miru znajući da je Vaš projekt u
            sigurnim rukama.
          </Text>
        </TextWrap>
      </OrangeWrap>
    </Wrap>
  )
}
export default Dogovorite
