import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import axios from "axios";
import abc from './online.png';
import Navbar from './Navbar';

const Signup = () => {
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const [password, passwordchange] = useState("");
  const [cpassword, setCpassword] = useState("");
  const[username,setuserName]=useState("")
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [cPasswordError, setCpasswordError] = useState("");

  // States for checking the errors
  // const [submitted, setSubmitted] = useState(false);
  const [error, setErrors] = useState();

  const validateEmail = (e) => {
    var email = e.target.value
    if(e.target.name==="username"){
      setuserName(e.target.value)
    }

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
      .post("http://ec2-13-232-88-209.ap-south-1.compute.amazonaws.com:8000/app/user/create_user/", {
        username,
        email,
        password,
        // cpassword
        // username
      })
      .then((response) => {
        console.log(response);
        if (response?.status === 200) {

          console.log(response?.status);
          // navigate("/login");
        }
      })

      .catch((error) => {
        console.log(error.response.data); // handle error
      });

    setErrors({});
    if (username !== '' && email !== '' && password !== ''  ) {

      // alert('registerd successfully')

      // navigate('/login');

      // window.location.reload();

    }
    // else{
    //   alert("")
    // }

    // {

    //   navigate("/login");
    //   window.location.reload();
    // }
  };
  const loginNavigate = (e) => {
    navigate("/login");
    window.location.reload();
  };


  return (
    <>
    <Navbar/>
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

                <form>

                  <div>
                    <div className="mb-3" id="formBasicUsername">

                      <label>Username</label>
                      <input
                        onChange={(e) => validateEmail(e)}
                        name="username"
                        type="text"
                        placeholder="Enter Username"
                        className="form-control"
                        required
                      />

                      {/* <span style={{ color: "red" }}>{emailError}</span> */}

                    </div>

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

                      <span style={{ color: "red" }}>{cPasswordError}</span>
                    </div>

                    <button
                      onClick={handlesubmit}
                      className="btn btn-primary"
                      type="Submit"
                    >
                      Submit
                    </button>
                    <div>
                      <p>
                        Already have an account ?
                        <Link style={{ color: "blue", textDecoration: "none" }} onClick={loginNavigate}>Login</Link>
                      </p>
                    </div>
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
// write code for signup via calling api with validations in reactjs with functional component

// import React, {useState, useEffect} from 'react';
// import axios from 'axios';

// const Signup = () => {
// 	const [data, setData] = useState({
// 		username: '',
// 		password: '',
// 		confirmPassword: '',
// 		email: ''
// 	});
// 	const [errors, setErrors] = useState({});

// 	const handleChange = (e) => {
// 		setData({
// 			...data,
// 			[e.target.name]: e.target.value
// 		})
// 	}

// 	const validate = () => {
// 		let err = {};
// 		if(!data.username) {
// 			err.username = 'username is required';
// 		}
// 		if(!data.password) {
// 			err.password = 'password is required';
// 		}
// 		if(!data.confirmPassword) {
// 			err.confirmPassword = 'confirm password is required';
// 		}
// 		if(!data.email) {
// 			err.email = 'email is required';
// 		}
// 		if(data.password !== data.confirmPassword) {
// 			err.confirmPassword = 'password and confirm password did not match';
// 		}
// 		return err;
// 	}

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		let err = validate();
// 		setErrors(err);
// 		if(Object.keys(err).length === 0) {
// 			axios.post('http://ec2-13-232-88-209.ap-south-1.compute.amazonaws.com:8000/app/user/create_user/', data)
// 			.then(res => {
// 				console.log(res);
// 			})
// 			.catch(err => {
// 				console.log(err);
// 			})
// 		}
// 	}

// 	return (
// 		<div>
// 			<form onSubmit={handleSubmit}>
// 				<div>
// 					<label>Username</label>
// 					<input type="text" name="username" onChange={handleChange} />
// 					<span>{errors.username ? errors.username : ''}</span>
// 				</div>
// 				<div>
// 					<label>Password</label>
// 					<input type="password" name="password" onChange={handleChange} />
// 					<span>{errors.password ? errors.password : ''}</span>
// 				</div>
// 				<div>
// 					<label>Confirm Password</label>
// 					<input type="password" name="confirmPassword" onChange={handleChange} />
// 					<span>{errors.confirmPassword ? errors.confirmPassword : ''}</span>
// 				</div>
// 				<div>
// 					<label>Email</label>
// 					<input type="text" name="email" onChange={handleChange} />
// 					<span>{errors.email ? errors.email : ''}</span>
// 				</div>
// 				<div>
// 					<button type="submit">Signup</button>
// 				</div>
// 			</form>
// 		</div>
// 	)
// }

// export default Signup;
// write code for sign up page via calling api in reactjs with functional component

// import React, { useState } from 'react';

// const SignUpPage = () => {
//   // Set up state variables for input fields
//   const [username, setuserName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   // Handle form submission
//   const handleSubmit = e => {
//     e.preventDefault();
    
//     // Validate passwords match
//     if (password !== confirmPassword) {
//       setErrorMessage('Passwords do not match');
//       return;
//     }

//     // Call API to create user
//     fetch('/http://ec2-13-232-88-209.ap-south-1.compute.amazonaws.com:8000/app/user/create_user//signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ username, email, password })
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.error) {
//           setErrorMessage(data.error);
//         } else {
//           // Redirect to home page
//           window.location.href = '/login';
//         }
//       })
//       .catch(err => {
//         setErrorMessage('There was an error with the request');
//       });
//   };

//   return (
//     <div>
//       <h1>Sign Up</h1>
//       {errorMessage && <p>{errorMessage}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={username}
//           onChange={e => setuserName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChange={e => setConfirmPassword(e.target.value)}
//         />
//         <input type="submit" value="Sign Up" />
//       </form>
//     </div>
//   );
// };

// export default SignUpPage;
