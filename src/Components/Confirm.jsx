import { Link } from "react-router-dom";
import NavwithIcon from "./NavwithIcon";
const Confirm = () => {
    return (
        <>
            <NavwithIcon />
            <div className="container-fluid" id="grad1" style={{ position: "fixed" }}>
            <div className="row m-auto w-100 mt-5 ">
                <div className="col-md-12 w-75 m-auto text-center p-0 mt-4 mb-2">
                    <div className="card w-100">
                            <h2>Confirm!</h2>
                            <div className="row">
                                <div className="col-md-12 mx-0">
                                    <form id="msform">
                                        <ul id="progressbar">
                                            <li className="active" id="source"><strong>Source</strong></li>
                                            <li className="active" id="destination"  ><strong>Destination</strong></li>
                                            <li className="active" id="submit" ><strong>Details</strong></li>
                                            <li className="active" id="confirm" ><strong>Confirm</strong></li>
                                        </ul>
                                        <fieldset>
                                            <div className="form-card" >
                                                {/* <h2 className="fs-title text-center">Confirmation!</h2> */}
                                                {/* <br></br> */}
                                                <div className="row justify-content-center">
                                                    {/* <div className="col-3">
                                                        <img src="https://img.icons8.com/color/96/000000/ok--v2.png" class="fit-image" />
                                                    </div> */}
                                                </div>
                                                <br></br>
                                                <div className="row justify-content-center">
                                                    <div className=" fs-title col-7 text-center">
                                                        <h4>Do you want to confirm this order?</h4>
                                                        <br></br>
                                                    </div>

                                                    <div className="div"
                                                    >
                                                        <div class="tom">

                                                            <Link to="/source">

                                                                <button className="btn btn-danger" id="sand1" type="submit">
                                                                    No
                                                                </button>
                                                            </Link>
                                                            <Link to="/orderConfirm">

                                                                <button className="btn btn-primary" id="sand1" type="submit">
                                                                    Yes
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
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
    )
}
export default Confirm;