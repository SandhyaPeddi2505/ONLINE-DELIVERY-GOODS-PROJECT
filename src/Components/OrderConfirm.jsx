// import React from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useState, useEffect } from "react";

// const OrderDetails = ({ orderId, expectedDeliveryDate }) => {
//   const [orderid, setOrderId] = useState("");
//   const [display, setDisplay] = useState(null);

//   const isExpectedDeliveryToday = () => {
//     const today = new Date();
//     const expectedDelivery = new Date(expectedDeliveryDate);
//     return (
//       today.getFullYear() === expectedDelivery.getFullYear() &&
//       today.getMonth() === expectedDelivery.getMonth() &&
//       today.getDate() === expectedDelivery.getDate()
//     );
//   };

//   useEffect(() => {
//     const getOrders = () => {
//       axios
//         .get(
//           "http://ec2-13-233-40-8.ap-south-1.compute.amazonaws.com:8001/successorder"
//         )
//         .then((response) => {
//           //  console.log(response)
//           setDisplay(response.data);
//         });
//     };
//     getOrders();
//   }, []);
//   console.log(display, "pen");
//   //  axios
//   //  .get(
//   //   "http://ec2-13-233-40-8.ap-south-1.compute.amazonaws.com:8001/successorder"
//   //   //  payload
//   //  ).then((response) => {
//   //   //  console.log(response)
//   //   setDisplay(response.data)
//   //  })
//   // //  console.log(display)

//   return (
//     <div className="con">
//       <div className="order-confirmation-header">
//         <h2 className="fs-title text-center">Order placed, thank you!</h2>
//       </div>
//       <div className="row justify-content-center">
//         <div className="col-3">
//           <img
//             src="https://img.icons8.com/color/96/000000/ok--v2.png"
//             class="fit-image"
//           />
//         </div>
//       </div>
//       <div className="order-details">
//       {/* {Object.values(display).map((value,index)=>(
//         <p key={index}>{value}</p>
//       ))} */}
//       </div>
//       <br></br>
//       <Link to="/tracking">
//         {" "}
//         <button className="btn btn-primary" id="css" type="track">
//           Track your Order
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default OrderDetails;
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
      "http://ec2-13-233-40-8.ap-south-1.compute.amazonaws.com:8001/successorder"
      //  payload
    )
    .then((response) => {
      console.log(response);
      localStorage.clear()
    });
  return (
    <div className="con">
      <div className="order-confirmation-header">
        <h2 className="fs-title text-center">Order placed, thank you!</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-3">
          <img
            src="https://img.icons8.com/color/96/000000/ok--v2.png"
            class="fit-image"
          />
        </div>
      </div>
      <div className="order-details">
        <p className="fs-title text-center">
          Order ID: {localStorage.getItem("orderId")}
        </p>
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
