import React from 'react'

export default function LocationCard (props) {
  const { name, type, dimension, residents } = props;
  return (
    <div className = "location-card">
      <h2>{name}</h2>
      <p>{type}</p>
      <p>{dimension}</p>
      <p>Residents: </p>
      {residents.map(resident => (
        <div key = {resident} className = "resident">
          {resident}
        </div>
      ))}
    </div>
  )
}

