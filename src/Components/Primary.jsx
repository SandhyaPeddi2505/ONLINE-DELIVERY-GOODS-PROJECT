// import React, { useState } from "react";
// import { FaMapMarkerAlt, FaCalendarAlt, FaMapMarker } from "react-icons/fa";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";
// import { API_BASE_URL } from "./api.jsx";
// import { DatePicker } from "antd";
// // import PlacesAutocomplete from "react-places-autocomplete";
// import "./Primary.scss";
// import Map1 from "./Map5";
// import third from "./third";
// import { Link } from "react-router-dom";
// // import Navbar from "./Navbar";
// import NavwithIcon from "./NavwithIcon";
// import axios from "axios";
// // import { Calendar, DatePicker } from 'antd';

// const CitySelection = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedSource, setSelectedSource] = useState("");
//   const [selectedDestination, setSelectedDestination] = useState("");
//   const today = new Date();
//   const [reload, setReload] = useState(false);

//   const handleSourceChange = (even) => {
//     setSelectedSource(even);
//     // console.log("P"+selectedSource)
//   };
  

//   const handleDestinationChange = (event) => {
//     setSelectedDestination(event);
//     // console.log("o"+selectedDestination)
//   };
//   const handleChange = (date) => {
//     if (date < today) {
//       toast.warn("Choose the date which is yet to come !");
//       setTimeout(() => date.location.reload(), 6500);
//     } else {
//       setSelectedDate(date);
//     }
//   };
//   const payload = {
//     source_address: selectedSource,
//     destination_address: selectedDestination
//     // "selectedDate":selectedDate
//   };
//   // axios
//   // .post(
//   // " http://ec2-15-206-148-202.ap-south-1.compute.amazonaws.com:8001/address  "
//   // .catch((error)=>{
//   //   console.log(error)
//   // })
//   // const handleChange = (event) => {
//   //   setDate(event.target.value);
//   //   if (event.target.value < today) {
//   //     toast.warn("ChoosehandlechNthe date which is yet to come !");
//   //     setTimeout(() => window.location.reload(), 6500);
//   //   } else {
//   //     setDate(event.target.value );
//   //   }

//   // };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//     .post(`${API_BASE_URL}/address`, payload, {
//       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
//     })
//     .then((response) => {
//       console.log(response);
      // localStorage.setItem("temp_order_id", response.data.temp_order_id);
      // console.log(response.data.temp_order_id);
//       window.location.replace("/items");

//     })
//     .catch((error) => {
//       console.log(error.response.data);
//     });
//     console.log(selectedSource, "sow");

 
//     if (selectedSource === selectedDestination && selectedSource !== "") {
//       toast.warn(
//         "Please select different source address from destination address"
//       );
//       setTimeout(() => window.location.reload(), 6500);
//     } else if (
//       selectedSource === "" ||
//       selectedDestination === "" ||
//       selectedDate === ""
//     ) {
//       toast.warn("Fill out all the fields");
//     } else if (selectedSource && !selectedDestination) {
//       toast.warn(
//         "Source and destination address fields are empty, please select"
//       );
//     } else if (!selectedSource && !selectedDate) {
//       toast.warn("Source and date fields are empty, please select");
//     } else if (!selectedDate && !selectedDestination) {
//       toast.warn(
//         "Date and destination address fields are empty, please select"
//       );
//     } else if (!selectedSource) {
//       toast.warn("Source address field is empty, please select");
//     } else if (!selectedDestination) {
//       toast.warn("Destination address field is empty, please select");
//     } else if (!selectedDate) {
//       toast.warn("Please Select Valid Date");
//     } else {
//       console.log(`Source is ${selectedSource}`);
//       console.log(`Destination is ${selectedDestination}`);
//       console.log(`Date is ${selectedDate}`);

//     }
//   };
import React, { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaMapMarker } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { API_BASE_URL } from "./api.jsx";
import { DatePicker } from "antd";
import "./Primary.scss";
import Map1 from "./Map5";
import third from "./third";
import { Link } from "react-router-dom";
import NavwithIcon from "./NavwithIcon";
import axios from "axios";

const CitySelection = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSource, setSelectedSource] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const today = new Date();
  const [reload, setReload] = useState(false);

  const handleSourceChange = (even) => {
    setSelectedSource(even);
  };

  const handleDestinationChange = (event) => {
    setSelectedDestination(event);
  };

  const handleChange = (date) => {
    if (date < today) {
      toast.warn("Choose the date which is yet to come !");
      setTimeout(() => date.location.reload(), 6500);
    } else {
      setSelectedDate(date);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSource === selectedDestination && selectedSource !== "") {
      toast.warn(
        "Please select different source address from destination address"
      );
      setTimeout(() => window.location.reload(), 6500);
    } else if (
      selectedSource === "" ||
      selectedDestination === "" ||
      selectedDate === ""
    ) {
      toast.warn("Fill out all the fields");
    } else if (selectedSource && !selectedDestination) {
      toast.warn(
        "Source and destination address fields are empty, please select"
      );
    } else if (!selectedSource && !selectedDate) {
      toast.warn("Source and date fields are empty, please select");
    } else if (!selectedDate && !selectedDestination) {
      toast.warn(
        "Date and destination address fields are empty, please select"
      );
    } else if (!selectedSource) {
      toast.warn("Source address field is empty, please select");
    } else if (!selectedDestination) {
      toast.warn("Destination address field is empty, please select");
    } else if (!selectedDate) {
      toast.warn("Please Select Valid Date");
    } else {
      const payload = {
        source_address: selectedSource,
        destination_address: selectedDestination
      };

      axios
        .post(`${API_BASE_URL}/address`, payload, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
        .then((response) => {
          console.log(response);
          localStorage.setItem("temp_order_id", response.data.temp_order_id);
          console.log(response.data.temp_order_id);
          console.log(`Source is ${selectedSource}`);
          console.log(`Destination is ${selectedDestination}`);
          console.log(`Date is ${selectedDate}`);
          window.location.replace("/items");
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }
  };


  return (
    <>
      {/* <Navbar /> */}
      <NavwithIcon />
      <div className="primaryCont">
        <h2
          style={{
            textAlign: "center ",
            padding: "40px 0 0 0px",
            color: "white"
          }}
        >
          City Selection!
        </h2>

        <form class="form" onSubmit={handleSubmit}>
          <FaMapMarkerAlt className="ic" />
          <Map1 map={handleSourceChange} class="map" />
          <br></br>
          <FaMapMarker className="ic" />
          <Map1 map={handleDestinationChange} class="map" />

          {/* <select
          value={selectedSource}
          onChange={handleSourceChange}
          placeholder="Source"
        >
          <option value="">Select source</option>
          {sourceAddress.map((address) => (
            <option key={address.name} value={address.name}>
              {address.name}
            </option>
          ))}
        </select>
         */}

          {/* <select
          value={selectedDestination}
          onChange={handleDestinationChange}
          placeholder="Destination"
        >
          <option value="">Select Destination</option>
          {sourceAddress.map((address) => (
            <option key={address.name} value={address.name}>
              {address.name}
            </option>
          ))}
        </select> */}

          <FaCalendarAlt className="ic" />
          {/* <input type="date" onChange={handleChange} /> */}
          <DatePicker
            type="date"
            placeholder="dd-mm-yyyy"
            onChange={handleChange}
            style={{ height: "40px", width: "180px" }}
          />
          <br></br>

          <div class="but">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
        <br />
        <ToastContainer />

        {/* <img
        src={third} style={{width:450,height:450,marginLeft:450}}

      /> */}
      </div>
    </>
  );
};
export default CitySelection;
