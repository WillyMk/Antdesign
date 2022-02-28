import React from 'react'
import './Footer.css'
import Photo from './logo.png';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return (
    <section className="footer flex flex-col text-center lg:flex-row ">
        <div className='new'>
            <div>
            <h1>SMART SOCIAL</h1>
            </div>
            <div className='flex flex-col mt-2'>
                <h3>Tell:............ (+254) 718 639 654</h3>
                    <h3>Tell:............ (+254) 100 418 482</h3>
                    <h3>Email:........ Smart@gmail.com</h3>
            </div>
        </div>

        <div className="serve">
            <h1>Services</h1>
            <NavLink to="/website"><p>Great Company insights</p></NavLink>
            <NavLink to="/consultancy"><p> IT Consultancy</p></NavLink>
            <NavLink to="/softwareservices"><p>Open expression</p></NavLink> 
        </div>

        <div className="abo">
            <h1>About</h1>
            <NavLink to="/about"><p>About Us</p></NavLink>
            <NavLink to="/">  <p>Our Portfolio</p></NavLink>
            <NavLink to="/jobs"> <p>Jobs & Careers</p></NavLink>
        </div>
        <div className="lat">
            <h1>Latest</h1>
            <NavLink to=""><p>Login / Register</p></NavLink>
            <div className="column-icon">
                    <a href="http://facebook.com/Wilson Mk" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook-square"></i>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/willy_youngDev" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://github.com/WillyMk" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github"></i></a>
                        <a href="https://github.com/WillyMk" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-youtube"></i>
                    </a>
                    </div>
                    <NavLink to="/contact"><p>Talk with us today</p></NavLink> 
        </div> 
        <div class="custom-shape-divider-bottom-1645728878">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <rect x="1200" height="3.6"></rect>
        <rect height="3.6"></rect>
        <path d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z" class="shape-fill"></path>
    </svg>
</div>
        </section>
    )
}

export default Footer
