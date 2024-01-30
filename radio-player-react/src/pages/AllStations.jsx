import React, { useState, useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import StationContainer from '../components/StationContainer'

const AllStations = () => {
  const [channels, setChannels] = useState([])
  const [loading, setLoading] = useState(true)

  function Box({ children }) {
    return (
      <div
        style={{
          border: '1px solid #ccc',
          display: 'block',
          lineHeight: 2,
          padding: '1rem',
          marginBottom: '0.5rem',
          width: 100,
        }}
      >
        {children}
      </div>
    )
  }

  const fetchChannels = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
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
  useEffect(() => {
    fetchChannels()
  }, [])
  console.log(loading)
  return (
    <div>
      {loading ? ( // Render skeleton loaders if data is loading
        <div>
          <h1>Loading...</h1>
          {/* Render skeleton loaders */}
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <Skeleton wrapper={Box} count={3} />
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
