// import React, { useState } from "react";
// // import { Link } from 'react-dom';
// // import logo from "./nav-logo.png"
// import logo from "./sk.png";
// // import Navbar from 'react-bootstrap/Navbar';
// import aaa from "./websiteimg1.png";
// import { Link } from "react-router-dom";


// const Home = () => {
  
//   return (
//     <>
//       <nav class="fixed-nav-bar">
//         <nav class="navbar navbar-expand-lg navbar-dark ">
//           <a class="navbar-brand" href="#"><img src={logo} alt="qwe" width="95" height="30" /> </a>
//           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarNav">
//             <ul class="navbar-nav">
//               {/* <div className="">
//                 <li class="nav-item">
//                   <a class="hi nav-link" to={Link} href="/tracking" ><p className="qb"><span style={{ color: "black" }}>Tracking</span></p></a>
//                 </li>
//               </div> */}
//               <li class="nav-item">
//                 <div className="wer">
//                   <a class="nav-link" to={Link} href="/agent"><p><span style={{ color: "black" }}>Agent Registration</span></p></a>
                  


//                 </div>
//               </li>

//             </ul>
//           </div>
//         </nav>
//       </nav>





//       <div className="bgj">
//           <div className="row">
//             <div className="col-md-4">
//               <div className="r">
//                 <h1 className="heading1 mb-4">Fastest</h1>
//                 <h1 className="heading1 mb-4"><p></p><span style={{ color: 'red' }}>Delivery </span>&</h1>
//                 <h1 className="heading1 mb-3">Easy <span style={{ color: 'red' }}>Pickup.</span> </h1>
//                 <div>
//                   <p className="paragraph">We take care of order fulfillment collection,transport,<br />
//                     tracking and delivery of items.</p>
//                 </div>
//                 <div>
//                   <Link to="/login">
//                     <button className="custom-btn btn-7"><span>Login</span></button>
//                   </Link>

//                 </div>
//               </div>
//             </div>

//             <div className="col-md-2"></div>

//             <div className="col-md-6 mb-3">
//               <div className="flex">
//                 <img src={aaa} alt='dele' height="550" width="550" />
//               </div>
//             </div>
//           </div>
//       </div>

//     </>
//   )
// }
// export default Home;


import React, { useState } from "react";
// import { Link } from 'react-dom';
// import logo from "./nav-logo.png"
import logo from "./sk.png";
// import Navbar from 'react-bootstrap/Navbar';
// import aaa from "./websiteimg1.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav class="fixed-nav-bar">
        <nav class="navbar navbar-expand-lg navbar-dark ">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="qwe" width="95" height="30" />{" "}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {/* <div className="">
                <li class="nav-item">
                  <a class="hi nav-link" to={Link} href="/tracking" ><p className="qb"><span style={{ color: "black" }}>Tracking</span></p></a>
                </li>
              </div> */}
              <li class="nav-item">
                <div className="wer">
                  <a class="nav-link" to={Link} href="/agent">
                    <p>
                      <span style={{ color: "black" }}>Agent Registration</span>
                    </p>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </nav>

      <div className="bgj">
        <div className="row">
          <div className="col-md-4">
            <div className="r">
              <h1 className="heading1 mb-4">Fastest</h1>
              <h1 className="heading1 mb-4">
                <p></p>
                <span style={{ color: "red" }}>Delivery </span>&
              </h1>
              <h1 className="heading1 mb-3">
                Easy <span style={{ color: "red" }}>Pickup.</span>{" "}
              </h1>
              <div>
                <p className="paragraph">
                  We take care of order fulfillment collection,transport,
                  <br />
                  tracking and delivery of items.
                </p>
              </div>
              <div>
                <Link to="/login">
                  <button className="custom-btn btn-7">
                    <span>Login</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-2"></div>

          <div className="col-md-6 mb-3">
            <div className="r1">
              <img
                src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=740&t=st=1684738203~exp=1684738803~hmac=25f113a2efc5a58c76acb830f0443f929bc999b25d2cc72a40d0a6bfa96c2106"
                alt=""
                className="rotation"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="container28">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHyyyN1d0dHXq2pTfRe2qEBFcgp5t9_pbXA&usqp=CAU"
                  alt=""
                ></img>

                <p
                  style={{ fontSize: 16, color: "white", textAlign: "center" }}
                >
                  {" "}
                  <h4>Groceries</h4>
                </p>
                <p style={{ color: "black", textAlign: "center" }}>
                  {" "}
                  Multiple  customers that come through your
                  door like foodstuff and various household supplies
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="container29">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2io0sIsTaMjeyPOjbo54L8SxY-zvttaLhUcqXgzZTndroqIeUzyUO60kIhOCPjX_Syws&usqp=CAU"
                  alt=""
                ></img>

                <p
                  style={{ fontSize: 16, color: "white", textAlign: "center" }}
                >
                  {" "}
                  <h4>Gifts</h4>
                </p>
                <p style={{ color: "black", textAlign: "center" }}>
                  Gifts with best collection i.e,impressive selection of perfect
                  gifts can be delivered
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="container30">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6Id0olr1_tjwXeIe1WG5DJlu07Fq-rOq1_K89q6z762SeGY1W45Z9_9FRJ1kTfkNQgM&usqp=CAU"
                  alt=""
                ></img>

                <p
                  style={{ fontSize: 16, color: "white", textAlign: "center" }}
                >
                  {" "}
                  <h4>Electronics</h4>
                </p>
                <p style={{ color: "black", textAlign: "center" }}>
                  {" "}
                  Its simplify your life &save precious time & money
                  with customaizable gadgets ready for delivery
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="container31">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                ></img>

                <p
                  style={{ fontSize: 16, color: "white", textAlign: "center" }}
                >
                  {" "}
                  <h4>Documents</h4>
                </p>
                <p style={{ color: "black", textAlign: "center" }}>
                  {" "}
                  Its like records,forms,&certificates that provide information about item being
                  shippied
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
