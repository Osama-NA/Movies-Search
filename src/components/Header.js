import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{
    return(
        <nav className="Header">
            <div className="mobile-nav">
                <Link to="/"><h1><sup>Boring</sup> Movies <sub>Boring</sub></h1></Link>
                <i className="fa fa-ellipsis-v menu-btn" />
            </div>
            <ul>
                <li>
                    <Link to="/Search" id="search-nav-link">Search</Link>
                </li>
                <li>
                    <Link to="/Bookmarked">Bookmarked</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;