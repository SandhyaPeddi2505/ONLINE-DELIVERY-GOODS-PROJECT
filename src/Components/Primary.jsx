import React, { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaMapMarker } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "./Primary.scss";
import third from "./third";
import { Link } from "react-router-dom";


const Primary = () => {
  const sourceAddress = [
    { name: "Ameerpet" },
    { name: "Afzalgunj" },
    { name: "Alwal" },
    { name: "Amberpet" },
    { name: "Bachupally" },
    { name: "Balapur" },
    { name: "Begum Bazaar" },
    { name: "Boduppal" },
    { name: "Chaderghat" },
    { name: "Chikkadpally" },
    { name: "Chaitanyapuri" },
    { name: "Dilsukhnagar" },
    { name: "ECIL" },
    { name: "Film Nagar" },
    { name: "Gandipet" },
    { name: "Gacchibowli" },
    { name: "Durgam Cheruvu" },
    { name: "Hasthinapuram" },
    { name: "HayathNagar" },
    { name: "HimayaathNagar" },
    { name: "Ibrahimpatnam" },
    { name: "Jeedimetla" },
    { name: "Kachiguda" },
    { name: "Koti" },
    { name: "Karmanghat" },
    { name: "L B Nagar" },
    { name: "Lingampally" },
    { name: "Madhapur" },
    { name: "Miyapur" },
    { name: "Nallakunta" },
    { name: "Narayanguda" },
    { name: "Osmania University" },
    { name: "Punjagutta" },
    { name: "Ramanthapur" },
    { name: "Safilguda" },
    { name: "Towlichowki" },
    { name: "Uppal" },
    { name: "Vanasthalipuram" },
    { name: "Yousufguda" }
  ];

  const [selectedSource, setSelectedSource] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [date, setDate] = useState();
  const today = new Date();

  const [reload, setReload] = useState(false);

  const handleSourceChange = (event) => {
    setSelectedSource(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setSelectedDestination(event.target.value);
  };

  const handleChange = (e) => {
    const selectedDate = new Date(e.target.value);
    if (selectedDate < today) {
      setDate(null);
      toast.warn("Choose the date which is yet to come !");
      window.location.reload();
    } else {
      setDate(selectedDate);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSource === selectedDestination && selectedSource !== '') {
      toast.warn(
        "Please select different source address from destination address"
      );
      setTimeout(() => window.location.reload(), 6500);
    }
    
    else if(selectedSource ===""||selectedDestination ===""|| date==="") {
      toast.warn(
        "Fill out all the fields"
      );
  } else if (selectedSource && !selectedDestination) {
    toast.warn('Source and destination address fields are empty, please select');
  } else if (!selectedSource && !date) {
    toast.warn('Source and date fields are empty, please select');
  } else if (!date && !selectedDestination) {
    toast.warn('Date and destination address fields are empty, please select');
  }

     else if (!selectedSource) {
      toast.warn('Source address field is empty, please select');
    } else if (!selectedDestination) {
      toast.warn('Destination address field is empty, please select');
    }
    else if (!date) {
      toast.warn('Date field is empty, please select');
    } 
    
    else {
      console.log(`Source is ${selectedSource}`);
      console.log(`Destination is ${selectedDestination}`);
      console.log(`Date is ${date}`);

      window.location.replace("/hi");
    }
  };
  

  return (
    <div className="primaryCont">
      <h1 style={{ textAlign: "center ", padding: "40px 0 0 0px" }}>
        Address Details!!
      </h1>
      <form class="form" onSubmit={handleSubmit}>
        <FaMapMarkerAlt />
        <select
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
        
        <FaMapMarker />
        
        <select
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
        </select>
 
        <FaCalendarAlt />
        <input type="date" onChange={handleChange} />
        <br />
        <div class="but">
          <Link to="/source"><input type="submit" value="Submit" /></Link>
        </div>
      </form>
      <br />
      <ToastContainer />
      
      <img
        src={third} style={{width:450,height:450,marginLeft:450}}

      />
    </div>
  );
};
export default Primary;
