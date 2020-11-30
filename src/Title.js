import React from 'react'
import './Title.css';
import { NavLink } from 'react-router-dom'

function Title() {
    return (
        <div className="Title">
            <h1>SFPOPOS</h1>
            <div className="Title-Subtitle">San Francisco Privately Owned Public Open Spaces</div>

            <div>
                <NavLink
                    className="nav-link"
                    activeClassName="nav-link-active"
                    exact
                    to="/">List</NavLink>

                <NavLink
                    className="nav-link"
                    activeClassName="nav-link-active"
                    to="/about">About</NavLink>
            </div>
        </div>
    )
}

export default Title