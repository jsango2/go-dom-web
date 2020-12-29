import React from "react"
import styled from "styled-components"

const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-height: 357px;
  padding: 90px 0 50px 0;
  @media only screen and (max-width: 57em) {
    flex-direction: column;
    padding-left: 15%;
  }
`
const Blok = styled.div`
  position: relative;
  display: flex;
  width: 308px;
  min-height: 206px;
  background-color: white;
  margin: 1px;
  @media only screen and (max-width: 57em) {
    width: 100%;
    margin-bottom: 40px;
  }
`
const Broj = styled.div`
  margin-top: 5px;
  position: relative;
  font-size: 48px;
  font-weight: 700;
`
const WrapPost = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3px;
  margin-left: 23px;
  position: relative;
  font-size: 48px;
  font-weight: 700;
`
const Naslov = styled.div`
  height: 59px;
  width: 215px;
  top: -13px;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 18px;
  font-weight: 300;
  color: #393939;
  text-transform: uppercase;
`
const Text = styled.div`
  margin-top: 17px;
  position: relative;
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  color: #393939;
  width: 212px;
  @media only screen and (max-width: 57em) {
    width: 75%;
    margin-top: 0px;
  }
`

const PostJenDvaTri = props => (
  <Wrap>
    <Blok>
      <Broj>01</Broj>
      <WrapPost>
        <Naslov>{props.data.naslovMiniPost1}</Naslov>
        <div
          style={{
            width: "41px",
            height: "5px",
            backgroundColor: "#71A8BF",
            margin: "-5px 0 24px 0",
          }}
        ></div>
        <Text>{props.data.kratkiOpisUPostu1}</Text>
      </WrapPost>
    </Blok>
    <Blok>
      <Broj>02</Broj>
      <WrapPost>
        <Naslov>{props.data.naslovMiniPost2}</Naslov>
        <div
          style={{
            width: "41px",
            height: "5px",
            backgroundColor: "#71A8BF",
            margin: "-5px 0 24px 0",
          }}
        ></div>
        <Text>{props.data.kratkiOpisUPostu2}</Text>
      </WrapPost>
    </Blok>
    <Blok>
      <Broj>03</Broj>
      <WrapPost>
        <Naslov>{props.data.naslovMiniPost3}</Naslov>
        <div
          style={{
            width: "41px",
            height: "5px",
            backgroundColor: "#71A8BF",
            margin: "-5px 0 24px 0",
          }}
        ></div>
        <Text>{props.data.kratkiOpisUPostu3}</Text>
      </WrapPost>
    </Blok>
  </Wrap>
)

export default PostJenDvaTri
