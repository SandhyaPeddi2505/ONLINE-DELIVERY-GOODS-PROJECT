import React from "react";


// function OrderConfirmation({ orderId, expectedDeliveryDate }) {
const OrderDetails = ({ orderId, expectedDeliveryDate }) => {


  const isExpectedDeliveryToday = () => {
    const today = new Date();
    const expectedDelivery = new Date(expectedDeliveryDate);
    return (
      today.getFullYear() === expectedDelivery.getFullYear() &&
      today.getMonth() === expectedDelivery.getMonth() &&
      today.getDate() === expectedDelivery.getDate()
    );
  };

  return (
    <div className="con">
      <div className="order-confirmation-header">
        <span className="green-tick">✔</span>
        {/* <h2>Order Confirmed</h2> */}
        <h2 className="fs-title text-center">Order placed, thank you!</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-3">
          <img src="https://img.icons8.com/color/96/000000/ok--v2.png" class="fit-image" />
        </div>
      </div>
      <div className="order-details">
        <p className="fs-title text-center">Order ID: {orderId}</p>
        <p className="fs-title text-center">
          Expected Delivery Date:{" "}
          {isExpectedDeliveryToday() ? "Today" : expectedDeliveryDate}
        </p>
      </div><br></br>
      {/* <btn btn-prim>Track Order</button> */}
      <button className="btn btn-primary" id="css" type="track" >Track your Order</button>
    </div>
  );
}

export default OrderDetails;
