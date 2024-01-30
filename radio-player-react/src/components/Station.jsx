import React from 'react'
import Skeleton from 'react-loading-skeleton'

const Station = ({ channel }) => {
  const { color, image, liveaudio, name, tagline } = channel

  // Check if channel data is available
  const isDataAvailable = color && image && liveaudio && name && tagline

  return (
    <>
      {isDataAvailable ? (
        <li key={channel.id}>
          <div style={{ backgroundColor: `#${color}` }}>
            <div className="channel">
              <h2>{name}</h2>
              <img src={image} alt={name} />
              <audio controls>
                <source src={liveaudio.url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </li>
      ) : (
        // Render skeleton loader if channel data is not available
        <li>
          <Skeleton height={120} count={1} />
        </li>
      )}
    </>
  )
}

export default Station
