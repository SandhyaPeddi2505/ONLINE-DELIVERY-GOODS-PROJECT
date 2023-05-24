//items.jsx
import { useState, useEffect, useRef } from "react";
import "./Items.scss";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "./api.jsx";
import { DatePicker } from "antd";
import NavwithIcon from "./NavwithIcon";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  const [orderType, setOrderType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [temp, setTemp] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const today = new Date();
  const [placeholderText, setPlaceholderText] = useState("Select a date");
  

  const handleCheckboxChange = (e) => {
    const itemName = e.target.name;
    if (e.target.checked) {
      setOrderType(...orderType, itemName);
    } else {
      setOrderType(orderType.filter((item) => item !== itemName));
    }
  };
  useEffect(() => {
    console.log(orderType);
  }, [orderType]);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handleTempChange = (e) => {
    setTemp(e.target.value);
  };

  // const handleOrderTypeChange = (e) => {
  //   setOrderType(e.target.value);
  // };
  const handleDateChange = (e) => {
    e.preventDefault();
  };

  const handleChange = (date) => {
    if (date < today) {
      toast.warn("Choose a future date!");
      setSelectedDate(null);
      setPlaceholderText("Select a date");
    } else {
      setSelectedDate(date);
    }
  };
  
  const payload = {
    // order_type: JSON.stringify(orderType) ,
    order_type: orderType,
    qty: quantity,
    // temp_order_id: temp

    //  "orderType":orderType,
    //  "quantity":quantity,
    //  "date":date
  };
  // axios
  //   .post(
  //     "http://ec2-15-206-148-202.ap-south-1.compute.amazonaws.com:8001/ordertype"


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post(
      `${API_BASE_URL}/ordertype`, 
      payload,
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      // { headers: {"Authorization" : `Bearer ${localStorage.getItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ1NGNhOTZlYzAyMjJlZWMzY2M1ZTNkIiwiZXhwIjoxNjgzNTMwODA0LCJpYXQiOjE2ODM1MjcyMDR9.QxxyDtPw55hiR3A387eszfvDIsfyUzTVNHlB35BAB8I"
      // )}`}}
    )
    .then((response) => {
      console.log(response);
      localStorage.setItem("temp_order_id", response.data.temp_order_id);
      console.log(response.data.temp_order_id);
      navigate("/source");
    });
   
    if (orderType === "" || quantity === "" || selectedDate === "") {
      toast.error("Fill out all the fields");
    } else {
      console.log(orderType);
      console.log(quantity);
      console.log(selectedDate);
      // console.log(temp)

      // console.log(date)
     
    }
  };
 
  const handleClose = () => {
    if (!selectedDate) {
      setPlaceholderText("Select a date");
    }
  };
  useEffect(() => {
    setTemp(localStorage.getItem("temp_order_id"));
  }, []);
  return (
    <>
      <NavwithIcon />
      <div className="container-fluid">
        <div className="container pb-5 pt-5">
          <h3
            className="form-head-contact-h3"
            style={{ margintop: "10%", padding: "50px" }}
          >
            Select Category
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="row" style={{ paddingLeft: "20%" }}>
              <div className="col-md-6">
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="Food"
                    value="Food"
                    checked={orderType.includes("Food")}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label">Food</label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="Groceries"
                    value="Groceries"
                    checked={orderType.includes("Groceries")}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label">Groceries</label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="Medicines"
                    value="Medicines"
                    checked={orderType.includes("Medicines")}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label"> Medicines</label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="Documents"
                    value="Documents"
                    checked={orderType.includes("Documents")}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label"> Documents</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="Electronics"
                    value="Electronics"
                    checked={orderType.includes("Electronics")}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label">Electronics</label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="Clothes"
                    value="Clothes"
                    checked={orderType.includes("Clothes")}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label">Clothes</label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="Gifts"
                    value="Gifts"
                    checked={orderType.includes("Gifts")}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label">Gifts</label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="Others"
                    value="Others"
                    checked={orderType.includes("Others")}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label">Others</label>
                </div>
              </div>
            </div>
          </form>
          <hr />
          {/* <form
            className="mt-5 pb-5 pt-5"
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "200px"
            }}
          > */}
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                <form
            className=" pb-5 pt-5"
            style={{
              display: "flex",
              alignItems: "center",
              // marginLeft: "200px"
              justifyContent:"center"
            }}
          >
            <label style={{ color: "black" }}>
              <b>
                <h5>Quantity</h5>
              </b>
            </label>
            <div className="quan" style={{ position: "text-center" }}>
              <input
                style={{
                  height: "40px",
                  width: "300px",
                  marginLeft: "10px",
                  borderRadius: "10px",
                  border:"none",
                  paddingLeft:"10px"
                }}
                type="text"
                id="quan1"
                placeholder="Quantity required"
                onChange={handleQuantityChange}
              />
            </div>
            <a href="/source">
              <button
                type="submit"
                value="Submit"
                onClick={handleSubmit}
                id="button"
                className="m-4"
                style={{ border: "90%",color:"white" }}
              >
                Submit
              </button>
            </a>
            </form>
            </div>
            </div>
            </div>
        

          
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Order;




// import { useState, useEffect, useRef } from "react";
// import "./Items.scss";
// import { toast, ToastContainer } from 'react-toastify';
// import { Link } from "react-router-dom";
// import { API_BASE_URL } from './api.jsx';
// import { DatePicker } from "antd";
// import NavwithIcon from "./NavwithIcon";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Order = () => {
//   const navigate = useNavigate();
//   const [orderType, setOrderType] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [selectedDate, setSelectedDate] = useState(null);
//   const today = new Date();
//   const [placeholderText, setPlaceholderText] = useState('Select a date');

//   const handleCheckboxChange = (e) => {
//     const itemName = e.target.name;
//     if (e.target.checked) {
//       setOrderType([...orderType, itemName]);
//     } else {
//       setOrderType(orderType.filter((item) => item !== itemName));
//     }
//   }
//   useEffect(() => {
//     console.log(orderType);
//   }, [orderType]);

//   const handleQuantityChange = (e) => {
//     setQuantity(e.target.value);

//   };

//   // const handleOrderTypeChange = (e) => {
//   //   setOrderType(e.target.value);
//   // };
//   const handleDateChange = (e) => {
//     e.preventDefault();
//   }

//   const handleChange = (date) => {
//     if (date < today) {
//       toast.warn('Choose a future date!');
//       setSelectedDate(null);
//       setPlaceholderText('Select a date');
//     } else {
//       setSelectedDate(date);
//     }
//   };
//   const payload = {
//     "order_type": orderType,
//     "quantity": quantity

//     //  "orderType":orderType,
//     //  "quantity":quantity,
//     //  "date":date
//   };
//   // axios
//   //   .post(
//   //     "http://ec2-15-206-148-202.ap-south-1.compute.amazonaws.com:8001/ordertype"
//   axios.post(`${API_BASE_URL}/ordertype`
//       ,
//       payload,
//       { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } }
//       // { headers: {"Authorization" : `Bearer ${localStorage.getItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ1NGNhOTZlYzAyMjJlZWMzY2M1ZTNkIiwiZXhwIjoxNjgzNTMwODA0LCJpYXQiOjE2ODM1MjcyMDR9.QxxyDtPw55hiR3A387eszfvDIsfyUzTVNHlB35BAB8I"
//       // )}`}}
//     ).then((response) => {
//       console.log(response)
//     })

//   const handleSubmit = (e) => {
//     // Swal.fire({
//     //           title: 'Do you want to order from this address?',
//     //           // text: "You won't be able to revert this!",
//     //           icon: 'warning',
//     //           showCancelButton: true,
//     //           confirmButtonColor: '#3085d6',
//     //           cancelButtonColor: '#d33',
//     //           confirmButtonText: 'Yes'

//     // }).then((result) => {
//     //   // window.location.href = "/source"
//     //   console.log(result?.isConfirmed,'result')
//     //   localStorage.setItem('isConfirmed',result?.isConfirmed)
//     //     if (result?.isConfirmed===true) {
//     //         //   Swal.fire("Deleted!", "Your file has been deleted.", "success");
//     //         // window.location.href = "/destination";
//     //         navigate("/source")
//     //     }
//     //     else if(result?.isConfirmed===false){
//     //         window.location.href = "/source"
//     //     }
//     // });
//     e.preventDefault();
//     if (orderType === "" || quantity === "" || selectedDate === "") {
//       toast.error("Fill out all the fields");

//     } else {
//       console.log(orderType)
//       console.log(quantity)
//       console.log(selectedDate)
//       // console.log(date)
//       navigate("/source")

//     }

//   }
//   // const payload = {

//   //   "order_type":"Toys",

//   //   "quantity":"22"

//   //   };
//   //   axios
//   //   .post("http://ec2-13-126-94-51.ap-south-1.compute.amazonaws.com:8001/ordertype",
//   //   payload,

//   //   { headers: {"Authorization" : `Bearer ${localStorage.getItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ1NGNhOTZlYzAyMjJlZWMzY2M1ZTNkIiwiZXhwIjoxNjgzNTMwODA0LCJpYXQiOjE2ODM1MjcyMDR9.QxxyDtPw55hiR3A387eszfvDIsfyUzTVNHlB35BAB8I"
//   //   )}`}}
//   //   ).then((response) => {
//   //     console.log(response)
//   //   })
//   const handleClose = () => {
//     if (!selectedDate) {
//       setPlaceholderText('Select a date');
//     }
//   };
//   return (
//     <>
//       <NavwithIcon />
//       <div className="container-fluid" >
//         <div className="container pb-5 pt-5">
//           <h3 className="form-head-contact-h3" style={{ margintop: "10%", padding: "50px" ,color:"#333333"}}>Select Category</h3>
//           <form onSubmit={handleSubmit}>
//             <div className="row" style={{ paddingLeft: "20%" }} >
//               <div className="col-md-6">
//                 <div className="form-check m-3" >
//                   <input className="form-check-input" type="checkbox" name="Food" value="Food" checked={orderType.includes("Food")} onChange={handleCheckboxChange} />
//                   <label className="form-check-label"style={{ color:"#333333"}}>Food</label>
//                 </div>
//                 <div className="form-check m-3" >
//                   <input className="form-check-input" type="checkbox" name="Groceries" value="Groceries" checked={orderType.includes("Groceries")} onChange={handleCheckboxChange} />
//                   <label className="form-check-label" style={{ color:"#333333"}}>Groceries</label>
//                 </div>
//                 <div className="form-check m-3">
//                   <input className="form-check-input" type="checkbox" name="Medicines" value="Medicines" checked={orderType.includes("Medicines")} onChange={handleCheckboxChange} />
//                   <label className="form-check-label" style={{ color:"#333333"}}> Medicines</label>
//                 </div>
//                 <div className="form-check m-3" >
//                   <input className="form-check-input" type="checkbox" name="Documents" value="Documents" checked={orderType.includes("Documents")} onChange={handleCheckboxChange} />
//                   <label className="form-check-label" style={{ color:"#333333"}}> Documents</label>
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="form-check m-3" >
//                   <input className="form-check-input" type="checkbox" name="Electronics" value="Electronics" checked={orderType.includes("Electronics")} onChange={handleCheckboxChange} />
//                   <label className="form-check-label" style={{ color:"#333333"}}>Electronics</label>
//                 </div>
//                 <div className="form-check m-3" >
//                   <input className="form-check-input" type="checkbox" name="Clothes" value="Clothes" checked={orderType.includes("Clothes")} onChange={handleCheckboxChange} />
//                   <label className="form-check-label" style={{ color:"#333333"}}>Clothes</label>
//                 </div>
//                 <div className="form-check m-3">
//                   <input className="form-check-input" type="checkbox" name="Gifts" value="Gifts" checked={orderType.includes("Gifts")} onChange={handleCheckboxChange} />
//                   <label className="form-check-label" style={{ color:"#333333"}}>Gifts</label>
//                 </div>
//                 <div className="form-check m-3" >
//                   <input className="form-check-input" type="checkbox" name="Others" value="Others" checked={orderType.includes("Others")} onChange={handleCheckboxChange} />
//                   <label className="form-check-label" style={{ color:"#333333"}}>Others</label>
//                 </div>

//               </div>
//             </div>

//           </form><hr />
//           <form className="mt-5 pb-5 pt-5" style={{ display: "flex", alignItems: "center" ,marginLeft:"200px"}}>
//             <label style={{ color: "black" }}><h5>Quantity</h5></label>
//             <div className="quan" style={{ position: "text-center" }}>
//               <input style={{height:"40px",width:"300px",marginLeft:"10px",borderRadius:"10px"}}
//                 type="number" id="quan1"
//                 placeholder="Quantity in Kgs"
//                 onChange={handleQuantityChange}
//               />
//             </div>
//             <a href="/source">
//               <button type="submit" value="Submit" onClick={handleSubmit} id="button" className="m-4" style={{border:"90%"}}>Submit</button>
//             </a>
//           </form>

//           {/* <form className="mt-5 pb-5 pt-5 mr-4">
//               <label style={{color:"black"}}><b>Quantity</b></label>
//               <div className="quan" style={{position:"text-center"}}>
//             <input
//               type="number" id="quan1"
//               placeholder="Quantity in Kgs"
//               onChange={handleQuantityChange}
//             />
//             </div><br/> */}
//           {/* <label className="mt-2 pt-3 m-3"><b>Date</b></label>
//             <DatePicker
//         selected={selectedDate}
//         onChange={handleChange}
//         placeholderText={placeholderText}
//         onFocus={() => setPlaceholderText('Select a date')}
//         onBlur={() => {
//           if (!selectedDate) {
//             setPlaceholderText('Select a date');
//           }
//         }} onClose={handleClose}
//       /> */}

//           {/* <a href="/source"><button type="submit" value="Submit" onClick={handleSubmit} id="button" className="m-1" >Submit</button></a>

//             </form> */}
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// }

// export default Order;
