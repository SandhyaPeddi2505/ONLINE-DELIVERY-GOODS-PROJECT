import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import validator from 'validator';
import axios from 'axios'
import abc from './online.png'; 

 const Login = () => {
    const profile = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [emailError, setEmailError] = useState('')
    // States for checking the errors 
    const [submitted, setSubmitted] = useState(false);
    
    
     const navigate=useNavigate();

    const validateEmail = (e) => {
        var email = e.target.value
        setEmail(e.target.value);
        if (validator.isEmail(email)) {
            setEmailError('')
        }
        else {
            setEmailError('Enter valid Email!')
        }
    }
    // Handling the password change  
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

const handleSubmit = (e) => {
    e.preventDefault();
    axios.get('',).then(response => {
    
    if(!email || !password) {
    alert("Enter all fields");
    }
    else if (response?.status === 200){
    navigate('/profile');
    // console.log(response?.status);
    alert("login successful");
    console.log(response);
     }
})
.catch (error => {
     console.log(error.response.data); // handle error
    })
    }

    const onChange = () => {
        // console.log("captcha value : ", value);
    }
    return (
        <>
            <div className="yes">
                <div className='flex'>
                    <div className="form">
                        <div className='mm'>
                            <img src={abc} alt='dele' height="500" width="500" />
                        </div>
                    </div>
                    <div className='nn'>
                        <div className='mb-3'>
                            <h1>Log In</h1>
                            </div>
                            <form>
                                <div className="mb-3" id="formBasicEmail">
                                    <label>Email address</label>
                                    <input type="Email" id="userEmail" onChange={(e) => validateEmail(e)} placeholder="Enter email" className='form-control' />
                                    <span style={{ color: 'red' }}>{emailError}</span>
                                    <div className="text-muted">
                                        We'll never share your email with anyone else.
                                    </div>
                                </div>
                                <div className="mb-3 " id="formBasicPassword">
                                    <label>Password</label>
                                    <input type="password" onChange={handlePassword}  required placeholder="Password" className='form-control' ></input>
                                    {/* <span className='password-icon' onClick={handleToggle}><Icon icon={icon} size={20} /></span> */}
                                    {/* {/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)} */}
                                </div>
                                <div>
                                    <ReCAPTCHA sitekey='6LfVii4kAAAAAJ8_m87S4NKEcvgpNvCcMtskDBnQ' onChange={onChange} />
                                </div>
                                <div className='mt-2'>
                                    <button onClick={handleSubmit} className="btn btn-primary" type="LogIn"> Log In </button>
                                </div>
                                <div className="d-flex flex-row justify-content-end" >
                                    <a className="small text-muted" style={{textDecoration:"none"}}><Link to='/OTP' style={{color:"black",textDecoration:"none"}} >Forgotpassword?</Link></a>
                                </div>
                                <p> Don't have an account? <Link to='/signup'style={{ color:"blue",textDecoration:"none"}}>Signup</Link></p>
                            </form>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;
