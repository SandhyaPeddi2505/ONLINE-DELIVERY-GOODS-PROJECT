import "./Components/Styles.scss";
import { useState, useEffect } from "react";
import "./styles.scss";
import "./Style.scss";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import HomeNew from "./Components/HomeNew";
import Login from "./Components/Login";
import "./Signup.scss";
import "./Forgotpassword.scss";
import "./Profile.scss";
import "./Components/Tracking.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [key1, setKey1] = useState([]);
  const ddata = (l) => {
    setKey1(() => [l]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  };

  const checkUserToken = () => {
    const userToken = localStorage.getItem("token");

    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      Navigate("/");
      // toast.warn("redirecting you to login page please login into and access it!")
    }
    setIsLoggedIn(true);
  };

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
      <ToastContainer />
    </>
  );
};

export default App;
