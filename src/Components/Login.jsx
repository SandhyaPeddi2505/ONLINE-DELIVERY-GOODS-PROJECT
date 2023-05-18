import React from "react";
import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import abc from "./online.png";
import Navbar from "./Navbar";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("");
  const [emailError, setemailError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setErrors] = useState();
  // const[loggedin,setLoggedin]=useState();
  const [loggedin, setLoggedin] = useState("");

  const validateEmail = (e) => {
    var email = e.target.value;
    setEmail(e.target.value);
    if (validator.isemail(email)) {
      setemailError("");
    } else {
      setemailError("Enter valid userName!");
    }
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
   

    axios
      .post('http://ec2-65-0-179-201.ap-south-1.compute.amazonaws.com:8001/login/',
        payload, 
       
    )
      .then((response) => {
        if (!email || !password) {
          toast.warn("Enter all fields");
        } else if (response?.status === 200) {
          localStorage.setItem("token", response.data.token);
          console.log(response?.status);
          let type = response.data.user_type;
          console.log(type);
          console.log(response);
          if (response.data.loggedin === "permanent") {
            navigate("/home");
          } 
          else if(response.data.loggedin === "tempoorarily"){
          navigate("/createProfile");
        }
        }
      })
      .catch((error) => {
        console.log(error.response.data); // handle error
      });
    

    setErrors({});

  };
  // const logout = () => {
  //   localStorage.removeItem('token');
  // }
  // useEffect(() => {
  //   logout();
  // }, []);


  return (
    <>
      <Navbar />
      <div className="yes">
        <div className="flex">
          <div className="form">
            <div className="mm">
              <img src={abc} alt="dele" height="500" width="500" />
            </div>
          </div>
          <div className="nn">
            <div className="mb-3">
              <h1>Log In</h1>
            </div>
            <form>
              <div className="mb-3" id="formBasicemail">
                <label>
                  <p style={{ fontSize: 16, color: 'black', paddingTop: 20, alignItems: 'center' }}>                  Email
                  </p>
                 
                  </label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => validateEmail(e)}
                  placeholder="Enter email"
                  className="form-control" 
                />
                <span style={{ color: "red" }}>{emailError}</span>
                <div className="text-muted">
                  <p style={{color:"black"}}>We'll never share your email with anyone else.</p> 
                </div>
              </div>
              <div className="mb-4" id="formBasicPassword">
                <label>
                  <p style={{ fontSize: 16, color: 'black', paddingTop: 5, alignItems: 'center' }}>
                    Password
                    </p>
                  </label>
                <input
                  type="password"
                  onChange={handlePassword}
                  required
                  placeholder="Password"
                  className="form-control"
                ></input>
              </div>
          
              <div className="d-flex flex-row justify-content-center">
                <button
                style={{width:290}}
                  onClick={handleSubmit}
                  className="btn btn-primary"
                  type="LogIn"
                >
                  {" "}
                  Log In{" "}
                </button>
              </div>
              
              <div className="d-flex flex-row justify-content-center">
                <p style={{ fontSize: 16, color: 'black', paddingTop: 20, alignItems: 'center' }}>
                  {" "}
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    style={{ color: "blue", textDecoration: "underline" }}
                  >
                    Signup
                  </Link>
                </p></div>
              <div className="d-flex flex-row justify-content-center">
                <a
                  className="small text-muted"
                  style={{ textDecoration: "none" }}
                >

                  <Link
                    to="/OTP"
                    style={{ color: "blue", textDecoration: "none", fontSize: 16 }}
                  >
                    <p>Forgot Password?</p>
                  </Link>
                </a>
              </div>
            </form>
          </div>
        </div >
        <ToastContainer />
      </div >
    </>
  );
};
export default Login;
