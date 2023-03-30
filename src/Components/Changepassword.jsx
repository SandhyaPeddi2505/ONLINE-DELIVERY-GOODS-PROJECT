import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import abc from './online.png';

const Changepassword = () => {
    const [password, setPassword] = useState("");
    const [oldpassword, setoldPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // const [otp, setOtp] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [oldpasswordError, setoldPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    // const [otpError, setOtpError] = useState("");
    const [isValid, setIsValid] = useState(false);
    const navigate = useNavigate();
    const handleoldPasswordChange = (e) => {
        setoldPassword(e.target.value);
        if (e.target.value.length < 8) {
            setoldPasswordError("Password must be 8 characters long.");
            setIsValid(false);
        } else {
            setoldPasswordError("");
            setIsValid(true);
        }
    };
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
    // const handleOtpChange = (e) => {
    //     setOtp(e.target.value);
    //     if (e.target.value.length !== 6) {
    //         setOtpError("OTP must be 6 characters long.");
    //         setIsValid(false);
    //     } else {
    //         setOtpError("");
    //         setIsValid(true);
    //     }
    // };
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
                                    <h1>Change password ?</h1>
                                </div>
                                {/* <div className="flex">             
          <div className="c"> */}
                                <Form>
                                <Form.Group className="m-2" controlId="formBasicPassword">
                                        <Form.Label> Enter old Password</Form.Label>
                                        <Form.Control type="password" onChange={handleoldPasswordChange} value={oldpassword} required placeholder="Old Password" />
                                        <p><span style={{ color: 'red' }}>{oldpasswordError}</span></p>
                                    </Form.Group>
                                    <Form.Group className="m-2" controlId="formBasicPassword">
                                        <Form.Label> Enter new Password</Form.Label>
                                        <Form.Control type="password" onChange={handlePasswordChange} value={password} required placeholder="New Password" />
                                        <p><span style={{ color: 'red' }}>{passwordError}</span></p>
                                    </Form.Group>
                                    <Form.Group className="m-2" controlId="formBasicPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" onChange={handleConfirmPasswordChange} value={confirmPassword} required placeholder= "Confirm Password"/>
                                        <p><span style={{ color: 'red' }}>{confirmPasswordError}</span></p>
                                    </Form.Group>
                                    {/* <Form.Group className="m-2" controlId="formBasicOtp">
                                        <Form.Label>Confirm password</Form.Label>
                                        <Form.Control type="text" onChange={handleOtpChange} value={otp} required placeholder= "Confirm password"/> <p>{otpError}</p>
                                    </Form.Group> */}
                                    <div>
                                        <Button type="submit">Confirm</Button>
                                    </div>
                                    <div>
                                        <Link onClick={loginNavigate}> Back </Link>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};
export default Changepassword;