import React from 'react'
import './Footer.css'

function getYear() {
  const today = new Date()
  return today.getFullYear()
}

function Footer() {
  return (
    <div className="Footer">
      <h3>Zach Shearer copyright {getYear()}</h3>
    </div>
  )
}

export default Footer