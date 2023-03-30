import Submit from "./Components/Submit";
import Source from "./Components/Source";
import Destination from "./Components/Destination";
import Layout from "./Components/Layout";
import Confirm from "./Components/Confirm";
import "./Components/Styles.scss";
import axios from "axios";
import {useState,useEffect} from "react";
import Next from "./Components/Other.jsx";
import "./styles.scss";
import Primary from "./Components/Primary";
import Hello from "./Components/Hello";

// import logo from './logo.svg';
// import './App.css';
import "./Style.scss";
import React from 'react';
import Agent from './Components/Agent';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeNew from './Components/HomeNew';
import Home from './Components/Home';
import Previous from "./Components/Previous";
import Agentdash from './Components/Agentdash';
import Tracking from "./Components/Tracking";
import Confirmscreen from "./Components/Confirmscreen";

const App=()=>{
  

  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<HomeNew />} />
      <Route path="/primary1" element={<Primary />} />
      <Route path="/hi" element={<Hello />} />
      <Route path="/t" element={<Layout/>}/>
      <Route path="/source" element={<Source/>}/>
      <Route path="/destination" element={<Destination/>}/>
      <Route path="/submit" element={<Submit/>}/>
      <Route path="/confirm" element={<Confirm/>}/>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/agent' element={<Agent/>}/>
      <Route path='/agentdash' element={<Agentdash/>}/>
      <Route path='/previous' element={<Previous/>}/>
      <Route path="/tracking" element={<Tracking/>}/>
      <Route path="/confirmScreen" element={<Confirmscreen/>}/>
      
    </Routes>
    </BrowserRouter>
  
    </>
  )
}
export default App;

