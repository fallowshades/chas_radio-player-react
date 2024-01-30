import React, { useState } from 'react'

const Filter = ({ channels, setFilteredChannels }) => {
  const [searchQuery, setSearchQuery] = useState('')

  // Function to handle input change
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value)
    // Filter the channels based on the search query
    const filteredChannels = channels.filter((channel) =>
      channel.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setFilteredChannels(filteredChannels)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search stations..."
        value={searchQuery}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default Filter
