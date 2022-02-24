import React from 'react'
import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


const Headers = () => {
  return (
    <Carousel effect="fade">
    <div>
      <h3 style={contentStyle}>Am Loving</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Ant Design</h3>
    </div>
    <div>
      <h3 style={contentStyle}>It's actually</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Awesome</h3>
    </div>
  </Carousel>
  )
}

export default Headers