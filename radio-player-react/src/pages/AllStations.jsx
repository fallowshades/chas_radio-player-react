import StationContainer from '../components/StationContainer'
import React, { useState, useEffect } from 'react'
const AllStations = () => {
  const [channels, setChannels] = useState([])

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await fetch(
          'https://api.sr.se/api/v2/channels?format=json&size=100'
        )
        const data = await response.json()
        setChannels(data.channels)
      } catch (error) {
        console.error('Error fetching channels:', error)
      }
    }

    fetchChannels()
  }, [])

  return (
    <div>
      <StationContainer channels={channels} />
    </div>
  )
}
export default AllStations
