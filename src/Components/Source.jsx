import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Map1 from "./Map1";
// import Navbar from './Navbar';
import NavwithIcon from "./NavwithIcon";
import { API_BASE_URL } from './api.jsx';

const Source = ({ onNextClick, deliveryData, props }) => {
    const [isPrimary, setIsPrimary] = useState(true);
    const [dataa, setDataa] = useState([]);
    // const [sweet,setSweet]=useState([])
    const [Address,setAddress]=useState("")
    const [primary_location,setPrimary_Location]=useState([])
    // const [socation,setSourceLocation]=useState([])
    const [isConfirmed,setIsConfirmed]=useState(localStorage.getItem("isConfirmed"))
    const [details, setDetails] = useState(
        {
        name: "",
        // Address: "",
        phone: "",}
    );
    const [primaryAddress, setPrimaryAddress] = useState({
        name: "",
        Address:"",
        phone: "",
        primary_location:""
    });
    useEffect(() => {
        axios.get(`${API_BASE_URL}/primaryUserDetails`
        // axios
        // .get(
        //   "http://ec2-15-206-148-202.ap-south-1.compute.amazonaws.com:8001/primaryUserDetails"
          ,
          
          { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}}
          // { headers: {"Authorization" : `Bearer ${localStorage.getItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ1NGNhOTZlYzAyMjJlZWMzY2M1ZTNkIiwiZXhwIjoxNjgzNTMwODA0LCJpYXQiOjE2ODM1MjcyMDR9.QxxyDtPw55hiR3A387eszfvDIsfyUzTVNHlB35BAB8I"
          // )}`}}
        ).then((response) => {
       
                      setPrimaryAddress({name:response.data?.name,
                        Address:response.data?.address,
                        phone:response.data?.phone,
                        primary_location:response.data?.primary_location})
                        console.log(response.data.primary_location,"2222")
        },[])
        console.log(deliveryData.name,"2222")
        console.log(deliveryData, "dfdf");
        // console.log(response?.primary_location,"2222")
        // setIsConfirmed(localStorage.getItem('isConfirmed'))
        if (deliveryData && !deliveryData.Source.isPrimary) {
            setDetails({
                ...details,
                name: deliveryData.Source.name,
                Address: deliveryData.Source.Address,
                phone: deliveryData.Source.phone,
                primary_location:deliveryData.Source.primary_location
            });
            console.log(deliveryData.primary_location,Address,"2222")
        }
    }, []);
  
    const changeHandle = (e) => {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value });
    };
   
    const handleSubmit = (e) => {
        e.preventDefault();
        // debugger;
        console.log(deliveryData);
        console.log("address123",+Address)
        // toast.error("Please enter valid details");
        // if (details.Name && details.Name.length >= 3 && Address && Address.length >= 5 && details.Phone_number && details.Phone_number.length === 10 && !isNaN(details.Phone_number)) {
        //     return true;
        // } else {
        //     toast.error("Please enter the valid details.");
        //     return false;

        // }
    };
    // const [secondaryAddress, setSecondaryAddress] = useState({
    //     name1: "",
    //     address1: "",
    //     phoneno1: ""
    // });

    const handleChange = (e) => {
        if (isPrimary) {
            setPrimaryAddress({ ...primaryAddress, [e.target.name]: e.target.value });
        } else {
            if (e.target.name === "Address") {
                setPrimaryAddress({ ...primaryAddress, address: e.target.value });
            }
            setDetails({ ...details, [e.target.name1]: e.target.value });
        }
    };
    const handleAddressTypeChange = (e) => {
        setIsPrimary(e.target.value === "primary");
    };
    const handleCancel = (e) => {
        e.preventDefault();
        window.location.reload();
    };
    const addressHandler=(data1)=>{
        setAddress(data1)
    }
    const lathandle=(p)=>{
        setPrimary_Location(p)
    }
          
    return (
        <>
        {/* <Navbar/> */}
        <NavwithIcon/>
            <div className="container-fluid" id="grad1">
                <div className="row justify-content-center mt-0">
                    <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                        <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                            <h1>Source Information</h1>
                            <div className="row">
                                <div className="col-md-12 mx-0">
                                    <form id="msform" onSubmit={handleSubmit}>
                                        <div>
                                            <ul id="progressbar">
                                                <li class="active" id="source"><strong>Source</strong></li>
                                                <li id="destination"><strong>Destination</strong></li>
                                                <li id="submit"><strong>Details</strong></li>
                                                <li id="confirm"><strong>Confirm</strong></li>
                                            </ul>
                                        </div>
                                        <fieldset>
                                            <div
                                                className="form-card"
                                                style={{ direction: "flex", flexDirection: "row" }}>
                                                <div className="col  mx-5">
                                                    <label style={{ color: "black", position: "relative", padding: "20px" }}>Primary
                                                        <input type="radio" name="addressType" value="primary" checked={isPrimary} onChange={handleAddressTypeChange} />
                                                    </label>
                                                    <label style={{ color: "black", padding: "20px" }} className="label">Secondary
                                                        <input type="radio" name="addressType" className="mr" value="secondary" checked={!isPrimary} onChange={handleAddressTypeChange} />
                                                    </label>
                                                </div>
                                                {isPrimary ? (
                                                    <div className="row">
                                                        {/* {dataa.map((value, i) => {

                                                            return ( */}
                                                                <>
                                                                    <div className="col-md-4">
                                                                        <div className="form-outline">
                                                                            <label style={{ color: "black" }}><b>Name:</b>
                                                                                <input type="text" name="name" value={primaryAddress.name} placeholder="Name" onChange={changeHandle} />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 md-4">
                                                                        <div className="form-outline">
                                                                            <label style={{ color: "black" }}><b>Address:</b>
                                                                            {/* <Map1 maper={addressHandler} maper1={lathandle}/> */}
                                                                                <input type="text" name="Address" value={primaryAddress.Address} placeholder="Address" onChange={handleChange} />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <label style={{ color: "black" }}><b>Phone:</b>
                                                                        <input type="tel" name="phone" value={primaryAddress.phone} placeholder="PhoneNo" onChange={handleChange} />
                                                                    </label>
                                                                </>
                                                            {/* );
                                                        })} */}
                                                    </div>
                                                ) : (
                                                    <div className="row">
                                                        <div className="col">
                                                            <label style={{ color: "black" }}><b>Name:</b>
                                                                <input type="text" name="name" value={details.name} onChange={changeHandle} required minLength={3} />{" "}
                                                                
                                                            </label>
                                                        </div>
                                                        <label style={{ color: "black" }}><b>Phone:</b>
                                                            <input type="text" name="phone" value={details.phone} onChange={changeHandle} required />
                                                            
                                                        </label>
                                                        <div className="col">
                                                            <label style={{ color: "black" }}><b>Address:</b>
                                                            <Map1 maper={addressHandler} maper1={lathandle}/>
                                                                {/* <input type="text" name="Address" value={details.Address} onChange={changeHandle} required minLength={5} /> */}
                                                                
                                                            </label>
                                                        </div>
                                                        
                                                    </div>
                                                )}
                                            </div>
                                            <div classname="buttons">
                                            <button type="button" onClick={handleCancel} className="btn btn-secondary" id="sand1">Cancel</button>
                                            <button type="submit"
                                                className="btn btn-primary"
                                                id="sand1"
                                                onClick={() => {
                                                    console.log(isPrimary,primaryAddress,primary_location)
                                                    if (isPrimary) {
                                                        onNextClick({ isPrimary: true, ...primaryAddress});
                                                    } else if (details.name && details.name.length >= 3 && Address && Address.length >= 5 && details.phone && details.phone.length === 10 && !isNaN(details.phone)) {
                                                        onNextClick({ isPrimary: false, ...details ,Address,primary_location});
                                                    }
                                                }}>
                                                Next
                                            </button>   
                                            </div>                             
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Source;
