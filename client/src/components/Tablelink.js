import React from 'react'
import {Wave} from 'react-animated-text'
import {NavLink} from 'react-router-dom';
import { Button } from 'antd';

const Tablelink = () => {
  return (
    <div className='intouch'>
          <div className='wv'><Wave text="Hello there Admin"/></div>
          <div><h3>Wanna edit some data? </h3></div>
          <div>
            <NavLink to="/table">
            <Button type="primary">Data visibility</Button>
            </NavLink>
            </div>
      </div>
  )
}

export default Tablelink