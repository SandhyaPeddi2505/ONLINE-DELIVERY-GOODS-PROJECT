import React, { useState, useEffect } from 'react';
// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import abc from './pic.png';
import axios from "axios";
// import { toast } from 'react-toastify';
import { ToastContainer, toast } from "react-toastify";
import Map1 from './Map';
import "./Navbar.scss"
import logo from "./sk.png";

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
       
        
        axios.post('http://ec2-65-1-92-110.ap-south-1.compute.amazonaws.com:8001/createprofile', payload,
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
          navigate('/')
    };
       
const maphan=(i)=>{
    setadd(i)
}
const lathan=(p)=>{
selatit(p)
}
const [disprofile, setdisprofile] = useState(false)
    const dishan = () => {

        if (disprofile === false) {

            setdisprofile(true)

        }

        else {

            setdisprofile(false)

        }

    }

    return (
        <>
            <nav className="fixed-nav-bar">

                <nav className="navbar navbar-expand-lg navbar-dark ">

                    <a className="navbar-brand" href="#"><img src={logo} alt="qwe" width="95" height="30" /> </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"></span>

                    </button>
                    <div className="wer">
                    <div className="right-profile" onClick={dishan}>MT</div>
                    {

disprofile ?
  <div className="profile-container">
    <div className="ij">
      <Link to="/profile" style={{ color: "white", textDecoration: "none" }}><p style={{color:"#A2A9B4",fontSize: '15px',fontStyle:'Proxima Nova'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">

        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />

      </svg>Edit profile</p></Link>
    </div>
    <div className="ji">
      <Link to='/changepassword' style={{ color: "white", textDecoration: "none" }}><p style={{color:"#A2A9B4",fontSize: '15px',fontStyle:'Proxima Nova'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">

        <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />

      </svg>Changepassword</p></Link>
    </div>
  </div>

  : ""

}
</div>

                </nav>

            </nav>


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
                                <div className="mb-2" id="formBasicAddress">
                                    <label> Address </label>
                                  <Map1 map={maphan} lat={lathan}/>
                                </div>
                               
                                <div className="mb-2" id="formBasicnumber">
                                    <label> Pincode </label>
                                    
                                        <input type="number" value={pincode} onChange={(e) => { if (e.target.value.length <= 6) { (setpincode(e.target.value)) } }} placeholder="Enter pincode" className='form-control' />

                                    </div>



                                </div>
                            </form>
                            <br>
                            </br>
                            <br></br>
              <div className="cc">
                <Link to="/">
                  <button className="btn btn-primary" onClick={handleSubmit}>
                    Save
                  </button>
                </Link>
              </div>

                            <div className='m'>
                                <button className='btn btn-primary' onClick={handleSubmit}>
                                    Next
                                    <i class="bi bi-arrow-right"></i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default Create;


