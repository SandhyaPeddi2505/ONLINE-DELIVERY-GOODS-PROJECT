import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import NavwithIcon from "./NavwithIcon";
import { API_BASE_URL } from "./api.jsx";
import { useState } from "react";
const Submit = ({ onNextClick, onPrevClick, deliveryData, details }) => {
  const [tem, setTem] = useState("");
  const { Source, Destination } = deliveryData;

  useEffect(() => {
    setTem(localStorage.getItem("temp_order_id"));
  }, []);

  useEffect(() => {
    if (tem) {
      const payload = {
        source_info: {
          name: Source.name,
          phone: Source.phone,
          address: Source.Address,
          location: Source.primary_location
        },
        destination_info: {
          name: Destination.name,
          phone: Destination.phone,
          address: Destination.address,
          location: Destination.destinationLocation
        },
        temp_order_id: tem
      };

      axios
        .post(`${API_BASE_URL}/sourceDestination`, payload, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
        .then((response) => {
          console.log(response);
          localStorage.setItem("orderId", response.data.OrderID);
        });
    }
  }, [tem, Source, Destination]);

  useEffect(() => {
    console.log(deliveryData);
    console.log(Source);
  }, []);

  return (
    <>
      <NavwithIcon />
      <div className="container-fluid" id="grad1">
      <div className="row m-auto w-100 mt-5 ">
                <div className="col-md-12 w-75 m-auto text-center p-0 mt-4 mb-2">
                    <div className="card w-100">
              <h1>Submit Details</h1>
              <div className="row">
                <div className="col-md-12 mx-0">
                  <form id="msform">
                    <ul id="progressbar">
                      <li className="active" id="source">
                        <strong>Source</strong>
                      </li>
                      <li id="destination" className="active">
                        <strong>Destination</strong>
                      </li>
                      <li id="submit" className="active">
                        <strong>Details</strong>
                      </li>
                      <li id="confirm">
                        <strong>Confirm</strong>
                      </li>
                    </ul>
                    <fieldset>
                      <div className="form-card">
                        <h2 className="fs-title">Source Details</h2>
                        <label style={{ color: "black" }}>
                          <b>Name:</b> {Source.name}
                        </label>
                        <br />
                        <label style={{ color: "black" }}>
                          <b>Address:</b> {Source.Address}
                        </label>
                        <br />
                        <label style={{ color: "black" }}>
                          <b>Phone:</b> {Source.phone}
                        </label>
                        <br />
                      </div>
                      <div className="form-card">
                        <h2 className="fs-title">Destination Details</h2>
                        <label style={{ color: "black" }}>
                          <b>Name:</b> {Destination.name}
                        </label>
                        <br />
                        <label style={{ color: "black" }}>
                          <b>Address:</b> {Destination.address}
                        </label>
                        <br />
                        <label style={{ color: "black" }}>
                          <b>Phone:</b> {Destination.phone}
                        </label>
                        <br />
                        <br></br>
                      </div>
                      <div>
                        <button
                          name="previous"
                          type="button"
                          className="btn btn-secondary"
                          id="sand1"
                          onClick={() => onPrevClick(details)}
                        >
                          Previous
                        </button>
                        <button
                          name="next"
                          type="button"
                          className="btn btn-primary"
                          id="sand1"
                          onClick={() => onNextClick(details)}
                        >
                          Submit
                        </button>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Submit;




// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import axios from "axios";
// import NavwithIcon from "./NavwithIcon";
// import { API_BASE_URL } from "./api.jsx";
// import { useState } from "react";

// const Submit = ({ onNextClick, onPrevClick, deliveryData, details }) => {
//   const [tem, setTem] = useState("");
//   const { Source, Destination } = deliveryData;

//   useEffect(() => {
//     setTem(localStorage.getItem("temp_order_id"));
//   }, []);

//   useEffect(() => {
//     if (tem) {
//       const payload = {
//         source_info: {
//           name: Source.name,
//           phone: Source.phone,
//           address: Source.Address,
//           location: Source.primary_location,
//         },
//         destination_info: {
//           name: Destination.name,
//           phone: Destination.phone,
//           address: Destination.address,
//           location: Destination.destinationLocation,
//         },
//         temp_order_id: tem,
//       };

//       axios
//         .post(`${API_BASE_URL}/sourceDestination`, payload, {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         })
//         .then((response) => {
//           console.log(response);
//           localStorage.setItem("orderId", response.data.OrderID);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   }, [tem, Source, Destination]);

//   useEffect(() => {
//     console.log(deliveryData);
//     console.log(Source);
//   }, []);

//   const handlePreviousClick = () => {
//     onPrevClick(details);
//   };

//   const handleSubmitClick = () => {
//     onNextClick(details);
//   };

//   return (
//     <>
//       <NavwithIcon />
//       <div className="container-fluid" id="grad1">
//         <div className="row justify-content-center mt-0">
//           <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
//             <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
//               <h1>Submit Details</h1>
//               <div className="row">
//                 <div className="col-md-12 mx-0">
//                   <form id="msform">
//                     <ul id="progressbar">
//                       <li className="active" id="source">
//                         <strong>Source</strong>
//                       </li>
//                       <li id="destination" className="active">
//                         <strong>Destination</strong>
//                       </li>
//                       <li id="submit" className="active">
//                         <strong>Details</strong>
//                       </li>
//                       <li id="confirm">
//                         <strong>Confirm</strong>
//                       </li>
//                     </ul>
//                     <fieldset>
//                       <div className="form-card">
//                         <h2 className="fs-title">Source Details</h2>
//                         <label style={{ color: "black" }}>
//                           <b>Name:</b> {Source && Source.name}
//                         </label>
//                         <br />
//                         <label style={{ color: "black" }}>
//                           <b>Address:</b> {Source && Source.Address}
//                         </label>
//                         <br />
//                         <label style={{ color: "black" }}>
//                           <b>Phone No:</b> {Source && Source.phone}
//                         </label>
//                         <br />
//                       </div>
//                       <div className="form-card">
//                         <h2 className="fs-title">Destination Details</h2>
//                         <label style={{ color: "black" }}>
//                           <b>Name:</b> {Destination && Destination.name}
//                         </label>
//                         <br />
//                         <label style={{ color: "black" }}>
//                           <b>Address:</b> {Destination && Destination.address}
//                         </label>
//                         <br />
//                         <label style={{ color: "black" }}>
//                           <b>Phone No:</b> {Destination && Destination.phone}
//                         </label>
//                         <br />
//                         <br />
//                       </div>
//                       <div>
//                         <button
//                           name="previous"
//                           type="button"
//                           className="btn btn-secondary"
//                           id="sand1"
//                           onClick={handlePreviousClick}
//                         >
//                           Previous
//                         </button>
//                         <button
//                           name="next"
//                           type="button"
//                           className="btn btn-primary"
//                           id="sand1"
//                           onClick={handleSubmitClick}
//                         >
//                           Submit
//                         </button>
//                       </div>
//                     </fieldset>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Submit;


// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import axios from "axios";
// import NavwithIcon from "./NavwithIcon";
// import { API_BASE_URL } from "./api.jsx";
// import { useState } from "react";

// const Submit = ({ onNextClick, onPrevClick, deliveryData, details }) => {
//   const [tem, setTem] = useState("");
//   const { Source, Destination } = deliveryData;

//   useEffect(() => {
//     setTem(localStorage.getItem("temp_order_id"));
//   }, []);

//   useEffect(() => {
//     if (tem) {
//       const payload = {
//         source_info: {
//           name: Source.name,
//           phone: Source.phone,
//           address: Source.Address,
//           location: Source.primary_location
//         },
//         destination_info: {
//           name: Destination.name,
//           phone: Destination.phone,
//           address: Destination.address,
//           location: Destination.destinationLocation
//         },
//         temp_order_id: tem
//       };

//       axios
//         .post(`${API_BASE_URL}/sourceDestination`, payload, {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
//         })
//         .then((response) => {
//           console.log(response);
//           localStorage.setItem("orderId", response.data.OrderID);
//         });
//     }
//   }, [tem, Source, Destination]);

//   useEffect(() => {
//     console.log(deliveryData);
//     console.log(Source);
//   }, []);

//   return (
//     <>
//       {" "}
//       <NavwithIcon />
//       <div className="container-fluid" id="grad1">
//         <div className="row justify-content-center mt-0">
//           <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
//             <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
//               <h1>Submit Details</h1>
//               <div className="row">
//                 <div className="col-md-12 mx-0">
//                   <form id="msform">
//                     <ul id="progressbar">
//                       <li className="active" id="source">
//                         <strong>Source</strong>
//                       </li>
//                       <li id="destination" class="active">
//                         <strong>Destination</strong>
//                       </li>
//                       <li id="submit" class="active">
//                         <strong>Details</strong>
//                       </li>
//                       <li id="confirm">
//                         <strong>Confirm</strong>
//                       </li>
//                     </ul>
//                     <fieldset>
//                       <div className="form-card">
//                         <h2 className="fs-title">Source Details</h2>
//                         <label style={{ color: "black" }}>
//                           <b>Name:</b> {Source.name}
//                         </label>
//                         <br />
//                         <label style={{ color: "black" }}>
//                           <b>Address:</b> {Source.Address}
//                         </label>
//                         <br />
//                         <label style={{ color: "black" }}>
//                           <b>Phoneno:</b>
//                           {Source.phone}
//                         </label>
//                         <br />
//                       </div>
//                       <div className="form-card">
//                         <h2 className="fs-title">Destination Details</h2>
//                         <label style={{ color: "black" }}>
//                           <b>Name:</b>
//                           {Destination.name}
//                         </label>
//                         <br />
//                         <label style={{ color: "black" }}>
//                           <b>Address:</b>
//                           {Destination.address}
//                         </label>
//                         <br />
//                         <label style={{ color: "black" }}>
//                           <b>Phoneno:</b>
//                           {Destination.phone}
//                         </label>
//                         <br />

//                         <br></br>
//                       </div>
//                       <div>
//                         <button
//                           name="previous"
//                           type="button"
//                           className="btn btn-secondary"
//                           id="sand1"
//                           onClick={() => onPrevClick(details)}
//                         >
//                           Previous
//                         </button>
//                         <button
//                           name="next"
//                           type="button"
//                           className="btn btn-primary"
//                           id="sand1"
//                           onClick={() => onNextClick(details)}>
//                           Submit
//                         </button>
//                       </div>
//                     </fieldset>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Submit;





















// import { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import axios from "axios";
// import NavwithIcon from "./NavwithIcon";
// import { API_BASE_URL } from "./api.jsx";
// import { useState } from "react";

// const Submit = ({ onNextClick, onPrevClick, deliveryData, details }) => {
//   const [tem, setTem] = useState("");
//   const { Source, Destination } = deliveryData;
//   useEffect((e) => {
//     //getDetails()
//     console.log(deliveryData);
//     console.log(Source);
//   }, []);
//   const payload = {
//     source_info: {
//       name: Source.name,
//       phone: Source.phone,
//       address: Source.Address,
//       location: Source.primary_location
//     },
//     destination_info: {
//       name: Destination.name,
//       phone: Destination.phone,
//       address: Destination.address,
//       location: Destination.destinationLocation
//     },
//     temp_order_id: tem
//   };
//   useEffect(() => {
//     setTem(localStorage.getItem("temp_order_id"));
//   }, []);
//   // axios
//   //    .post("http://ec2-15-206-148-202.ap-south-1.compute.amazonaws.com:8001/sourceDestination"
//   axios
//     .post(`${API_BASE_URL}/sourceDestination`, payload, {
//       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
//     })
//     .then((response) => {
//       console.log(response);
//       localStorage.setItem("orderId", response.data.OrderID);
//     });
//   // useEffect(() => {
//       // axios.post("http://ec2-13-235-67-132.ap-south-1.compute.amazonaws.com:8001/login/").then(response => {
//       //     console.log(response)
//       // })
//       //     .catch((error) => {
//       //         console.log(error)
//       //     })
//   // }, [])

//   return (
//     <>
//       {" "}
//       <NavwithIcon />
//       <div className="container-fluid" id="grad1">
//         <div className="row justify-content-center mt-0">
//           <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
//             <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
//               <h1>Submit Details</h1>
//               <div className="row">
//                 <div className="col-md-12 mx-0">
//                   <form id="msform">
//                     <ul id="progressbar">
//                       <li className="active" id="source">
//                         <strong>Source</strong>
//                       </li>
//                       <li id="destination" class="active">
//                         <strong>Destination</strong>
//                       </li>
//                       <li id="submit" class="active">
//                         <strong>Details</strong>
//                       </li>
//                       <li id="confirm">
//                         <strong>Confirm</strong>
//                       </li>
//                     </ul>
//                     <fieldset>
//                       <div className="form-card">
//                         <h2 className="fs-title">Source Details</h2>
//                         <label style={{ color: "black" }}>
//                           <b>Name:</b> {Source.name}
//                         </label>
//                         <br />
//                         <label style={{ color: "black" }}>
//                           <b>Address:</b> {Source.Address}
//                         </label>
//                         <br />
//                         <label style={{ color: "black" }}>
//                           <b>Phoneno:</b>
//                           {Source.phone}
//                         </label>
//                         <br />
//                       </div>
//                       <div className="form-card">
//                         <h2 className="fs-title">Destination Details</h2>
//                         <label style={{ color: "black" }}>
//                           <b>Name:</b>
//                           {Destination.name}
//                         </label>
//                         <br />
//                         <label style={{ color: "black" }}>
//                           <b>Address:</b>
//                           {Destination.address}
//                         </label>
//                         <br />
//                         <label style={{ color: "black" }}>
//                           <b>Phoneno:</b>
//                           {Destination.phone}
//                         </label>
//                         <br />
//                         {/* <label style={{ color: 'black' }}><b>Phoneno:</b>{Destination.lat}</label><br /> */}

//                         {/* {console.log({latlng,lat,lng})} */}
//                         <br></br>
//                       </div>
//                       <div>
//                         <button
//                           name="previous"
//                           type="button"
//                           className="btn btn-secondary"
//                           id="sand1"
//                           onClick={() => onPrevClick(details)}
//                         >
//                           Previous
//                         </button>
//                         <button
//                           name="next"
//                           type="button"
//                           className="btn btn-primary"
//                           id="sand1"
//                           onClick={() => onNextClick(details)}
//                         >
//                           Submit
//                         </button>
//                       </div>
//                     </fieldset>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Submit;

// // import { useEffect } from "react";
// // import "bootstrap/dist/css/bootstrap.css";
// // import axios from "axios";
// // import NavwithIcon from "./NavwithIcon";
// // import { API_BASE_URL } from './api.jsx';

// // const Submit = ({ onNextClick, onPrevClick, deliveryData, details}) => {
// //     const { Source, Destination } = deliveryData;
// //     useEffect((e) => {
// //         //getDetails()
// //         console.log(deliveryData)
// //         console.log(Source)
// //     }, [])
// //     const payload=  {
// //         "source_info":{
// //             "name":Source.name,
// //             "phone":Source.phone,
// //             "address":Source.Address,
// //             "location":Source.primary_location
// //         },
// //         "destination_info":{
// //             "name":Destination.name,
// //             "phone":Destination.phone,
// //             "address":Destination.address,
// //             "location":Destination.destinationLocation
// //         }
// //     }
// //     // axios
// //     //    .post("http://ec2-15-206-148-202.ap-south-1.compute.amazonaws.com:8001/sourceDestination"
// //     axios.post(`${API_BASE_URL}/sourceDestination`
// //        ,

// //          payload,
// //          { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}}
// //        ).then((response) => {
// //          console.log(response)
// //          localStorage.setItem("orderId",response.data.OrderID)
// //        })
// //     // useEffect(() => {
// //     //     axios.post("http://ec2-13-235-67-132.ap-south-1.compute.amazonaws.com:8001/login/").then(response => {
// //     //         console.log(response)
// //     //     })
// //     //         .catch((error) => {
// //     //             console.log(error)
// //     //         })
// //     // }, [])

// //     return (
// //         <>  <NavwithIcon/>
// //         <div className="container-fluid" id="grad1">
// //             <div className="row justify-content-center mt-0">
// //                 <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
// //                     <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
// //                         <h1>Submit Details</h1>
// //                         <div className="row">
// //                             <div className="col-md-12 mx-0">
// //                                 <form id="msform">
// //                                     <ul id="progressbar">
// //                                         <li className="active" id="source"><strong>Source</strong></li>
// //                                         <li id="destination" class="active" ><strong>Destination</strong></li>
// //                                         <li id="submit" class="active" ><strong>Details</strong></li>
// //                                         <li id="confirm" ><strong>Confirm</strong></li>
// //                                     </ul>
// //                                     <fieldset>
// //                                         <div className="form-card" >
// //                                             <h2 className="fs-title">Source Details</h2>
// //                                             <label style={{ color: 'black' }}><b>Name:</b> {Source.name}</label><br />
// //                                             <label style={{ color: 'black' }}><b>Address:</b> {Source.Address}</label><br />
// //                                             <label style={{ color: 'black' }}><b>Phoneno:</b>{Source.phone}</label><br />
// //                                         </div>
// //                                         <div className="form-card" >
// //                                             <h2 className="fs-title">Destination Details</h2>
// //                                             <label style={{ color: 'black' }} ><b>Name:</b>{Destination.name}</label><br />
// //                                             <label style={{ color: 'black' }}><b>Address:</b>{Destination.address}</label><br />
// //                                             <label style={{ color: 'black' }}><b>Phoneno:</b>{Destination.phone}</label><br />
// //                                             {/* <label style={{ color: 'black' }}><b>Phoneno:</b>{Destination.lat}</label><br /> */}


// // import { useEffect } from "react";
// // import "bootstrap/dist/css/bootstrap.css";
// // import axios from "axios";
// // import NavwithIcon from "./NavwithIcon";
// // import { API_BASE_URL } from './api.jsx';

// // const Submit = ({ onNextClick, onPrevClick, deliveryData, details}) => {
// //     const { Source, Destination } = deliveryData;
// //     useEffect((e) => {
// //         //getDetails()
// //         console.log(deliveryData)
// //         console.log(Source)
// //     }, [])
// //     const payload=  {
// //         "source_info":{
// //             "name":Source.name,
// //             "phone":Source.phone,
// //             "address":Source.Address,
// //             "location":Source.primary_location 
// //         },
// //         "destination_info":{
// //             "name":Destination.name,
// //             "phone":Destination.phone,
// //             "address":Destination.address,
// //             "location":Destination.destinationLocation
// //         }
// //     }
// //     // axios
// //     //    .post("http://ec2-15-206-148-202.ap-south-1.compute.amazonaws.com:8001/sourceDestination"
// //     axios.post(`${API_BASE_URL}/sourceDestination`
// //        ,
         
// //          payload,
// //          { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}}
// //        ).then((response) => {
// //          console.log(response)
// //          localStorage.setItem("orderId",response.data.OrderID)
// //        })
// //     // useEffect(() => {
// //     //     axios.post("http://ec2-13-235-67-132.ap-south-1.compute.amazonaws.com:8001/login/").then(response => {
// //     //         console.log(response)
// //     //     })
// //     //         .catch((error) => {
// //     //             console.log(error)
// //     //         })
// //     // }, [])

// //     return (
// //         <>  <NavwithIcon/>
// //         <div className="container-fluid" id="grad1">
// //             <div className="row justify-content-center mt-0">
// //                 <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
// //                     <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
// //                         <h1>Submit Details</h1>
// //                         <div className="row">
// //                             <div className="col-md-12 mx-0">
// //                                 <form id="msform">
// //                                     <ul id="progressbar">
// //                                         <li className="active" id="source"><strong>Source</strong></li>
// //                                         <li id="destination" class="active" ><strong>Destination</strong></li>
// //                                         <li id="submit" class="active" ><strong>Details</strong></li>
// //                                         <li id="confirm" ><strong>Confirm</strong></li>
// //                                     </ul>
// //                                     <fieldset>
// //                                         <div className="form-card" >
// //                                             <h2 className="fs-title">Source Details</h2>
// //                                             <label style={{ color: 'black' }}><b>Name:</b> {Source.name}</label><br />
// //                                             <label style={{ color: 'black' }}><b>Address:</b> {Source.Address}</label><br />
// //                                             <label style={{ color: 'black' }}><b>Phoneno:</b>{Source.phone}</label><br />
// //                                         </div>
// //                                         <div className="form-card" >
// //                                             <h2 className="fs-title">Destination Details</h2>
// //                                             <label style={{ color: 'black' }} ><b>Name:</b>{Destination.name}</label><br />
// //                                             <label style={{ color: 'black' }}><b>Address:</b>{Destination.address}</label><br />
// //                                             <label style={{ color: 'black' }}><b>Phoneno:</b>{Destination.phone}</label><br />
// //                                             {/* <label style={{ color: 'black' }}><b>Phoneno:</b>{Destination.lat}</label><br /> */}

// //                                             {/* {console.log({latlng,lat,lng})} */}
// //                                             <br></br>
// //                                         </div>
// //                                         <div>
// //                                         <button name="previous" type="button" className="btn btn-secondary" id="sand1" onClick={() => onPrevClick(details)}>Previous</button>
// //                                         <button name="next" type="button" className="btn btn-primary" id="sand1"  onClick={() => onNextClick(details)}>Submit</button>
// //                                         </div>
// //                                     </fieldset>
// //                                 </form>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //         </>
// //     )
// // }
// // export default Submit;
























