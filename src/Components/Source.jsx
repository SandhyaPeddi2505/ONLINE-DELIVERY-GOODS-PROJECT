import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Source = ({ onNextClick, deliveryData }) => {
    const [dataa, setDataa] = useState([]);
    const [details, setDetails] = useState({
        name: "",
        address: "",
        phone: "",
        formErrors: {
            name: "",
            address: "",
            phone: ""
        }
    });

    useEffect(() => {
        axios
            .get("http://localhost:3000/posts")
            .then((response) => {
                setDataa(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        console.log(deliveryData, "dfdf");
        if (deliveryData && !deliveryData.Source.isPrimary) {
            setDetails({
                ...details,
                name: deliveryData.Source.name,
                address: deliveryData.Source.address,
                phone: deliveryData.Source.phone
            });
        }
    }, []);
    const changeHandle = (e) => {
        const { name, value } = e.target;
        let formErrors = details.formErrors;
        switch (name) {
            case "name":
                formErrors.name =
                    value.length < 3 ? "minimum 3 characters required" : "";
                break;
            case "address":
                formErrors.address =
                    value.length < 10 ? "minimum 10 characters required" : "";
                break;
            case "phone":
                formErrors.phone =
                    value.length < 10
                        ? "minimum 10 digits required"
                        : value.length > 10
                            ? "maximum 10 digits allowed"
                            : "";
                break;
            default:
                break;
        }
        setDetails({ ...details, [name]: value, formErrors });
    };
    const [primaryAddress, setPrimaryAddress] = useState({
        name2: "Sandhya",
        address2: "Hyderabad",
        phone2: "9087898078"
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(deliveryData);

        if (
            details.formErrors.name === "" &&
            details.formErrors.address === "" &&
            details.formErrors.phone === ""
        ) {
            console.log(details);
        } else {
            alert("Form has errors!");
        }
    };
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
                [e.target.name]: e.target.value
            });
        } else {
            if (e.target.name === "address") {
                //from 38 line to 43 line code added
                setPrimaryAddress({
                    ...primaryAddress,
                    address: e.target.value
                });
            }
            setSecondaryAddress({
                ...secondaryAddress,
                [e.target.name1]: e.target.value
            });
        }
    };
    const handleAddressTypeChange = (e) => {
        setIsPrimary(e.target.value === "primary");
    };
    const handleCancel = (e) => {
        e.preventDefault();
        window.location.reload();
    };

    return (
        <>
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
                                                <li class="active" id="source">
                                                    <strong>Source</strong>
                                                </li>
                                                <li id="destination">
                                                    <strong>Destination</strong>
                                                </li>
                                                <li id="submit">
                                                    <strong>Submit</strong>
                                                </li>
                                                <li id="confirm">
                                                    <strong>Confirm</strong>
                                                </li>
                                            </ul>
                                        </div>
                                        <fieldset>
                                            <div
                                                className="form-card"
                                                style={{ direction: "flex", flexDirection: "row" }}
                                            >
                                                <div className="col  mx-5">
                                                    <label
                                                        style={{
                                                            color: "black",
                                                            position: "relative",
                                                            padding: "20px"
                                                        }}
                                                    >
                                                        Primary
                                                        <input
                                                            type="radio"
                                                            name="addressType"
                                                            value="primary"
                                                            checked={isPrimary}
                                                            onChange={handleAddressTypeChange}
                                                        />
                                                    </label>
                                                    <label
                                                        style={{ color: "black", padding: "20px" }}
                                                        className="label"
                                                    >
                                                        Secondary
                                                        <input
                                                            type="radio"
                                                            name="addressType"
                                                            className="mr"
                                                            value="secondary"
                                                            checked={!isPrimary}
                                                            onChange={handleAddressTypeChange}
                                                        />
                                                    </label>
                                                </div>
                                                {isPrimary ? (
                                                    <div className="row">
                                                        {dataa.map((value, i) => {
                                                            // console.log(value,"one")
                                                            return (
                                                                <>
                                                                    <div className="col-md-4">
                                                                        <div className="form-outline">
                                                                            <label style={{ color: "black" }}>
                                                                                <b>Name:</b>
                                                                                <input
                                                                                    type="text"
                                                                                    name="name"
                                                                                    value={value.name}
                                                                                    placeholder="Name"
                                                                                    onChange={handleChange}
                                                                                />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 md-4">
                                                                        <div className="form-outline">
                                                                            <label style={{ color: "black" }}>
                                                                                <b>Address:</b>
                                                                                <input
                                                                                    type="text"
                                                                                    name="address"
                                                                                    value={value.address}
                                                                                    placeholder="Address"
                                                                                    onChange={handleChange}
                                                                                />
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <label style={{ color: "black" }}>
                                                                        <b>Phone:</b>
                                                                        <input
                                                                            type="tel"
                                                                            name="phone"
                                                                            value={value.phone}
                                                                            placeholder="PhoneNo"
                                                                            onChange={handleChange}
                                                                        />
                                                                    </label>
                                                                </>
                                                            );
                                                        })}
                                                    </div>
                                                ) : (
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <label style={{ color: "black" }}>
                                                                <b>Name:</b>
                                                                <input
                                                                    type="text"
                                                                    name="name"
                                                                    value={details.name}
                                                                    className={
                                                                        details.formErrors.name.length > 0
                                                                            ? "error"
                                                                            : null
                                                                    }
                                                                    onChange={changeHandle}
                                                                />{" "}
                                                                {details.formErrors.name.length > 0 && (
                                                                    <span
                                                                        style={{ color: "red" }}
                                                                        className="errorMessage"
                                                                    >
                                                                        {details.formErrors.name}
                                                                    </span>
                                                                )}
                                                            </label>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label style={{ color: "black" }}>
                                                                <b>Address:</b>
                                                                <input
                                                                    className={
                                                                        details.formErrors.address.length > 0
                                                                            ? "error"
                                                                            : null
                                                                    }
                                                                    type="text"
                                                                    name="address"
                                                                    value={details.address}
                                                                    onChange={changeHandle}
                                                                />
                                                                {details.formErrors.address.length > 0 && (
                                                                    <span
                                                                        style={{ color: "red" }}
                                                                        className="errorMessage"
                                                                    >
                                                                        {details.formErrors.address}
                                                                    </span>
                                                                )}
                                                            </label>
                                                        </div>
                                                        <label style={{ color: "black" }}>
                                                            <b>Phone:</b>
                                                            <input
                                                                className={
                                                                    details.formErrors.phone.length > 0
                                                                        ? "error"
                                                                        : null
                                                                }
                                                                type="text"
                                                                name="phone"
                                                                value={details.phone}
                                                                onChange={changeHandle}
                                                            />
                                                            {details.formErrors.phone.length > 0 && (
                                                                <span
                                                                    style={{ color: "red" }}
                                                                    className="errorMessage"
                                                                >
                                                                    {details.formErrors.phone}
                                                                </span>
                                                            )}
                                                        </label>
                                                    </div>
                                                )}
                                            </div>
                                            <div></div>

                                            <button
                                                type="button"
                                                onClick={handleCancel}
                                                className="btn btn-secondary"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                name="button"
                                                value="submit"
                                                className="btn btn-primary"
                                                onClick={() => {
                                                    onNextClick(
                                                        isPrimary
                                                            ? { isPrimary: true, ...dataa[0] }
                                                            : { isPrimary: false, ...details }
                                                    );
                                                }}
                                            >
                                                Next
                                            </button>
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
