import React, { useState, useEffect } from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import logo from "./sk.png";
const Agentdash = (props) => {
  const redirect = useNavigate()

  const [value, setValue] = useState("")
  const [data, setData] = useState([{
    DeliveryId: 1223311,
    Ordertype: "Groceries",
    CustomerName: "umang",
    SourceAddress: "durgam cheruvu",
    DestinationAddress: "begumpet",
    Quantity: 1,
    isSelectedAcc: false,
    isSelectedRej: true
  },
  {
    DeliveryId: 1223312,
    Ordertype: "Files",
    CustomerName: "arun",
    SourceAddress: "jbs",
    DestinationAddress: "Durgam cheruvu",
    Quantity: 3,
    isSelectedAcc: false,
    isSelectedRej: true
  },
  {
    DeliveryId: 1223313,
    Ordertype: "Clothes",
    CustomerName: "sdssdssd",
    SourceAddress: "jubliee hills",
    DestinationAddress: "raidurg",
    Quantity: 2,
    isSelectedAcc: false,
    isSelectedRej: true

  },
  {
    DeliveryId: 1223314,
    Ordertype: "Sweets",
    CustomerName: "c",
    SourceAddress: "shamshabad",
    DestinationAddress: "uppal",
    Quantity: 4,
    isSelectedAcc: false,
    isSelectedRej:true

  },
  {
    DeliveryId: 1223315,
    Ordertype: "Chocolates",
    CustomerName: "sdssdssd",
    SourceAddress: "tarnaka",
    DestinationAddress: "hitech city",
    Quantity: 2,
    isSelectedAcc:false,
    isSelectedRej: true

  },
  {
    DeliveryId: 1223315,
    Ordertype: "Chocolates",
    CustomerName: "d",
    SourceAddress: "Radidurg",
    DestinationAddress: "Durgam cheruvu",
    Quantity: 2,
    isSelectedAcc: false,
    isSelectedRej: true

  }])
  // const serach = data.filter((e) => e.CustomerName.toLowerCase().includes(value.toLowerCase()))
  // setData(serach)
  //console.log(serach)
  const [dat, setDat] = useState([]);
  //  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [data1, setData1] = useState({});
  const hanldeClick = (selectedRec) => {
    setSelectedData(selectedRec);
    // setShow(true);
  };

  // const hideModal = () => {
  //   setShow(false);
  // };
  // const [yesDisabled, setYesDisabled] = useState(false);
  // const [noDisabled, setNoDisabled] = useState(false);

  const toastSuccess = (i) => {
    // setYesDisabled(true)
    // setNoDisabled(false)
    // let obj = [...data]
    setData([...data, data[i].isSelectedAcc = true])
    console.log(data[i].isSelectedAcc)
    props.display(data[i])
    console.log("laddu" + data[i])
    toast.success('Wooh! Delivery Accepted.');
    // setTimeout(function() { window.location.replace('/confirmscreen'); }, 2000)
    redirect('/confirmscreen')
  }
  const toastError = (i) => {
    setData([...data, data[i].isSelectedAcc = true])
    console.log(data[i].isSelectedAcc)
  
    // setNoDisabled(true)
    // setYesDisabled(false)

    toast.error('Oops! Delivery Rejected.');
  }
   useEffect(() => {
      //call API
      axios.get('http://ec2-13-233-40-8.ap-south-1.compute.amazonaws.com:8001/order_info/',
      { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}}

      )
        .then(response => {
          setData1(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

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

              <li class="nav-item">
                <a class="hi nav-link" to={Link} href="/previous" ><p className="qb"><span style={{ color: "black" }}>previous</span></p></a>
              </li>

              <li class="nav-item">

                {/* <a class="nav-link" to={Link} href="/agent"><p><span style={{ color: "black" }}>Agent Registration</span></p></a> */}

              </li>
              {/* <input type='text' placeholder='enter name' value={value} onChange={(e) => setValue(e.target.value)} /> */}
            </ul>

          </div>

        </nav>
      </nav>

      <div className='bgj'>
        <div className="blur">
          <div className="tab">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Delivery Id</th>
                  <th scope="col">Order-type</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Source Address</th>
                  <th scope="col">Destination Address</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>

              <tbody>
                {data.map((v, i) => {
                  if (v.DeliveryId) {
                    return (<tr key={i}>
                      <td onClick={() => hanldeClick(v)}>{v.DeliveryId}</td>
                      <td onClick={() => hanldeClick(v)}>{v.Ordertype}</td>
                      <td onClick={() => hanldeClick(v)}>{v.CustomerName}</td>
                      <td onClick={() => hanldeClick(v)}>{v.SourceAddress}</td>
                      <td onClick={() => hanldeClick(v)}>{v.DestinationAddress}</td>
                      <td onClick={() => hanldeClick(v)}>{v.Quantity}</td>
                      <td>
                        <div>
                          <button type="button" onClick={() => toastSuccess(i)}  disabled={data[i].isSelectedAcc} class="btn btn-success">Accept</button>
                          <button type="button" onClick={() => toastError(i)} disabled={data[i].isSelectedAcc} class="btn btn-danger">Reject</button>
                        </div>

                      </td>
                    </tr>)
                  }
                })}
              </tbody>
            </table>
            {/* {show && <Modal details={selectedData} handleClose={hideModal} />} */}
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </>
  )
}
export default Agentdash;

// const Modal = ({ handleClose, details }) => {
//   const redirect = useNavigate();
//   const [sDisabled, setSDisabled] = useState(false);
//   const [noDisabled, setNoDisabled] = useState(false);

//   const toastSuccess = () => {
//     setSDisabled(false)
//     setNoDisabled(true)
//     toast.success('Wooh! Delivery Accepted.');
//     setTimeout(function() { window.location.replace('/confirmscreen'); }, 2000)
//     redirect('/confirmscreen')
//   }
//   const toastError = () => {
//     setSDisabled(true)
//     setNoDisabled(false)
//     toast.error('Oops Delivery Rejected.')
//   }
//   return (
//     <div className="modal display-block">
//       <section className="modal-main">
//         <div className="App">
//           <table class="table">
//             <thead>
//               <tr>
//                 <th scope="col">Delivery Id</th>
//                 <th scope="col">Order-Type</th>
//                 <th scope="col">Customer Name</th>
//                 <th scope="col">Source Address</th>
//                 <th scope="col">Destination Address</th>
//                 <th scope="col">Quantity</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{details?.DeliveryId}</td>
//                 <td>{details?.Ordertype}</td>
//                 <td>{details?.CustomerName}</td>
//                 <td>{details?.SourceAddress}</td>
//                 <td>{details?.DestinationAddress}</td>
//                 <td>{details?.Quantity}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <center>
//           <button type="button" class="btn btn-outline-primary" onClick={handleClose}>Close</button>
//         </center>
//         <div className='right'>
//           <Link to="/confirmscreen">
//           <button type="button" onClick={toastSuccess} disabled={sDisabled} class="btn btn-success" >Accept</button>
//           </Link>
//           <button type="button" onClick={toastError} disabled={noDisabled} class="btn btn-danger">Reject</button>
//         </div>
//       </section>
//       <ToastContainer
//         position="top-middle"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//     </div>
//   );
// };