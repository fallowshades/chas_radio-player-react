const Station = ({ channel }) => {
  console.log(channel)
  return (
    <>
      {' '}
      <li key={channel.id}>
        <h2>{channel.name}</h2>
        <img src={channel.image} alt={channel.name} />
        <audio controls>
          <source src={channel.liveaudio.url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </li>
    </>
  )
}
export default Station
