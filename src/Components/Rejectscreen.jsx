import React, { useState, useEffect } from 'react';
import logo from "./sk.png";
import axios from 'axios';
import { Link } from 'react-router-dom';
const Rejectscreen = () => {

  const [reje, setreje] = useState([]);

  useEffect(() => {
    console.log(`${localStorage.getItem("Token")}`)
    axios.get(`http://ec2-52-66-237-19.ap-south-1.compute.amazonaws.com:8001/orderstatus_userdata?status=rejected`,
      { headers: { "Authorization": `Bearer ${localStorage.getItem("Token")}` } }

      // {headers:{Authorization:`${localStorage.getItem("Token")}`}}
    ).then((res) => {
      setreje(res.data.message)
      console.log(res.data.message)
    })
      .catch(error => {
        console.log(error)
      })


  }, [])

  return (
    <>
      <nav class="fixed-nav-bar">
        <nav class="navbar navbar-expand-lg navbar-dark ">
          <a class="navbar-brand" href="#"><img src={logo} alt="qwe" width="95" height="30" /> </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">

            </ul>
          </div>
        </nav>
      </nav>

      <div className='bgj'>
        <div className="blur">
          <div className='row'>
            <div className='col-2 sidenav hidden-xs'>
              <div className='size'>
                {/* <ul className="nav nav-pills nav-stacked"> */}
                <div className="nav-upper-option">
                  {/* <div className="d-flex flex-column justify-content start"> */}

                  <div class="nav-option option1">
                    <img src=
                      "https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                      class="nav-img"
                      alt="dashboard" />
                    <h3><Link to="/agentdash"><span style={{ color: '#FFFFFF', textDecoration: 'none' }}>Dashboard</span></Link></h3>
                    {/* <h3>Dashboard</h3> */}
                  </div>
                  

                  <div class="nav-option option3">
                    <img src=
                      "https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                      class="nav-img"
                      alt="report" />
                    {/* <h3> Report</h3> */}
                    <button className='btn btn-outline-secondary'>Report</button>
                  </div>

                  <div className='gap'></div>

                  <div class="nav-option option4">
                    <img src=
                      "https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
                      class="nav-img"
                      alt="institution" />
                    {/* <button onClick={polhandle}></button> */}
                    <button className='btn btn-outline-secondary'>Policy</button>
                    {/* <h3> Policies</h3> */}
                  </div>
                  <div className='gap'></div>

                  <div class="nav-option logout">
                    <img src=
                      "https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                      class="nav-img"
                      alt="logout" />
                    {/* <h3>Logout</h3> */}
                    <button className='btn btn-outline-secondary'>Logout</button>
                  </div>
                  {/* </div> */}
                </div>
                {/* </ul> */}
              </div>
            </div>
            <div className='col-10'>
              <div className=''>
                <div className="tab">
                  <table className='table'>
                    <thead>
                      <tr>
                        <th scope='col'>Order ID</th>
                        <th scope='col'>Order Type</th>
                        {/* <th scope='col'>Source destination</th> */}
                        {/* <th scope='col'>Destination</th> */}
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      {reje && reje.map((i, k) => {
                        return (
                          <tr key={k}>
                            <td className='tbname'>{i.order_id}</td>
                            <td className='tbname'>{i.order_type}</td>
                            {/* <td className='tbname'>{i.source_address}</td> */}
                            {/* <td className='tbname'>{i.destination_address}</td> */}
                            <td className='tbname'>{i.qty}</td>
                            <td><span style={{ color: 'red' }}>{i.status}</span></td>
                          </tr>
                        )
                      })}



                    </tbody>
                  </table>


                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="">

                  </div>
                </div>
              </div>
              <div class="row">
                <div className='col-3'></div>
                <div class="col-sm-2">
                  <div class="">
                    <div class="text">
                      {/* <h2 class="topic-heading">{data1.length}</h2> */}
                      {/* <h2 class="request-name">Wait-list</h2> */}
                    </div>

                  </div>
                </div>


                <div className='col-3'></div>
              </div>


            </div>
          </div>
        </div>
      </div>


    </>
  )
}
export default Rejectscreen;