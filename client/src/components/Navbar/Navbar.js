import React,{useState} from 'react'
import './Navbar.css'
import Button from './Button'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    const [click,setClick] = useState(false);

    const handleClick =()=>{
        setClick(!click);
    }
    const closeMenu =() => {setClick(false)}
    return (
        <>
            <nav className="navbar">
            <div className='navbar-logo'>
                <h1>SMART SOCIAL</h1>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='nav-itemx'>
                        <NavLink to='/' className="nav-NavLinks text-white" 
                        onClick={closeMenu}>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/about' className="nav-NavLinks text-white" 
                        onClick={closeMenu}>About Us</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/services' className="nav-NavLinks text-white" 
                        onClick={closeMenu}>Services</NavLink>
                        
                    </li>
                    <li className='nav-item'>
                    <Button/>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
