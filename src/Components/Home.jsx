import React, { useState } from "react";
// import { Link } from 'react-dom';
// import logo from "./nav-logo.png"
import logo from "./sk.png";
// import Navbar from 'react-bootstrap/Navbar';
// import aaa from './del1.png';
import { Link } from "react-router-dom";

const Home = () => {
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
      <nav class="fixed-nav-bar">
        <nav class="navbar navbar-expand-lg navbar-dark ">
          <a class="navbar-brand" href="#"><img src={logo} alt="qwe" width="95" height="30" /> </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <div className="">
                <li class="nav-item">
                  <a class="hi nav-link" to={Link} href="/tracking" ><p className="qb"><span style={{ color: "black" }}>Tracking</span></p></a>
                </li>
              </div>
              <li class="nav-item">
                <div className="wer">
                  <a class="nav-link" to={Link} href="/agent"><p><span style={{ color: "black" }}>Agent Registration</span></p></a>
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
              </li>

            </ul>
          </div>
        </nav>
      </nav>





      <div className="bgj">
        <div className="blur">
          <div className="row">
            <div className="col-md-12">
              <div className="r">
                <h1 className="heading1 mb-4">Fastest</h1>
                <h1 className="heading1 mb-4"><p></p><span style={{ color: 'red' }}>Delivery </span>&</h1>
                <h1 className="heading1 mb-3">Easy <span style={{ color: 'red' }}>Pickup.</span> </h1>
                <div>
                  <p className="paragraph">We take care of order fulfillment collection,transport,<br />
                    tracking and delivery of items.</p>
                </div>
                <div>
                  <Link to="/login">
                    <button className="custom-btn btn-7"><span>Login</span></button>
                  </Link>

                </div>
              </div>
            </div>

            {/* <div className="col-md-6">
              <div className="flex">
                <img src={aaa} alt='dele' height="500" width="600" />
              </div>
            </div> */}
          </div>
        </div>
      </div>

    </>
  )
}
export default Home;
