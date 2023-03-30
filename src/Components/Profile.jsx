import React, { useState } from 'react';
// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import abc from './pic.png';
const Profile = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [save, setsave] = useState(false);
    const [name, setname] = useState("Manoja")
    const[email,setemail]=useState("manoja@gmail.com")
    const[number,setnumber]=useState("9867453267")
    const[gender,setgender]=useState("Female")
    const[address,setaddress]=useState("1-26/1,durgamcheruvu,hyderbad")
    // const[state,setstate]=useState("Telangana")
    // const[city,setcity]=useState("Hyderabad")
    const[pincode,setpincode]=useState("500081")
    const savehandle = () => {
        setIsEditing(false)
        setsave(false)
        console.log({"name":name,"email":email,"number":number, "gender":gender, "address":address,"pincode":pincode});
    }
    const edithandle = () => {
        setIsEditing(true)
        setsave(true)
        setname("")
        setemail("")
        setnumber("")
        setgender("")
        setaddress("")
        // setstate("")
        // setcity("")
        setpincode("")
    }
    // const navigate = useNavigate();

    const loginNavigate = (e) => {
        navigate('/user');
        window.location.reload();
    }
   
   
    return (
        <div className='xyz'>
            <div className='form'>

                <div className='flex'>
                    <div className='co'>
                        <img src={abc} alt='dele' height="500" width="500" />
                    </div>
                    <div className="col-md-4">
                        <div>
                            <h1>Edit Profile !</h1>
                        </div>
                        <div >
                            <form>
                                <div className="mb-2" id="formBasicName">
                                    <label>Name</label>
                                    {!isEditing &&
                                        (<div className="">
                                            <input value={name} className='form-control' placeholder="Enter name" />
                                        </div>)}
                                    {isEditing &&
                                        (<input type="Name" value={name} onChange={(t) => (setname(t.target.value))} id="userName" placeholder="Enter name" className='form-control' />)
                                    }

                                </div>
                                <div className="mb-2" id="formBasicEmail">
                                    <label> Email </label>
                                    {!isEditing &&
                                        (<div className="">
                                            <input value={email} className='form-control' placeholder="Enter email" />
                                        </div>)}
                                    {isEditing &&
                                        <input type="Email"  value={email} onChange={(e)=>(setemail(e.target.value))} id="userEmail" placeholder="Enter email" className='form-control' />
                                    }
                                </div>
                                <div className="mb-2" id="formBasicnumber">
                                    <label> Phone number </label>
                                    {!isEditing &&
                                        (<div className="">
                                            <input value={number} className='form-control' placeholder="Enter phonenumber" />
                                        </div>)}
                                    {isEditing &&
                                    <input type="number" value={number} onChange={(a)=>{if (a.target.value.length <= 10){(setnumber(a.target.value))}}}  placeholder="Enter phonenumber" className='form-control' />
                                }
                                </div>
                                <div >
                                    <label>Gender</label>
                                    
                                    <input type="radio" name="gender" value="male" />Male

                                    <input type="radio" name="gender" value="female" />Female

                                </div>
                                <div className="mb-2" id="formBasicAddress">
                                    <label> Address </label>
                                    {!isEditing &&
                                        (<div className="">
                                            <input value={address} className='form-control' placeholder="Enter address" />
                                        </div>)}
                                    {isEditing &&
                                    <textarea  value={address} onChange={(b)=>(setaddress(b.target.value))}rows="4" cols="10" placeholder="Enter address" className='form-control'></textarea>
}
                                </div>
                                {/* <div className="mb-2" id="formBasicnumber">
                                    <label> State </label>
                                    {!isEditing &&
                                        (<div className="">
                                            <input value={state} className='form-control' placeholder="Enter state" />
                                        </div>)}
                                    {isEditing &&
                                    <input type="text" value={state}  onChange={(c)=>(setstate(c.target.value))} placeholder="Enter state" className='form-control' />
}
                                </div> */}
                                {/* <div className="mb-2" id="formBasicnumber">
                                    <label> City </label>
                                    {!isEditing &&
                                        (<div className="">
                                            <input value={city} className='form-control' placeholder="Enter city" />
                                        </div>)}
                                    {isEditing &&
                                    <input type="text" value={city}  onChange={(d)=>(setcity(d.target.value))} placeholder="Enter city" className='form-control' />
}
                                </div> */}
                                <div className="mb-2" id="formBasicnumber">
                                    <label> Pincode </label>
                                    {!isEditing &&
                                        (<div className="">
                                            <input value={pincode} className='form-control' placeholder="Enter pincode" />
                                        </div>)}
                                    {isEditing &&
                                    <input type="number" value={pincode} onChange={(e)=>{if (e.target.value.length <= 6){(setpincode(e.target.value))}}} placeholder="Enter pincode" className='form-control' />
}
                                </div>


                                {/* <div>
                                    <Link onClick={loginNavigate}>Back </Link>
                                </div> */}
                            </form>
                            {!isEditing &&
                                <button className='btn btn-primary' onClick={edithandle} >
                                    Edit
                                </button>
                            }

                            {save &&
                                <button className='btn btn-primary' onClick={savehandle} >
                                    Save
                                </button>
                            }
                             <div>
                                <p> <Link onClick={loginNavigate}>Back</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;