import React from 'react'
import { useHistory } from 'react-router-dom'
import './RandomSpace.css';
import data from '../../sfpopos-data.json'

function RandomSpace() {
    const history = useHistory()
    return (
        <button className="random-button" onClick={(e) => {
            const id = Math.floor(Math.random() * data.length)
            history.push(`/details/${id}`)
        }}>Show me a random space</button>
    )
}

export default RandomSpace