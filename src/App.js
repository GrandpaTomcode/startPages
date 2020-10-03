import React from 'react'
import Search from './Components/Search/Search'
import ToDoList from './Components/Tiles/ToDoList/ToDoList'
import Weather from './Components/Tiles/Weather/Weather'
import Favourites from './Components/Tiles/Favourites/Favourites'
import { useSpring, animated } from 'react-spring'
import './App.css'

const App = () => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 })
  return (
    <div className="App">
      <animated.header className="App-header" style={fade}>
        <Search />
      </animated.header>
      <animated.div className="tilesDiv" style={fade}>
        <ToDoList />
        <Weather />
        <Favourites />
      </animated.div>
    </div>
  )
}

export default App
