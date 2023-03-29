import Submit from "./Components/Submit";
import Source from "./Components/Source";
import Destination from "./Components/Destination";
import Layout from "./Components/Layout";
import Confirm from "./Components/Confirm";
import "./Components/Styles.scss";
import axios from "axios";
import {useState,useEffect} from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Next from "./Components/Other.jsx";

import "./styles.scss";
import Primary from "./Components/Primary";
import Home from "./Components/Home";
import Hello from "./Components/Hello";

const App=()=>{
  

  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/primary1" element={<Primary />} />
      <Route path="/hi" element={<Hello />} />
      <Route path="/t" element={<Layout/>}/>
      <Route path="/source" element={<Source/>}/>
      <Route path="/destination" element={<Destination/>}/>
      <Route path="/submit" element={<Submit/>}/>
      <Route path="/confirm" element={<Confirm/>}/>
      
    </Routes>
    </BrowserRouter>
  
    </>
  )
}
export default App;

