import React from "react";
// import { Link } from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import aaa from './del1.png';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
const Home = () => {
    return (
        <>
            <Navbar bg="dark" variant="secondary" className='justify-content-start'>
                <Navbar.Brand href="#home">
                    <img src="https://image.similarpng.com/very-thumbnail/2020/06/Fast-delivery-logo-design-vector-PNG.png" alt="Sample Brand Logo" width="35" className='align-top d-inline-block' height="35" />
                    <span style={{ color: 'white' }}>De<span style={{ color: 'red' }}>l</span>ivery</span>
                </Navbar.Brand>
                {/* <Nav.Link as={Link} to="/agent"><span></span></Nav.Link> */}
                &nbsp
                <Nav.Link as={Link} to="/tracking"><span style={{ color: 'white' }}>Tracking</span></Nav.Link>
                {/* <div className="justify-content-between"> */}
                &nbsp
                <Nav.Link as={Link} to="/agent"><span style={{ color: 'white' }}>Agent Registration</span></Nav.Link>
                {/* </div> */}
                {/* <Nav.Link as={Link} to="/agentdash"><span style={{color:'white'}}>Agent Registration</span></Nav.Link> */}
                {/* <Nav.Link as={Link} to="/previous"><span style={{color:'white'}}>Previous</span></Nav.Link> */}
            </Navbar>

            {/* <div className="container"> */}

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
                                    <Button variant="outline-primary">Login</Button>{' '}
                                </div>
                            </div>
                        </div>
                        
                            <div className="col-md-6">
                            <div className="flex">
                            <img src
                            ={aaa} alt='dele' height="500" width="600" />
                                {/* <img src="https://o.remove.bg/downloads/885675ca-621b-4cc3-83ec-94fe62dfe9e0/frontlogo-removebg-preview.png" /> */}
                            </div>
                        </div>
                    </div>
                </div>
























































            </div>





















            {/* </div> */}
        </>
    )
}
export default Home;