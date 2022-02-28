import React from 'react';
import './about.css';
import VideoBg from "reactjs-videobg";
import Videos from "./Videos/video2.mp4";

const About = () => {
  return (
  <div className='About'>
    <p>.</p>
    <div className='abouttext'>
         <h1>Smart Health</h1>
         <div className='text-white'>
         <p>Smart Health is a system in which it ensures that a hospital is able to carry out modern duties using Smart Technology</p>
         </div>
    </div>

    <div className="video">
        <VideoBg>
          <VideoBg.Source src={Videos} type="video/mp4"/>
        </VideoBg>
      </div>
  </div>
  );
};

export default About;
