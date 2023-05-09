import React, { useState } from "react";
import "./Items.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
  
const Order=() =>{
  const navigate = useNavigate();
  const [orderType, setOrderType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  
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

  const handleDateChange = (e) => {
    setDate(e.target.value);

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
    "http://ec2-65-0-179-201.ap-south-1.compute.amazonaws.com:8001/ordertype",
    payload,
    { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}}
    // { headers: {"Authorization" : `Bearer ${localStorage.getItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ1NGNhOTZlYzAyMjJlZWMzY2M1ZTNkIiwiZXhwIjoxNjgzNTMwODA0LCJpYXQiOjE2ODM1MjcyMDR9.QxxyDtPw55hiR3A387eszfvDIsfyUzTVNHlB35BAB8I"
    // )}`}}
  ).then((response) => {
    console.log(response)
  })
 
  const handleSubmit=(e)=>{
    Swal.fire({
              title: 'Do you want to order from this address?',
              // text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes'
    
          }).then((result) => {
            // window.location.href = "/source"
            console.log(result?.isConfirmed,'result')
            localStorage.setItem('isConfirmed',result?.isConfirmed)
              if (result?.isConfirmed===true) {
                  //   Swal.fire("Deleted!", "Your file has been deleted.", "success");
                  // window.location.href = "/destination";
                  navigate("/source")
              }
              else if(result?.isConfirmed===false){
                  window.location.href = "/source"
              }
          });
    e.preventDefault();
    if (orderType === "" || quantity === "" || date === "") {
      alert("Fill out all the fields");
    } else{
    console.log(orderType)
    console.log(quantity)
    console.log(date)
    
  }
  
}
    
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
            <input type="date" placeholder="Date" onChange={handleDateChange} />
            <button type="submit" value="Submit" onClick={handleSubmit} id="button" className="m-1">Submit</button>
            
            </form>
        </div>
      </div>
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
