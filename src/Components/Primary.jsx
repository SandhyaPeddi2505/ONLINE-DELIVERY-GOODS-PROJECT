import React, { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaMapMarker } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Calendar, DatePicker } from 'antd';
// import PlacesAutocomplete from "react-places-autocomplete";
import "./Primary.scss";
import Map1 from "./Map";
import third from "./third";


const Primary = () => {
  // const [date, setDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  // const sourceAddress = [
  //   { name: "Ameerpet" },
  //   { name: "Afzalgunj" },
  //   { name: "Alwal" },
  //   { name: "Amberpet" },
  //   { name: "Bachupally" },
  //   { name: "Balapur" },
  //   { name: "Begum Bazaar" },
  //   { name: "Boduppal" },
  //   { name: "Chaderghat" },
  //   { name: "Chikkadpally" },
  //   { name: "Chaitanyapuri" },
  //   { name: "Dilsukhnagar" },
  //   { name: "ECIL" },
  //   { name: "Film Nagar" },
  //   { name: "Gandipet" },
  //   { name: "Gacchibowli" },
  //   { name: "Durgam Cheruvu" },
  //   { name: "Hasthinapuram" },
  //   { name: "HayathNagar" },
  //   { name: "HimayaathNagar" },
  //   { name: "Ibrahimpatnam" },
  //   { name: "Jeedimetla" },
  //   { name: "Kachiguda" },
  //   { name: "Koti" },
  //   { name: "Karmanghat" },
  //   { name: "L B Nagar" },
  //   { name: "Lingampally" },
  //   { name: "Madhapur" },
  //   { name: "Miyapur" },
  //   { name: "Nallakunta" },
  //   { name: "Narayanguda" },
  //   { name: "Osmania University" },
  //   { name: "Punjagutta" },
  //   { name: "Ramanthapur" },
  //   { name: "Safilguda" },
  //   { name: "Towlichowki" },
  //   { name: "Uppal" },
  //   { name: "Vanasthalipuram" },
  //   { name: "Yousufguda" }
  // ];

  const [selectedSource, setSelectedSource] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  // const [date, setDate] = useState();
  // const [date, setDate] = useState(null);
  const today = new Date()
  // .toISOString().substring(0, 10); 
  const [reload, setReload] = useState(false);

  const handleSourceChange = (even) => {
    setSelectedSource(even);
    // console.log("P"+selectedSource)
  };

  const handleDestinationChange = (even) => {
    setSelectedDestination(even);
    // console.log("o"+selectedDestination)
  };
   const handleChange = date => {
     if (date < today) {
      toast.warn("Choose the date which is yet to come !");
      setTimeout(() => date.location.reload(), 6500);
     } else {
        setSelectedDate(date);
     }
  }
  // const handleChange = (event) => {
  //   setDate(event.target.value);
  //   if (event.target.value < today) {
  //     toast.warn("Choose the date which is yet to come !");
  //     setTimeout(() => window.location.reload(), 6500);
  //   } else {
  //     setDate(event.target.value );
  //   }
    
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSource === selectedDestination && selectedSource !== '') {
      toast.warn(
        "Please select different source address from destination address"
      );
      setTimeout(() => window.location.reload(), 6500);
    }
    
    else if(selectedSource ===""||selectedDestination ===""|| selectedDate==="") {
      toast.warn(
        "Fill out all the fields"
      );
  } else if (selectedSource && !selectedDestination) {
    toast.warn('Source and destination address fields are empty, please select');
  } else if (!selectedSource && !selectedDate) {
    toast.warn('Source and date fields are empty, please select');
  } else if (!selectedDate && !selectedDestination) {
    toast.warn('Date and destination address fields are empty, please select');
  }
     else if (!selectedSource) {
      toast.warn('Source address field is empty, please select');
    } else if (!selectedDestination) {
      toast.warn('Destination address field is empty, please select');
    }
    else if (!selectedDate) {
      toast.warn('Date field is empty, please select');
    } 
    
    
    else {
      console.log(`Source is ${selectedSource}`);
      console.log(`Destination is ${selectedDestination}`);
      console.log(`Date is ${selectedDate}`);

      window.location.replace("/Source");
    }
  };
  

  return (

    <div className="primaryCont">
      <h1 style={{ textAlign: "center ", padding: "40px 0 0 0px" }}>
        Address Details!!
      </h1>
      
      <form class="form" onSubmit={handleSubmit}>
      <FaMapMarkerAlt />
      <Map1 map={handleSourceChange} class="map"/>
      <br></br>
      <FaMapMarker />
      <Map1 map={handleDestinationChange}  class="map"/>

       
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
 
        <FaCalendarAlt />
        {/* <input type="date" onChange={handleChange} /> */}
        <DatePicker type="date" placeholder="dd-mm-yyyy" onChange={handleChange} style={{height:"40px",width:"180px"}}/>
        <br></br>
        
        <div class="but">
          <button className="btn btn-primary" type="submit" >Submit</button>
        </div>
      </form>
      <br />
      <ToastContainer />
      
      {/* <img
        src={third} style={{width:450,height:450,marginLeft:450}}

      /> */}
    </div>
  );
};
export default Primary;
