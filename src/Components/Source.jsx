import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { useState ,useEffect} from "react";
import axios from "axios";

const Source = (props) => {
    const [dataa, setDataa] = useState([]);
    // // useEffect(()=>{
    // //     axios.post("http://ec2-65-2-161-39.ap-south-1.compute.amazonaws.com:8001/Primary_Secondary_Dest_infos/").then(response=>{
    // //         setDataa(response.data)
    // //         console.log(response)
    // //     })
    // //     .catch((error)=>{
    // //         console.log(error)
    // //     })
    // // },[])
    const [details,setDetails]=useState({   //for secondary address upto line 17 and continue from line no: 36
        Name:"",
        Address:"",
        Phone_number:""
    })
    
    const changeHandle=(e)=>{
        let updateData=details;
        updateData[e.target.name]=e.target.value;
        setDetails({...updateData})
}
    
    const [primaryAddress, setPrimaryAddress] = useState({
        name2: "Sandhya",
        address2: "Hyderabad",
        phone2: "9087898078"
    });
    
    // console.log(dataa,"primary")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        

        
       fetch("http://ec2-65-2-161-39.ap-south-1.compute.amazonaws.com:8001/Primary_Secondary_Dest_infos/",{
        method:"POST",
        body: JSON.stringify({
            Name:details.Name,
            Address:details.Address,
            Phone_number:details.Phone_number
        }),
        headers:{"Content-type": "application/json; charset=UTF-8",},
    })
    .then((response)=>response.json())
    .then((data)=>{

    }).catch((error)=>{
        console.log(error)
    })
}
    
    const [secondaryAddress, setSecondaryAddress] = useState({
        name1: "",
        address1: "",
        phoneno1: ""
    });
    const [isPrimary, setIsPrimary] = useState(true);
    const handleChange = (e) => {
        if (isPrimary) {
            setPrimaryAddress({
                ...primaryAddress,
                [e.target.name2]: e.target.value
            });
        } else {
            if(e.target.name === "address"){                                 //from 38 line to 43 line code added 
                setPrimaryAddress({
                    ...primaryAddress,
                address: e.target.value
                })
            }
            setSecondaryAddress({
                ...secondaryAddress,
                [e.target.name]: e.target.value
            });
        }
    };
    
    
    const handleAddressTypeChange = (e) => {
        setIsPrimary(e.target.value === "primary");
    };
    const handleCancel = (e) => {
        e.preventDefault();
        window.location.reload();
    }
    
    return (
        <>
        <div className="container-fluid" id="grad1">
                <div className="row justify-content-center mt-0">
                    <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                        <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                            <h1>Source Information</h1>
                            <div className="row">
                                <div className="col-md-12 mx-0">
                                    <form  id="msform" onSubmit={handleSubmit}>
                                        <div >
                                        {/* // window.location.href = "/destination" */}
                                
                                        <ul id="progressbar"  >
                                        {/* // style={{width: `${progress}%`}} */}
                                        <Link to="/"><li class="active" id="source"><strong>Source</strong></li></Link>
                                        <Link to="/destination"><li id="destination" ><strong>Destination</strong></li></Link>
                                        <Link to="/submit"><li id="submit" ><strong>Submit</strong></li></Link>
                                        <Link to="/confirm"><li id="confirm" ><strong>Confirm</strong></li></Link>

                                        </ul>
                                        </div>
                                        <fieldset>
                                            <div className="form-card" style={{direction:"flex",flexDirection:"row"}}>
                                                <div className="col mx-0">
                                                <label style={{ color: 'black' }} className="m-4"><input type="radio" name="addressType" value="primary" checked={isPrimary}
                                                    onChange={handleAddressTypeChange} />Primary</label>
                                                <label style={{ color: 'black' }} className="mr"><input type="radio" name="addressType" value="secondary" checked={!isPrimary}
                                                    onChange={handleAddressTypeChange} />Secondary</label></div>
                                                {isPrimary ? (
                                                    <div className="row">
                                                        {dataa.map((value,i)=>{
                                                            console.log(value,"one")
                                                            return (
                                                                <>
                                                                <div className="col-md-4">
                                                            <div className="form-outline">
                                                        <label style={{ color: 'black' }} ><b>Name:</b><input type="text" name="name" value={value.name} placeholder="Name"
                                                            onChange={handleChange} />
                                                            </label>
                                                            </div>
                                                            </div>
                                                            <div className="col-md-6 md-4">
                                                                <div className="form-outline">
                                                        <label style={{ color: 'black' }}><b>Address:</b><input type="text" name="address" value={value.address} placeholder="Address"
                                                            onChange={handleChange} />
                                                            </label>
                                                            </div>
                                                            </div>
                                                        <label style={{ color: 'black' }}><b>Phone:</b><input type="text" name="Phone" value={value.phone} placeholder="PhoneNo"
                                                            onChange={handleChange} />
                                                        </label>
                                                                </>
                                                            )
                                                        })}
                                                        
                                                        </div>  
                                                    
                                                         ) : (
                                                        // <form onSubmit={submitHandle}>
                                                       <div className="row" >
                                                           <div className="col-md-4">
                                                          <label style={{ color: 'black' }}><b>Name:</b>
                                                            <input type="text" name="Name" value={details.Name} className="cont"
                                                                onChange={changeHandle} />
                                                            </label></div>
                                                           <div className="col-md-4">
                                                           <label style={{ color: 'black' }}><b>Address:</b><input className="cont" type="text" name="Address" value={details.Address}
                                                            onChange={changeHandle} />
                                                           </label></div>
                                                           <label style={{ color: 'black' }}><b>Phone_number:</b>
                                                            <input className="cont" type="text" name="Phone_number" value= {details.Phone}
                                                                onChange={changeHandle} />
                                                            </label>
                                                            
                                                        </div>
                                                        
                                                        // </form>
                                                )}
                                                {/* <button type="submit" className="btn btn-success">Submit</button> */}
                                            </div>
                                            <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
                                            {/* <Link to="/"><button name="cancel" class="btn btn-primary">Cancel</button></Link> */}
                                            <Link to="/destination"><button name="next" className="btn btn-primary">Next</button></Link>
                                            <button type="submit">submit</button>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Source;



















