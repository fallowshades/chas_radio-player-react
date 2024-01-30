import Station from './Station'
const StationContainer = ({ channels }) => {
  return (
    <div>
      <div>
        <h1>Radio Channels</h1>
        <ul>
          {channels.map((channel) => (
            <Station channel={channel} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default StationContainer
