import React from 'react';

function OrderDetails({ orderName, orderId, deliveryDate }) {
  const handleTrackingButtonClick = () => {
    // handle tracking button click event here
  };

  return (
    <div>
      <h2>Order Details</h2>
      <p>Order Name: {orderName}</p>
      <p>Order ID: {orderId}</p>
      <p>Expected Delivery Date: {deliveryDate}</p>
      <button onClick={handleTrackingButtonClick}>Track Order</button>
    </div>
  );
}

export default OrderDetails;
