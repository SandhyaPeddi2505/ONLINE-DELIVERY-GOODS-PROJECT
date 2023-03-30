// import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
// import validator from 'validator';
import abc from './online.png';
import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.css";
import * as Yup from "yup";
const Signup = () => {
    // const [emailError, setEmailError] = useState('')
    // const [email, setEmail] = useState('');
    // const [password, passwordchange] = useState('');
    // const [cpassword, setCpassword] = useState("");
    const navigate = useNavigate();
    // const [passwordError, setPasswordError] = useState('')
    // const [cPasswordError, setCpasswordError] = useState('')
    // // States for checking the errors   
    // const [submitted, setSubmitted] = useState(false);
    // const [error, setErrors] = useState();

    // const validateEmail = (e) => {
    //     // var email = e.target.value       
    //     if (e.target.name === "email") {
    //         setEmail(e.target.value)
    //         if (validator.isEmail(email)) {
    //             setEmailError('')
    //         } else {
    //             setEmailError('Enter valid Email!')
    //         }
    //     }
    //     if (e.target.name === "password") {
    //         passwordchange(e.target.value)
    //         if (!password) {
    //             setPasswordError('Password is required');
    //         }
    //         else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)) {
    //             setPasswordError('Password must contain capital,small,numeric,special characters');
    //             // alert("must contain capital,small,numeric,special characters")           
    //         } else if (password.length < 6) {
    //             setPasswordError('Password must be atleast 6 characters');
    //         }
    //         else {

    //             setPasswordError("")
    //         }
    //     }
    //     if (e.target.name === "cpassword") {
    //         setCpassword(e.target.value)
    //         if (e.target.value !== password) {
    //             setCpasswordError("Passwords do not match")
    //         }
    //         else {
    //             setCpasswordError("")
    //         }
    //     }
    // }
    // // Handling the form submission  
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setErrors({});
    //     const { email, password, confirmPassword } = submitted;
    //     if (!email) {
    //         setErrors({ email: 'Email is required' });
    //     }
    //     else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    //         setErrors({ email: 'Email is not valid' });
    //     }
    //     if (!password) {
    //         setErrors({ password: 'Password is required' });
    //     }
    //     else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)) {
    //         setErrors(({ password: 'Password must contain capital,small,numeric,special characters' }));
    //     }
    //     else if (password.length < 6) {
    //         setErrors({ password: 'Password must be atleast 6 characters' });
    //         // alert("must contain capital,small,numeric,special characters")     
    //     } if (password !== confirmPassword) {
    //         setErrors({ confirmPassword: 'Passwords do not match' });
    //     }
    // };
    // const handlesubmit = (e) => {
    //     e.preventDefault();
    //     if (email !== '' && password !== '' && !emailError && !passwordError && !cPasswordError) {
    //         console.log("EMAIL", email)
    //         console.log("PASSWORD", password)
    //         navigate('/');
    //         window.location.reload();
    //     }
    // }
    const loginNavigate = (e) => {
        navigate('/');
        window.location.reload();
    }
    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address format")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be 6 characters minimum")
            .required("Password is required")        
    });
    return (
        <>
            <div>
                <div className='xyz'>

                    <div className='flex'>
                        <div className="form">
                            <div className='co'>
                                <img src={abc} alt='dele' height="500" width="500" />
                            </div>
                        </div>
                        <div className="co" >
                            <div className='form'>

                                <h1>Signup</h1>

                                <div className="container">
                                    <div className="row">

                                        {/* <div className="col-lg-9"> */}
                                        <Formik
                                            initialValues={{ email: "", password: "" }}
                                            validationSchema={LoginSchema}
                                            onSubmit={(values) => {
                                                console.log(values);
                                                alert("Form is validated");
                                                loginNavigate('/')
                                            }}
                                        >
                                            {({ touched, errors, isSubmitting, values }) =>
                                                !isSubmitting ? (
                                                    <div>
                                                        {/* <div className="row mb-6">
                                                            
                                                        </div> */}
                                                        <Form>
                                                            <div className="mb-3" id="formBasicEmail">
                                                                <label>Email</label>
                                                                <Field
                                                                    type="email"
                                                                    name="email"
                                                                    placeholder="enter email"
                                                                    autoComplete="off"
                                                                    className={`mt-2 form-control
                            ${touched.email && errors.email ? "is-invalid" : ""
                                                                        }`}
                                                                />
                                                                <ErrorMessage
                                                                    component="div"
                                                                    name="email"
                                                                    className="invalid-feedback"
                                                                />
                                                            </div>

                                                            <div>
                                                                <label>Password</label>
                                                                <Field
                                                                    type="password"
                                                                    name="password"
                                                                    placeholder="password"
                                                                    className={`mt-2 form-control
                           ${touched.password && errors.password
                                                                            ? "is-invalid"
                                                                            : ""
                                                                        }`}
                                                                />
                                                                <ErrorMessage
                                                                    component="div"
                                                                    name="password"
                                                                    className="invalid-feedback"
                                                                />
                                                            </div>
                                                            <div>
                                                                <label> Confirm Password</label>
                                                                <Field
                                                                    type="password"
                                                                    name="confirm password"
                                                                    placeholder=" password"
                                                                    className={`mt-2 form-control
                           ${touched.password && errors.password
                                                                            ? "is-invalid"
                                                                            : ""
                                                                        }`}
                                                                />
                                                                <ErrorMessage
                                                                    component="div"
                                                                    name="password"
                                                                    className="invalid-feedback"
                                                                />
                                                            </div>

                                                            <button
                                                                type="submit"
                                                                className="btn btn-primary btn-block mt-4"
                                                            >
                                                                Submit
                                                            </button>
                                                            <div>
                                                                <p>Already have an account ! <Link onClick={loginNavigate}>Login</Link></p>
                                                            </div>
                                                        </Form>
                                                    </div>
                                                ) : (
                                                    <div>

                                                    </div>

                                                )
                                            }
                                        </Formik>
                                        {/* </div> */}
                                    </div>
                                </div>
                                {/* <form onSubmit={handleSubmit}>
                                        <div className="mb-3" id="formBasicEmail">
                                            <label>Email address</label>
                                            <input onChange={(e) => validateEmail(e)} name='email' type="email" placeholder="Enter email" className='form-control' required />

                                            <span style={{ color: 'red' }}>{emailError}</span>
                                        </div>
                                         <div className="mb-3" id="formBasicpassword">
                                            <label>Password</label>
                                            <input type="password" name='password' onChange={(e) => validateEmail(e)} placeholder="password" className='form-control' required />
                                            {/* <span className='password-icon' onClick={handleToggle}><Icon icon={icon} size={25} /></span>  */}
                                {/* <span style={{ color: 'red' }}>{passwordError}</span> */}
                                {/* </div> */}
                                {/* {console.log(error)} */}
                                {/* <div className="mb-3" id="formBasicpassword" >
                                            <label>Confirm Password</label><br/>
                                            <input type="password" name='cpassword' className='form-control' onChange={(e) => validateEmail(e)} placeholder="Confirm Password" required /> */}
                                {/* <span className='password-icon' onClick={handleTogglee}><Icon icon={icon} size={25} /></span>  */}
                                {/* <span style={{ color: 'red' }}>{cPasswordError}</span>
                                        </div> */}
                                {/* /} */}
                                {/* <button onClick={handlesubmit} className="btn btn-primary" type="Submit">Signup </button> */}
                                {/* <div>
                                            <p>Already have an account ! <Link onClick={loginNavigate}>Login</Link></p>
                                        </div> */}
                                {/* </form> */}
                            </div>

                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}
export default Signup;




