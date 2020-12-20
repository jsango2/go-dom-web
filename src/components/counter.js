import React from "react"

import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"

const Counter = ({ target, title, duration }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <div
      className="w-full md:w-1/4 p-2 md:p-4 text-center flex flex-col items-center"
      ref={ref}
    >
      <CountUp
        start={0}
        end={inView ? target : 0}
        duration={duration}
        separator=""
        useEasing={true}
      >
        {({ countUpRef }) => (
          <span
            className="text-2xl md:text-4xl font-black leading-none"
            ref={countUpRef}
          />
        )}
      </CountUp>
      <p
        className={`font-bold text-lg animation delay ${
          inView === true
            ? "opacity-100 transform-show"
            : "opacity-0 transform-hide"
        }`}
      >
        {title}
      </p>
      {/* <style jsx>{`
        .delay {
          transition-delay: ${duration}s;
        }
        .transform-hide {
          transform: translate3d(0, 1rem, 0);
        }
        .transform-show {
          transform: translate3d(0, 0, 0);
        }
      `}</style> */}
    </div>
  )
}

export default Counter
