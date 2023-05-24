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
    // toast.success("Saved successfully")
    // console.log({ "name": name, "email": email, "number": number, "gender": gender, "pincode": pincode, "primary_address": add, "primary_location": latit });
    // navigate('/')
    if (!name || !email || !number || !gender || !pincode || !add) {

      toast.error("All fields are required");

    }

    else {

      toast.success("Created Successfully");

      console.log({

        name: name,

        email: email,

        number: number,

        gender: `${gender}`,

        primary_address: add,

        primary_location: latit,

        pincode: pincode

      });

      setTimeout(function () { window.location.replace('/'); }, 3000)

    }
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
      <NavwithIcon />
      <div className='xyz'>
        <div className='flex'>
          <div className="rm">
            <img src={abc} alt='dele' height="500" width="500" />
          </div>
          <div className="col-md-5">
            <div className='yy'>
              <h1>Create your Profile!</h1>
            </div>
            <div >
              <form>
                <div className="no">
                  <div className="mb-2" id="formBasicName">
                    <label>
                      <p className="input-label" style={{ color: "#333333" }}>Name</p>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      id="userName"
                      placeholder="Enter name"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2" id="formBasicEmail">
                    <label>
                      <p className="input-label" style={{ color: "#333333" }}>Email</p>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      id="userEmail"
                      placeholder="Enter email"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2" id="formBasicnumber">
                    <label>
                      <p className="input-label" style={{ color: "#333333" }}>Phone number</p>
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={number}
                      onChange={(e) => {
                        if (e.target.value.length <= 10) {
                          setnumber(e.target.value);
                        }
                      }}
                      placeholder="Enter phone number"
                      className="form-control"
                    />


                  </div>
                  <div className="row">
                    <div className="col-6">
                      <label>
                        <p className="input-label" style={{ color: "#333333" }}>Gender:</p>
                      </label>
                    </div>
                    <div className="col-6 d-flex align-items-center">
                      <div className="d-flex justify-content-end male" style={{ paddingRight: "-5px 0px" }}>
                        <input
                          type="radio"
                          value="male"
                          name="gender"
                          onChange={(e) => setgender(e.target.value)}
                          checked={gender === "male"}
                        />
                        <span style={{ marginRight: "-5px" }}>Male</span>
                      </div>
                      <div className="d-flex align-items-center female" style={{ marginLeft: "20px" }}>
                        <input
                          type="radio"
                          value="female"
                          name="gender"
                          onChange={(e) => setgender(e.target.value)}
                          checked={gender === "female"}
                        />
                        <span>Female</span>
                      </div>
                    </div>
                  </div>

                  {/* <div className='row'>
                    <div className='col-6 '>
                      <label>
                        <p className="input-label" style={{ color: "#333333" }}>Gender:</p>
                      </label></div>
                    <div className="col-3 " >
                      <input
                        type="radio"
                        value="male"
                        name="gender"
                        onChange={(e) => setgender(e.target.value)}
                        checked={gender === "male"} />Male
                  
                      <input
                        type="radio"
                        value="female"
                        name="gender"
                        onChange={(e) => setgender(e.target.value)}
                        checked={gender === "female"} />Female
                    
                    </div></div> */}
                  <div className="mb-2" id="formBasicnumber" style={{ margin: '-5px 0px', }}>
                    <label>
                      <p className="input-label" style={{ color: "#333333" }}>Pincode</p>
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={pincode}
                      onChange={(e) => {
                        if (e.target.value.length <= 6) {
                          setpincode(e.target.value);
                        }
                      }}
                      placeholder="Enter pincode"
                      className="form-control" />


                  </div>
                  <div className="mb-2" id="formBasicAddress" style={{ margin: '-10px 0px', position: "absolute" }}>
                    <label>
                      <p className="input-label" style={{ color: "#333333" }}>Address</p>
                    </label>
                    <Map1 map={maphan} lat={lathan} />
                  </div>
                </div>
              </form>

              {/* <form>
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
                                        <label><p style={{  color: 'black', paddingTop: 5, alignItems: 'center' }}>Address</p></label>
                                        <Map1 map={maphan} lat={lathan} />
                                    </div>

                                    <div className="mb-2" id="formBasicnumber" style={{border:"50%"}}>
                                        <label><p style={{ color: 'black', paddingTop: 5, alignItems: 'center' }}>Pincode</p></label>

                                        <input type="number" value={pincode} onChange={(e) => { if (e.target.value.length <= 6) { (setpincode(e.target.value)) } }} placeholder="Enter pincode" className='form-control' />

                                    </div>
                                </div>
                            </form> */}
              <br>
              </br>
              <br></br>
              <div className="cc" style={{ paddingTop: "20px" }}>
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


