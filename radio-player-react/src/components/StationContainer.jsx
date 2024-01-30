import Station from './Station'
import Skeleton from 'react-loading-skeleton'
const StationContainer = ({ channels }) => {
  return (
    <div>
      <div>
        <h1>Radio Channels</h1>
        <ul>
          {/* Render skeleton loaders if channels data is not available */}
          {channels.length === 0
            ? Array.from({ length: 5 }).map((_, index) => (
                <li key={index}>
                  <Skeleton height={100} />
                </li>
              ))
            : // Render station components if channels data is available
              channels.map((channel) => (
                <Station key={channel.id} channel={channel} />
              ))}
        </ul>
      </div>
    </div>
  )
}
export default StationContainer
