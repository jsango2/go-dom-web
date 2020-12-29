import React from "react"
import styled from "styled-components"
import pic1 from "../images/meni1.png"
import pic2 from "../images/blue2.jpg"
import pic3 from "../images/meni4.png"
import pic4 from "../images/meni5.png"
import pic5 from "../images/meni6.png"
import pic6 from "../images/meni7.png"
import FadeInSection from "./fadeIn"
import UslugeMobilno from "./uslugeMobilno"

const Wrap = styled.div`
  ${"" /* padding-top: 15px; */}
  position: relative;
  width: 100%;
  height: auto;
`

const Grid = styled.div`
  ${"" /* margin: 0 auto;
  position: relative; */}
  margin: 0 auto;
  width: 800px;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 48em) {
    display: none;
  }
`
const GridDiv = styled.div`
cursor:pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 180px;
  margin: 8px;
  padding: 30px;
  
    &:hover .text {
      display: none;
    }
  }
  &:hover .textOrange {
      display: block;
    }
  }
  &:hover .orange {
      background-color: #AD3008d9;
    }
  }
`
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0000004d;
  z-index: 2;
  transition: all 0.4s ease-in-out;
`
const Naslov = styled.div`
  font-weight: bold;
  font-size: 35px;
  color: #71a8bf;
  margin: 31px auto;
  text-align: center;
  line-height: 45px;
  @media only screen and (max-width: 48em) {
    margin: 55px auto;
  }
`
const Text = styled.div`
  z-index: 2;
  font-size: 18px;
  font-weight: 800;
  text-align: center;
  line-height: 23.4 px;
  color: white;
`
const Linija = styled.div`
  position: absolute;
  top: -21px;
  left: 50%;
  z-index: 2;
  width: 33.5px;
  height: 3px;
  background-color: #71a8bf;
  @media only screen and (max-width: 48em) {
  }
`

const Usluge = () => {
  return (
    <Wrap>
      <Linija />
      <Naslov>USLUGE KOJE NUDIMO</Naslov>
      <UslugeMobilno />
      <FadeInSection>
        <Grid>
          <GridDiv>
            <Overlay className="orange" />
            <img
              src={pic1}
              alt="pic1"
              width="100%"
              style={{
                position: "absolute",
                objectFit: "contain",
                zIndex: "1",
              }}
            />
            <div className="textOrange">
              Vođenje gradnje od iskopa temelja do bojanja fasade, zajedno s
              nama gledajte kako se vaša investicija iz nacrta razvija u novi
              dom.
            </div>
            <Text className="text">KLJUČ U RUKE</Text>
          </GridDiv>
          <GridDiv>
            <Overlay className="orange" />
            <img
              src={pic2}
              alt="pic2"
              width="100%"
              style={{
                position: "absolute",
                objectFit: "contain",
                zIndex: "1",
              }}
            />
            <div className="textOrange">
              Rješite statičke i funkcionalne probleme svoje stare nekretnine
              ili joj potpunom rekonstrukcijom promijenite kompletan izgled i
              udahnite novi život.
            </div>
            <Text className="text">REKONSTRUKCIJE</Text>
          </GridDiv>
          <GridDiv>
            <Overlay className="orange" />
            <img
              src={pic3}
              alt="pic3"
              width="100%"
              style={{
                position: "absolute",
                objectFit: "contain",
                zIndex: "1",
              }}
            />
            <div className="textOrange">
              Njegujući estetiku i tradiciju gradnje kamenih kuća koristeći
              moderne tehnologije dodajemo im bolju izolaciju i funkcionalnost.
            </div>
            <Text className="text">TRADICIONALNA GRADNJA I KAMEN</Text>
          </GridDiv>
        </Grid>
      </FadeInSection>
      <FadeInSection>
        <Grid>
          <GridDiv>
            {" "}
            <Overlay className="orange" />
            <img
              src={pic4}
              alt="pic4"
              width="100%"
              style={{
                position: "absolute",
                objectFit: "contain",
                zIndex: "1",
              }}
            />
            <div className="textOrange">
              Izvodimo razne fasadne sisteme ovlaštenih proizvođača. Uložite u
              izolaciju vašeg doma i napravite ga ugodnijim za korištenje uz
              uštedu energije.
            </div>
            <Text className="text">FASADE I IZOLACIJE</Text>
          </GridDiv>
          <GridDiv>
            <Overlay className="orange" />
            <img
              src={pic5}
              alt="pic5"
              width="100%"
              style={{
                position: "absolute",
                objectFit: "contain",
                zIndex: "1",
              }}
            />
            <div className="textOrange">
              Ručna i strojna žbuka, gletanje, bojanje i dekorativni kamen,
              završni detalji su oni koje ćete svakodnevno gledati pa njima
              posvjećujemo posebnu pažnju.
            </div>
            <Text className="text">UREĐENJE INTERIJERA</Text>
          </GridDiv>
          <GridDiv>
            <Overlay className="orange" />
            <img
              src={pic6}
              alt="pic6"
              width="100%"
              style={{
                position: "absolute",
                objectFit: "contain",
                zIndex: "1",
              }}
            />
            <div className="textOrange">
              Povećajte vrijednost Vaše nekretnine i uživajte u njenom
              korištenju dodajući jedan od vrsta bazena iz naše ponude
              (klasični, zatvoreni, „infinity“, preljevni…).
            </div>
            <Text className="text">BAZENSKI SUSTAVI</Text>
          </GridDiv>
        </Grid>
      </FadeInSection>
    </Wrap>
  )
}
export default Usluge
