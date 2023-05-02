// // Agent
import React, { useEffect } from "react";
import qwe from "./12.png";
// import axios from "axios";
// import Form from 'react-bootstrap/Form';
// import { Button } from 'react-bootstrap';

// import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from 'axios';
import logo from "./sk.png";
const Agent = () => {
  const home = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [api, setApi] = useState([]);
  const [aadharImage, setAadharImage] = useState(null);
  const [licenseImage, setLicenseImage] = useState(null);
  
  const [file, setFile] = useState();
  const [files, setFiles] = useState();
  const [data, setData] = useState({});
  const handleAadharChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setAadharImage({
        name: file.name,
        base64: reader.result.split(',')[1]
      });
    };
  };
  const handleLicenseChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setLicenseImage({
        name: file.name,
        base64: reader.result.split(',')[1]
      });
    };
  };
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
      alert(
        'User Successfully Registred "\r Admin will get back to you once "\r your details are verified!!'
      );
      home("/");
    } else {
      alert("Error Occurred!");
    }
  };

//   const handleUpload = () => {
//     if (!aadharFile || !licenseFile) {
//       console.log("Please select both files");
//       return;
//     }
//     const aadharReader = new FileReader();
//     const licenseReader = new FileReader();


//     aadharReader.readAsDataURL(aadharFile);
//     licenseReader.readAsDataURL(licenseFile);

//     aadharReader.onload = () => {
//       licenseReader.onload = () => {
//         const combinedFiles = [
//           {
//             name: aadharFile.name,
//             base64: aadharReader.result
//           },
//           {
//             name: licenseFile.name,
//             base64: licenseReader.result
//           }
//         ];

//         console.log(combinedFiles);
//       };
//     };
//   };
const handleEncode = () => {
    const info = {
        // [aadharImage],[licenseImage]
      aadhar: [aadharImage],
      license: [licenseImage]
    };
    console.log(info);
  };
  return (
    <>
      <nav class="fixed-nav-bar">
        <nav class="navbar navbar-expand-lg navbar-dark ">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="qwe" width="95" height="30" />{" "}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <div className="">
              </div>
            </ul>
          </div>
        </nav>
      </nav>

      <div className="bgj">
        <div className="blur">
          <div className="cont">
            <div className="form-agent">
              <form onSubmit={handleSubmit}>
                <center>
                  <h4>Agent SignUp details</h4>
                </center>
                <div class="row">
                  <div class="col-md-12">
                    <div>
                      <div className="row">
                        <div class=" col-6 form-group">
                          <input
                            type="text"
                            class="form-control"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Enter first Name"
                            required
                          />
                        </div>
                        <div class=" col-6 form-group">
                          <input
                            type="text"
                            class="form-control"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter last Name"
                            required
                          />
                        </div>
                      </div>
                      <div>
                       <input
                          type="email"
                          value={email}
                          class="form-control"
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter email"
                          required
                        />
                      </div>

                      <div>
                        <input
                          type="password"
                          value={password}
                          className="form-control"
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter Password"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="PhoneInput"
                          maxLength={10}
                          value={phoneNumber}
                          class="form-control"
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="Enter phone number"
                          required
                        />
                      </div>

                      <div>
                        <input
                          type="text"
                          value={address}
                          class="form-control"
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Enter Address"
                          required
                        />
                      </div>

                      <h6 class="font-bold">Addhar Image:</h6>
                      <input type="file"  onChange={handleAadharChange} />
                      <img src={file} height="50px" width="50px" />
                      <h6 class="font-bold">Licence Image:</h6>
                      <input type="file" onChange={handleLicenseChange} />
                      <img
                        src={files}
                        height="50px"
                        width="50px"
                       
                      />
                     
                      <div className="heading6 mt-3">
                        <button className="btn btn-primary" onClick={handleEncode}>Submit</button>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Agent;
