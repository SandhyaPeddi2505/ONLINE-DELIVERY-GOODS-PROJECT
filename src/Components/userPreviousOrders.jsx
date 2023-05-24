import React,{useEffect, useState} from 'react';
import axios from "axios";
// import Navbar from 'react-bootstrap/Navbar';
import DataTable from "react-data-table-component";
import styled from "styled-components";
import "./userPreviousOrders.scss";
import logo from "./sk.png";
const Orderss = () => {
const [sinfo,setSinfo]=useState([]);
const [dinfo,setDinfo]=useState([]);
const [pinfo,setPinfo]=useState([]);
const [fullinfo,setfullinfo]=useState([])
useEffect(()=>{
    axios.get("http://ec2-52-66-237-19.ap-south-1.compute.amazonaws.com:8001/user_order_info/",  {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
})
.then((response) => {
//     setDinfo([response.data.message.Destination_info])
//     setSinfo([response.data.message.source_info])
//     setPinfo(response.data.message.order_type)
    
  console.log([response.data.Destination_info]);
  console.log([response.data.source_info]);
//   console.log(response.data.message.);
  setfullinfo(response.data.message)
  console.log(response.data.message)
  // console.log(response.data.message)

  

//   localStorage.setItem("orderId", response.data.OrderID);
});

},[])


    return (
        <>
        <nav class="fixed-nav-bar">
      <nav class="navbar navbar-expand-lg navbar-dark ">
        <a class="navbar-brand" href="#"><img src={logo} alt="qwe" width="95" height="30"  /> </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
           
            {/* <li class="nav-item"> */}
              {/* <a class="hi nav-link" to={Link} href="/previous" ><p className="qb"><span style={{ color: "black" }}>previous</span></p></a> */}
            {/* </li> */}
           
            <li class="nav-item">
              
                {/* <a class="nav-link" to={Link} href="/agent"><p><span style={{ color: "black" }}>Agent Registration</span></p></a> */}
              
            </li>

          </ul>
        </div>
      </nav>
      </nav>
            <div className='bgj mt-5'>
            <div>
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Order ID</th>
                                <th>Order-type</th>
                                <th>Source Address</th>
                                <th>Deliver to</th>
                                <th>Destination Address</th>
                                 <th>OrderStatus</th>

                            </tr>
                          

                        </thead>
                        <tbody>
                            {fullinfo && fullinfo?.map((orderInfo,index)=>{
                              {console.log(orderInfo,"orderinfo")}
                              return(
                                <tr>
                                   <td>{orderInfo?.date_info}</td>
                                <td>{orderInfo?.order_id}</td>
                                <td>{orderInfo?.order_type}</td>
                                <td>{orderInfo?.source_info?.address}</td>
                                <td>{orderInfo?.Destination_info?.name}</td>
                                <td>{orderInfo?.Destination_info?.address}</td>
                                {/* <td>{orderInfo?.source_info?.address}</td> */}
                               
                                <td>{orderInfo?.Your_order_status}</td>
                                </tr>
                              )
                                
                            })}
                          
                          </tbody>
                    </table>
                </div>
            </div>
                
            </div>

        </>
    )
}
export default Orderss;