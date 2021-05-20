import * as React from 'react'
import { animated, config, useSpring } from 'react-spring'

const Star = () => {
  const props = useSpring({
    config: config.slow,
    to: async next => {
      while (true) {
        await next({ strokeDashoffset: 156 })
        await next({ strokeDashoffset: 0 })
      }
    },
    from: {
      strokeDashoffset: 0
    }
  })

  return (
    <animated.svg
      style={{
        ...props,
        margin: 20,
        width: 80,
        height: 80
      }}
      stroke="gold"
      viewBox="0 0 45 44"
      strokeWidth="2"
      strokeDasharray={156}
      fill="white"
    >
      <polygon points="22.5 35.25 8.68704657 42.5118994 11.3250859 27.1309497 0.150171867 16.2381006 15.5935233 13.9940503 22.5 0 29.4064767 13.9940503 44.8498281 16.2381006 33.6749141 27.1309497 36.3129534 42.5118994" />
    </animated.svg>
  )
}

export default Star
