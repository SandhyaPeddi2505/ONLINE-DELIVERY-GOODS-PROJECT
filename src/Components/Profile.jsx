import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import abc from './pic.png';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Navbar from './Navbar';
import Map1 from "./Map M";

const Profile = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [save, setsave] = useState(false);
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [number, setnumber] = useState("")
    const [gender, setgender] = useState("")
    // const [address, setaddress] = useState("")
    const [pincode, setpincode] = useState("")
    const [add, setadd] = useState("");
    const [latit, selatit] = useState([]);
    const [dataa, setDataa] = useState({});
    const handlesubmit = (e) => {
        e.preventdefault();

    }
    const savehandle = () => {

        const payload = {
            name: name,

            email: email,

            phone: number,

            gender: gender,

            primary_address: add,

            primary_location: latit
        };

        axios
            .post(
                "http://ec2-65-0-179-201.ap-south-1.compute.amazonaws.com:8001/createprofile",
                payload,
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
                }
            )
            .then((response) => {
                setDataa(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        if (!name || !email || !number || !gender || !pincode || !add) {
            toast.error("All fields are required")
        }
        else {
            toast.success("Saved Successfully")
            setIsEditing(false)
            setsave(false)

            console.log({
                "name": name, "email": email, "number": number, "gender": `${gender}`, "primary_address": add,
                "primary_location": latit, "pincode": pincode
            });
            navigate('/')

        }
        // setTimeout(function() { window. location. replace('/'); }, 5000)
    }
    const edithandle = () => {
        setIsEditing(true)
        setsave(true)



    }




    const maphan = (i) => {
        setadd(i);
    };
    const lathan = (p) => {
        selatit(p);
    };

    return (
        <>
            <Navbar />
            <div className='xyz'>

                <div className='end '>

                </div>


                <div className='flex'>
                    <div className="rm">
                        <img src={abc} alt='dele' height="500" width="500" />
                    </div>
                    <div className="col-md-5">
                        <div className='yy'>
                            <h2>Edit Profile !</h2>
                        </div>
                        <div >
                            <form onSubmit={handlesubmit}>
                                <div className='no'>
                                    <div className="mb-2" id="formBasicName">
                                        <label>Name</label>
                                        {!isEditing &&

                                            <input value={name} className='form-control' required placeholder="Enter name" />
                                        }
                                        {isEditing &&
                                            (<input type="Name" value={name} onChange={(t) => (setname(t.target.value))} id="userName" required placeholder="Enter name" className='form-control' />)
                                        }

                                    </div>
                                    <div className="mb-2" id="formBasicEmail">
                                        <label> Email </label>
                                        {!isEditing &&

                                            <input value={email} className='form-control' required placeholder="Enter email" />
                                        }
                                        {isEditing &&
                                            <input type="Email" value={email} onChange={(e) => (setemail(e.target.value))} id="userEmail" required placeholder="Enter email" className='form-control' />
                                        }
                                    </div>
                                    <div className="mb-2" id="formBasicnumber">
                                        <label> Phone number </label>
                                        {!isEditing &&

                                            <input value={number} className='form-control' required placeholder="Enter phonenumber" />
                                        }
                                        {isEditing &&
                                            <input type="number" value={number} onChange={(a) => { if (a.target.value.length <= 10) { (setnumber(a.target.value)) } }} required placeholder="Enter phonenumber" className='form-control' />
                                        }
                                    </div>
                                    <div >
                                        <label>Gender :</label>
                                        {!isEditing &&
                                            <input type="radio" value="male" name="gender" required onChange={(x) => (setgender(x.target.value))} checked={gender === 'male'} />
                                        }
                                        {isEditing &&
                                            <input type="radio" value="male" name="gender" required onChange={(x) => (setgender(x.target.value))} checked={gender === 'male'} />}Male
                                        {!isEditing &&
                                            <input type="radio" value="female" name="gender" required onChange={(y) => (setgender(y.target.value))} checked={gender === 'female'} />}
                                        {isEditing &&
                                            <input type="radio" value="female" name="gender" required onChange={(y) => (setgender(y.target.value))} checked={gender === 'female'} />}Female
                                    </div>
                                    <div className="mb-2" id="formBasicAddress">
                                        <label> Address </label>

                                        {isEditing ? <Map1 map={maphan} lat={lathan} /> : <>{!isEditing && <input value={add} className='form-control' required placeholder=" Address" />}</>}

                                    </div>

                                    <div className="mb-2" id="formBasicnumber">
                                        <label> Pincode </label>
                                        {!isEditing &&

                                            <input value={pincode} className='form-control' required placeholder="Enter pincode" />
                                        }
                                        {isEditing &&
                                            <input type="number" value={pincode} onChange={(e) => { if (e.target.value.length <= 6) { (setpincode(e.target.value)) } }} required placeholder="Enter pincode" className='form-control' />
                                        }
                                    </div>



                                </div>
                                <ToastContainer
                                    position="top-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover

                                />
                                {save &&
                                    <button className='btn btn-primary' type='submit' onClick={savehandle}>
                                        Save
                                    </button>
                                }
                            </form>
                            <div className='cc'>
                                {!isEditing &&
                                    <button className='btn btn-primary' onClick={edithandle} >
                                        Edit
                                    </button>
                                }


                            </div>

                            <div className='m'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Profile;

