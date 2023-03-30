// import { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// // import image from "./imgs.png";
// import ReCAPTCHA from "react-google-recaptcha";
// import validator from 'validator'
// import { useEffect } from 'react';
// import abc from './online.png'; 
// // import { Icon } from 'react-icons-kit';
// // import { eyeDisabled } from 'react-icons-kit/ionicons/eyeDisabled';
// // import { eye } from 'react-icons-kit/ionicons/eye';
// const Login = () => {
//     const profile = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [semail, setSemail] = useState("")
//     const [spassword, setSpassword] = useState('');
//     const [emailError, setEmailError] = useState('')
//     // States for checking the errors 
//     const [submitted, setSubmitted] = useState(false);
//     // const [error, setError] = useState(false);
//     // const [type, setType] = useState('password');
//     // const [icon, setIcon] = useState(eyeDisabled)
//     // const handleToggle = () => {
//     //     if (type === 'password') {
//     //         setIcon(eye);
//     //         setType('text');
//     //     }
//     //     else {
//     //         setIcon(eyeDisabled);
//     //         setType('password');
//     //     }
//     // }
//     const validateEmail = (e) => {
//         var email = e.target.value
//         setEmail(e.target.value);
//         if (validator.isEmail(email)) {
//             setEmailError('')
//         }
//         else {
//             setEmailError('Enter valid Email!')
//         }
//     }
//     // Handling the password change  
//     const handlePassword = (e) => {
//         setPassword(e.target.value);
//         setSubmitted(false);
//     };
//     // Handling the form submission 
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (email !== '' && password !== '') {
//             if (semail !== email) {
//                 alert("Invalid Email")
//             }
//             else if (spassword !== password) {
//                 alert("pasword is incorrect")
//             } else {
//                 alert("login sucessful")
//                 profile("/user")
//             }
//         }
//     };
//     useEffect(() => {
//         setSemail(console.log("EMAIL"))
//         setSpassword(console.log("PASSWORD"))
//     }, [])
//     const onChange = () => {
//         // console.log("captcha value : ", value);
//     }
//     return (
//         <>
//             <div className="xyz">
//                 <div className='flex'>
//                     <div className="form">
//                         <div className='co'>
//                             <img src={abc} alt='dele' height="500" width="500" />
//                         </div>
//                     </div>
//                     <div className='co'>
//                         <div className='form'>
//                             <h1>Log In</h1>
//                             <form>
//                                 <div className="mb-3" id="formBasicEmail">
//                                     <label>Email address</label>
//                                     <input type="Email" id="userEmail" onChange={(e) => validateEmail(e)} placeholder="Enter email" className='form-control' />
//                                     <span style={{ color: 'red' }}>{emailError}</span>
//                                     <div className="text-muted">
//                                         We'll never share your email with anyone else.
//                                     </div>
//                                 </div>
//                                 <div className="mb-3 " id="formBasicPassword">
//                                     <label>Password</label>
//                                     <input type="password" onChange={handlePassword}  required placeholder="Password" className='form-control' ></input>
//                                     {/* <span className='password-icon' onClick={handleToggle}><Icon icon={icon} size={20} /></span> */}
//                                     {/* {/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)} */}
//                                 </div>
//                                 <div>
//                                     <ReCAPTCHA sitekey='6LfVii4kAAAAAJ8_m87S4NKEcvgpNvCcMtskDBnQ' onChange={onChange} />
//                                 </div>
//                                 <div className='mt-2'>
//                                     <button onClick={handleSubmit} className="btn btn-primary" type="LogIn"> Log In </button>
//                                 </div>
//                                 <div className="d-flex flex-row justify-content-end" >
//                                     <a className="small text-muted"><Link to='/OTP' >Forgotpassword?</Link></a>
//                                 </div>
//                                 <p> Don't have an account? <Link to='/signup'>Signup</Link></p>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Login;






import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";
import abc from './online.png';


const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const { email, password } = formData;
    const profile = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email || !password) {
            alert("Please enter all fields")
        } else {
            alert(" login Successful")
            profile("/profile")

        }
    };
    const onChange = () => {
        // console.log("captcha value : ", value);
    }

    return (
        // <>
        //     <div className="xyz">
        //         <div className='flex'>
        //             <div className="form">
        //                 <div className='co'>
        //                     <img src={abc} alt='dele' height="500" width="500" />
        //                 </div>
        //             </div>
        //             <div className='co'>
        //                 <div className='form' onSubmit={handleSubmit}>
        //                     <h1>Log In</h1>
        //                     <form>
        //                         <div className="mb-3" id="formBasicEmail">
        //                             <label>Email address</label>
        //                             <input type="Email" id="userEmail" onChange={handleChange} placeholder="Enter email" className='form-control' />
        //                             {/* <span style={{ color: 'red' }}>{emailError}</span> */}
        //                             <div className="text-muted">
        //                                 We'll never share your email with anyone else.
        //                             </div>
        //                         </div>
        //                         <div className="mb-3 " id="formBasicPassword">
        //                             <label>Password</label>
        //                             <input type="password" onChange={handleChange}  required placeholder="Password" className='form-control' ></input>
        //                             {/* <span className='password-icon' onClick={handleToggle}><Icon icon={icon} size={20} /></span> */}
        //                             {/* {/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)} */}
        //                         </div>
        //                         <div>
        //                             <ReCAPTCHA sitekey='6LfVii4kAAAAAJ8_m87S4NKEcvgpNvCcMtskDBnQ' onChange={onChange} />
        //                         </div>
        //                         <div className='mt-2'>
        //                             <button  className="btn btn-primary" type="submit" btn-block> Log In </button>
        //                         </div>
        //                         <div className="d-flex flex-row justify-content-end" >
        //                             <a className="small text-muted"><Link to='/OTP' >Forgotpassword?</Link></a>
        //                         </div>
        //                         <p> Don't have an account? <Link to='/signup'>Signup</Link></p>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </>

        <div className="xyz">
            <div className='flex'>
            <div className='co'>
                        <img src={abc} alt='dele' height="500" width="500" />
                    </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    
                    <h1>Log In</h1>

                    <div className="mb-3" id="formBasicEmail">
                        <label>Email address</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            className='form-control'
                        />
                    </div>

                    <div className="mb-3" id="formBasicEmail">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            placeholder="Enter Password"
                            className='form-control'
                        />
                    </div>
                    <div>
                        <ReCAPTCHA sitekey='6LfVii4kAAAAAJ8_m87S4NKEcvgpNvCcMtskDBnQ' onChange={onChange} />
                    </div>
                    <div className='mt-2'>
                        <button type="submit" className="btn btn-primary btn-block">
                            Login
                        </button>
                    </div>
                    <div className="d-flex flex-row justify-content-end" >
                        <a className="small text-muted"><Link to='/OTP' >Forgotpassword?</Link></a>
                    </div>
                    <p> Don't have an account? <Link to='/signup'>Signup</Link></p>
                </form>
            </div>
        </div>

    );
};

export default Login;
