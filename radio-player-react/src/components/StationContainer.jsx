import Station from './Station'
import Skeleton from 'react-loading-skeleton'
import React, { useState } from 'react'
import Filter from './Filter'
const StationContainer = ({ channels }) => {
  const [filteredChannels, setFilteredChannels] = useState(channels)

  return (
    <>
      <div>
        <Filter channels={channels} setFilteredChannels={setFilteredChannels} />
      </div>
      <div>
        <div>
          <h1>Radio Channels</h1>
          <ul>
            {/* Render skeleton loaders if channels data is not available */}
            {filteredChannels.length === 0
              ? Array.from({ length: 5 }).map((_, index) => (
                  <li key={index}>
                    <Skeleton height={100} />
                  </li>
                ))
              : // Render station components if channels data is available
                filteredChannels.map((channel) => (
                  <Station key={channel.id} channel={channel} />
                ))}
          </ul>
        </div>
      </div>
    </>
  )
}
export default StationContainer
