import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import abc from "./online.png";

const Login = () => {
  const navigate = useNavigate();
  const [username, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);
  

  const [usernameError, setuserNameError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setErrors] = useState();

  const validateuserName = (e) => {
    var username = e.target.value;
    setuserName(e.target.value);
    if (validator.isuserName(username)) {
      setuserNameError("");
    } else {
      setuserNameError("Enter valid userName!");
    }
  };
  // function nav() {
  //   if (loggedIn === 'temporary') {
  //     // navigate to page 1
  //     navigate('/createProfile');
  //   } else {
  //     // navigate to page 2
  //     navigate('/home');
  //   }
  // }
  function user() {
    if (userType === 'Agent') {
      // navigate to page 1
      navigate('/agent');
    } else {
      // navigate to page 2
      navigate('/login');
    }
  }
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      username: "santhoshd@example.com", password: "Santhu@123"
    }
    axios
      .post('http://ec2-3-110-189-227.ap-south-1.compute.amazonaws.com:8001/token/',
        payload
      )
      .then((response) => {
            if (!username || !password) {
              toast.warn("Enter all fields");
            } else if (response?.status === 200) {
            
              console.log(response?.status);
              let type=response.data.user_type;
              console.log(type);
              console.log(response);
              if(type=='temporary')
              navigate('/createProfile');
              else
              navigate('/home');
             
       
              
             
              console.log(response);
              navigate('/createProfile');
            }
          })
          .catch((error) => {
            console.log(error.response.data); // handle error
          });
        

   
    setErrors({});

    {
      //   navigate("/profile");
      //   window.location.reload();
    }
  };
 
  
  const storeToken = (token) => { sessionStorage.setItem('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY4MjQ4NzE5OSwiaWF0IjoxNjgyNDAwNzk5LCJqdGkiOiI2M2I1Mzc4ZmMwZGY0NGE4YTM3MmQwYjY4YzViYWY5OSIsInVzZXJfaWQiOiJOb25lIn0.vzDg7vd2wcxF9XhaYr7guth4hvQ1TmD9Kbrz6Yzmn9M","access":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgyNDAyODk5LCJpYXQiOjE2ODI0MDA3OTksImp0aSI6IjQ5MjVhNTAyMTg5MzQzMzM5MzQ4MDQ1NmIyZTcwODg2IiwidXNlcl9pZCI6Ik5vbmUifQ.cE8y0_5rD-oYSdVbWpMnLSy1qbKx89Pnljz7VqfIOWM', token); } 

  return (
    <>
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
              <div className="mb-3" id="formBasicuserName">
                <label>username address</label>
                <input
                  type="email"
                  id="username"
                  onChange={(e) => validateuserName(e)}
                  placeholder="Enter email"
                  className="form-control"
                />
                <span style={{ color: "red" }}>{usernameError}</span>
                <div className="text-muted">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3 " id="formBasicPassword">
                <label>Password</label>
                <input
                  type="password"
                  onChange={handlePassword}
                  required
                  placeholder="Password"
                  className="form-control"
                ></input>
              </div>
              
              <div className="mt-2">
                <button
                  onClick={handleSubmit}
                  className="btn btn-primary"
                  type="LogIn"
                >
                  {" "}
                  Log In{" "}
                </button>
              </div>
              <div className="d-flex flex-row justify-content-end">
                <a
                  className="small text-muted"
                  style={{ textDecoration: "none" }}
                >
  
                  <Link
                    to="/OTP"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Forgotpassword?
                  </Link>
                </a>
              </div>
              <p>
                {" "}
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  style={{ color: "blue", textDecoration: "none" }}
                >
                  Signup
                </Link>
              </p>
            </form>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
};
export default Login;
