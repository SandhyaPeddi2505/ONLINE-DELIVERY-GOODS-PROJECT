// import ProtectedRoute from "./protected";
import "./Components/Styles.scss";
import axios from "axios";
import {useState,useEffect} from "react";
import Next from "./Components/Other.jsx";
import "./styles.scss";
import Primary from "./Components/Primary";
import Hello from "./Components/Hello";
import "./Style.scss";
import React from 'react';
import Agent from './Components/Agent';
import "bootstrap/dist/css/bootstrap.css";
import HomeNew from './Components/HomeNew';
import Home from './Components/Home';
import Previous from "./Components/Previous";
import Agentdash from './Components/Agentdash';
import Tracking from "./Components/Tracking";
import Confirmscreen from "./Components/Confirmscreen";
import StepperWrapper from "./Components/StepperWrapper";
import Login from './Components/Login';
import "./Login.scss";
import "./Signup.scss";
import "./OTP.scss";
import "./Changepassword.scss";
import "./Forgotpassword.scss";
import Create from "./Components/CreateProfile";
import "./Profile.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import OTP from './Components/OTP';
import User from './Components/User';
import Changepassword from './Components/Changepassword';
import Profile from './Components/Profile';
import Forgotpassword from './Components/Forgotpassword';

const App=()=>{
  

  return(
    <>
    <BrowserRouter>
    <Routes>
    {/* <Route element={<ProtectedRoute/>}>
    <Route path="/" element={<Home />} />
</Route> */}
      <Route path="/home" element={<HomeNew />} />
      <Route path="/primary1" element={<Primary />} />
      <Route path="/hi" element={<Hello />} />
      {/* <Route path="/t" element={<Layout/>}/> */}
      <Route path="/source" element={<StepperWrapper/>}/>
      {/* <Route path="/destination" element={<Destination/>}/> */}
      {/* <Route path="/submit" element={<Submit/>}/> */}
      {/* <Route path="/confirm" element={<Confirm/>}/> */}
      <Route path='/' element={<Home/>}></Route>
      <Route path='/agent' element={<Agent/>}/>
      <Route path='/agentdash' element={<Agentdash/>}/>
      <Route path='/previous' element={<Previous/>}/>
      <Route path="/tracking" element={<Tracking/>}/>
      <Route path="/confirmScreen" element={<Confirmscreen/>}/>
      <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/OTP' element={<OTP/>}></Route>
          <Route path='/user' element={<User/>}></Route>
          <Route path='/changepassword' element={<Changepassword />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/createProfile' element={<Create />}></Route>
          <Route path='/forgotpassword' element={<Forgotpassword />}></Route>
    </Routes>
    </BrowserRouter>
  
    </>
  )
}
export default App;

