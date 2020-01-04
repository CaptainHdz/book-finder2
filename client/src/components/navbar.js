import React from 'react';
// import './style.css';

function Navbar() {
    return (
        <div>
            <nav className="shadow-lg navbar mb-0 bg-dark-brown">
                <a className="navbar-brand text-light font-weight-bold" href="/">Book Genie</a>
                <ul className="navbar-nav ml-5 mr-auto">
                    <li className="mt-0  nav-item">
                        <a className="nav-link text-light" href="/saved">Saved Books</a>
                    </li>
                </ul>
            </nav> 
        </div>

    )

};

export default Navbar;

