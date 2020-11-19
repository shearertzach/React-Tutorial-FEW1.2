import React from 'react'
import './POPOSSpace.css'

function POPOSSpace(props) {
  const { name, image, address, likes } = props
  return (
    <div className="POPOSSpace">
      <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
      <h1>{name}</h1>
      <div>{address}</div>
      <h3>Likes: {likes}</h3>
    </div>
  )
}

export default POPOSSpace