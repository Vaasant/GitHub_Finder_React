import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const  Navbar = ({icon,title}) =>  {
        return (
            <nav className="navbar bgheaderNavbar" >
                <h1 className="titlebg"> <i className={icon} ></i> {title}</h1>
                <ul>
                    <li>
                        <Link to="/" className="titlebg" >Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="titlebg">About</Link>
                    </li>
                </ul>
            </nav>
        )
    
}

 Navbar.defaultProps={
    title :'GitHub Finder',
    icon: 'fab fa-github'
}

Navbar.propTypes= { 
    title :PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
