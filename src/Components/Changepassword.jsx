import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import abc from './online.png';

const Changepassword = () => {
    const [password, setPassword] = useState("");
    const [oldpassword, setoldPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const [passwordError, setPasswordError] = useState("");
    const [oldpasswordError, setoldPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    
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
                                <form>
                                <div className="m-2" controlId="formBasicPassword">
                                        <label> Enter old Password</label><br/>
                                        <input type="password" onChange={handleoldPasswordChange} value={oldpassword} className="form-control" required placeholder="Old Password" />
                                        <p><span style={{ color: 'red' }}>{oldpasswordError}</span></p>
                                    </div>
                                    <div className="m-2" controlId="formBasicPassword">
                                        <label> Enter new Password</label><br/>
                                        <input type="password" onChange={handlePasswordChange} value={password} className="form-control" required  placeholder="New Password" />
                                        <p><span style={{ color: 'red' }}>{passwordError}</span></p>
                                    </div>
                                    <div className="m-2" controlId="formBasicPassword">
                                        <label>Confirm Password</label><br/>
                                        <input  type="password" onChange={handleConfirmPasswordChange} value={confirmPassword}  className="form-control"required placeholder= "Confirm Password"/>
                                        <p><span style={{ color: 'red' }}>{confirmPasswordError}</span></p>
                                    </div>
                                    
                                    <div>
                                        <button type="submit" className="btn btn-primary">Confirm</button>
                                    </div>
                                    <div>
                                        <Link onClick={loginNavigate}> Back </Link>
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
export default Changepassword;