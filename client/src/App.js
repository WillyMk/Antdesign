import './App.css';
import React,{useState,useEffect} from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Home from './views/Home';
import Error from './components/Error';
import Table from './components/Table';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
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
        <Route path="/login" element={<Login/>}/>
        <Route path="/table" element={<Table/>}/>
        <Route path="/form" elememt={<Form/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    
    </BrowserRouter>
    )}
    </div>
  );
}

export default App;
