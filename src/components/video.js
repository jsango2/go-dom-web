import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Photo from "../images/bazen.png"
import Play from "../images/play.svg"
import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 648px;
  ${"" /* background-color: pink; */}
  overflow: hidden;
  @media only screen and (max-width: 380px) {
    height: 445px;
  }
`
const Image = styled.div`
  position: relative;
  height: 100%;
  bottom: 145%;
  object-fit: contain;
  @media only screen and (max-width: 380px) {
    bottom: 280%;
    transform: scale(1);
  }
`
const IframeWrap = styled.div`
  width: 75vw;
  height: 648px;
`

const Video = () => {
  const [open, setOpen] = useState(false)

  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Modal open={open} onClose={onCloseModal} center>
        <IframeWrap>
          <iframe
            width="99%"
            height="100%"
            src="https://www.youtube.com/embed/E77hILTNJ3c?autoplay=1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            fullscreen
          ></iframe>
        </IframeWrap>
      </Modal>
      <Wrap>
        <img
          onClick={onOpenModal}
          src={Play}
          alt="play"
          style={{
            position: "absolute",
            cursor: "pointer",

            height: "67px",
            width: "56px",
            top: "40%",
            left: "50%",
            zIndex: "21",
            // transform: `translateY(${offsetY * 0.2}px)`,
          }}
        />
        <Image>
          <img
            src={Photo}
            alt="bazen"
            style={{
              transform: `scale(1.8) translateY(${offsetY * 0.1}px)`,
            }}
          />
        </Image>
      </Wrap>
    </>
  )
}
export default Video
