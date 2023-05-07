import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
  return (
    <div>
        <nav class="navbar bg-body-tertiary kNav">
            <div class="container-fluid">
                <Link to="/">
                    <span class="navbar-brand mb-0 h1">HOME</span>
                </Link>
                <div>
                    MOVIES/SHOWS
                </div>
                <div>
                    <Link to="/booking">
                        <button>BOOK NOW</button>
                    </Link>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header
