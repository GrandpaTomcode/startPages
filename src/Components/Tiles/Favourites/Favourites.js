import React from 'react'
import FavouriteIcon from './FavouriteIcon'
import '../tilesStyle.css'
const iconContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
}

const Favourites = () => {
  return (
    <div className="tileDiv">
      <h2>Favourites</h2>
      <div style={iconContainer}>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FavouriteIcon iconType={'fab fa-youtube fa-3x'} />
        </a>
        <a
          href="https://calendar.google.com/calendar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FavouriteIcon iconType={'fas fa-calendar-day fa-3x'} />
        </a>
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FavouriteIcon iconType={'fas fa-directions fa-3x'} />
        </a>
        <a
          href="https://www.reddit.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FavouriteIcon iconType={'fab fa-reddit fa-3x'} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FavouriteIcon iconType={'fab fa-github fa-3x'} />
        </a>
        <a
          href="https://mail.google.com/mail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FavouriteIcon iconType={'fas fa-envelope fa-3x'} />
        </a>
      </div>
    </div>
  )
}
export default Favourites
