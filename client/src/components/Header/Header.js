import React from 'react';
import './Header.css';
import { Button } from 'antd';
import Particle from './Particle'
import {NavLink} from 'react-router-dom';
import Typed from "react-typed"
import {Wave} from 'react-animated-text';
const Header = () => {
  return (
  <div className='head'>
  <div className='pts'>
    <div className="wv">
    <Wave text="What we got for you in store" />
    </div>
    
  <div className="type">
            <div className="type2">
                <span>
                        {""}
                        <h2>
                            {""}
                            <Typed
                            strings={["Smart Health", "Abacus", "Digital Solutions","Smart Core","Cyber Security","Marketing","Data Analysis",]}
                            typeSpeed={50}
                            backSpeed={50}
                            loop
                            />
                        </h2>
                        <span className="type3">
                          Smart Social is a system for disseminating information over the Internet to a selected group of followers.
                          <br/>new It's an online platform for the Smart flaternity It provides a better insight to Employees and also already serving employers is need be <br/>
                         Smart anchor's on modern technology to deliver it's promise. So should you !     
                        </span>
                    </span>
                    </div>
                    <div className=''>
                      <NavLink to='/videos'>
                     
                    </NavLink>
                    </div>
        </div>
        <div>
          <NavLink to="login">
          <Button type='primary' className='btn'>Check Videos</Button>
          </NavLink>
        </div>
        
  </div>
  <Particle/>
  <div class="custom-shape-divider-bottom-1645722053">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
  </div>
  );
};

export default Header;
