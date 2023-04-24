import React, { useEffect } from 'react';
import qwe from './12.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Agent = () => {
    const home = useNavigate()
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[phoneNumber,setPhoneNumber]=useState("");
    const[address,setAddress]=useState("");
    const [api,setApi]=useState([])

    const handleSubmit=(e)=> {
        e.preventDefault();
        const validFirstName = firstName.length>0;
        const validLastName = lastName.length >0;
        const validEmail=email.includes("@gmail.com");
        const validPassword = password.length > 5;
        const validPhoneNumber=phoneNumber.length>8;
        const validAddress= address.length>0;

        if(
            validFirstName &&
            validLastName &&
            validEmail &&
            validPassword &&
            validPhoneNumber &&
            validAddress
        ){
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
    useEffect(()=> {
        axios.get("http://ec2-65-2-161-39.ap-south-1.compute.amazonaws.com:8001/Agent_Info/")
        .then((res)=>setApi(res.data))
        console.log(api)
    },[])
    return (
        <>
            
                <div className='bgj'>
                    <div className=' flex'>
                        <div className="co4">
                            <img src={qwe} alt='dele' height="500" width="600" />
                        </div>
                        <div className='co4'>
                            <div >
                                <h3>Agent Signup Details!</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className='mt-5'>
                                        
                                        <div class='row'>
                                            <div class='col-md-12'>
                                                {/* <div class=''> */}
                                                <div className='row'>
                                                <div class=" col-6 form-group">
                                                        <label className="fs title" >First Name</label>
                                                        <input type="text" class="form-control" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="Enter first Name" required/>
                                                        
                                                        </div>
                                                    <div class=" col-6 form-group">
                                                        <label className="fs title" >Last Name</label>
                                                        <input type="text" class="form-control" value={lastName} onChange={(e)=>setLastName(e.target.value)}  placeholder="Enter last Name" required/>
                                                        
                                                    </div>
                                                     
                                                </div>
                                                    

                                                {/* </div> */}
                                            
                                            <div>
                                                <div>
                                                    <label>Email</label>
                                                    <input type="email" value={email} class="form-control"  onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" required/>
                                                </div>
                                                <div>
                                                    <div>
                                                        <label>Password</label>
                                                        <input type="password" value={password} className='form-control' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' required/>
                                                    </div>
                                                    <div>
                                                        <label>phone number</label>
                                                        <input type="PhoneInput" maxLength={10} value={phoneNumber} class="form-control" onChange={(e)=>setPhoneNumber(e.target.value)}   placeholder="Enter phone number" required/>
                                                    </div>
                                                </div>
                                                <div>
                                                        <label>Enter  Address</label>
                                                        <input type="text" value={address} class="form-control" onChange={(e)=>setAddress(e.target.value)}  placeholder="Enter Address" required/>
                                                    </div>

                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <h6>Addhar Image:</h6>
                                    <input type="file" onChange={handleChange} />
                                    <img src={file} height="50px" width="50px" />
                                    <h6>Licence Image:</h6>
                                    <input type="file" onChange={handleChange2} />
                                    <img src={files} height="50px" width="50px" />
                                    <div className='heading6'>
                                        <button className='btn btn-primary'>Submit</button>
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


