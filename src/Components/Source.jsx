import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { useState ,useEffect} from "react";
import axios from "axios";

const Source = (props) => {
    const [dataa, setDataa] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/posts").then(response=>{
            setDataa(response.data)
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
    const [details,setDetails]=useState({   //for secondary address upto line 17 and continue from line no: 36
        name:"",
        address:"",
        phone:""
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
        
       fetch("http://localhost:3000/details",{
        method:"POST",
        body: JSON.stringify({
            name:details.name,
            address:details.address,
            phone:details.phone
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
                                        <Link to="/source"><li class="active" id="source"><strong>Source</strong></li></Link>
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
                                                        <label style={{ color: 'black' }}><b>Phone:</b><input type="text" name="phone" value={value.phone} placeholder="PhoneNo"
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
                                                            <input type="text" name="name" value={details.name} className="cont"
                                                                onChange={changeHandle} />
                                                            </label></div>
                                                           <div className="col-md-4">
                                                           <label style={{ color: 'black' }}><b>Address:</b><input className="cont" type="text" name="address" value={details.address}
                                                            onChange={changeHandle} />
                                                           </label></div>
                                                           <label style={{ color: 'black' }}><b>Phone:</b>
                                                            <input className="cont" type="text" name="phone" value= {details.phone}
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



















// import "bootstrap/dist/css/bootstrap.css";
// import { Link } from "react-router-dom";
// import {useState ,useEffect} from "react";
// // import { useState ,useContext, createContext} from "react";
// import Submit from "./Submit";
// import axios from "axios";

// // export const AddressContext = createContext();
// const Source = () => {
//     // const { progress } = props;
//     // const [clicked, setClicked] = useState(false);
//     const [name1,setName1]=useState(localStorage.getItem("NAME1")? localStorage.getItem("NAME1"):"");
//     const [phoneno1,setPhoneNo1]=useState(localStorage.getItem("PHONENO1")? localStorage.getItem("PHONENO1"):"");
//     const [address1,setAddress1]=useState(localStorage.getItem("ADDRESS1")? localStorage.getItem("ADDRESS1"):"");
//     // const [name2,setName2]=useState()
//     // const [address2,setAddress2]=useState()
//     // const [phone22,setPhone2]=useState()
//     localStorage.setItem("NAME1",name1)
//     localStorage.setItem("PHONENO1",phoneno1)
//     localStorage.setItem("ADDRESS1",address1)
//     // console.log("NAME1",name1)
//     // console.log("PHONENO1",phoneno1)
//     // console.log("ADDRESS1",address1)
//     // localStorage.setItem("Sandhya",name2)
//     // localStorage.setItem("Hyderabad",address2)
//     // localStorage.setItem("9087898078",phone22)
//     const [primaryAddress, setPrimaryAddress] = useState({
//         name2: "Sandhya",
//         address2: "Hyderabad",
//         phone2: "9087898078"
//     });
//     // return (
//     //     <AddressContext.Provider
//     //       value={{ primaryAddress, setPrimaryAddress }}
//     //     >
//     //       {props.children}
//     //     </AddressContext.Provider>
//     //   );
//     // <Submit data={primaryAddress} />
//     const [dataa, setDataa] = useState([]);
//     // const getDetails=()=>{
//     //     axios.get("http://localhost:3000/posts").then(response =>setDataa(response.data))

//     // }
//     // useEffect(()=>{
//     //     getDetails()
//     // },[])
//     // console.log(dataa,"sandhya")
    
//     // const getDetails=()=>{
//     //     axios.get("http://localhost:3000/posts").then(response =>setDataa(response.data))

//     // }
//     useEffect(()=>{
//         axios.get("http://localhost:3000/posts").then(response=>setDataa(response.data))
//     },[])
//     console.log(dataa,"sandhya")

//     // const dummy= {
//     //     name:"Sandhya",
//     //     address:"Hyderabad",
//     //     phone:"9087867867"
//     // }
//     const [secondaryAddress, setSecondaryAddress] = useState({
//         name1: "",
//         address1: "",
//         phoneno1: ""
//     });
//     const [isPrimary, setIsPrimary] = useState(true);
//     const handleChange = (e) => {
//         // const {name,value}=e.target.value;
//         // setPrimaryAddress((prevState) => ({
//         //     ...prevState,
//         //     [name]: value
//         //   }));
//         if (isPrimary) {
//             setPrimaryAddress({
//                 ...primaryAddress,
//                 [e.target.name2]: e.target.value
//             });
//         } 
//     //     const { name, value } = e.target;
//     // setPrimaryAddress((prevState) => ({
//     //   ...prevState,
//     //   [name]: value
//     // })
//         else {
//             if(e.target.name === "address"){ //from 38 line to 43 line code added 
//                 setPrimaryAddress({
//                     ...primaryAddress,
//                 address: e.target.value
//                 })
//             }
//             setSecondaryAddress({
//                 ...secondaryAddress,
//                 [e.target.name]: e.target.value
//             });
//         }
//     };
    
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // props.onSubmit({ name: "Sandhya",
//         // address: "Hyderabad",
//         // phone: "9087898078"})
//     };
//     const handleAddressTypeChange = (e) => {
//         setIsPrimary(e.target.value === "primary");
//     };
//     const handleCancel = (e) => {
//         e.preventDefault();
//         window.location.reload();
//     }
//     // const handleClick = () => {
//     //     if(clicked === false) {
//     //         setClicked(true);
//     //     } else {
//     //         setClicked(false);
//     //     }}
//     return (
//         <>
//          {/* <Submit primaryAddress={primaryAddress} /> */}
//         <div className="container-fluid" id="grad1">
//                 <div className="row justify-content-center mt-0">
//                     <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
//                         <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
//                             <h1>Source Information</h1>
//                             <div className="row">
//                                 <div className="col-md-12 mx-0">
//                                     <form id="msform" onSubmit={handleSubmit}>
//                                         <div >
//                                         {/* // window.location.href = "/destination" */}
                                
//                                         <ul id="progressbar"  >
//                                         {/* // style={{width: `${progress}%`}} */}
//                                         <Link to="/"><li class="active" id="source"><strong>Source</strong></li></Link>
//                                         <Link to="/destination"><li id="destination" ><strong>Destination</strong></li></Link>
//                                         <Link to="/submit"><li id="submit" ><strong>Submit</strong></li></Link>
//                                         <Link to="/confirm"><li id="confirm" ><strong>Confirm</strong></li></Link>

//                                         </ul>
                                        
//                                         </div>
//                                         <fieldset>
//                                             <div class="form-card" style={{direction:"flex",flexDirection:"row"}}>
//                                                 <div class="col mx-0">
//                                                 <label style={{ color: 'black' }} class="m-4"><input type="radio" name="addressType" value="primary" checked={isPrimary}
//                                                     onChange={handleAddressTypeChange} />Primary</label>
//                                                 <label style={{ color: 'black' }} class="mr"><input type="radio" name="addressType" value="secondary" checked={!isPrimary}
//                                                     onChange={handleAddressTypeChange} />Secondary</label></div>
//                                                 {isPrimary ? (
//                                                     <div className="row">
//                                                        {dataa.map((value,i)=>{
//                                                         console.log(value,"one")
//                                                         return(
//                                                             <>
//                                                             <div className="col-md-4">
//                                                             <div className="form-outline">
//                                                         <label style={{ color: 'black' }} ><b>Name:</b><input type="text" name="name" value={value.name} placeholder="Name"
//                                                             onChange={handleChange} />
//                                                             </label>
//                                                             </div>
//                                                             </div>
//                                                             <div className="col-md-6 md-4">
//                                                                 <div className="form-outline">
//                                                         <label style={{ color: 'black' }}><b>Address:</b><input type="text" name="address" value={value.address} placeholder="Address"
//                                                             onChange={handleChange} />
//                                                             </label>
//                                                             </div>
//                                                             </div>
//                                                         <label style={{ color: 'black' }}><b>Phone:</b><input type="text" name="phone" value={value.phone} placeholder="PhoneNo"
//                                                             onChange={handleChange} />
//                                                         </label>
//                                                             </>
//                                                         )
//                                                        })} 
                                                        
//                                                         </div>
                                                    
//                                                 ) : (
//                                                     <div className="row">
//                                                         <div className="col-md-4">
                                                       
            
        
//                                                         <label style={{ color: 'black' }}><b>Name:</b>
//                                                             <input type="text" name="name" value={name1} className="cont"
//                                                                 onChange={(e) => setName1(e.target.value)} />
//                                                         </label>
//                                                         </div>
//                                                         <div class="col-md-4">
//                                                         <label style={{ color: 'black' }}><b>Address:</b><input className="cont" type="text" name="address" value={address1}
//                                                             onChange={(e) => setAddress1(e.target.value)} />
//                                                         </label></div>
//                                                         <label style={{ color: 'black' }}><b>Phone:</b>
//                                                             <input className="cont" type="text" name="phone" value={phoneno1}
//                                                                 onChange={(e) => setPhoneNo1(e.target.value)} />
//                                                         </label>
//                                                     </div>
//                                                 )}
//                                             </div>
                                            
//                                             {/* <ul>
//                                             {dataa}
//                                             </ul> */}
//                                             <button type="button" onClick={handleCancel} class="btn btn-secondary">Cancel</button>
//                                             {/* <Link to="/"><button name="cancel" class="btn btn-primary">Cancel</button></Link> */}
//                                             <Link to="/destination"><button name="next" className="btn btn-primary">Next</button></Link>
//                                             {/* <Submit primaryAddress={primaryAddress} secondaryAddress={secondaryAddress}/>  */}
//                                         </fieldset>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Source;






































// // import "bootstrap/dist/css/bootstrap.css";
// // import { useState } from "react";
// // import { Link } from "react-router-dom";
// // const Source = () => {
// //     const [selectedAddress, setSelectedAddress] = useState("primary");
// //     const [primaryAddress, setPrimaryAddress] = useState({
// //         name: "Sandhya",
// //         phone: "9807867876",
// //         address: "India"
// //     });
// //     const [secondaryAddress, setSecondaryAddress] = useState();
// //     // ({
// //     //     name: "",
// //     //     phone: "",
// //     //     address: ""
// //     // });

// //     const handleAddressChange = (event) => {
// //         setSelectedAddress(event.target.value);
// //     };

// //     const handleSecondaryAddressChange = (event) => {
// //         // const { name, value } = event.target;
// //         // setSecondaryAddress({
// //         //     ...secondaryAddress,
// //         //     [name]: value
// //         // });
// //     };
// //     const handleSubmit = (event) => {
// //         event.preventDefault();
// //         // console.log("Submitted Secondary Address");
// //     };
    

// //     // const renderPrimaryAddress = () => {
// //         return (
// //             <div className="col">
// //                 <ul>{primaryAddress.name}</ul>
// //                 <ul>{primaryAddress.phone}</ul>
// //                 <ul>{primaryAddress.address}</ul>
// //             </div>
// //         );
// //     // };
// //     const renderSecondaryAddressForm = () => {
// //         return (
// //             <div style={{display: "flex", flexDirection: "row"}}>
// //             <form onSubmit={handleSubmit}>
// //                 <div class="row">
// //                     <div class="col">
// //                     <label>Name</label>
// //                     <input
// //                         type="text"
// //                         name="name"
// //                         value={secondaryAddress.name}
// //                         onChange={handleSecondaryAddressChange}
// //                     />
// //                     </div>
// //                 </div>
// //                 <div>
// //                     <label>Phone</label>
// //                     <input
// //                         type="text"
// //                         name="phone"
// //                         value={secondaryAddress.phone}
// //                         onChange={handleSecondaryAddressChange}
// //                     />
// //                 </div>
// //                 <div>
// //                     <label>Address</label>
// //                     <input
// //                         type="text"
// //                         name="address"
// //                         value={secondaryAddress.address}
// //                         onChange={handleSecondaryAddressChange}
// //                     />
// //                 </div>
                
// //                 <button className="btn btn-primary">Cancel</button>
// //                 <Link to="/destination"><button type="submit" className="btn btn-primary">Submit</button></Link>
// //             </form>
            
// //             </div>
// //         );
// //     };

// //     return (
// //         <div className="container-fluid" id="grad1">
// //             <div className="row justify-content-center mt-0">
// //                 <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
// //                     <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
// //                         <h1>Source Information</h1>
// //                         <div className="row">
// //                             <div className="col-md-12 mx-0">
// //                                 <form id="msform">
// //                                     <fieldset>
// //                                         <div style={{display: "flex" , flexDirection:"row"}}>
// //                                             <div>
// //                                                 <input
// //                                                     type="radio"
// //                                                     id="primary"
// //                                                     name="address"
// //                                                     value="primary"
// //                                                     checked={selectedAddress === "primary"}
// //                                                     onChange={handleAddressChange}
// //                                                 />
// //                                                 <label htmlFor="primary">Primary</label>
// //                                             </div>
// //                                             <div>
// //                                                 <input
// //                                                     type="radio"
// //                                                     id="secondary"
// //                                                     name="address"
// //                                                     value="secondary"
// //                                                     checked={selectedAddress === "secondary"}
// //                                                     onChange={handleAddressChange}
// //                                                 />
// //                                                 <label htmlFor="secondary">Secondary</label>
// //                                             </div>
// //                                             {selectedAddress === "primary"
// //                                                 ? renderPrimaryAddress()
// //                                                 : renderSecondaryAddressForm()}
// //                                         </div>
// //                                     </fieldset>

// //                                 </form>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };




// // export default Source;



// // // return (
// // //     <div class="container-fluid" id="grad1">
// // //         <div class="row justify-content-center mt-0">
// // //             <div class="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
// // //                 <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
// // //                     <h2>Source Information</h2>
// // //                     <div class="row">
// // //                         <div class="col-md-12 mx-0">
// // //                             <form id="msform">
// // //                                 <ul id="progressbar">
// // //                                     <li class="active" id="source"><strong>Source</strong></li>
// // //                                     <li id="destination"  ><strong>Destination</strong></li>
// // //                                     <li id="submit" >Submit<strong></strong></li>
// // //                                     <li id="confirm" ><strong>Confirm</strong></li>
// // //                                 </ul>
// // //                                 <fieldset>
// // //                                     <div class="form-card">
// // //                                         <h2 class="fs-title">Source Information</h2>
// // //                                         <div style={{ display: "flex", flexDirection: "row" }}>
// // //                                             <ul id="primary" ><strong><input type="Radio" class="cont" checked  />primary</strong></ul>
// // //                                             <ul id="secondary" ><strong><input type="Radio"  />secondary</strong></ul>
// // //                                         </div>
// // //                                         <div>

// // //                                         </div>

// // //                                     </div>
// // //                                     <Link to="/destination"><button name="next" class="btn btn-primary">Submit</button></Link>
// // //                                 </fieldset>
// // //                             </form>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     </div>
// // // )
// // // }