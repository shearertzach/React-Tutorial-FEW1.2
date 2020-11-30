import React, { useState } from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace'
import '../POPOSList/POPOSList.css';
import data from '../../sfpopos-data.js'

function POPOSList() {
    const [query, setQuery] = useState('')

    const spaces = data.filter(obj => obj.title.includes(query) || obj.address.includes(query)).map((obj) => {
        const { id, title, address, images, hours, features } = obj
        return (
            <POPOSSpace
                id={id}
                key={title}
                name={title}
                address={address}
                image={images[0]}
                hours={hours}
            />
        )
    })

    return (
        <div className="POPOSList">

            <form>
                <input
                    value={query}
                    placeholder="search"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            { spaces}
        </div>
    )
}

export default POPOSList