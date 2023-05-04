import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import { toast } from "react-toastify";


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
