import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
// import Source from "./Source";
import axios from "axios";
const Submit = (props) => {
    const [data, setData] = useState([]);
    const getDetails = () => {
        axios.get("http://localhost:3000/details").then(response => {
            setData(response.data)
        })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        getDetails()
    }, [])
    console.log(data,'source')
    //destination details
    const [dest, setDest] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/details1")
            .then((res) => res.json())
            .then((data) => setDest(data))
    }, []);
    console.log(dest, '67')

    return (
        <div className="container-fluid" id="grad1">
            <div className="row justify-content-center mt-0">
                <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                    <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                        <h1>Submit Details</h1>
                        <div className="row">
                            <div className="col-md-12 mx-0">
                                <form id="msform">
                                    <ul id="progressbar">
                                        <Link to="/source"><li className="active" id="source"><strong>Source</strong></li></Link>
                                        <Link to="/destination"><li id="destination" class="active" ><strong>Destination</strong></li></Link>
                                        <Link to="/submit"><li id="submit" class="active" ><strong>Submit</strong></li></Link>
                                        <Link to="/confirm"><li id="confirm" ><strong>Confirm</strong></li></Link>

                                    </ul>
                                    <fieldset>
                                        <div className="form-card">
                                            <h2 className="fs-title">Source Details</h2>
                                            {/* <label className="fs-title">Address details</label><br /> */}
                                            {data.map((val, i) => {
                                                return (
                                                    <>
                                                        <label style={{ color: 'black' }}>Name:{val.name}</label><br />
                                                        <label style={{ color: 'black' }}>Phoneno:{val.phone}</label><br />
                                                        <label style={{ color: 'black' }}>Address:{val.address}</label>
                                                    </>
                                                )
                                            })}

                                        </div>
                                        <div className="form-card">
                                        
                                            {dest.map((val, i) => {
                                                return (
                                                    <>
                                                    <h2 className="fs-title">Destination Details</h2>
                                                        <label style={{ color: 'black' }}>Name:{val.name}</label><br />
                                                        <label style={{ color: 'black' }}>Phoneno:{val.phone}</label><br />
                                                        <label style={{ color: 'black' }}>Address:{val.address}</label>
                                                    </>
                                                )
                                            })}
                                        </div>
                                        <Link to="/destination"><button name="previous" className="btn btn-secondary">Previous</button></Link>
                                        <Link to="/confirm"><button name="next" className="btn btn-primary">Submit</button></Link>
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
export default Submit;



// import { useState, useEffect} from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import { Link } from "react-router-dom";
// // import axios from "axios";
// // import Source from "./Source";
// // import Destination  from "./Destination";
// // import {useContext} from "react";
// // import { AddressContext } from "./AddressProvider";


// const Submit = () => {
    
//         const [details, setDetails] = useState({});
      
//         //get api call
//         useEffect(() => {
//           fetch("http://localhost:3000/details1", {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json"
//             }
//           })
//             .then((response) => {
//               response.json().then((data) => {
//                 setDetails(data);
//               });
//             })
//             .catch((err) => {
//               console.log(err);
//             });
//         }, []);
        



//     return (
//         <div className="container-fluid" id="grad1">
//             <div className="row justify-content-center mt-0">
//                 <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
//                     <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
//                         <h1>Submit Details</h1>
//                         <div className="row">
//                             <div className="col-md-12 mx-0">
//                                 <form id="msform">
//                                     <ul id="progressbar">
//                                         <Link to="/"><li className="active" id="source"><strong>Source</strong></li></Link>
//                                         <Link to="/destination"><li id="destination" class="active" ><strong>Destination</strong></li></Link>
//                                         <Link to="/submit"><li id="submit" class="active" ><strong>Submit</strong></li></Link>
//                                         <Link to="/confirm"><li id="confirm" ><strong>Confirm</strong></li></Link>

//                                     </ul>
//                                     <fieldset>
//                                     {/* {dataa.map((value,i)=>{
//                                                 return(
//                                                     <> */}
//                                             <div className="form-card">
//                                             <h2 className="fs-title">Source Details</h2>
//                                             {/* <label className="fs-title">Address</label><br /> */}
//                                             <label style={{ color: 'black' }}>Name:{details.name}</label><br />
//                                             <label style={{ color: 'black' }}>Phoneno:{details.phone}</label><br />
//                                             <label style={{ color: 'black' }}>Address:{details.address}</label>
                               
//                                         </div>
//                                         <div className="form-card">
//                                             <h2 className="fs-title">Destination Details</h2>

//                                             <label style={{ color: 'black' }}>Name:{details.name}</label><br />
//                                             <label style={{ color: 'black' }}>Phoneno:{details.phone}</label><br />
//                                             <label style={{ color: 'black' }}>Address:{details.address}</label>

//                                         </div>
//                                         <Link to="/destination"><button name="previous" className="btn btn-secondary">Previous</button></Link>
//                                         <Link to="/confirm"><button name="next" className="btn btn-primary">Submit</button></Link>
                                    
                                            
//                                             </fieldset>   
                                            
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Submit;