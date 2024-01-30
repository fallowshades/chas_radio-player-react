import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import StationContainer from '../components/StationContainer'

const AllStations = () => {
  const [channels, setChannels] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await fetch(
          'https://api.sr.se/api/v2/channels?format=json&size=100'
        )
        const data = await response.json()
        setChannels(data.channels)
        setLoading(false) // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching channels:', error)
        setLoading(false) // Set loading to false in case of error
      }
    }

    fetchChannels()
  }, [])

  return (
    <div>
      {loading ? ( // Render skeleton loaders if data is loading
        <div>
          <h1>Loading...</h1>
          {/* Render skeleton loaders */}
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <Skeleton height={100} />
            </div>
          ))}
        </div>
      ) : (
        // Render StationContainer with channels data when data is loaded
        <StationContainer channels={channels} />
      )}
    </div>
  )
}

export default AllStations
