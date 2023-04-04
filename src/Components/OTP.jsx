import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import validator from 'validator'
import axios from 'axios';
import abc from './online.png';
const OTP = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("")
    // const [error, setError] = useState(false)
    // const [semail, setSemail] = useState("")
    const navigate = useNavigate();
    // const forgot = useNavigate();

    // const sendEmail = (email, otp) => {
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
    // };
    const validateEmail = (e) => {
        var email = e.target.value
        setEmail(e.target.value);
        // if (validator.isEmail(email)) {
        //     const loginEmail = localStorage.getItem("EMAIL")
        //     setEmailError('')
        //     if (e.target.value !== loginEmail) {
        //         setEmailError("Please enter Registered email")
        //     }
        //     else {
        //         setEmailError("")
        //     }
        // } else {
        //     setEmailError('Enter valid Email!')
        // }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('').then(response => {
            if (email === '') {
                alert("enter all fields");
            }
            else if (response?.status === 200) {
                navigate('/forgotpassword');
                alert("OTP sent successfully");
                console.log(response)
            }

        })
            .catch(error => {
                console.log(error.response.data);
            })



    };
    // useEffect(() => {
    //     setSemail(localStorage.getItem("EMAIL"))
    // }, [])
    const loginNavigate = (e) => {
        navigate('/login');
        window.location.reload();
    }
    return (

        <div className="xyz">
            <div className='flex'>
                <div className="zz">
                    {/* <div className=''> */}
                    <img src={abc} alt='dele' height="500" width="500" />
                    {/* </div> */}
                </div>
                {/* <div className=''> */}
                <div className='xx'>
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
                            <p> <Link style={{ color: "black", textDecoration: "none" }} onClick={loginNavigate}>Back</Link></p>
                        </div>
                    </form>
                </div>
                {/* </div> */}
            </div>


        </div>
        // </div>
    );
}
export default OTP;