import React from "react";
// import { Link } from 'react-dom';
// import logo from "./nav-logo.png"
import logo from "./nlogo.png";
// import Navbar from 'react-bootstrap/Navbar';
import aaa from './del1.png';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div className="fixed">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#"><img src={logo} alt="qwe" height="35" width="50" /> <span style={{ color: 'white' }}>De<span style={{ color: 'red' }}>l</span>ivery</span></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <div className="">
            <li class="nav-item">
              <a class="nav-link" to={Link} href="/tracking" ><h5><span style={{ color: "white" }}>Tracking</span></h5></a>
            </li>
            </div>
            <li class="nav-item">
              <div className="wer">
                <a class="nav-link" to={Link} href="/agent"><h5><span style={{ color: "white" }}>Agent Registration</span></h5></a>
              </div>
            </li>

          </ul>
        </div>
      </nav>
      </div>




      <div className="bgj">
        <div>
          <div className="row">
            <div className="col-md-6">
              <div className="r">
                <h1 className="heading1 mb-4">Fastest</h1>
                <h1 className="heading1 mb-4"><span style={{ color: '#e4e6b7' }}>Delivery </span>&</h1>
                <h1 className="heading1 mb-3">Easy <span style={{ color: '#e4e6b7' }}>Pickup.</span> </h1>
                <div>
                  <p className="paragraph">We take care of order fulfillment collection,transport,<br />
                    tracking and delivery of items.</p>
                </div>
                <div>
                <Link to="/login">
                  <button className="btn btn-primary">Login</button>
                  </Link>

                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="flex">
                <img src={aaa} alt='dele' height="500" width="600" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default Home;
