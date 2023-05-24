import React, { useState, useEffect } from 'react';
import logo from "./sk.png";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const Acceptscreen = () => {

    const [acce, setacce] = useState([]);
    // const [act,setAct]=useState([]);

    //   const [data1, setData1] = useState([]);
    const direct = useNavigate();

    useEffect(() => {
        console.log(`${localStorage.getItem("Token")}`)
        axios.get(`http://ec2-52-66-237-19.ap-south-1.compute.amazonaws.com:8001/orderstatus_userdata?status=accepted`,
            { headers: { "Authorization": `Bearer ${localStorage.getItem("Token")}` } }

            // {headers:{Authorization:`${localStorage.getItem("Token")}`}}
        ).then((res) => {
            setacce(res.data.message)
            console.log(res.data.message)
        })
            .catch(error => {
                console.log(error)
            })
        // http://ec2-15-206-148-202.ap-south-1.compute.amazonaws.com:8001/orderstatus_userdata

    }, [])
    const viewhandle = (k) => {
        let a = [...acce]
        let b = a[k].order_id
        // console.log(acce[i])
        // props.dis(b)
        localStorage.setItem("ORDERID", b)
        // localStorage.setItem("ORDERID", b)
        // setYesDisabled(true)
        // setNoDisabled(false)
        // let obj = [...data]
        // setData([...data1, data[i].isSelectedAcc = true])
        // console.log(data[i].isSelectedAcc)
        // props.display(data[i])
        // console.log("laddu" + data[i])
        // toast.success('Wooh! Delivery Accepted.');
        // setTimeout(function() { window.location.replace('/confirmScreen'); }, 8000)
        direct('/confirmScreen')

        // # when clicked Accept button post call here...
        //     axios.post(`http://ec2-15-207-116-121.ap-south-1.compute.amazonaws.com:8001/orderapproved`, {
        //       "order_id": b,
        //       "order_status": "accepted"
        //     },
        //       { headers: { Authorization: `Bearer ${localStoragee.getItem("Token")}` } }

        //     )
        //       .then((res) => {
        //         //  setData1(res.data.data.message)
        //         console.log(res)
        //         direct('/confirmScreen')


        //       })
        //       .catch(() => {
        //         alert("errror")
        //       })
    }
    // useEffect(() => {

    //     setAct(localStorage.getItem("source_info"))
    // }, [])

    return (
        <>
            <div className="bgj">
                <nav className="fixed-nav-bar">
                    <nav className="navbar navbar-expand-lg navbar-dark ">
                        <a className="navbar-brand" href="#"><img src={logo} alt="qwe" width="95" height="30" /> </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav justify-content-between">

                                <li className="nav-item mr-5">
                                    <Link to="/acceptscreen">
                                        <button >Accepted</button>
                                    </Link>
                                    {/* <a className="hi nav-link" onClick={Acchandle} ><p><span style={{ color: "black", pointer: 'cursor' }}>Accepted Orders</span></p></a> */}
                                </li>

                                {/* <li className="nav-item">
                <button >Pending</button>
                {/* <a className="hi nav-link" to={Link} href="/previous" ><p className="qb"><span style={{ color: "black" }}>Pending Orders</span></p></a> */}
                                {/* </li> * */}

                                <li className="nav-item">
                                    <Link to="/rejectscreen"><button>Rejected</button></Link>
                                    {/* <a className="hi nav-link" to={Link} href="/previous" ><p className="qb"><span style={{ color: "black" }}>Rejected Orders</span></p></a> */}
                                </li>
                            </ul>
                        </div>

                    </nav>
                </nav>
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
                                <div className='gap'></div>

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


                    {/* <nav class="fixed-nav-bar">
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

            <div className="bgj">

                {/* <div className="gap"> */}
                    {/* <div className="row"> */}
                    <div className="col-10">
                        <div className='tab'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Order ID</th>
                                        <th scope='col'>Order Type</th>
                                        <th scope='col'>Source Address</th>
                                        <th scope='col'>Destination Address</th>
                                        <th scope='col'>Quantity</th>
                                        <th scope='col'>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {acce && acce.map((i, k) => {
                                        return (
                                            <tr key={k}>
                                                <td className='tbname'>{i.order_id}</td>
                                                <td className='tbname'>{i.order_type}</td>
                                                <td className='tbname'>{i.source_address}</td>
                                                <td className='tbname'>{i.destination_address}</td>
                                                <td className='tbname'>{i.qty}</td>
                                                <td><button onClick={() => viewhandle(k)} className='btn btn-outline-success'>View</button></td>
                                                {/* <td><Link to='/confirmscreen'><button>View</button></Link></td> */}
                                            </tr>
                                        )
                                    })}



                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* </div> */}
                {/* </div> */}
                {/* </div>  */}

            </div>

        </>
    )
}
export default Acceptscreen;