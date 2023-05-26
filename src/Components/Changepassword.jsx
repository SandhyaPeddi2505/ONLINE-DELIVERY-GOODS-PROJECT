import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import abc from "./online.png";
import axios from "axios";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Changepassword = () => {
  const [passwords, setPasswords] = useState({
    email: "",
    password: "",
    newpassword: ""
  });

  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const handleChangePassword = (event) => {
    event.preventDefault();
    const validationErrors = validate(passwords);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

   

    axios
      .post(
        "http://ec2-13-235-76-28.ap-south-1.compute.amazonaws.com:8001/changepassword",
        passwords
      )
      .then((response) => {
        if (response?.status === 200) {
          toast.success("Password changed successfully");
          navigate("/");
          console.log(response?.status);
        }
        // handle success
      })
      .catch((error) => {
        console.log(error.response.data);
        // handle error
      });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email || !values.password || !values.newpassword) {
      toast.error("Enter  all fields");
    }
    if (!values.email) {
      errors.email = "User Name is required";
    }

    if (!values.password) {
      errors.password = "Current password is required";
    }

    if (!values.newpassword) {
      errors.newpassword = "New password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
        values.newpassword
      )
    ) {
      errors.newpassword =
        "Password must contain capital,small,numeric,special characters";
    } else if (values.newpassword.length < 8) {
      errors.newpassword = "New password must be at least 8 characters long";
    }

    if (!values.confirmNewPassword) {
      errors.confirmNewPassword = "Confirm new password is required";
    } else if (values.newpassword !== values.confirmNewPassword) {
      errors.confirmNewPassword =
        "New password and confirm new password must match";
    }

    return errors;
  };

  return (
    <>
      <Navbar />
      <div className="d-grid">
        <div className="vv">
          <div className="flex m-auto pt-5">
            <div className="yz">
              <img src={abc} height="500" width="500" alt="del" />
            </div>
            <div class="ab">
              <h1>Change password ?</h1>
              <form onSubmit={handleChangePassword}>
                <div className="mb-1" id="formBasicPassword">
                  <label htmlFor="Username">
                    <p
                      style={{
                        fontSize: 16,
                        color: "black",
                        paddingTop: 5,
                        alignItems: "center"
                      }}
                    >
                      Email
                    </p>
                  </label>
                  <input
                    type="email"
                    id="username"
                    value={passwords.email}
                    onChange={(event) =>
                      setPasswords({ ...passwords, email: event.target.value })
                    }
                    className="form-control"
                    placeholder=" Enter email"
                    // required
                  />
                  {errors.email && (
                    <span style={{ color: "red" }}>{errors.email}</span>
                  )}
                </div>
                <div className="cd">
                  <div className="mb-1" id="formBasicPassword">
                    <label htmlFor="old-password">
                      <p
                        style={{
                          fontSize: 16,
                          color: "black",
                          paddingTop: 5,
                          alignItems: "center"
                        }}
                      >
                        Old Password
                      </p>
                    </label>
                    <input
                      type="password"
                      id="old-password"
                      value={passwords.password}
                      onChange={(event) =>
                        setPasswords({
                          ...passwords,
                          password: event.target.value
                        })
                      }
                      className="form-control"
                      placeholder="Old Password"
                      // required
                    />
                    {errors.password && (
                      <span style={{ color: "red" }}>{errors.password}</span>
                    )}
                  </div>
                  <div className="mb-1" id="formBasicPassword">
                    <label htmlFor="new-password">
                      <p
                        style={{
                          fontSize: 16,
                          color: "black",
                          paddingTop: 5,
                          alignItems: "center"
                        }}
                      >
                        New Password
                      </p>
                    </label>
                    <input
                      type="password"
                      id="new-password"
                      value={passwords.newpassword}
                      onChange={(event) =>
                        setPasswords({
                          ...passwords,
                          newpassword: event.target.value
                        })
                      }
                      className="form-control"
                      placeholder="New Password"
                      // required
                    />
                    {errors.newpassword && (
                      <span style={{ color: "red" }}>{errors.newpassword}</span>
                    )}
                  </div>
                  <div className="mb-1" id="formBasicPassword">
                    <label htmlFor="confirm-new-password">
                      <p
                        style={{
                          fontSize: 16,
                          color: "black",
                          paddingTop: 5,
                          alignItems: "center"
                        }}
                      >
                        Confirm New Password
                      </p>
                    </label>
                    <input
                      type="password"
                      id="confirm-new-password"
                      value={passwords.confirmNewPassword}
                      onChange={(event) =>
                        setPasswords({
                          ...passwords,
                          confirmNewPassword: event.target.value
                        })
                      }
                      className="form-control"
                      placeholder="Confirm New Password"
                      // required
                    />
                    {errors.confirmNewPassword && (
                      <span style={{ color: "red" }}>
                        {errors.confirmNewPassword}
                      </span>
                    )}
                  </div>
                  <div className="mb-1">
                    <button
                      type="submit"
                      style={{ marginTop:30,width:110 }}
                      className="btn btn-primary"
                    >
                      Confirm
                    </button>
                  </div>
                  <ToastContainer />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Changepassword;
