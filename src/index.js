import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Routing from "./Components/Routing"
import Submit from "./Components/Submit";
import Source from "./Components/Source";
import Destination from "./Components/Destination";
import Layout from "./Components/Layout";
import Confirm from "./Components/Confirm";
import "./Components/Styles.scss";
import { Outlet } from "react-router-dom";
import Next from "./Components/Other.jsx";
import "./styles.scss";
import Primary from "./Components/Primary";
import Hello from "./Components/Hello";
import "./Style.scss";
import Agent from "./Components/Agent";
import "bootstrap/dist/css/bootstrap.css";
import HomeNew from "./Components/HomeNew";
import Home from "./Components/Home";
import Previous from "./Components/Previous";
import Agentdash from "./Components/Agentdash";
import Tracking from "./Components/Tracking";
import Confirmscreen from "./Components/Confirmscreen";
import StepperWrapper from "./Components/StepperWrapper";
import Login from "./Components/Login";

import ProtectedRoute from "./Components/ProtectedRoute";

import "./Login.scss";
import "./Signup.scss";
import "./OTP.scss";
import "./Changepassword.scss";
import "./Forgotpassword.scss";
import Create from "./Components/CreateProfile";
import "./Profile.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import OTP from "./Components/OTP";
import User from "./Components/User";
import Changepassword from "./Components/Changepassword";
import Profile from "./Components/Profile";
import Forgotpassword from "./Components/Forgotpassword";
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/home' element={
<ProtectedRoute>
<HomeNew />
</ProtectedRoute>
} />
           
            <Route path='/primary1' element={
<ProtectedRoute>
<Primary />
</ProtectedRoute>
} />
          
            <Route path='/hi' element={
<ProtectedRoute>
<Hello />
</ProtectedRoute>
} />
           
            <Route path='/source' element={
<ProtectedRoute>
<StepperWrapper/>
</ProtectedRoute>
} />
            
            <Route path='/destination' element={
<ProtectedRoute>
<Destination />
</ProtectedRoute>
} />
           
            <Route path='/submit' element={
<ProtectedRoute>
<Submit />
</ProtectedRoute>
} />
           
            <Route path='/confirm' element={
<ProtectedRoute>
<Confirm />
</ProtectedRoute>
} />
           
           {/* <Route path='/agent' element={ */}
{/* // <ProtectedRoute>
// <Agent/>
// </ProtectedRoute>
// } /> */}
            
            <Route path='/agentdash' element={
<ProtectedRoute>
<Agentdash />
</ProtectedRoute>
} />
            
            <Route path='/previous' element={
<ProtectedRoute>
<Previous/>
</ProtectedRoute>
} />
           
            <Route path='/tracking' element={
<ProtectedRoute>
// <Tracking />
</ProtectedRoute>
} />
            
            <Route path='/confirmScreen' element={
<ProtectedRoute>
<Confirmscreen />
</ProtectedRoute>
} />
           
            
            <Route path='/OTP' element={
<ProtectedRoute>
<OTP />
</ProtectedRoute>
} />
         
            <Route path='/user' element={
<ProtectedRoute>
<User />
</ProtectedRoute>
} />
      
            <Route path='changepassword' element={
<ProtectedRoute>
<Changepassword />
</ProtectedRoute>
} /> 
    <Route path='/profile' element={
<ProtectedRoute>
<Profile />
</ProtectedRoute>
} />
           
            <Route path='/createProfile' element={
<ProtectedRoute>
<Create />
</ProtectedRoute>
} />
            
            <Route path='/forgotpassword' element={
<ProtectedRoute>
<Forgotpassword />
</ProtectedRoute>
} />
                
                     {/* <Route path='/' element={
<ProtectedRoute>
<Home />
</ProtectedRoute> */}
{/* 
             <Route path="home" element={<PublicRoutes />
             <Route path="/" element={<Home />} /> 
             </Route> */}
             <Route path="/" element={<Home />}/>
             <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />} />
             <Route path="/agent" element={<Agent />} />
             {/* <Route path="*" element={<div>Page Not Found!!</div>} />
             <Route path="/createProfile" element={<Create />} />
             <Route path="/denied" element={<PermissionDenied />} /> 
             <Route path="/home" element={<HomeNew />} />
             <Route path="/primary1" element={<Primary />} />
             <Route path="/hi" element={<Hello />} />
             <Route path="/source" element={<StepperWrapper />} />
             <Route path="/destination" element={<Destination/>}/>
             <Route path="/confirm" element={<Confirm/>}/>
             <Route path="/submit" element={<Submit/>}/> */}
             {/* <Route path="agent" element={<ProtectedRoute roleRequired="AGENT" />} >
             <Route path="/agent" element={<Agent />} />  */}
             {/* </Route> */}
             
             {/* <Route path="/t" element={<Layout/>}/> 
              <Route path="/agentdash" element={<Agentdash />} />
             <Route path="/previous" element={<Previous />} />
             <Route path="/tracking" element={<Tracking />} />
             <Route path="/confirmScreen" element={<Confirmscreen />} />
             <Route path="/OTP" element={<OTP />} />
             <Route path="/user" element={<User />} />
             <Route path="/changepassword" element={<Changepassword />} />
             <Route path="/profile" element={<Profile />} />
           
             <Route path="/forgotpassword" element={<Forgotpassword />} /> */}
        
          {/* </Route> */}
        </Routes>
       </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
