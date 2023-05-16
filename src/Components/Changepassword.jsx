import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import abc from './online.png';
import axios from "axios";
import Navbar from './Navbar';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Changepassword = () => {
  const [passwords, setPasswords] = useState({
    email: '',
    password: '',
    newpassword: ''
  });

  const [errors, setErrors] = useState("")
  const navigate = useNavigate();
  const handleChangePassword = (event) => {
    event.preventDefault();
    const validationErrors = validate(passwords);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }


    const payload = {
      'email': '',
      'password': '',
      'newpassword': ''
    };

    axios.post('http://ec2-13-233-151-187.ap-south-1.compute.amazonaws.com:8001/changepassword', passwords, payload)
      .then(response => {
        if (response?.status === 200) {
          toast.success("Password Changed successfully");
          navigate('/');
          console.log(response?.status);
        }
        // handle success
      })
      .catch(error => {
        console.log(error.response.data);
        // handle error
      });

  };

  const validate = (values) => {
    const errors = {};

    if (!values.email || !values.password || !values.newpassword || !values.confirmNewPassword) {
      toast.error(" All fields are required");
    }

    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(values.newpassword)) {
      toast.error('Password must contain capital,small,numeric,special characters')

    }

    else if (values.newpassword !== values.confirmNewPassword) {
      errors.confirmNewPassword = 'New password and confirm new password must match';
    }

    return errors;

  };


  return (
    <>
      <Navbar />
      <div>
        <div className="vv">
          <div className="flex">
            <div className="yz">
              <img src={abc} height="500" width="500" alt="del" />
            </div>
            <div class="ab">
              <h1>Change password ?</h1>
              <form onSubmit={handleChangePassword}>
                <div className="m-2" id="formBasicPassword">
                  <label htmlFor="Username">
                    <p style={{ fontSize: 16, color: 'black', paddingTop: 5, alignItems: 'center' }}>Email</p></label>
                  <input type="email" id="username" value={passwords.email} onChange={(event) => setPasswords({ ...passwords, email: event.target.value })} className="form-control" placeholder=" Enter email" />
                  {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </div>
                <div className="cd">
                  <div className="m-2" id="formBasicPassword">
                    <label htmlFor="old-password">
                      <p style={{ fontSize: 16, color: 'black', paddingTop: 5, alignItems: 'center' }}>Old Password</p></label>
                    <input type="password" id="old-password" value={passwords.password} onChange={(event) => setPasswords({ ...passwords, password: event.target.value })} className="form-control" placeholder="Old Password" />
                    {errors.assword && <span style={{ color: 'red' }}>{errors.password}</span>}
                  </div>
                  <div className="m-2" id="formBasicPassword">
                    <label htmlFor="new-password">
                      <p style={{ fontSize: 16, color: 'black', paddingTop: 5, alignItems: 'center' }}>New Password</p></label>
                    <input type="password" id="new-password" value={passwords.newpassword} onChange={(event) => setPasswords({ ...passwords, newpassword: event.target.value })} className="form-control" placeholder="New Password" />
                    {errors.newPassword && <span style={{ color: 'red' }}>{errors.newpassword}</span>}
                  </div>
                  <div className="m-2" id="formBasicPassword">
                    <label htmlFor="confirm-new-password">
                      <p style={{ fontSize: 16, color: 'black', paddingTop: 5, alignItems: 'center' }}>Confirm New Password</p>
                    </label>
                    <input type="password" id="confirm-new-password" value={passwords.confirmNewPassword} onChange={(event) => setPasswords({ ...passwords, confirmNewPassword: event.target.value })} className="form-control" placeholder="Confirm New Password" />
                    {errors.confirmNewPassword && <span style={{ color: 'red' }}>{errors.confirmNewPassword}</span>}
                  </div>
                  <div className="m-2">
                    <button type="submit" style={{ width: 380 }} className="btn btn-primary">Confirm</button>
                  </div>
                  <ToastContainer />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};
export default Changepassword;