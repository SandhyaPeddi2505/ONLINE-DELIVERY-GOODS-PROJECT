import Submit from "./Components/Submit";
import Source from "./Components/Source";
import Destination from "./Components/Destination";
import Layout from "./Components/Layout";
import Confirm from "./Components/Confirm";
import "./Components/Styles.scss";
import axios from "axios";
import {useState,useEffect} from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App=()=>{
  

  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/t" element={<Layout/>}/>
      <Route path="/" element={<Source/>}/>
      <Route path="/destination" element={<Destination/>}/>
      <Route path="/submit" element={<Submit/>}/>
      <Route path="/confirm" element={<Confirm/>}/>
    </Routes>
    </BrowserRouter>
    {/* <div> */}
    {/* <Submit/> */}
    {/* </div> */}
    {/* <div>
    <Source primaryAddress={primaryAddress} />
      <Source primaryAddress={primaryAddress} setPrimaryAddress={setPrimaryAddress} />
    </div> */}
    
    </>
  )
}
export default App;