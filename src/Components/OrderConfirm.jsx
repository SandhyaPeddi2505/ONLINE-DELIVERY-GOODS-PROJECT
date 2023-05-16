import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

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

  axios
    .get(
      "http://ec2-65-1-92-110.ap-south-1.compute.amazonaws.com:8001/successorder"
      //  payload
    )
    .then((response) => {
      console.log(response);
      localStorage.clear()
    });
  return (
    <div className="con">
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
      <hr/>
      <div className="order-details">
        <h5 className="text center" id="cen"  style={{color: "black"}}>
          Your OrderID is :
           {localStorage.getItem("orderId")}
        </h5>
        {/* <p className="fs-title text-center">
          Expected Delivery Date:{" "}
          {isExpectedDeliveryToday() ? "Today" : expectedDeliveryDate}
        </p> */}
      </div>
      <br></br>
      <Link to="/tracking">
        {" "}
        <button className="btn btn-primary" id="css" type="track">
          Track your Order
        </button>
      </Link>
    </div>
  );
};
export default OrderDetails;
