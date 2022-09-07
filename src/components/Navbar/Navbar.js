import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import "../../App.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid mb-4">

                <Link to="/" className="fs-3 ubuntu navbar-brand">
                    Rick & Morty <span className="text-primary">WiKi</span> 
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    
                    <style jsx>
                        {`
                        button[aria-expanded="false"] > .close{
                            display:none;
                        }

                        button[aria-expanded="true"] > .open{
                            display:none;
                        }
                        `}
                    </style>

                    <i class="fa-solid fa-bars open fw-bold text-dark"></i>
                    <i class="fa-solid fa-x close fw-bold text-dark"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav fs-5">

                        <NavLink className="nav-link" to="/" activeClassName="active">Characters</NavLink>
                        <NavLink className="nav-link" to="/episodes">Episodes</NavLink>
                        <NavLink className="nav-link" to="/locations">Locations</NavLink>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
