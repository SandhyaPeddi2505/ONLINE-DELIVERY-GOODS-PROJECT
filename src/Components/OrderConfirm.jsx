import React from "react";

// function OrderConfirmation({ orderId, expectedDeliveryDate }) {
  const Order=({orderId, expectedDeliveryDate})=>{

  
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
    <div className="order-confirmation">
      <div className="order-confirmation-header">
        <span className="green-tick">✔</span>
        <h2>Order Confirmed</h2>
      </div>
      <div className="order-details">
        <p>Order ID: {orderId}</p>
        <p>
          Expected Delivery Date:{" "}
          {isExpectedDeliveryToday() ? "Today" : expectedDeliveryDate}
        </p>
      </div>
      <button className="track-button">Track Order</button>
    </div>
  );
}

export default Order;
