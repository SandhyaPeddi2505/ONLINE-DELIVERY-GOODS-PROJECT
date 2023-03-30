import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import image from "./imgs.png";
import validator from 'validator'
import abc from './online.png';
const OTP = () => {
    const [email, setEmail] = useState("");
    // const [otp, setOtp] = useState(""); 
    // const [otpSent, setOtpSent] = useState(false);  
    // const [otpVerified, setOtpVerified] = useState(false);  
    const [emailError, setEmailError] = useState("")
    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [semail, setSemail] = useState("")
    const navigate = useNavigate();
    const forgot = useNavigate();
    // const sendOtpHandler = () => {  
    //   if(email !== ""){  
    //   let randomOtp = Math.floor(1000 + Math.random() * 9000);  
    //   setOtp(randomOtp);  
    //   setOtpSent(true);  
    //   sendEmail(email, randomOtp);  
    //   setEmailError("") 
    // }  
    // else { 
    //   setEmailError("Please enter Email") 
    // } 
    // };
    // const verifyOtpHandler = () => { 
    //   if (otpSent && otp === otp) {  
    //     setOtpVerified(true);  
    //   }  
    // };
    const sendEmail = (email, otp) => {
        // Email API Here  };
        // Handling the form submission
        //  const handleSubmit = (e) => {
        //   e.preventDefault();
        //    if (email !== '') 
        // {//      setError(true);
        //      } else {
        //        setSubmitted(true);
        //        setError(false);
        //       }
        //         alert("OTP sent successfully");
        //          forgot("/forgotpassword");
    };
    const validateEmail = (e) => {
        var email = e.target.value
        setEmail(e.target.value);
        if (validator.isEmail(email)) {
            const loginEmail = localStorage.getItem("EMAIL")
            setEmailError('')
            if (e.target.value !== loginEmail) {
                setEmailError("Please enter Registered email")
            }
            else {
                setEmailError("")
            }
        } else {
            setEmailError('Enter valid Email!')
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email !== '') {
            if (semail !== email) {
                alert("email not found")
            }
            else {
                alert("OTP sent successfully");
                forgot("/forgotpassword");
            };
        };
    };
    // useEffect(() => {
    //     setSemail(localStorage.getItem("EMAIL"))
    // }, [])
    const loginNavigate = (e) => {
        navigate('/forgotpassword');
        window.location.reload();
    }
    return (
        // <div className="xyz">
        //     <div className="flex">


        //          {/* <div className=" row"> */}
        //             {/* <div className="col-md-6"> */}
        //             <div className="co">
        //                 <img src={abc} alt='dele' height="500" width="500" />
        //             </div>

        //             <div className="col-md-5">
        //             <h1>OTP ?</h1>
        <div className="xyz">
            <div className='flex'>
                <div className="form">
                    <div className='co'>
                        <img src={abc} alt='dele' height="500" width="500" />
                    </div>
                </div>
                <div className='co'>
                    <div className='form'>
                        <h1>OTP ?</h1>

                        <form>
                            <div className=" mb-3" id="formBasicEmail">
                                <label>Email</label>
                                <input value={email} onChange={(e) => validateEmail(e)} className="form-control" type="email" placeholder="Enter email" />
                                <span style={{ color: 'red' }}>{emailError}</span>
                            </div>
                            <button onClick={handleSubmit} className="btn btn-primary" type="submit">
                                Generate OTP
                            </button>
                            <div>
                                <p> <Link onClick={loginNavigate}>Next</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


         </div>
        // </div>
    );
}
export default OTP;