import React from 'react'
import { animated, useSpring } from 'react-spring'

const FavouriteIcon = ({ iconType }) => {
  const [active, setActive] = React.useState(false)

  const animate = useSpring({
    transform: active ? 'scale(1.1)' : 'scale(1)',
    config: { mass: 1, tension: 500, friction: 15 },
  })

  return (
    <animated.div
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
      style={{
        width: '75px',
        padding: '15px',
        color: '#ff6363',
        transform: animate.transform,
      }}
    >
      <i className={iconType} />
    </animated.div>
  )
}
export default FavouriteIcon
