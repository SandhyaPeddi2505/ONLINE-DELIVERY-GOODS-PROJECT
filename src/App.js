import "./Components/Styles.scss";
import { useState, useEffect } from "react";
import "./styles.scss";
import "./Style.scss";
import React from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import HomeNew from "./Components/HomeNew";
import Login from "./Components/Login";
import "./Signup.scss";
import "./Forgotpassword.scss";
import "./Profile.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Components/Tracking.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from "./Components/ProtectedRoute";
import Rejectscreen from "./Components/Rejectscreen";

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
  const [uid, setUid] = useState("");
  const fun1 = (q) => {
    setUid(q)
  }
  return (
    <>


      <BrowserRouter>
        <Routes>
          {/* <Route element={<ProtectedRoute />}> */}
            <Route path='/agentdash' element={<Agentdash  dis={fun1} />} />
            <Route path="/rejectscreen" element={<Rejectscreen />} />

            <Route path="/confirmscreen" element={<Confirmscreen  dis1={uid} />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
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
