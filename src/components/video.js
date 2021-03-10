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
  z-index: 25;
  ${"" /* background-color: pink; */}
  overflow: hidden;
  @media only screen and (max-width: 530px) {
    height: 445px;
  }
  @media only screen and (max-width: 400px) {
    height: 395px;
  }
`
const BGvideo = styled.div`
  position: absolute;
  top: -500px;
  width: 100%;
  height: 120%;
  background-image: url(${Photo});
  background-position: center;
  background-size: cover;
  zindex: 1;
  @media only screen and (min-width: 1280px) {
    height: 140%;
  }
  @media only screen and (max-width: 530px) {
    height: 130%;
  }
  @media only screen and (max-width: 390px) {
    height: 160%;
    ${"" /* top: -570px; */}
  }
`

const Video = () => {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const [open, setOpen] = useState(false)

  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)

  return (
    <>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{
          container: "customOverlay",
          modal: "customModal2",
        }}
        center
      >
        <div className="videowrapper">
          <iframe
            title="video GO"
            className="if"
            src="https://www.youtube.com/embed/x0PYGwlcwHY?autoplay=1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
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
            top: "50%",
            left: "50%",
            zIndex: "21",
            transform: "translate(-50%, -50%)",

            // transform: `translateY(${offsetY * 0.2}px)`,
          }}
        />

        <BGvideo
          style={{
            transform: `translateY(${offset * 0.07}px)`,
          }}
        ></BGvideo>
      </Wrap>
    </>
  )
}
export default Video
