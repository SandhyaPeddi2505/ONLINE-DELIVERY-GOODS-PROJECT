import React from 'react'

export default function Confirmscreen() {
  return (
    <div>
     <h1> hi</h1>
    </div>
  )
}



// import React, { useEffect, useState } from "react";
// import logo from "./sk.png";
// import { useNavigate } from "react-router-dom";
// const Confirmscreen = (props) => {
//   const redirect = useNavigate()
//   const [dat, setDat] = useState([])
//   const [index1, setIndex1] = useState(props.display1);
//   // useEffect(() => {
//   //   setIndex1(props.display1)
//   // }, [])
//   // const data = [
//   //   {
//   //     DeliveryId: 1223311,
//   //     Ordertype: "Groceries",
//   //     CustomerName: "umang",
//   //     SourceAddress: "durgam cheruvu",
//   //     DestinationAddress: "begumpet",
//   //     Quantity: 1
//   //   },
//   //   {
//   //     DeliveryId: 1223312,
//   //     Ordertype: "Files",
//   //     CustomerName: "b",
//   //     SourceAddress: "uppal",
//   //     DestinationAddress: "jbs",
//   //     Quantity: 3
//   //   },
//   //   {
//   //     DeliveryId: 1223313,
//   //     Ordertype: "Clothes",
//   //     CustomerName: "jubliee hills",
//   //     SourceAddress: "Radidurg",
//   //     DestinationAddress: "Durgam cheruvu",
//   //     Quantity: 2
//   //   }, {
//   //     DeliveryId: 1223314,
//   //     Ordertype: "Sweets",
//   //     CustomerName: "c",
//   //     SourceAddress: "shamshabad",
//   //     DestinationAddress: "uppal",
//   //     Quantity: 4
//   //   },
//   //   {
//   //     DeliveryId: 1223315,
//   //     Ordertype: "Chocolates",
//   //     CustomerName: "sdssdssd",
//   //     SourceAddress: "tarnaka",
//   //     DestinationAddress: "hitech city",
//   //     Quantity: 2
//   //   },
//   //   {
//   //     DeliveryId: 1223315,
//   //     Ordertype: "Chocolates",
//   //     CustomerName: "d",
//   //     SourceAddress: "Radidurg",
//   //     DestinationAddress: "Durgam cheruvu",
//   //     Quantity: 2
//   //   }
//   // ]
// console.log(props.display1)
//   const clickhandle = (k) => {
//     let gh = [...dat]
//     let y = `https://www.google.com/maps/dir/?api=1&origin=${gh[k].lat},${gh[k].long}&destination=${gh[k].lat1},${gh[k].long1}`
//     window.open(
//       y, '_blank'
//     );

//   }
//   const dato = [{
//     lat: 17.41796,
//     long: 78.38853,
//     lat1: 17.44278,
//     long1: 78.38741
//   }]
//   const op = () => {
//     let gh = [...dato]
//     let y = `https://www.google.com/maps/dir/?api=1&origin=${gh[0].lat},${gh[0].long}&destination=${gh[0].lat1},${gh[0].long1}`
//     window.open(
//       y, '_blank'
//     );
//   }
//   const handleclick = () => {
//     redirect("/previous")
//   }

//   console.log("ppppppppppppppp" + index1)
//   return (
//     <>
//       <nav className="fixed-nav-bar">
//         <nav className="navbar navbar-expand-lg navbar-dark ">
//           <a className="navbar-brand" href="#"><img src={logo} alt="qwe" width="95" height="30" /> </a>
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//         </nav>
//       </nav>


//       <div className='bgj'>

//         <div className="">
//           <div className="o1">
//             <div className="row">
//               <div className="col-12">
//                 <h1 className="overview">Order Over-View</h1>
//               </div>
//             </div>
//           </div>

//           <div className="row">
//             {/* <div className="col-12"> */}
//             <div className="col-2"></div>
//             {/* <div className="d-flex flex-row justify-content-end"> */}
//             <div className="col-4">
//               <div className="card">
//                 <center>
//                   <h1>Source_Info</h1>
//                 </center>
//                 <h5>Name :</h5>
//                 <h5>Address :</h5>
//                 <h5>Ph.No:</h5>
//               </div>
//             </div>
//             <div className="col-4">
//               <div className="card">
//                 <center>
//                   <h1>Destination_Info</h1>
//                 </center>
//                 <h5>Name :</h5>
//                 <h5>Address :</h5>
//                 <h5>Ph.No:</h5>
//               </div>
//             </div>

//             <div className="col-2"> </div>
//             {/* </div> */}
//             {/* </div> */}
//           </div>
//           <br/>
//           <br/>
//           <br/>
//           <div className="row">
//             <div className="col-2"></div>
//             <div className="col-8">
//               <div className="container1">
//                 <div class="d-flex justify-content-center row">
//                   <div class="col-md-12">
//                     <div class="rounded">
//                       <div class="table-responsive table-borderless">
//                         <button onClick={op}>press</button>

//                         <table class="table">
//                           <thead>
//                             <tr>
//                               <th class="text-center">
//                               </th>
//                               <th>Order Id</th>
//                               {/* <th>Distance</th> */}
//                               <th>Source</th>
//                               <th>Distance</th>
//                               <th>View Google Maps</th>
//                               {/* <th>Quoted Price</th> */}
//                             </tr>
//                           </thead>
//                           <tbody class="table-body">
//                             {index1.map((i, k) => {
//                                 return (
//                                 //   <li key={k}>
          
//                                 //    <td></td> {i.DeliveryId}
//                                 //     {i.SourceAddress}
//                                 //   </li>
//                                   <tr class="cell-1">
//                                     <td class="text-center">
//                                     </td>
//                                     {/* <td>{i.Name}</td> */}
//                                     <td>{i.DeliveryId}</td>
//                                     {/* <td>{i.Distance}</td> */}
//                                     <td>{i.SourceAddress}</td>
//                                     <td>{i.DestinationAddress}</td>
//                                     <td>{<a href="" onClick={() => clickhandle(k)}>View in Google</a>}</td>
//                                     {/* <td>{i.QuotedPrice}</td> */}
//                                   </tr>
//                                 )
                              
//                             })}
//                           </tbody>
//                         </table>
//                         <div className="d-flex flex-coloumn justify-content-end">
//                           <button className="btn btn-primary" onClick={handleclick}>Accept</button>
//                           <button className="btn btn-danger">Reject</button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-2"></div>
//           </div>

//         </div>
//       </div>
//     </>
//   )
// }
// export default Confirmscreen;