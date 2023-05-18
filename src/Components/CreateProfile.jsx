import React, { useState, useEffect } from 'react';
import NavwithIcon from "./NavwithIcon";
import { API_BASE_URL } from './api.jsx';
import abc from './pic.png';
import axios from "axios";
// import { toast } from 'react-toastify';
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Map1 from './Map';
// import "./Navbar.scss"
import logo from "./sk.png";

const CreateProfile = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [save, setsave] = useState(false);
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [number, setnumber] = useState("")
    const [gender, setgender] = useState("")
    const [address, setaddress] = useState("")
    const [pincode, setpincode] = useState("")
    const [add, setadd] = useState("")
    const [latit, selatit] = useState([])


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


        // axios.post('http://ec2-15-206-148-202.ap-south-1.compute.amazonaws.com:8001/createprofile'
        axios.post(`${API_BASE_URL}/createprofile`
        ,
         payload,
            { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } }
        )
            .then(response => {
                setDataa(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        toast.success("Saved successfully")
        console.log({ "name": name, "email": email, "number": number, "gender": gender, "pincode": pincode, "primary_address": add, "primary_location": latit });
        navigate('/')
    };

    const maphan = (i) => {
        setadd(i)
    }
    const lathan = (p) => {
        selatit(p)
    }
    // const [disprofile, setdisprofile] = useState(false)
    // const dishan = () => {

    //     if (disprofile === false) {

    //         setdisprofile(true)

    //     }

    //     else {

    //         setdisprofile(false)

    //     }

    // }
  

    return (
        <>
        <NavwithIcon/>
            <div className='xyz'>
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
                                        <label><p style={{ fontSize: 16, color: 'black', paddingTop: 5, alignItems: 'center' }}>Name</p></label>


                                        <input type="Name" value={name} onChange={(t) => (setname(t.target.value))} id="userName" placeholder="Enter name" className='form-control' />


                                    </div>
                                    <div className="mb-2" id="formBasicEmail">
                                        <label> <p style={{ fontSize: 16, color: 'black', paddingTop: 5, alignItems: 'center' }}>Email</p> </label>
                                        <input type="Email" value={email} onChange={(e) => (setemail(e.target.value))} id="userEmail" placeholder="Enter email" className='form-control' />

                                    </div>
                                    <div className="mb-2" id="formBasicnumber">
                                        <label> </label> <p style={{ fontSize: 16, color: 'black', paddingTop: 5, alignItems: 'center' }}> Phone number </p>

                                        <input type="number" value={number} onChange={(a) => { if (a.target.value.length <= 10) { (setnumber(a.target.value)) } }} placeholder="Enter phonenumber" className='form-control' />

                                    </div>
                                    <div >
                                        <label><p style={{ fontSize: 16, color: 'black', paddingTop: 5, alignItems: 'center' }}>Gender :</p></label>
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
                                        <label><p style={{ fontSize: 16, color: 'black', paddingTop: 5, alignItems: 'center' }}>Address</p></label>
                                        <Map1 map={maphan} lat={lathan} />
                                    </div>

                                    <div className="mb-2" id="formBasicnumber">
                                        <label><p style={{ fontSize: 16, color: 'black', paddingTop: 5, alignItems: 'center' }}>Pincode</p></label>

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
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default CreateProfile;


