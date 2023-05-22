// import React from "react";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import logo from "./sk.png";

const NavwithIcon = () => {
    const [disprofile, setdisprofile] = useState(false)
const dishan = () => {
  

    if (disprofile === false) {

        setdisprofile(true)

    }

    else {

        setdisprofile(false)

    }

}

const logout = () => {

    localStorage.clear();

    
    toast.warn("Oops..! You are being logged out from your Account!");
  
    setTimeout(function () {
      window.location.replace("/");
    }, 3000);
    // navigate("/")

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
                                    <Link to="/profile" style={{ color: "white", textDecoration: "none" }}><p style={{ color: "#A2A9B4", fontSize: '15px', fontStyle: 'Proxima Nova' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">

                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />

                                    </svg>Edit profile</p></Link>
                                </div>
                                <div className="ji">
                                    <Link to='/changepassword' style={{ color: "white", textDecoration: "none" }}><p style={{ color: "#A2A9B4", fontSize: '15px', fontStyle: 'Proxima Nova' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">

                                        <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />

                                    </svg>Changepassword</p></Link>
                                    <div className="jivc" onClick={logout} style={{position:"relative",bottom:"10px"}}>
                                        

                                        <Link  style={{ color: "white", textDecoration: "none" }}><p style={{ color: "#A2A9B4", fontSize: '15px', fontStyle: 'Proxima Nova' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                            </svg>   {/* <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /> */}

                                        </svg >Logout</p></Link>
                                    </div>
                                </div>


                            </div>

                            : ""

                    }
                </div>

            </nav>

        </nav>
        <ToastContainer/>
        </>
    )
                }

export default NavwithIcon;



 {/* import "./Navbar.scss"
 import logo from "./sk.png";
const Navbar = () => { */}
{/* //     return (
//         <>
//             <nav className="fixed-nav-bar">

//                 <nav className="navbar navbar-expand-lg navbar-dark ">

//                     <a className="navbar-brand" href="#"><img src={logo} alt="qwe" width="95" height="30" /> </a>

//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

//                         <span className="navbar-toggler-icon"></span>

//                     </button>

//                 </nav>

//             </nav>
//         </>
//     )
// }
// export default Navbar; */}