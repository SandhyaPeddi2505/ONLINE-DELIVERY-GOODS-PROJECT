import React, { useEffect } from 'react';
import qwe from './12.png';
// import axios from "axios";
// import Form from 'react-bootstrap/Form';
// import { Button } from 'react-bootstrap';

// import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "./sk.png"
const Agent = () => {
    const home = useNavigate()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [api, setApi] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        const validFirstName = firstName.length > 0;
        const validLastName = lastName.length > 0;
        const validEmail = email.includes("@gmail.com");
        const validPassword = password.length > 5;
        const validPhoneNumber = phoneNumber.length > 8;
        const validAddress = address.length > 0;

        if (
            validFirstName &&
            validLastName &&
            validEmail &&
            validPassword &&
            validPhoneNumber &&
            validAddress
        ) {
            alert('User Successfully Registred "\r Admin will get back to you once "\r your details are verified!!')
            home('/')
        } else {
            alert("Error Occurred!")
        }
    }


    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const [files, setFiles] = useState();
    function handleChange2(e) {
        console.log(e.target.files);
        setFiles(URL.createObjectURL(e.target.files[0]));
    }
    const[data,setData]=useState({})
    useEffect(() => {
        //call API
        axios.get('http://ec2-13-232-41-19.ap-south-1.compute.amazonaws.com:8001/Agent_Info/', {
          // headers: {
          //    'Content-Type': 'application/json',
          //    "Access-Control-Allow-Headers": '*',
          //   }
        })
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
    return (
        <>
            <nav class="fixed-nav-bar">
                <nav class="navbar navbar-expand-lg navbar-dark ">
                    <a class="navbar-brand" href="#"><img src={logo} alt="qwe" width="95" height="30" /> </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <div className="">
                                {/* <li class="nav-item">
              <a class="hi nav-link" to={Link} href="/tracking" ><p className="qb"><span style={{ color: "black" }}>Tracking</span></p></a>
            </li> */}
                            </div>
                            {/* <li class="nav-item">
              <div className="wer">
                <a class="nav-link" to={Link} href="/agent"><p><span style={{ color: "black" }}>Agent Registration</span></p></a>
              </div>
            </li> */}

                        </ul>
                    </div>
                </nav>
            </nav>
            <div className='bgj'>
                <div className="blur">
                    <div className="cont">
                        <div className="form-agent">
                            
                            <form onSubmit={handleSubmit}>
                            <center>
                                <h4>Agent SignUp details</h4>
                            </center>
                                <div class='row'>
                                    <div class='col-md-12'>
                                        <div >
                                        <div className='row'>
                                            <div class=" col-6 form-group">
                                                {/* <label className="fs title" >First Name</label> */}
                                                <input type="text" class="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter first Name" required />

                                            </div>
                                            <div class=" col-6 form-group">
                                                {/* <label className="fs title" >Last Name</label> */}
                                                <input type="text" class="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter last Name" required />

                                            </div>
                                        </div>
                                            <div>
                                                {/* <label>Email</label> */}
                                                <input type="email" value={email} class="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
                                            </div>
                                        
                                                <div>
                                                    {/* <label>Password</label> */}
                                                    <input type="password" value={password} className='form-control' onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' required />
                                                </div>
                                                <div>
                                                    {/* <label>phone number</label> */}
                                                    <input type="PhoneInput" maxLength={10} value={phoneNumber} class="form-control" onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter phone number" required />
                                                </div>
                                            
                                            <div>
                                                {/* <label>Enter  Address</label> */}
                                                <input type="text" value={address} class="form-control" onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address" required />
                                            </div>

                                        
                                        <h6 class="font-bold">Addhar Image:</h6>
                                <input type="file" onChange={handleChange} />
                                <img src={file} height="50px" width="50px" />
                                <h6 class="font-bold">Licence Image:</h6>
                                <input type="file" onChange={handleChange2} />
                                <img src={files} height="50px" width="50px" />
                                <div className='heading6 mt-3'>
                                    <button className='btn btn-primary'>Submit</button>
                                </div>
</div>
                                    </div>
                                </div>

                                
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Agent;


