import React from 'react'
import './Button.css'
import { NavLink } from "react-router-dom";
import { Button } from 'antd';

const Buttons = () => {
    return (
        <div className="btn" className="link-button">
        <div>
            <NavLink to="/contact"><Button  type="primary">Contact Us</Button></NavLink>
        </div>
        <div>
            <NavLink to="/login"><Button>Login</Button></NavLink>
        </div>
        <div>
        <NavLink to="/signup"><Button>Register</Button></NavLink>
        </div>
        </div>
    )
}

export default Buttons