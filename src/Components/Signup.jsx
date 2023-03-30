import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import axios from "axios";
import abc from './online.png';

const Signup = () => {
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const [password, passwordchange] = useState("");
  const [cpassword, setCpassword] = useState("");
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [cPasswordError, setCpasswordError] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setErrors] = useState();

  const validateEmail = (e) => {
    // var email = e.target.value

    if (e.target.name === "email") {
      setEmail(e.target.value);
      if (validator.isEmail(email)) {
        setEmailError("");
      } else {
        setEmailError("Enter valid Email!");
      }
    }
    if (e.target.name === "password") {
      passwordchange(e.target.value);
      if (!password) {
        setPasswordError("Password is required");
      } else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
          password
        )
      ) {
        setPasswordError(
          "Password must contain capital,small,numeric,special characters"
        );
      } else if (password.length < 6) {
        setPasswordError("Password must be atleast 6 characters");
      } else {
        setPasswordError("");
      }
    }
    if (e.target.name === "cpassword") {
      setCpassword(e.target.value);
      if (e.target.value !== password) {
        setCpasswordError("Passwords do not match");
      } else {
        setCpasswordError("");
      }
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://a6f7-49-249-11-110.in.ngrok.io/admin_sign_up", {
        email,
        password,
        cpassword
      })
      .then((response) => {
        console.log(response);
        if (response?.status === 200) {
          navigate("/");
          console.log(response?.status);
        }
      })

      .catch((error) => {
        console.log(error.response.data); // handle error
      });

    setErrors({});
    let data = ({ email, password, cpassword } = submitted);
    if (!email) {
      setErrors({ email: "Email is required" });
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors({ email: "Email is not valid" });
    }
    if (!password) {
      setErrors({ password: "Password is required" });
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
        password
      )
    ) {
      setErrors({
        password:
          "Password must contain capital,small,numeric,special characters"
      });
    } else if (password.length < 6) {
      setErrors({ password: "Password must be atleast 6 characters" });
      // alert("must contain capital,small,numeric,special characters")
    }
    if (password !== cpassword) {
      setErrors({ cpassword: "Passwords do not match" });
    }

    
    console.log("EMAIL", email);
    console.log("PASSWORD", password);
    
    if (
      email !== "" &&
      password !== "" &&
      !emailError &&
      !passwordError &&
      !cPasswordError
    ) {
      // console.log("EMAIL", email)
      // console.log("PASSWORD", password)
      navigate("/");
      window.location.reload();
    }
  };
  const loginNavigate = (e) => {
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div>
        
          <div className="xyz">
            <div className="flex">
              <div className="form">
                <div className="co">
                  <img src={abc} alt="dele" height="500" width="500" />
                </div>
              </div>
              <div className="co">
                <div className="form">
                  <h1>Sign Up</h1>

                  <form>
                    {/* {successMsg && <p className="success-msg">{successMsg}</p>} */}

                    <div className="mb-3" id="formBasicEmail">
                      <label>Email address</label>
                      <input
                        onChange={(e) => validateEmail(e)}
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        className="form-control"
                        required
                      />

                      <span style={{ color: "red" }}>{emailError}</span>
                    </div>

                    <div className="mb-3" id="formBasicLastName">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        onChange={(e) => validateEmail(e)}
                        placeholder="password"
                        className="form-control"
                        required
                      />
                      {/* <span className='password-icon' onClick={handleToggle}><Icon icon={icon} size={25} /></span>  */}
                      <span style={{ color: "red" }}>{passwordError}</span>
                    </div>
                    {console.log(error)}
                    <div className="mb-3">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        name="cpassword"
                        className="form-control"
                        onChange={(e) => validateEmail(e)}
                        placeholder="Confirm Password"
                        required
                      />
                      {/* <span className='password-icon' onClick={handleTogglee}><Icon icon={icon} size={25} /></span>  */}
                      <span style={{ color: "red" }}>{cPasswordError}</span>
                    </div>

                    <button
                      onClick={handlesubmit}
                      className="btn btn-primary"
                      type="Submit"
                    >
                      Register
                    </button>
                    <div>
                      <p>
                        Already have an account !{" "}
                        <Link onClick={loginNavigate}>Login</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </>
  );
};

export default Signup;
