import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import abc from "./online.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };
  const validatePassword = (password) => {
    // Password validation regex
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
      );
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };
  const validateConfirmPassword = (confirmPassword) => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return false;
    } else {
      setConfirmPasswordError("");
      return true;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      // "username": username,

      email: email,

      password: password
    };
    if (!email || !password || !confirmPassword) {
      // alert("Enter all details");
      toast.error("Enter all Details");
    }

    // Check if all fields are valid before submitting
    if (
      validateEmail(email) &&
      validatePassword(password) &&
      validateConfirmPassword(confirmPassword)
    ) {
      // Submit form
      axios
        .post(
          "http://ec2-13-233-40-8.ap-south-1.compute.amazonaws.com:8001/register/",

          payload
        )
        .then(
          (response) => {
            console.log(response);

            // if (response?.status === 201) {
            toast.success("Register Successfully");
            setTimeout(function () {
              window.location.replace("/login");
            }, 1000);
            // setTimeout(() => {
            //   navigate("/login");
            // }, 6000);

            console.log(response?.status);
          }
          // }
        )

        .catch((error) => {
          console.log(error.response.data); // handle error
        });
    }
  };

  const loginNavigate = (e) => {
    navigate("/login");
    window.location.reload();
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="man">
          <div className="flex">
            <div className="">
              <div className="f">
                <img src={abc} alt="dele" height="500" width="500" />
              </div>
            </div>
            <div className="">
              <div className="pg">
                <h1>Sign Up</h1>

                <form onSubmit={handleSubmit}>
                  <div>
                    <div className="mb-3" id="formBasicEmail">
                      <label>
                        <p
                          style={{
                            fontSize: 16,
                            color: "black",
                            paddingTop: 5,
                            alignItems: "center"
                          }}
                        >
                          Email address
                        </p>
                      </label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        className="form-control"
                      required
                      />

                      <span style={{ color: "red" }}>{emailError}</span>
                    </div>
                    <div className="mb-3" id="formBasicLastName">
                      <label>
                        <p
                          style={{
                            fontSize: 16,
                            color: "black",
                            paddingTop: 5,
                            alignItems: "center"
                          }}
                        >
                          Password
                        </p>
                      </label>
                      <input
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                        className="form-control"
                      required
                      />

                      <span style={{ color: "red" }}>{passwordError}</span>
                    </div>
                    {/* {console.log(error)} */}
                    <div className="mb-3">
                      <label>
                        <p
                          style={{
                            fontSize: 16,
                            color: "black",
                            paddingTop: 5,
                            alignItems: "center"
                          }}
                        >
                          Confirm Password
                        </p>
                      </label>
                      <input
                        type="password"
                        name="cpassword"
                        className="form-control"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                      required
                      />

                      <span style={{ color: "red" }}>
                        {confirmPasswordError}
                      </span>
                    </div>

                    <button
                      // onClick={handleSubmit}
                      style={{ width: 250 }}
                      className="btn btn-primary"
                      type="Submit"
                    >
                      Submit
                    </button>
                    <div>
                      <p
                        style={{
                          fontSize: 16,
                          color: "black",
                          paddingTop: 20,
                          alignItems: "center"
                        }}
                      >
                        Already have an account ?
                        <Link
                          style={{ color: "blue", textDecoration: "none" }}
                          onClick={loginNavigate}
                        >
                          Login
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Signup;

