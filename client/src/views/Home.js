import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Uploads from '../components/Uploads/Uploads';
import Tables from '../components/Tables';
import Contact from '../components/Contact/Contact';
import FormUpdate from '../components/FormUpdate';
import Footer from '../components/Footer/Footer';
import Bottom from '../components/Bottom/bottom';

const Home = () => {
  return (
    <div> 
        <Navbar/>
        <Header/>
        <Uploads/>
        <Contact/>
        <FormUpdate/>
        <Tables/>
        <Footer/>
        <Bottom/>
    </div>
  )
}

export default Home