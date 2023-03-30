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
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters long.");
            setIsValid(false);
        } else {
            setPasswordError("");
            setIsValid(true);
        }
    };
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
            setConfirmPasswordError("Passwords must match.");
            setIsValid(false);
        } else {
            setConfirmPasswordError("");
            setIsValid(true);
        }
    };
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
        navigate('/');
        window.location.reload();
    }
    return (
        <>
            <div>
                <div className="xyz">
                    <div className="flex">
                        <div className="co ">
                            <img src={abc} height="500" width="500" alt="del" />
                        </div>
                        <div class="co">
                            <div className='form'>
                                <div>
                                    <h1>Forgot password ?</h1>
                                </div>
                                {/* <div className="flex">             
          <div className="c"> */}
                                <form>
                                    <div className="m-2" controlId="formBasicPassword">
                                        <label> Enter New Password </label><br/>
                                        <input type="password" onChange={handlePasswordChange} value={password}  className="form-control"required placeholder="New Password" />
                                        
                                        <p><span style={{ color: 'red' }}>{passwordError}</span></p>
                                    </div>
                                    <div className="m-2" controlId="formBasicPassword">
                                        <label>Confirm Password</label><br/>
                                        <input type="password" onChange={handleConfirmPasswordChange} value={confirmPassword}  className="form-control"required placeholder="Confirm password" />
                                         
                                         <p><span style={{ color: 'red' }}>{confirmPasswordError}</span></p>
                                    </div>
                                    <div className="m-2" controlId="formBasicOtp">
                                        <label>OTP</label><br/>
                                        <input type="text" onChange={handleOtpChange} value={otp}  className="form-control"required placeholder="6-digit code" />
                                        <p><span style={{color:'red'}}>{otpError}</span></p>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-primary">Confirm</button>
                                    </div>
                                    <div>
                                        <Link onClick={loginNavigate}>Back </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};
export default Forgotpassword;