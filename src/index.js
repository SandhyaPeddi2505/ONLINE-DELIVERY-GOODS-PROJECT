import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Components/Layout";
import Confirm from "./Components/Confirm";
import Order from "./Components/Items";
import "./Components/Styles.scss";
import "./Components/OrderConfirm";
import "./Components/OrderConfirm.scss";
import "./styles.scss";
import Primary from "./Components/Primary";
import "./Style.scss";
import Agent from "./Components/Agent";
import "bootstrap/dist/css/bootstrap.css";
import NavwithIcon from "./Components/NavwithIcon";
import HomeNew from "./Components/HomeNew";
import Home from "./Components/Home";
import Previous from "./Components/Previous";
import Agentdash from "./Components/Agentdash";
import Confirmscreen from "./Components/Confirmscreen";
import StepperWrapper from "./Components/StepperWrapper";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import "./Login.scss";
import "./Signup.scss";
import VerticalStepper from "./Components/Tracking";
import "./OTP.scss";
import "./Changepassword.scss";
import Orderss from "./Components/userPreviousOrders";
import "./Forgotpassword.scss";
import CreateProfile from "./Components/CreateProfile";
// import Logout from "./Components/Logout"
import "./Profile.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import OTP from "./Components/OTP";
import Changepassword from "./Components/Changepassword";
import Profile from "./Components/Profile";
import Forgotpassword from "./Components/Forgotpassword";
import reportWebVitals from "./reportWebVitals";
import OrderDetails from "./Components/OrderConfirm";
import Agentlogin from "./Components/Agentlogin";
import Acceptscreen from "./Components/Acceptscreen";

import Rejectscreen from "./Components/Rejectscreen";





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/createProfile"
          element={
            <ProtectedRoute>
              <CreateProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomeNew />
            </ProtectedRoute>
          }
        />

        <Route
          path="/citySelection"
          element={
            <ProtectedRoute>
              <Primary />
            </ProtectedRoute>
          }
        />
        <Route
          path="/items"
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />

        <Route
          path="/source"
          element={
            <ProtectedRoute>
              <StepperWrapper />
            </ProtectedRoute>
          }
        />

        <Route
          path="/confirm"
          element={
            <ProtectedRoute>
              <Confirm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/OrderConfirm"
          element={
            <ProtectedRoute>
              <OrderDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tracking"
          element={
            <ProtectedRoute>
              <VerticalStepper />
            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/agentdash"
          element={
            <ProtectedRoute>
<Agentdash />
            </ProtectedRoute>
          }
        /> */}

        <Route
          path="/previous"
          element={
            <ProtectedRoute>
              <Previous />
            </ProtectedRoute>
          }
        />

        <Route
          path="/OTP"
          element={
            <ProtectedRoute>
              <OTP />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userprevorders"
          element={
            <ProtectedRoute>
              <Orderss />
            </ProtectedRoute>
          }
        />

        <Route
          path="changepassword"
          element={
            <ProtectedRoute>
              <Changepassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/forgotpassword"
          element={
            <ProtectedRoute>
              <Forgotpassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/forgotpassword"
          element={
            <ProtectedRoute>
              <Rejectscreen />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/confirmScreen"
          element={
            <ProtectedRoute>
              <Confirmscreen />
            </ProtectedRoute>
          }
        /> */}
        {/* <Route
          path="/agentdash"
          element={
            <ProtectedRoute>
              <Agentdash/>
            </ProtectedRoute>
          }
        /><Route
        path="/confirmScreen"
        element={
          <ProtectedRoute>
            <Rejectscreen />
          </ProtectedRoute>
        }
      /> */}

        <Route path="*" element={<div>Page Not Found!!</div>} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/NavwithIcon" element={<NavwithIcon />} />
        <Route path="/t" element={<Layout />} />

        {/* <Route path="/createProfile" element={<CreateProfile />} />
        <Route path="/home" element={<HomeNew />} />
        <Route path="/citySelection" element={<Primary />} />
        <Route path="/items" element={<Order />} />
        <Route path="/source" element={<StepperWrapper />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/OrderConfirm" element={<OrderDetails />} />
        <Route path="/tracking" element={<VerticalStepper />} /> */}

        {/* Agent SIDE */}
        <Route path="/confirmscreen" element={<Confirmscreen />} />
        <Route path="/agentlogin" element={<Agentlogin />} />
        <Route path="/acceptscreen" element={<Acceptscreen />} />
        <Route path="/rejectscreen" element={<Rejectscreen />} />

        <Route path="/agentdash" element={<Agentdash />} />
        {/* <Route path="/previous" element={<Previous />} /> */}

        {/* ON HOLD */}
        {/* <Route path="/OTP" element={<OTP />} />
        <Route path="/changepassword" element={<Changepassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
