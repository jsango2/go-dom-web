import React from "react"

function FadeInSection2(props) {
  const [isVisible, setVisible] = React.useState(false)
  const domRef = React.useRef()
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })
    observer.observe(domRef.current)
  }, [])
  return <div ref={domRef}>{props.children}</div>
}
export default FadeInSection2
