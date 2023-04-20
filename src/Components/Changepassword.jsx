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
        if (!oldpassword) {
            setoldPasswordError('Password is required');
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(oldpassword)) {
            setoldPasswordError('Password must contain capital,small,numeric,special characters');
        }
        else if (oldpassword.length < 6) {
            setoldPasswordError('Password must be atleast 6 characters');
        }
        else {
            setoldPasswordError("")
        }
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
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
    const handlesubmit = (e) => {
        e.preventDefault();
        if (oldpassword === '' || password === '' || confirmPassword === '') {
            alert("Enter all Fields");
        }
        else if (oldpassword !== '' && password !== '' && confirmPassword !== '') {
            navigate('/login');
            window.location.reload();
        }
    }


    return (
        <>
            <div>
                <div className="xyz">
                    <div className="flex">
                        <div className="yz">
                            <img src={abc} height="500" width="500" alt="del" />
                        </div>
                        <div class="ab">
                            <h1>Change password ?</h1>
                            <form>
                                <div className="cd">
                                    <div className="m-2" controlId="formBasicPassword">
                                        <label> Enter old Password</label><br />
                                        <input type="password" onChange={handleoldPasswordChange} value={oldpassword} className="form-control" required placeholder="Old Password" />
                                        <p><span style={{ color: 'red' }}>{oldpasswordError}</span></p>
                                    </div>
                                    <div className="m-2" controlId="formBasicPassword">
                                        <label> Enter new Password</label><br />
                                        <input type="password" onChange={handlePasswordChange} value={password} className="form-control" required placeholder="New Password" />
                                        <p><span style={{ color: 'red' }}>{passwordError}</span></p>
                                    </div>
                                    <div className="m-2" controlId="formBasicPassword">
                                        <label>Confirm Password</label><br />
                                        <input type="password" onChange={handleConfirmPasswordChange} value={confirmPassword} className="form-control" required placeholder="Confirm Password" />
                                        <p><span style={{ color: 'red' }}>{confirmPasswordError}</span></p>
                                    </div>

                                    <div>
                                        <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Confirm</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};
export default Changepassword;