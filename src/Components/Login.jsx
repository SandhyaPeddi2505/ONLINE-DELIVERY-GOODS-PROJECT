import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
// import ReCAPTCHA from "react-google-recaptcha";
import validator from 'validator';
import axios from 'axios'
import abc from './online.png';
// import { ToastContainer,toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    // const profile = useNavigate();
    const navigate = useNavigate();
    const [username, setuserName] = useState('');
    const [password, setPassword] = useState('');

    const [usernameError, setuserNameError] = useState('')
    // States for checking the errors 
    const [submitted, setSubmitted] = useState(false);
    // const [error, setErrors] = useState();




    const validateuserName = (e) => {
        var username = e.target.value
        setuserName(e.target.value);
        if (validator.isuserName(username)) {
            setuserNameError('')
        }
        else {
            setuserNameError('Enter valid userName!')
        }
    }
    // Handling the password change  
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://ec2-13-232-88-209.ap-south-1.compute.amazonaws.com:8000/app/user/token/', {
            username,
            password
        }).then(response => {

            if (!username || !password) {
                alert(" Please enter all fields");
            }
            else if (response?.status === 200) {
                //  navigate('/profile');
                console.log(response?.status);
                // alert("login successful");
                console.log(response);
                // navigate('/profile');
            }
        })
            .catch(error => {
                console.log(error.response.data); // handle error
            })
            if(username !== '' && password !== '' ){
                navigate("/profile");
            window.location.reload();
        }
        
        // setErrors({});


        // {

        //     navigate("/profile");
        //     window.location.reload();
        // }
    }
    //     axios
    //   .post("ec2-13-232-88-209.ap-south-1.compute.amazonaws.com:8000/app/user/token/", {

    //     username,
    //     password,
    //     // cpassword
    //     // username
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     if (response?.status === 200) {

    //       console.log(response?.status);
    //       alert("login successful");
    //             console.log(response);
    //             navigate("/profile");
    //     }
    //   })

    //   .catch((error) => {
    //     console.log(error.response.data); // handle error
    //   });


    // const onChange = () => {
    //     // console.log("captcha value : ", value);
    // }
    return (
        <>
            <div className="bgj">
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
                            <div className="mb-3" id="formBasicuserName">
                                <label>Email</label>
                                <input type="email" id="username" onChange={(e) => validateuserName(e)} placeholder="Enter email" className='form-control' />
                                <span style={{ color: 'red' }}>{usernameError}</span>
                                <div className="text-muted">
                                    We'll never share your email with anyone else.
                                </div>
                            </div>
                            <div className="mb-3 " id="formBasicPassword">
                                <label>Password</label>
                                <input type="password" onChange={handlePassword} required placeholder="Password" className='form-control' ></input>

                            </div>
                            {/* <div>
                                <ReCAPTCHA sitekey='6LfVii4kAAAAAJ8_m87S4NKEcvgpNvCcMtskDBnQ' onChange={onChange} />
                            </div> */}
                            <div className='mt-2'>
                                <button onClick={handleSubmit} className="btn btn-primary" type="LogIn"> Log In </button>
                            </div>
                            {/* <ToastContainer/> */}

                            <div className="d-flex flex-row justify-content-end" >
                                <a className="small text-muted" style={{ textDecoration: "none" }}><Link to='/OTP' style={{ color: "black", textDecoration: "none" }} >Forgotpassword?</Link></a>
                            </div>
                            <p> Don't have an account? <Link to='/signup' style={{ color: "blue", textDecoration: "none" }}>Signup</Link></p>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;
