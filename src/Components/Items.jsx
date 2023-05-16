import { useState ,useEffect,useRef} from "react";
import "./Items.scss";
import { toast, ToastContainer } from 'react-toastify';
import { Link } from "react-router-dom";
import {DatePicker} from "antd"
import axios from "axios";
import { useNavigate } from "react-router-dom";

  
const Order=() =>{
  const navigate = useNavigate();
  const [orderType, setOrderType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const today= new Date();
  const [placeholderText, setPlaceholderText] = useState('Select a date');
  
  const handleCheckboxChange=(e) =>{
    const itemName = e.target.name;
  if (e.target.checked) {
    setOrderType([...orderType, itemName]);
  } else {
    setOrderType(orderType.filter((item) => item !== itemName));
  }}
  useEffect(() => {
    console.log(orderType);
  }, [orderType]);
 

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);

  };
  
  // const handleOrderTypeChange = (e) => {
  //   setOrderType(e.target.value);
  // };
  const handleDateChange=(e)=>{
    e.preventDefault();
  }

  const handleChange = (date) => {
    if (date < today) {
      toast.warn('Choose a future date!');
      setSelectedDate(null);
      setPlaceholderText('Select a date');
    } else {
      setSelectedDate(date);
    }
  };
  const payload = {    
      "order_type":orderType,
      "quantity":quantity
    
  //  "orderType":orderType,
  //  "quantity":quantity,
  //  "date":date
  };
  axios
  .post(
    "http://ec2-65-1-92-110.ap-south-1.compute.amazonaws.com:8001/ordertype",
    payload,
    { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}}
    // { headers: {"Authorization" : `Bearer ${localStorage.getItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ1NGNhOTZlYzAyMjJlZWMzY2M1ZTNkIiwiZXhwIjoxNjgzNTMwODA0LCJpYXQiOjE2ODM1MjcyMDR9.QxxyDtPw55hiR3A387eszfvDIsfyUzTVNHlB35BAB8I"
    // )}`}}
  ).then((response) => {
    console.log(response)
  })
 
  const handleSubmit=(e)=>{
    // Swal.fire({
    //           title: 'Do you want to order from this address?',
    //           // text: "You won't be able to revert this!",
    //           icon: 'warning',
    //           showCancelButton: true,
    //           confirmButtonColor: '#3085d6',
    //           cancelButtonColor: '#d33',
    //           confirmButtonText: 'Yes'
    
          // }).then((result) => {
          //   // window.location.href = "/source"
          //   console.log(result?.isConfirmed,'result')
          //   localStorage.setItem('isConfirmed',result?.isConfirmed)
          //     if (result?.isConfirmed===true) {
          //         //   Swal.fire("Deleted!", "Your file has been deleted.", "success");
          //         // window.location.href = "/destination";
          //         navigate("/source")
          //     }
          //     else if(result?.isConfirmed===false){
          //         window.location.href = "/source"
          //     }
          // });
    e.preventDefault();
    if (orderType === "" || quantity === "" || selectedDate === "") {
      toast.error("Fill out all the fields");
      
    } else{
    console.log(orderType)
    console.log(quantity)
    console.log(selectedDate)
    // console.log(date)
    navigate("/source")
    
  }
  
}
// const payload = { 

//   "order_type":"Toys",
  
//   "quantity":"22"
  
//   };
//   axios
//   .post("http://ec2-13-126-94-51.ap-south-1.compute.amazonaws.com:8001/ordertype",
//   payload,
  
//   { headers: {"Authorization" : `Bearer ${localStorage.getItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ1NGNhOTZlYzAyMjJlZWMzY2M1ZTNkIiwiZXhwIjoxNjgzNTMwODA0LCJpYXQiOjE2ODM1MjcyMDR9.QxxyDtPw55hiR3A387eszfvDIsfyUzTVNHlB35BAB8I"
//   )}`}}
//   ).then((response) => {
//     console.log(response)
//   })
const handleClose = () => {
  if (!selectedDate) {
    setPlaceholderText('Select a date');
  }
};
  return (
    <>
      <div className="container-fluid">
        <div className="container pb-5 pt-5">
          <h3 className="form-head-contact-h3 ">Select Category</h3>
          <form onSubmit={handleSubmit}>
            <div className="row" style={{paddingLeft:"20%"}} >
              <div className="col-md-6">
                <div className="form-check m-3" >
                  <input className="form-check-input" type="checkbox" name="Food" value="Food" checked={orderType.includes("Food")} onChange={handleCheckboxChange}/>
                  <label className="form-check-label">Food</label>
                </div>
                <div className="form-check m-3" >
                  <input className="form-check-input" type="checkbox" name="Groceries"  value="Groceries" checked={orderType.includes("Groceries")} onChange={handleCheckboxChange}/>
                  <label className="form-check-label">Groceries</label>
                  </div>
                <div className="form-check m-3">
                  <input className="form-check-input" type="checkbox" name="Medicines" value="Medicines" checked={orderType.includes("Medicines")} onChange={handleCheckboxChange}/>
                    <label  className="form-check-label"> Medicines</label>
                    </div>
                    <div className="form-check m-3" >
                  <input className="form-check-input" type="checkbox" name="Documents" value="Documents" checked={orderType.includes("Documents")} onChange={handleCheckboxChange}/>
                  <label className="form-check-label"> Documents</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-check m-3" >
                  <input className="form-check-input" type="checkbox" name="Electronics"  value="Electronics" checked={orderType.includes("Electronics")} onChange={handleCheckboxChange}/>
                  <label className="form-check-label">Electronics</label>
                  </div>
                  <div className="form-check m-3" >
                  <input className="form-check-input"  type="checkbox" name="Clothes" value="Clothes" checked={orderType.includes("Clothes")} onChange={handleCheckboxChange}/>
                  <label className="form-check-label">Clothes</label>
                  </div>
                  <div className="form-check m-3">
                  <input className="form-check-input" type="checkbox" name="Gifts" value="Gifts" checked={orderType.includes("Gifts")} onChange={handleCheckboxChange}/>
                  <label className="form-check-label">Gifts</label>
                  </div>
                <div className="form-check m-3" >
                  <input className="form-check-input" type="checkbox" name="Others" value="Others" checked={orderType.includes("Others")} onChange={handleCheckboxChange}/>
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
        }} onClose={handleClose}
      />
            {/* <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        placeholderText={selectedDate ? selectedDate.toDateString() : 'Select a date' } 
      /> */}
            {/* <DatePicker type="date" placeholderText={placeholder} selected={selectedDate} onChange={handleChange}  style={{height:"30px",width:"160px"}}/> */}
            {/* <input type="date" placeholder="Date" onChange={handleDateChange} /> */}
            <a href="/source"><button type="submit" value="Submit" onClick={handleSubmit} id="button" className="m-1">Submit</button></a>
            
            </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
  
export default Order;
                    
                    
                   
                    
                  
                
                
                    
                   
                    
                    
                    
                    
                 
                  
                
                
                
                    
                    
                    
                    
                  
                    
                   
                     
                
                    
                
                      
                  
                    
                   
                    
                    
                  
                  
                
                   
                    
                  
                
                
                    
                    
                    
                    
                  
                  
































