import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import axios from "axios";
const Destination = () => {
    const [details, setDetails] = useState({
        name: "",
        phoneno: "",
        address: ""
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setDetails({
          ...details,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const { name, address, mobile_num } = details;
        axios
          .post("http://ec2-65-2-161-39.ap-south-1.compute.amazonaws.com:8001/destination/", { name, mobile_num, address })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
    // const [name, setName] = useState();
    // const [phone, setPhone] = useState();
    // const [address, setAddress] = useState();
    // const [showdetails, setShowDetails] = useState(false);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setShowDetails(true);

       
    //     fetch("http://localhost:3000/details1", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             name,
    //             address,
    //             phone
    //         }),
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    };
    
    return (
        <div className="container-fluid" id="grad1">
            <div className="row justify-content-center mt-0">
                <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                    <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                        <h1>Destination Details</h1>
                        <div className="row">
                            <div className="col-md-12 mx-0">
                                <form id="msform" onSubmit={handleSubmit}>
                                    <ul id="progressbar">

                                        <Link to="/"><li class="active" id="source"><strong>Source</strong></li></Link>
                                        <Link to="/destination"><li class="active" id="destination"  ><strong>Destination</strong></li></Link>
                                        <Link to="/submit"><li id="submit" >Submit<strong></strong></li></Link>
                                        <Link to="/confirm"><li id="confirm" ><strong>Confirm</strong></li></Link>

                                    </ul>
                                    <fieldset>
                                        <div className="form-card">
                                            <h2 className="fs-title">Destination Details</h2>
                                            <input type="text" name="name" placeholder="Name" value={details.name} onChange={handleChange} />
                                            <input type="text" name="address" placeholder="Address" value={details.address} onChange={handleChange} />
                                            <input type="text" name="phoneno" placeholder="PhoneNo" value={details.phoneno} onChange={handleChange} />
                                            {/* <button type="submit" className="btn btn-success">Submit</button> */}
                                        </div>
                                       
                                        <Link to="/source"><button name="previous" className="btn btn-secondary">Previous</button></Link>
                                        <Link to="/submit"><button  name="submit" className="btn btn-primary">Next</button></Link>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Destination;