import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeNew from './Components/HomeNew';
import Home from './Components/Home';
// import Previous from "./Components/Previous";
// import Agentdash from './Components/Agentdash';

// import Confirmscreen from "./Components/Confirmscreen";
// import StepperWrapper from "./Components/StepperWrapper";

import Login from './Components/Login';
import "./Login.scss";
import "./Signup.scss";
import "./OTP.scss";
import "./Changepassword.scss";
import "./Forgotpassword.scss";
import "./Profile.scss";
import"./Components/Tracking.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
// import OTP from './Components/OTP';
// import User from './Components/User';
// import Changepassword from './Components/Changepassword';
// import Profile from './Components/Profile';
// import Forgotpassword from './Components/Forgotpassword';

const App = () => {
  // function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const handleLogin = () => {
    //   setIsAuthenticated(true);
    // };
  
    const checkUserToken = () => {
      const userToken = localStorage.getItem("token");
  
      if (!userToken || userToken === "undefined") {
        setIsLoggedIn(false);
        Navigate("/");
        // toast.warn("redirecting you to login page please login into and access it!")
      }
      else{
        // <Navigate  to =''
      }
  
      setIsLoggedIn(true);
    // };
  
    useEffect(() => {
      checkUserToken();
    }, [isLoggedIn]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/home" element={<HomeNew />} /> */}
          {/* <Route path="/primary1" element={<Primary />} /> */}
          {/* <Route path="/hi" element={<Hello />} /> */}
          <Route path="/t" element={<Layout />} />
          <Route path="/source" element={<Source />} />
          {/* <Route path="/destination" element={<Destination />} /> */}
          {/* <Route path="/submit" element={<Submit />} /> */}
          {/* <Route path="/confirm" element={<Confirm />} /> */}
          <Route path='/' element={<Home />}></Route>
          <Route path='/agent' element={<Agent />} />
          {/* <Route path='/agentdash' element={<Agentdash />} /> */}
          {/* <Route path='/previous' element={<Previous />} /> */}
          {/* <Route path="/tracking" element={<VerticalStepper />} /> */}
          {/* <Route path="/confirmScreen" element={<Confirmscreen />} /> */}
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          {/* <Route path='/OTP' element={<OTP />}></Route> */}
          {/* <Route path='/user' element={<User />}></Route> */}
          {/* <Route path='/changepassword' element={<Changepassword />}></Route> */}
          {/* <Route path='/profile' element={<Profile />}></Route> */}
          {/* <Route path='/forgotpassword' element={<Forgotpassword />}></Route> */}
        </Routes>
      </BrowserRouter>
      <React.Fragment>
      {isLoggedIn && <HomeNew />}

      <Outlet />

      {isLoggedIn && <Login />}
    </React.Fragment>
  <ToastContainer/>
    </>
  );
};
};
export default App;
