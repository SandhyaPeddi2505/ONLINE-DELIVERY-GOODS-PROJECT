// import { ChangeEvent } from 'react';
import React from 'react';
import qwe from './12.png';
import axios from "axios";
// import Form from 'react-bootstrap/Form';
// import { Button } from 'react-bootstrap';

// import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Agent = () => {
    const redirect = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [address,setAddress]=useState("");
    const handlesubmit = () => {
        localStorage.setItem('EMAIL', email)
        localStorage.setItem('PASSWORD', password)
        if (email.length < 0) {
            alert("email")
        }
        else if (email !== "a@gmail.com") {
            //  alert("qwerty") 
        }
        // else {
        //     alert("Thankyou for successful regristration" + "\n" + "Admin will get back to you!!")
        //     redirect('/agentdash')
        // }
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
        axios.get('http://ec2-65-2-161-39.ap-south-1.compute.amazonaws.com:8001/Agent_Info/', {
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
            <div>
                <div className='bgj'>
                    <div className='flex'>
                        <div className="co4">
                            {/* <img src="https://o.remove.bg/downloads/885675ca-621b-4cc3-83ec-94fe62dfe9e0/frontlogo-removebg-preview.png"/> */}
                            <img src={qwe} alt='dele' height="500" width="600" />
                        </div>
                        <div className='co4'>
                            <div >
                                <h3>Agent Signup Details!</h3>
                                <form >
                                    <div>
                                        
                                        <div class='row'>
                                            <div class='col-md-6'>
                                                {/* <div class=''> */}
                                                    <div class="form-group">
                                                        <label className="fs title" >First Name</label>
                                                        <input type="text" class="form-control"  placeholder="Enter first Name" />
                                                        
                                                    </div>
                                                    <div class="form-group">
                                                        <label className="fs title" >Last Name</label>
                                                        <input type="text" class="form-control"  placeholder="Enter last Name" />
                                                        
                                                    </div>

                                                {/* </div> */}
                                                

                                                {/* <Form.Group className="mb-3" controlId="formBasicFirstname">
                                                    <Form.Label>FirstName</Form.Label>
                                                    <Form.Control type="FirstName" required placeholder="Ex: abc" />
                                                </Form.Group> */}
                                            </div>
                                            <div>
                                                <div>
                                                    <label>Email</label>
                                                    <input type="email"class="form-control"   placeholder="Enter email"/>
                                                </div>
                                                <div>
                                                    <div>
                                                        <label>phone number</label>
                                                        <input type="text" class="form-control"   placeholder="Enter phone number"/>
                                                    </div>
                                                </div>
                                                <div>
                                                        <label>Enter  Address</label>
                                                        <input type="text" class="form-control"   placeholder="Enter Address"/>
                                                    </div>

                                            </div>

                                            {/* <div class='col-md-6'>
                                                <div class='form-outline'> */}
                                            {/* <Form.Group className="mb-3" controlId="formBasicFirstname">
                                                    <Form.Label>LastName</Form.Label>
                                                    <Form.Control type="LastName" required placeholder="Ex: def" />
                                                </Form.Group> */}
                                            {/* </div>
                                            </div> */}
                                        </div>
                                        {/* <div className='row'>
                                        <div className='col-md-6'>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control onChange={(e) => setEmail(e.target.value)} type="Email" required placeholder="Enter Email" />
                                            </Form.Group>
                                                        
                                        </div> */}
                                        {/* <div className='col-md-6'>
                                            <div className='form-outline'>
                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Phone Number</Form.Label>
                                                    <Form.Control type="PhoneInput" country={'us'} required placeholder="Enter Number" />
                                                </Form.Group>
                                            </div>
                                        </div> */}
                                    </div>
                                    {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control onChange={(e) => setPassword(e.target.value)} type="Password" required placeholder="Enter Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="formAddress">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Address"  name="address" required  />
                                    </Form.Group> */}
                                    <h6>Addhar Image:</h6>
                                    <input type="file" required onChange={handleChange} />
                                    <img src={file} height="50px" width="50px" />
                                    <h6>Licence Image:</h6>
                                    <input type="file" required onChange={handleChange2} />
                                    <img src={files} height="50px" width="50px" />
                                    <div className='heading6'>
                                        <button className='btn btn-primary'>Submit</button>
                                        {/* <Button className='btn' onClick={handlesubmit} variant="secondary" type="submit">Confirm</Button>{' '} */}
                                    </div>
                                    {/* </div> */}
                                    {/* <div class="center"> 
                                                   <Link to='/'>Back</Link>  
                                                    </div> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default Agent;


