import React from 'react'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Tablelink from '../components/Tablelink';
import Divider from '../components/Divider';
import Stats from '../components/Stats';
import Progress from '../components/Progress';


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Tablelink/>
        <Divider/>
        <Stats/>
        <Progress/>
    </div>
  )
}

export default Home