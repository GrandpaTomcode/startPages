import React, { useState, useEffect } from 'react'
import { weatherApi } from '../../../config.json'
import axios from 'axios'
import '../tilesStyle.css'

const Weather = () => {
  const [city, setCity] = useState(null)
  const [temp, setTemp] = useState(null)
  const [condition, setCondition] = useState(null)
  const [lat, setLat] = useState('51.5')
  const [lon, setLon] = useState('0.12')

  useEffect(() => {
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude.toFixed(1)
        const longitude = position.coords.longitude.toFixed(1)
        setLat(latitude)
        setLon(longitude)
      })
    }
    getLocation()

    const getWeather = async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApi}`,
      )
      const data = await res.data
      const celsiusTemp = data.main.temp - 272
      setCity(data.name)
      setTemp(parseFloat(celsiusTemp).toFixed(1))
      setCondition(data.weather['0'].description)
    }

    getWeather()

    // eslint-disable-next-line
  }, [lat, lon])

  return (
    <div className="tileDiv">
      <h2>Weather</h2>
      <div className="weatherContainer">
        <div className="iconDiv">
          <i className="fas fa-compass fa-2x" />
          <i className="fas fa-thermometer-three-quarters fa-2x" />
          <i className="fas fa-cloud-sun-rain fa-2x" />
        </div>
        <div className="weatherDataDiv">
          <h3>{city}</h3>
          <h3>{temp}&#8451;</h3>
          <h3>{condition}</h3>
        </div>
      </div>
    </div>
  )
}

export default Weather
