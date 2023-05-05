import React, { useState ,useEffect} from 'react';
// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import abc from './pic.png';
// import Swal from "swal"
import Swal from 'sweetalert2';
import axios from "axios";
// import { toast } from 'react-toastify';
import { ToastContainer, toast } from "react-toastify";
import Map1 from './Map';

const Create = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [save, setsave] = useState(false);
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [number, setnumber] = useState("")
    const [gender, setgender] = useState("")
    const [address, setaddress] = useState("")
    const [pincode, setpincode] = useState("")
    const [add,setadd]=useState("")
    const [latit,selatit]=useState([])
   

    const [dataa, setDataa] = useState({});
   
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const payload =
        {

            "name": name,

            "email": email,

            "phone": number,

            "gender": gender,

            "primary_address": add,

            "primary_location": latit

        }
        
        axios.post('http://ec2-65-2-80-226.ap-south-1.compute.amazonaws.com:8001/CreateProfile', payload,
        { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}}
        )
          .then(response => {
            setDataa(response.data);
          })
          .catch(error => {
            console.log(error);
          });
          toast.success("Saved successfully")
          console.log({ "name": name, "email": email, "number": number, "gender": gender, "pincode": pincode,"primary_address":add ,"primary_location":latit});
    };
       
const maphan=(i)=>{
    setadd(i)
}
const lathan=(p)=>{
selatit(p)
}


    return (

        <div className='xyz'>
            {/* <div className='end '>

                <Link to="/changepassword" style={{ color: 'black', textDecoration: "none" }}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                        <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                    Changepassword

                </Link>
            </div> */}
           

            <div className='flex'>
                <div className="rm">
                    <img src={abc} alt='dele' height="500" width="500" />
                </div>
                <div className="col-md-5">
                    <div className='yy'>
                        <h1>Create your Profile !</h1>
                    </div>
                    <div >
                        <form>
                            <div className='no'>
                                <div className="mb-2" id="formBasicName">
                                    <label>Name</label>
                                  
                                  
                                        <input type="Name" value={name} onChange={(t) => (setname(t.target.value))} id="userName" placeholder="Enter name" className='form-control' />
                                    

                                </div>
                                <div className="mb-2" id="formBasicEmail">
                                <label> Email </label>
                                        <input type="Email" value={email} onChange={(e) => (setemail(e.target.value))} id="userEmail" placeholder="Enter email" className='form-control' />
                                    
                                </div>
                                <div className="mb-2" id="formBasicnumber">
                                    <label> Phone number </label>
                                 
                                        <input type="number" value={number} onChange={(a) => { if (a.target.value.length <= 10) { (setnumber(a.target.value)) } }} placeholder="Enter phonenumber" className='form-control' />
                                    
                                </div>
                                <div >
                                        <label>Gender :</label>
                                        {!isEditing &&
                                            <input type="radio" value="male" name="gender" onChange={(x) => (setgender(x.target.value))} checked={gender === 'male'} />
                                        }
                                        {isEditing &&
                                            <input type="radio" value="male" name="gender" onChange={(x) => (setgender(x.target.value))} checked={gender === 'male'} />}Male
                                        {!isEditing &&
                                            <input type="radio" value="female" name="gender" onChange={(y) => (setgender(y.target.value))} checked={gender === 'female'} />}
                                        {isEditing &&
                                            <input type="radio" value="female" name="gender" onChange={(y) => (setgender(y.target.value))} checked={gender === 'female'} />}Female
                                    </div>
                                {/* <div >
                                    <label>Gender</label>

                                    <input type="radio" name="gender" value="male" />Male

                                    <input type="radio" name="gender" value="female" />Female

                                </div> */}
                                <div className="mb-2" id="formBasicAddress">
                                    <label> Address </label>
                                  <Map1 map={maphan} lat={lathan}/>
                                        {/* <textarea value={address} onChange={(b) => (setaddress(b.target.value))} rows="4" cols="10" placeholder="Enter address" className='form-control'></textarea> */}
                                    
                                </div>
                               
                                <div className="mb-2" id="formBasicnumber">
                                    <label> Pincode </label>
                                    
                                        <input type="number" value={pincode} onChange={(e) => { if (e.target.value.length <= 6) { (setpincode(e.target.value)) } }} placeholder="Enter pincode" className='form-control' />
                                    
                                </div>


                                
                            </div>
                        </form>
                        <br>
                        </br>
                        <div className='cc'>
                          
                                <button className='btn btn-primary' onClick={handleSubmit} >
                                    Save
                                </button>
                            
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>

    )
}
export default Create;


