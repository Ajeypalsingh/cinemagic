import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className='container flex'>
                <div className='heading'>
                    <figure>
                        <img src='https://cdn-icons-png.flaticon.com/512/2798/2798007.png' alt='cine-icon' />
                    </figure>
                    <h1>Cinemagic</h1>
                </div>

                <div className='search-movie'>
                    <input type='text' placeholder='Search movies' />
                    <button className='search-btn'>Search</button>
                </div>

                <nav>
                    <ul>
                        <li><NavLink className={navData => (navData.isActive ? "active" : "")} to="/cinemagic">Home</NavLink></li>
                        <li><NavLink className={navData => (navData.isActive ? "active" : "")} to="/new">Add Movie</NavLink></li>
                    </ul>
                </nav>

                <div className='bar-icon'>
                <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </header>
    )
}

export default Header;