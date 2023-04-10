import React, { useState,useEffect } from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import logo from "./nav-logo.png";
const Agentdash=()=> {
        const data= [
        {
            DeliveryId:1223311,
            Ordertype:"Groceries",
            CustomerName:"sdssdssd",
            SourceAddress:"Radidurg",
            DestinationAddress:"Durgam cheruvu",
            Quantity:1
        },
        {
            DeliveryId:1223312,
            Ordertype:"Files",
            CustomerName:"sdssdssd",
            SourceAddress:"Radidurg",
            DestinationAddress:"Durgam cheruvu",
            Quantity:3
        },
        {
            DeliveryId:1223313,
            Ordertype:"Clothes",
            CustomerName:"sdssdssd",
            SourceAddress:"Radidurg",
            DestinationAddress:"Durgam cheruvu",
            Quantity:2
        },{
            DeliveryId:1223314,
            Ordertype:"Sweets",
            CustomerName:"sdssdssd",
            SourceAddress:"Radidurg",
            DestinationAddress:"Durgam cheruvu",
            Quantity:4
        },
        {
            DeliveryId:1223315,
            Ordertype:"Chocolates",
            CustomerName:"sdssdssd",
            SourceAddress:"Radidurg",
            DestinationAddress:"Durgam cheruvu",
            Quantity:2
        }
    ] 
     const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const hanldeClick = (selectedRec) => {
    setSelectedData(selectedRec);
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
  const toastSuccess = () => toast.success('Wooh! Delivery Accepted.');
  const toastError = () => toast.error('Oops! Delivery Rejected.');
  // const handleAccept=()=>{
  //   alert("Wooh! Delivery Accepted")
  // }
  // const handleReject=()=>{
  //   alert("Oops! Delivery Rejected!")
  // }
  const [dataa, setDataa] = useState({});
  useEffect(() => {
    //call API
    axios.get('http://ec2-65-2-161-39.ap-south-1.compute.amazonaws.com:8001/order_info/', {
      // headers: {
      //    'Content-Type': 'application/json',
      //    "Access-Control-Allow-Headers": '*',
      //   }
    })
      .then(response => {
        setDataa(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#"><img src={logo} alt="qwe" height="35" width="60"/> <span style={{ color: 'white' }}>De<span style={{ color: 'red' }}>l</span>ivery</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      {/* <li class="nav-item active">
        <a as={Link} to="/agent">Home <span class="sr-only">(current)</span></a>
      </li> */}
      {/* <nav><Link to="/tracking">Tracking</Link></nav> */}
      <li class="nav-item">
        <a class="nav-link" to={Link} href="/previous" ><h5><span style={{color:"white"}}>Previous</span></h5></a>
      </li>
      {/* <li class="nav-item">
        <div className="wer">
        <a class="nav-link" to={Link} href="/agent"><h5><span style={{color:"white"}}>Agent Registration</span></h5></a>
        </div>
      </li> */}
      
    </ul>
  </div>
</nav>
        {/* <Navbar bg="dark" variant="secondary" className='justify-content-start'> */}
                {/* <Navbar.Brand className="justify-content-end" href="#home">
                    <img src="https://image.similarpng.com/very-thumbnail/2020/06/Fast-delivery-logo-design-vector-PNG.png" alt="Sample Brand Logo" width="35" className='align-top d-inline-block' height="35" />
                    <span style={{ color: 'white' }}>De<span style={{ color: 'red' }}>l</span>ivery</span>
                </Navbar.Brand> */}
                {/* <Nav.Link as={Link} to="/agent"><span></span></Nav.Link> */}
                {/* <Nav.Link as={Link} to="/previous"><span style={{color:'white'}}>Previous</span></Nav.Link>
            </Navbar> */}

            <div className='bgj'>

            <div className="App">
      <table class="table">
        
        <thead>
          <tr>
            <th scope="col">Delivery Id</th>
            <th scope="col">Order-type</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Source Address</th>
            <th scope="col">Destination Address</th>
            <th scope="col">Quantity</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        
        <tbody>
          {data.map((v) => (
            <tr>
              <td onClick={() => hanldeClick(v)}>{v.DeliveryId}</td>
              <td onClick={()=> hanldeClick(v)}>{v.Ordertype}</td>
              <td onClick={() => hanldeClick(v)}>{v.CustomerName}</td>
              <td onClick={() => hanldeClick(v)}>{v.SourceAddress}</td>
              <td onClick={() => hanldeClick(v)}>{v.DestinationAddress}</td>
              <td onClick={()=> hanldeClick(v)}>{v.Quantity}</td>
              <td>
                <div>
              <Link to="/confirmScreen"><button type="button" onClick={toastSuccess} class="btn btn-success">Accept</button></Link>
              <button type="button" onClick={toastError} class="btn btn-danger">Reject</button>
              </div>
                {/* <a href="#" onClick={() => hanldeClick(v)}>
                  More details
                </a> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {show && <Modal details={selectedData} handleClose={hideModal} />}
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
            </div>
        </>
    )
}
export default Agentdash;
// const redirect = useNavigate()
const Modal = ({ handleClose, details }) => {
    // const handleAccept=()=>{
    //     alert("Wooh! Delivery Accepted")
    //     // redirect('/agentdash')
    //   }
    const toastSuccess = () => toast.success('Wooh! Delivery Accepted.');
    const toastError=()=> toast.error('Oops Delivery Rejected.')
      // const handleReject=()=>{
      //   alert("Oops! Delivery Rejected")
      //   // redirect('/agentdash')
      // }
    return (
      <div className="modal display-block">
        <section className="modal-main">
          <div className="App">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Delivery Id</th>
                  <th scope="col">Order-Type</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Source Address</th>
                  <th scope="col">Destination Address</th>
                  <th scope="col">Quantity</th>
                  {/* <th scope="col">Location</th>
                  <th scope="col">Address</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{details?.DeliveryId}</td>
                  <td>{details?.Ordertype}</td>
                  <td>{details?.CustomerName}</td>
                  <td>{details?.SourceAddress}</td>
                  <td>{details?.DestinationAddress}</td>
                  <td>{details?.Quantity}</td>
                  {/* <td>{details?.location}</td>
                  <td>{details?.address}</td> */}
                </tr>
              </tbody>
            </table>
          </div>
          <center>
          <button type="button" class="btn btn-outline-primary" onClick={handleClose}>Close</button>
          </center>
          <div className='right'>
          <Link to="/confirmScreen"><button type="button" onClick={toastSuccess} class="btn btn-success" >Accept</button></Link>
           <button type="button" onClick={toastError} class="btn btn-danger">Reject</button>
           </div>
          {/* /* <button >close</button> */}
        </section>
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
      </div>
        
    );
  };