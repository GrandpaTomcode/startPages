import React from 'react'
import Title from './Title'

const searchBarDiv = {
  display: 'flex',
  alignItems: 'center',
  width: '550px',
  height: '80px',
  paddingLeft: '10px',
  borderRadius: '10px',
  outline: 'none',
  border: '0px',
  backgroundColor: '#222831',
}
const searchBar = {
  width: '90%',
  height: '75px',
  backgroundColor: '#222831',
  border: '0px',
  outline: 'none',
  fontSize: '0.8em',
  color: '#ecf4f3',
}
const Search = () => {
  return (
    <div>
      <Title />
      <form
        style={searchBarDiv}
        action="https://www.google.com/search"
        method="get"
      >
        <input
          style={searchBar}
          className="searchBar"
          autoComplete="off"
          type="text"
          name="q"
        />
        <div>
          <i style={{ color: '#ff6363' }} className="fas fa-search"></i>
        </div>
      </form>
    </div>
  )
}

export default Search
