import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import abc from './online.png';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Changepassword = () => {
    const [password, setPassword] = useState("");
    const [oldpassword, setoldPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("")
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
            setoldPasswordError('must contain cap,small,num,special characters');
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
            setPasswordError('must contain cap,small,num,special characters');
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
    // const handlesubmit = (e) => {
    //     e.preventDefault();
    //     if (oldpassword === '' || password === '' || confirmPassword === '') {
    //         alert("Enter all Fields");
    //     }
    //     else if (oldpassword !== '' && password !== '' && confirmPassword !== '') {
    //         //             if(!password ==confirmPassword){
    //         // setError("Passwords must match")
    //         //             }
    //         //             else{
    //         //                 error=''
    //         //             }
    //         alert("password changed successfully")
    //         navigate('/profile');
    //         // window.location.reload();
    //     }
    // }
//     const handlesubmit = (e) => {
//         e.preventDefault();
//         if (oldpassword !== '' && password !== '' && confirmPassword !== '') {
//             // Here you can send the data to your server
//             alert(" password changed Successfully!");
//             navigate('/')

//         } 
//         else if (oldpassword === '' || password === '' || confirmPassword === '') {
//             toast.error("Please enter all details!"); 
//         }
//         else if(oldpassword === password){
// setError("Old password and new password must be different")
//         }
//     };
const handlesubmit = (e) => {
    e.preventDefault();
    if (!oldpassword || !password || !confirmPassword) {
      toast.error('All fields are required');
    } else if (oldpassword === password) {
      setPasswordError('Old password and new password must be different');
    } else if (password!==confirmPassword) {
      confirmPasswordError('Passwords must match');
    } 
    else {
      // submit new password
      alert('Password changed successfully');
      navigate('/')
    }
    if (!oldpassword) {
        setoldPasswordError('Password is required');
    }
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(oldpassword)) {
        setoldPasswordError('must contain cap,small,num,special characters');
    }
    else if (oldpassword.length < 6) {
        setoldPasswordError('Password must be atleast 6 characters');
    }
    else {
        setoldPasswordError("")
    }
    if (!password) {
        setPasswordError('Password is required');
    }
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)) {
        setPasswordError('must contain cap,small,num,special characters');
    }
    else if (password.length < 6) {
        setPasswordError('Password must be atleast 6 characters');
    }
    else {
        setPasswordError("")
    }
    if(!confirmPassword){
        setConfirmPasswordError("Password is required")
    }
    else if (password!==confirmPassword) {
        confirmPasswordError('Passwords must match');
      } 
  };


    return (
        <>
            <div>
                <div className="vv">
                    <div className="flex">
                        <div className="yz">
                            <img src={abc} height="500" width="500" alt="del" />
                        </div>
                        <div class="ab">
                            <h1>Change password ?</h1>
                            <form>
                            <div className="error">{error}</div>
                                <div className="cd">
                                    <div className="m-2" controlId="formBasicPassword">
                                        <label> Enter old Password</label><br />
                                        <input type="password" onChange={(e) => setoldPassword(e.target.value)} value={oldpassword} className="form-control" required placeholder="Old Password" />
                                        <p><span style={{ color: 'red' }}>{oldpasswordError}</span></p>
                                    </div>
                                    <div className="m-2" controlId="formBasicPassword">
                                        <label> Enter new Password</label><br />
                                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" required placeholder="New Password" />
                                        <p><span style={{ color: 'red' }}>{passwordError}</span></p>
                                    </div>
                                    <div className="m-2" controlId="formBasicPassword">
                                        <label>Confirm Password</label><br />
                                        <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} className="form-control" required placeholder="Confirm Password" />
                                        <p><span style={{ color: 'red' }}>{confirmPasswordError}</span></p>
                                    </div>

                                    <div>
                                        <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Confirm</button>
                                    </div>
                                    <ToastContainer />
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