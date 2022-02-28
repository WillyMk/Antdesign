import './App.css';
import React,{useState,useEffect} from 'react';
import Register from './components/Register';
import Registtration from './components/Register/Register';
import Login from './components/Login';
import AboutPage from './components/AboutUs/AboutPage';
import Home from './views/Home';
import Error from './components/Error';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import { Spin } from 'antd';
import { BackTop } from 'antd';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="App">
        {loading ? (
        <Spin size="large"/>
      ) : (
    <BrowserRouter>
    <BackTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/signup" element={<Registtration/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/health" element={<AboutPage/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    
    </BrowserRouter>
    )}
    </div>
  );
}

export default App;
