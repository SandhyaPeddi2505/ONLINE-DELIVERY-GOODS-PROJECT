import React, { useState } from "react";
import "./Items.scss";

const Order = () => {
  const [orderType, setOrderType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");

  const handleOrderTypeChange = (e) => {
    setOrderType(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);

  };

  const handleDateChange = (e) => {
    setDate(e.target.value);

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (orderType === "" || quantity === "" || date === "") {
      alert("Fill out all the fields");
    } else if (orderType && !quantity) {
      alert("please fill the details");
    } else if (!orderType && !date) {
      alert("please fill the details");
    } else if (!date && !quantity) {
      alert(" please fill the details");
    } else if (!quantity) {
      alert("please fill the details");
    } else if (!orderType) {
      alert("enter the details");
    } else if (!date) {
      alert("enter the details");
    } else {
      console.log(`OrderType:${orderType}`);
      console.log(`Quantity:${quantity}`);
      console.log(`Date:${date}`);
    }
  };

  return (
    <div className="container-fluid" >
      <div className="row">
        <div className="col-md" ></div>
        <div className="col-md-12" >
          <form className="order" onSubmit={handleSubmit} >
            <label><b>Order Type:</b></label>
            <select onChange={handleOrderTypeChange}>
              <option value="" selected >Select Category</option>
              <option value="food">Food</option>
              <option value="groceries">Groceries</option>
              <option value="clothing">Clothing</option>
              <option value="medicines">Medicines</option>
              <option value="clothing">Documents</option>
              <option value="clothing">Electronics</option>
              <option value="clothing">Others</option>
            </select>
            <label><b>Quantity:</b></label>
            <input
              type="number"
              placeholder="Quantity in Kgs"
              onChange={handleQuantityChange}
            />
            <label><b>Date:</b></label>
            <input type="date" placeholder="Date" onChange={handleDateChange} />

            <input type="submit" value="Submit" onClick={handleSubmit} />
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Order;
