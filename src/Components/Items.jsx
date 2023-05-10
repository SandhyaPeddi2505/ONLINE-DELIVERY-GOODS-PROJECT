import React, { useState ,useRef} from "react";
import "./Items.scss";
import { toast, ToastContainer } from 'react-toastify';
import { Link } from "react-router-dom";
// import DatePicker from 'react-datepicker';
import {DatePicker} from "antd"
import axios from "axios";
  
const Order=() =>{
  const [orderType, setOrderType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const today= new Date();
  const [placeholderText, setPlaceholderText] = useState('Select a date');
  // const [placeholder, setPlaceholder] = useState('Select a date');

  // const datePickerRef = useRef(null);
  // const [date,setDate]=useState("")
  
  const handleCheckboxChange=(e) =>{
    const itemName = e.target.name;
    if (e.target.checked) {
      setOrderType([...orderType, itemName]);
    } else {
      setOrderType(orderType.filter(item => item !== itemName));
    }
    console.log(orderType)
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);

  };
  // const handleOrderTypeChange = (e) => {
  //   setOrderType(e.target.value);
  // };
  const handleDateChange=(e)=>{
    e.preventDefault();
  }

  // const handleChange = (date) => {
  //   if(date < today ){
  //     toast.warn("Choose the date which is yet to come!");
  //     setTimeout(() => date.location.reload(), 6500);
  //     // setTimeout(() => {
  //     //   setSelectedDate(today);
  //     //   datePickerRef.current.forceUpdate();
  //     // }, 3000);
  //   }
  //   else{
  //     setSelectedDate(date)
  //   }
  //   // setDate(e.target.value);

  // };
  // const handleChange = (date) => {
  //   const today = new Date();
  //   if (date < today) {
  //     toast.warn('Choose a future date!');
  //     setSelectedDate(null);
  //     setTimeout(() => {
  //       setSelectedDate(today);
  //     }, 3000);
  //   } else {
  //     setSelectedDate(date);
  //   }
  // };
  const handleChange = (date) => {
    if (date < today) {
      toast.warn('Choose a future date!');
      setSelectedDate(null);
      setPlaceholderText('Select a date');
    } else {
      setSelectedDate(date);
    }
  };
 
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (orderType === "" || quantity === "" || selectedDate === "") {
      toast.error("Fill out all the fields");
      
    } else{
    console.log(orderType)
    console.log(quantity)
    console.log(selectedDate)
  }
}
const payload = { 

  "order_type":"Toys",
  
  "quantity":"22"
  
  };
  axios
  .post("http://ec2-13-126-94-51.ap-south-1.compute.amazonaws.com:8001/ordertype",
  payload,
  
  { headers: {"Authorization" : `Bearer ${localStorage.getItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ1NGNhOTZlYzAyMjJlZWMzY2M1ZTNkIiwiZXhwIjoxNjgzNTMwODA0LCJpYXQiOjE2ODM1MjcyMDR9.QxxyDtPw55hiR3A387eszfvDIsfyUzTVNHlB35BAB8I"
  )}`}}
  ).then((response) => {
    console.log(response)
  })
    
  return (
    <>
      <div className="container-fluid  ">
        <div className="container pb-5 pt-5">
          <h3 className="form-head-contact-h3 ">Select Category</h3>
          <form onSubmit={handleSubmit}>
            <div className="row" style={{paddingLeft:"20%"}} >
              <div className="col-md-6">
                <div className="form-check m-3" >
                  <input className="form-check-input" type="checkbox" name="Food" value="Food" onChange={handleCheckboxChange}/>
                  <label className="form-check-label">Food</label>
                </div>
                <div className="form-check m-3" >
                  <input className="form-check-input" type="checkbox" name="Groceries"  value="Groceries" onChange={handleCheckboxChange}/>
                  <label className="form-check-label">Groceries</label>
                  </div>
                <div className="form-check m-3">
                  <input className="form-check-input" type="checkbox" name="Medicines" value="Medicines" onChange={handleCheckboxChange}/>
                    <label  className="form-check-label"> Medicines</label>
                    </div>
                    <div className="form-check m-3" >
                  <input className="form-check-input" type="checkbox" name="Documents" value="Documents" onChange={handleCheckboxChange}/>
                  <label className="form-check-label"> Documents</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-check m-3" >
                  <input className="form-check-input" type="checkbox" name="Electronics"  value="Electronics" onChange={handleCheckboxChange}/>
                  <label className="form-check-label">Electronics</label>
                  </div>
                  <div className="form-check m-3" >
                  <input className="form-check-input"  type="checkbox" name="Clothes" value="Clothes" onChange={handleCheckboxChange}/>
                  <label className="form-check-label">Clothes</label>
                  </div>
                  <div className="form-check m-3">
                  <input className="form-check-input" type="checkbox" name="Gifts" value="Gifts" onChange={handleCheckboxChange}/>
                  <label className="form-check-label">Gifts</label>
                  </div>
                <div className="form-check m-3" >
                  <input className="form-check-input" type="checkbox" name="Others" value="Others" onChange={handleCheckboxChange}/>
                  <label className="form-check-label">Others</label>
                  </div>
                  
              </div>
            </div>
            
            </form><hr/>
            <form className="mt-5 pb-5 pt-5 mr-4">
              <label><b>Quantity</b></label>
            <input
              type="number"
              placeholder="Quantity in Kgs"
              onChange={handleQuantityChange}
            /><br/>
            <label className="mt-2 pt-3 m-3"><b>Date</b></label>
            <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        placeholderText={placeholderText}
        onFocus={() => setPlaceholderText('Select a date')}
        onBlur={() => {
          if (!selectedDate) {
            setPlaceholderText('Select a date');
          }
        }}
      />
            {/* <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        placeholderText={selectedDate ? selectedDate.toDateString() : 'Select a date' } 
      /> */}
            {/* <DatePicker type="date" placeholderText={placeholder} selected={selectedDate} onChange={handleChange}  style={{height:"30px",width:"160px"}}/> */}
            {/* <input type="date" placeholder="Date" onChange={handleDateChange} /> */}
            <Link to="/source"><button type="submit" value="Submit" onClick={handleSubmit} id="button" className="m-1">Submit</button></Link>
            
            </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
  
export default Order;
                    
                    
                   
                    
                  
                
                
                    
                   
                    
                    
                    
                    
                 
                  
                
                
                
                    
                    
                    
                    
                  
                    
                   
                     
                
                    
                
                      
                  
                    
                   
                    
                    
                  
                  
                
                   
                    
                  
                
                
                    
                    
                    
                    
                  
                  
































// import React, { useState } from "react";
// import "./Items.scss";

// const Order = () => {
  // const [orderType, setOrderType] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [date, setDate] = useState("");

  // const handleOrderTypeChange = (e) => {
  //   setOrderType(e.target.value);
  // };

  // const handleQuantityChange = (e) => {
  //   setQuantity(e.target.value);

  // };

  // const handleDateChange = (e) => {
  //   setDate(e.target.value);

  // };
//   const handleSubmit = (e) => {
//     e.preventDefault();
    // if (orderType === "" || quantity === "" || date === "") {
    //   alert("Fill out all the fields");
    // } else if (orderType && !quantity) {
//       alert("please fill the details");
//     } else if (!orderType && !date) {
//       alert("please fill the details");
//     } else if (!date && !quantity) {
//       alert(" please fill the details");
//     } else if (!quantity) {
//       alert("please fill the details");
//     } else if (!orderType) {
//       alert("enter the details");
//     } else if (!date) {
//       alert("enter the details");
//     } else {
//       console.log(`OrderType:${orderType}`);
//       console.log(`Quantity:${quantity}`);
//       console.log(`Date:${date}`);
//     }
//   };

//   return (
//     <div className="container-fluid" >
//       <div className="row">
//         <div className="col-md" ></div>
//         <div className="col-md-12" >
//           <form className="order" onSubmit={handleSubmit} >
//             <label><b>Order Type:</b></label>
//             <select onChange={handleOrderTypeChange}>
//               <option value="" selected >Select Category</option>
//               <option value="food">Food</option>
//               <option value="groceries">Groceries</option>
//               <option value="clothing">Clothing</option>
//               <option value="medicines">Medicines</option>
//               <option value="clothing">Documents</option>
//               <option value="clothing">Electronics</option>
//               <option value="clothing">Others</option>
//             </select>
//             <label><b>Quantity:</b></label>
            // <input
            //   type="number"
            //   placeholder="Quantity in Kgs"
            //   onChange={handleQuantityChange}
            // />
//             <label><b>Date:</b></label>
//             <input type="date" placeholder="Date" onChange={handleDateChange} />

//             <input type="submit" value="Submit" onClick={handleSubmit} />
//           </form>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Order;
