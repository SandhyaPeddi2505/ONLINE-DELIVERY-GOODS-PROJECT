import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import abc from "./pic.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./Navbar";
import Map1 from "./Map M";
import { API_BASE_URL } from './api.jsx';

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [save, setsave] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [gender, setgender] = useState("");
  // const [address, setaddress] = useState("")
  const [pincode, setpincode] = useState("");
  const [add, setadd] = useState("");
  const [latit, selatit] = useState([]);
  const [dataa, setDataa] = useState({});
  const handlesubmit = (e) => {
    e.preventdefault();
  };
  const savehandle = () => {
    const payload = {
      name: name,

      email: email,

      phone: number,

      gender: gender,

      primary_address: add,

      primary_location: latit
    };

    // axios
    //   .post(
    //     "http://ec2-65-0-179-201.ap-south-1.compute.amazonaws.com:8001/createprofile"
    axios.post(`${API_BASE_URL}/createprofile`
        ,
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
      toast.error("All fields are required");
    } else {
      toast.success("Saved Successfully");
      setIsEditing(false);
      setsave(false);

      console.log({
        name: name,
        email: email,
        number: number,
        gender: `${gender}`,
        primary_address: add,
        primary_location: latit,
        pincode: pincode
      });
      navigate("/");
    }
    // setTimeout(function() { window. location. replace('/'); }, 5000)
  };
  const edithandle = () => {
    setIsEditing(true);
    setsave(true);
  };

  const maphan = (i) => {
    setadd(i);
  };
  const lathan = (p) => {
    selatit(p);
  };

  return (
    <>
      <Navbar />
      <div className="d-grid">
      <div className="vv">
        
        <div className="flex m-auto pt-5">
          <div className="yz">
            <img src={abc} alt="dele" height="500" width="500" />
          </div>
         
            <div className="ab">
              <h2>Edit Profile </h2>
            
            
              <form onSubmit={handlesubmit}>
                <div className="">
                  <div className="mb-1" id="formBasicName">
                    <label>
                      <p
                        style={{
                          fontSize: 16,
                          color: "black",
                          paddingTop: 5,
                          alignItems: "center"
                        }}
                      >
                        Name
                      </p>
                    </label>
                    {!isEditing ? (
                      <input
                        value={name}
                        className="form-control"
                        required
                        placeholder="Enter name"
                      />
                    ) : (
                      <input
                        type="Name"
                        value={name}
                        onChange={(t) => setname(t.target.value)}
                        id="userName"
                        required
                        placeholder="Enter name"
                        className="form-control"
                      />
                    )}
                  </div>
                  <div className="mb-1" id="formBasicEmail">
                    <label>
                      <p
                        style={{
                          fontSize: 16,
                          color: "black",
                          paddingTop: 5,
                          alignItems: "center"
                        }}
                      >
                        Email
                      </p>
                    </label>
                    {!isEditing ? (
                      <input
                        value={email}
                        className="form-control"
                        required
                        placeholder="Enter email"
                      />
                    ) : (
                      <input
                        type="Email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        id="userEmail"
                        required
                        placeholder="Enter email"
                        className="form-control"
                      />
                    )}
                  </div>
                  <div className="mb-1" id="formBasicnumber">
                    <label>
                      <p
                        style={{
                          fontSize: 16,
                          color: "black",
                          paddingTop: 5,
                          alignItems: "center"
                        }}
                      >
                        {" "}
                        Phone number{" "}
                      </p>
                    </label>
                    {!isEditing ? (
                      <input
                        value={number}
                        className="form-control"
                        required
                        placeholder="Enter phone number"
                      />
                    ) : (
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
                      
                    )}
                  </div>
                  <div className="row">
                    <div className="col-4 align-self-end">
                      <label>
                        <p
                          style={{
                            // fontSize: 16,
                            color: "black",
                            paddingTop: 0,
                            alignItems: "center"
                          }}
                        >
                          Gender :
                        </p>
                      </label>
                    </div>
                    <div className="col-4 mt-2">
                      {!isEditing ? (
                        <input type="radio" name="gender" disabled />
                      ) : (
                        <input
                          type="radio"
                          value="male"
                          name="gender"
                          required
                          onChange={(x) => setgender(x.target.value)}
                          checked={gender === "male"}
                        />
                      )}
                      Male
                    </div>
                    <div className="col-4 mt-2">
                      {!isEditing ? (
                        <input type="radio" value="female" disabled />
                      ) : (
                        <input
                          type="radio"
                          value="female"
                          name="gender"
                          required
                          onChange={(y) => setgender(y.target.value)}
                          checked={gender === "female"}
                        />
                      )}
                      Female
                    </div>
                  </div>
                  <div className="mb-2" id="formBasicAddress">
                  <label>
                      <p
                        style={{
                          fontSize: 16,
                          color: "black",
                          paddingTop: 5,
                          alignItems: "center"
                        }}
                      >
                        {" "}
                        Pincode{" "}
                      </p>
                    </label>
                    {!isEditing ? (
                      <input
                        value={pincode}
                        className="form-control"
                        required
                        placeholder="Enter pincode"
                      />
                    ) : (
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
            
                    )}
                    
                  </div>

                  <div className="mb-2" id="formBasicnumber">
                   
                    <label>
                      <p
                        style={{
                          fontSize: 16,
                          color: "black",
                          paddingTop: 5,
                          alignItems: "center"
                        }}
                      >
                        Address
                      </p>{" "}
                    </label>

                    {isEditing ? (
                      <Map1 map={maphan} lat={lathan} />
                    ) : (
                      <>
                        {!isEditing && (
                          <input
                            value={add}
                            className="form-control"
                            required
                            placeholder="Address"
                          />
                        )}
                      </>
                    )}
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
                {save && (
                  <div className="save1">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={savehandle} 
                   >
                    Save
                  </button></div>
                )}
              </form>
              <div className="">
                {!isEditing && (
                  <button className="btn btn-primary" onClick={edithandle} style={{ marginTop:30,width:110 }}>
                    Edit
                  </button>
                )}
              </div>
                <div className="m"></div>
              
            
            </div>
          
        </div>
      </div>
      </div>
    </>
  );
};
export default Profile;
