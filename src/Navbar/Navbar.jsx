import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='web-navbar'>Anonime</div>
            <div className='home-navbar'>Home</div>
            <div className='list-navbar'>List anime</div>
            <div className='search-navbar'><div className='search-placeholder'>Search anime or movie</div></div>
        </div> 
    )
}

export default Navbar
