import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Photo1 from "../images/Rectangle 11.png"

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  background-color: white;
`
const Podnaslov = styled.div`
  width: 551px;
  text-align: center;
  margin: 0 auto;
  font-weight: 300;
  font-size: 22px;
  line-height: 28.5px;
  color: #393939;
  @media only screen and (max-width: 48em) {
    display: none;
  }
`

const Linkovi = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 31px auto 25px auto;
  flex-wrap: WRAP;
  position: relative;
  width: 1000px;
  height: auto;
  background-color: white;
`

const Link = styled.div`
  cursor: pointer;
  position: relative;
  margin: 10px 19px;
  color: #c4c4c4;
  font-weight: 300;
  font-size: 18px;
  &:hover {
    color: #4493c4;
    font-weight: 800;
  }
  &:visited {
    color: #4493c4;
    font-weight: 800;
  }
`

const CmsSinglePost = styled.div`
  margin: 5px 3px 0 3px;
  position: relative;
  width: 266px;
  min-width: 266px;
  height: 470px;
  background-color: grey;
`
const GornjiDio = styled.div`
  position: relative;
  padding: 31px 27px;
  width: 100%;
  height: 235px;
  background-color: #71a8bf;
`
const DonjiDio = styled.div`
  position: relative;
  width: 100%;
  height: 235px;
  overflow: hidden;
`

const ProjektiHome = () => (
  <StaticQuery
    query={graphql`
      {
        wpgraphql {
          posts {
            edges {
              node {
                title
                dodatniOpis {
                  kratkiOpisFront
                  frontForografija {
                    sourceUrl(size: MEDIUM)
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Wrap>
        {console.log(data)}
        <div
          style={{
            position: "relative",
            marginTop: "96px",
            bottom: "0",
            left: "49%",
            zIndex: "2",
            width: "33.5px",
            height: "3px",
            backgroundColor: "#71A8BF",
          }}
        ></div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "35px",
            color: "#71A8BF",
            marginTop: "31px",
            marginBottom: "31px",
            textAlign: "center",
          }}
        >
          PROJEKTI
        </div>
        <Podnaslov>
          Raznovrsnost naše ponude prikazana je kroz uspješne primjere odrađenih
          projekata
        </Podnaslov>
        <Linkovi>
          <Link>SVI</Link>
          <Link>KLJUČ U RUKE</Link>
          <Link>REKONSTRUKCIJE</Link>
          <Link>KLJUČ U RUKE</Link>
          <Link>TRADICIONALNA GRADNJA I KAMEN</Link>
          <Link>FASADE I IZOLACIJE</Link>
          <Link>UREĐENJE INTERIJERA</Link>
          <Link>BAZENSKI SUSTAVI</Link>
        </Linkovi>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <CmsSinglePost>
            <GornjiDio>
              <div
                style={{
                  fontFamily: "Arial",
                  fontWeight: "500",
                  fontSize: "11px",
                  lineHeight: "13px",
                  color: "#C4C4C4",
                  marginBottom: "13px",
                }}
              >
                FASADE I IZOLACIJE
              </div>
              <div
                style={{
                  width: "213px",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "19.5px",
                  color: "#FFF",
                  marginBottom: "15px",
                }}
              >
                OBNOVA FASADE
              </div>
              <div
                style={{
                  width: "196px",
                  fontWeight: "400",
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "19px",
                  color: "#FFF",
                  marginBottom: "15px",
                }}
              >
                Vođenje gradnje od iskopa temelja do bojanja fasade, zajedno s
                nama gledajte kako se vaša investicija iz nacrta razvija u novi
                dom.
              </div>
            </GornjiDio>
            <DonjiDio>
              <img
                src={Photo1}
                alt="logo"
                style={{ width: "110%", marginBottom: "0" }}
              />
            </DonjiDio>
          </CmsSinglePost>
          <CmsSinglePost>
            <GornjiDio></GornjiDio>
            <DonjiDio> PHOTO </DonjiDio>
          </CmsSinglePost>
          <CmsSinglePost>
            <GornjiDio></GornjiDio>
            <DonjiDio> PHOTO </DonjiDio>
          </CmsSinglePost>
          <CmsSinglePost>
            <GornjiDio></GornjiDio>
            <DonjiDio> PHOTO </DonjiDio>
          </CmsSinglePost>
          <CmsSinglePost>
            <GornjiDio>
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "11px",
                  lineHeight: "13px",
                  color: "#C4C4C4",
                  marginBottom: "13px",
                }}
              >
                FASADE I IZOLACIJE
              </div>
              <div
                style={{
                  width: "213px",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "19.5px",
                  color: "#FFF",
                  marginBottom: "15px",
                }}
              >
                OBNOVA FASADE
              </div>
              <div
                style={{
                  width: "196px",
                  fontWeight: "400",
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "19px",
                  color: "#FFF",
                  marginBottom: "15px",
                }}
              >
                Vođenje gradnje od iskopa temelja do bojanja fasade, zajedno s
                nama gledajte kako se vaša investicija iz nacrta razvija u novi
                dom.
              </div>
            </GornjiDio>
            <DonjiDio>
              <img src={Photo1} alt="logo" style={{ width: "110%" }} />
            </DonjiDio>
          </CmsSinglePost>
          <CmsSinglePost>
            <GornjiDio></GornjiDio>
            <DonjiDio> PHOTO </DonjiDio>
          </CmsSinglePost>
          <CmsSinglePost>
            <GornjiDio></GornjiDio>
            <DonjiDio> PHOTO </DonjiDio>
          </CmsSinglePost>
          <CmsSinglePost>
            <GornjiDio></GornjiDio>
            <DonjiDio> PHOTO </DonjiDio>
          </CmsSinglePost>
          <CmsSinglePost>
            <GornjiDio>
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "11px",
                  lineHeight: "13px",
                  color: "#C4C4C4",
                  marginBottom: "13px",
                }}
              >
                FASADE I IZOLACIJE
              </div>
              <div
                style={{
                  width: "213px",
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "19.5px",
                  color: "#FFF",
                  marginBottom: "15px",
                }}
              >
                OBNOVA FASADE
              </div>
              <div
                style={{
                  width: "196px",
                  fontWeight: "400",
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "19px",
                  color: "#FFF",
                  marginBottom: "15px",
                }}
              >
                Vođenje gradnje od iskopa temelja do bojanja fasade, zajedno s
                nama gledajte kako se vaša investicija iz nacrta razvija u novi
                dom.
              </div>
            </GornjiDio>
            <DonjiDio>
              <img src={Photo1} alt="logo" style={{ width: "110%" }} />
            </DonjiDio>
          </CmsSinglePost>
          <CmsSinglePost>
            <GornjiDio></GornjiDio>
            <DonjiDio> PHOTO </DonjiDio>
          </CmsSinglePost>
          <CmsSinglePost>
            <GornjiDio></GornjiDio>
            <DonjiDio> PHOTO </DonjiDio>
          </CmsSinglePost>
          <CmsSinglePost>
            <GornjiDio></GornjiDio>
            <DonjiDio> PHOTO </DonjiDio>
          </CmsSinglePost>
        </div>
      </Wrap>
    )}
  />
)

export default ProjektiHome
