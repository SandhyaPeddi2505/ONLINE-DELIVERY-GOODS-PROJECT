import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import abc from './online.png';

const Forgotpassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [otpError, setOtpError] = useState("");
    const [isValid, setIsValid] = useState(false);
    const navigate = useNavigate();
    const validatepassword = (e) => {
        if (e.target.name === "password") {
            setPassword(e.target.value)
            if (!password) {
                setPasswordError('Password is required');
            }
            else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)) {
                setPasswordError('Password must contain capital,small,numeric,special characters');
            }
            else if (password.length < 6) {
                setPasswordError('Password must be atleast 6 characters');
            }
            else {
                setPasswordError("")
            }
        }
        if (e.target.name === "confirmPassword") {
            setConfirmPassword(e.target.value)
            if (e.target.value !== password) {
                setConfirmPasswordError("Passwords do not match")
            }
            else {
                setConfirmPasswordError("")
            }
        }
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        if (password === '' || confirmPassword === '' || otp === '') {
            alert("Enter all Fields");
        }
        else if (password !== '' && confirmPassword !== '' && otp !== '') {
            navigate('/login');
            window.location.reload();
        }
    }
    const handleOtpChange = (e) => {
        setOtp(e.target.value);
        if (e.target.value.length !== 6) {
            setOtpError("OTP must be 6 characters long.");
            setIsValid(false);
        } else {
            setOtpError("");
            setIsValid(true);
        }
    };
    const loginNavigate = (e) => {
        // navigate('/login');
        // window.location.reload();
    }
    return (
        <>
            <div>
                <div className="xyz">
                    <div className="flex">
                        <div className="x ">
                            <img src={abc} height="500" width="500" alt="del" />
                        </div>
                        <div class="">
                            {/* <div className='form'> */}
                            <div className="zx">
                                <h1>Forgot password ?</h1>
                            </div>
                            {/* <div className="flex">             
          <div className="c"> */}
                            <form>
                                <div className="z">
                                    <div className="m-2" controlId="formBasicPassword">
                                        <label> Enter New Password </label><br />
                                        <input type="password" name="password" onChange={(e) => validatepassword(e)} className="form-control" required placeholder="New Password" />

                                        <p><span style={{ color: 'red' }}>{passwordError}</span></p>
                                    </div>
                                    <div className="m-2" controlId="formBasicPassword">
                                        <label>Confirm Password</label><br />
                                        <input type="password" name="confirmPassword" onChange={(e => validatepassword(e))} className="form-control" required placeholder="Confirm password" />

                                        <p><span style={{ color: 'red' }}>{confirmPasswordError}</span></p>
                                    </div>
                                    <div className="m-2" controlId="formBasicOtp">
                                        <label>OTP</label><br />
                                        <input type="text" onChange={handleOtpChange} value={otp} className="form-control" required placeholder="6-digit code" />
                                        <p><span style={{ color: 'red' }}>{otpError}</span></p>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Confirm</button>
                                    </div>
                                    <div>
                                        <Link style={{ color: "black", textDecoration: "none" }} onClick={loginNavigate}>Back </Link>
                                    </div>
                                </div>
                            </form>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};
export default Forgotpassword;