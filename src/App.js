// import logo from './logo.svg';
// import './App.css';
import "./Style.scss";
import React from 'react';
import Agent from './Components/Agent';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Previous from "./Components/Previous";
import Agentdash from './Components/Agentdash';
import Tracking from "./Components/Tracking";
import Confirmscreen from "./Components/Confirmscreen";
// import {Browserrouter,Routes,Route} from "react-dom"

const App=()=> {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/agent' element={<Agent/>}/>
      <Route path='/agentdash' element={<Agentdash/>}/>
      <Route path='/previous' element={<Previous/>}/>
      <Route path="/tracking" element={<Tracking/>}/>
      <Route path="/confirm" element={<Confirmscreen/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App;