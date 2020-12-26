import React, { useState } from "react"
import styled from "styled-components"
import { IoIosArrowDropdown } from "react-icons/io"

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`
const MobilneKategorije = styled.div`
  width: 98%;
  max-width: 500px;
  transition: all 0.4s ease-in-out !important;
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    margin: 0 auto;
  }
`

const UslugeMobilno = () => {
  const [current, setCurrent] = useState(null)

  const toggleKategorija = id => {
    current === id ? setCurrent(null) : setCurrent(id)
  }

  return (
    <Wrap>
      <MobilneKategorije>
        <div onClick={() => toggleKategorija(1)} className="kategorijaButton">
          <span className="ikonaKategorije">
            <IoIosArrowDropdown
              className={`arrowIkona ${current === 1 ? "arrowDownIkona" : ""}`}
            />
          </span>
          KLJUČ U RUKE
        </div>
        <div
          className={`kategorijaToggleText ${
            current === 1 ? "otkrijiDodatak" : ""
          }`}
        >
          <div style={{ width: "80%", margin: "0 auto", padding: "31px 0" }}>
            Vođenje gradnje od iskopa temelja do bojanja fasade, zajedno s nama
            gledajte kako se vaša investicija iz nacrta razvija u novi dom.
          </div>
        </div>
      </MobilneKategorije>
      <MobilneKategorije>
        <div onClick={() => toggleKategorija(2)} className="kategorijaButton">
          {" "}
          <span className="ikonaKategorije">
            <IoIosArrowDropdown
              className={`arrowIkona ${current === 2 ? "arrowDownIkona" : ""}`}
            />
          </span>
          REKONSTRUKCIJE
        </div>
        <div
          className={`kategorijaToggleText ${
            current === 2 ? "otkrijiDodatak" : ""
          }`}
        >
          <div style={{ width: "80%", margin: "0 auto", padding: "31px 0" }}>
            Rješite statičke i funkcionalne probleme svoje stare nekretnine ili
            joj potpunom rekonstrukcijom promijenite kompletan izgled i udahnite
            novi život.
          </div>
        </div>
      </MobilneKategorije>
      <MobilneKategorije>
        <div onClick={() => toggleKategorija(3)} className="kategorijaButton">
          {" "}
          <span className="ikonaKategorije">
            <IoIosArrowDropdown
              className={`arrowIkona ${current === 3 ? "arrowDownIkona" : ""}`}
            />
          </span>
          FASADE I IZOLACIJE
        </div>
        <div
          className={`kategorijaToggleText ${
            current === 3 ? "otkrijiDodatak" : ""
          }`}
        >
          <div style={{ width: "80%", margin: "0 auto", padding: "31px 0" }}>
            Njegujući estetiku i tradiciju gradnje kamenih kuća koristeći
            moderne tehnologije dodajemo im bolju izolaciju i funkcionalnost.
          </div>
        </div>
      </MobilneKategorije>
      <MobilneKategorije>
        <div onClick={() => toggleKategorija(4)} className="kategorijaButton">
          {" "}
          <span className="ikonaKategorije">
            <IoIosArrowDropdown
              className={`arrowIkona ${current === 4 ? "arrowDownIkona" : ""}`}
            />
          </span>
          TRADICIONALNA GRADNJA I KAMEN
        </div>
        <div
          className={`kategorijaToggleText ${
            current === 4 ? "otkrijiDodatak" : ""
          }`}
        >
          <div style={{ width: "80%", margin: "0 auto", padding: "31px 0" }}>
            Izvodimo razne fasadne sisteme ovlaštenih proizvođača. Uložite u
            izolaciju vašeg doma i napravite ga ugodnijim za korištenje uz
            uštedu energije.
          </div>
        </div>
      </MobilneKategorije>
      <MobilneKategorije>
        <div onClick={() => toggleKategorija(5)} className="kategorijaButton">
          {" "}
          <span className="ikonaKategorije">
            <IoIosArrowDropdown
              className={`arrowIkona ${current === 5 ? "arrowDownIkona" : ""}`}
            />
          </span>
          UREĐENJE INTERIJERA
        </div>
        <div
          className={`kategorijaToggleText ${
            current === 5 ? "otkrijiDodatak" : ""
          }`}
        >
          <div style={{ width: "80%", margin: "0 auto", padding: "31px 0" }}>
            Ručna i strojna žbuka, gletanje, bojanje i dekorativni kamen,
            završni detalji su oni koje ćete svakodnevno gledati pa njima
            posvjećujemo posebnu pažnju.
          </div>
        </div>
      </MobilneKategorije>
      <MobilneKategorije>
        <div onClick={() => toggleKategorija(6)} className="kategorijaButton">
          {" "}
          <span className="ikonaKategorije">
            <IoIosArrowDropdown
              className={`arrowIkona ${current === 6 ? "arrowDownIkona" : ""}`}
            />
          </span>
          BAZENSKI SUSTAVI
        </div>
        <div
          className={`kategorijaToggleText ${
            current === 6 ? "otkrijiDodatak" : ""
          }`}
        >
          <div style={{ width: "80%", margin: "0 auto", padding: "31px 0" }}>
            Povećajte vrijednost Vaše nekretnine i uživajte u njenom korištenju
            dodajući jedan od vrsta bazena iz naše ponude (klasični, zatvoreni,
            „infinity“, preljevni…).
          </div>
        </div>
      </MobilneKategorije>
    </Wrap>
  )
}
export default UslugeMobilno
