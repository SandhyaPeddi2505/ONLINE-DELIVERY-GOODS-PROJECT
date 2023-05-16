import { Link } from "react-router-dom";
const Confirm = () => {
    return (
        <>
            <div className="container-fluid" id="grad1">
                <div className="row justify-content-center mt-0">
                    <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                        <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
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
                                            <div className="form-card">
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

                                                    <div className="div" style={{ paddingLeft: "150px" }}
                                                    >
                                                        <div class="tom">
                                                       
                                                        <Link to="/source">

<button className="btn btn-danger"  id="sand1"  type="submit"

>
    No
</button>
</Link>
<Link to="/orderConfirm">

<button className="btn btn-primary" id="sand1" type="submit"

>
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