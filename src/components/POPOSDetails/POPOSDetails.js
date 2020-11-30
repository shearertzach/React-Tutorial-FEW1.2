import React from 'react'
import './POPOSDetails.css'
import POPOSFeatureList from '../POPOSFeatures/POPOSFeatureList'
import data from '../../sfpopos-data.js'

function POPOSDetails(props) {
    const { id } = props.match.params // Location index
    const { images, title, desc, likes, features, geo } = data[id]
    return (
        <div className="POPOSDetails">
            <div className="POPOSDetails-image">
                <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt={title} />
            </div>
            <div className="POPOSDetails-info">
                <h1 className="POPOSDetails-title">{title}</h1>
                <p className="POPOSDetails-desc">{desc}</p>
                <p className="POPOSDetails-likes">{likes}</p>
                <POPOSFeatureList features={features} />
                <p className="POPOSDetails-geo">{geo.lat} {geo.lon}</p>
            </div>
        </div>
    )
}

export default POPOSDetails