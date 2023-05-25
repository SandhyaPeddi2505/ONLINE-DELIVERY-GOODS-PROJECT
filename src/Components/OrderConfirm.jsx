import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import NavwithIcon from "./NavwithIcon";
import { API_BASE_URL } from './api.jsx';
const OrderDetails = ({ orderId, expectedDeliveryDate }) => {
  const [orderid, setOrderId] = useState("");

  const isExpectedDeliveryToday = () => {
    const today = new Date();
    const expectedDelivery = new Date(expectedDeliveryDate);
    return (
      today.getFullYear() === expectedDelivery.getFullYear() &&
      today.getMonth() === expectedDelivery.getMonth() &&
      today.getDate() === expectedDelivery.getDate()
    );
  };

  // axios
  //   .get(
  //     "http://ec2-15-206-148-202.ap-south-1.compute.amazonaws.com:8001/successorder"
      //  payload
    //   axios.get(`${API_BASE_URL}/successorder`
    // )
    // .then((response) => {
    //   console.log(response);
    //   // localStorage.clear()
    // });
  return (
   <><NavwithIcon/>
    <div className="con d-flex" >
       <div className="card m-auto confirm-card">
      <div className="order-confirmation-header">

      </div>
      <div className="row justify-content-center">
        <div className="col-3" id="pic" >
          <img
            src="https://img.icons8.com/color/96/000000/ok--v2.png"
            // class="fit-image"
          />
        </div>
        <br></br>
      </div>
      <h2 className=" fs-title text-center" style={{color: "black"}}>Thank you, Your order is confirmed!</h2>
   
      <div className="order-details">
      <p class="bold"> OrderID :</p>
        <h5 className=" center order-id" id="cen" title="{localStorage.getItem('orderId')}"
        style={{color: "black"}}>
          
           {localStorage.getItem("orderId")}
        </h5>
        {/* <p className="fs-title text-center">
          Expected Delivery Date:{" "}
          {isExpectedDeliveryToday() ? "Today" : expectedDeliveryDate}
        </p> */}
        
      </div>
      <Link to="/userprevorders" className="text-center mt-5"> 
      <button className="btn btn-primary" id="css" type="track">
          My Orders
        </button>
        </Link>
      {/* <br></br> */}
      {/* <Link to="/tracking">
        {" "}
        <button className="btn btn-primary" id="css" type="track">
          Track your Order
        </button>
        
      </Link> */}
      
        </div>
    </div>
    </>
  );
};
export default OrderDetails;
