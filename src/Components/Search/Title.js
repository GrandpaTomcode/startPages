import React from 'react'
const titleStyle = {
  fontSize: '1.8em',
  textAlign: 'center',
}
const Title = () => {
  const titleChanger = (timeOfDayTitle) => {
    timeOfDayTitle = 'Good Afternoon'
    let currentHours = new Date().getHours()
    if (currentHours <= 12) {
      timeOfDayTitle = 'Good Morning'
    } else if (currentHours >= 17) {
      timeOfDayTitle = 'Good Evening'
    }
    return timeOfDayTitle
  }
  return (
    <div>
      <h1 style={titleStyle}>{titleChanger()}, Tom</h1>
    </div>
  )
}

export default Title
