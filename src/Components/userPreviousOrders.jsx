import React, { useEffect, useState } from 'react';
import axios from "axios";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import "./userPreviousOrders.scss";
import logo from "./sk.png";
import { API_BASE_URL } from './api.jsx';
import { useNavigate } from "react-router-dom";

const Orderss = () => {
  const track1 = useNavigate();
  const [fullinfo, setFullinfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    // axios.get(`${API_BASE_URL}/user_order_info/`
    axios.get("http://ec2-65-2-83-93.ap-south-1.compute.amazonaws.com:8001/user_order_info/"
    , {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then((response) => {
        setFullinfo(response.data.message.reverse());
      });
  }, []);

  const track = (k) => {
    let a = [...fullinfo];
    let b = a[k].order_id;
    sessionStorage.setItem("TRACKID", b);
    track1("/tracking");
    console.log(b);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = fullinfo.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const customStyles = {
    cells: {
      style: {
        padding: "10px",
      },
    },
    headCells: {
      style: {
        backgroundColor: "#f8f8f8",
      },
    },
  };

  const totalPages = Math.ceil(fullinfo.length / itemsPerPage);
  const pageNumbers = [];
  const maxPageNumbers = 5;

  if (totalPages <= maxPageNumbers) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    const leftDotIndex = Math.max(currentPage - 2, 1);
    const rightDotIndex = Math.min(currentPage + 2, totalPages);

    if (currentPage <= maxPageNumbers - 2) {
      for (let i = 1; i <= maxPageNumbers - 1; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push("...");
      pageNumbers.push(totalPages);
    } else if (currentPage >= totalPages - maxPageNumbers + 3) {
      pageNumbers.push(1);
      pageNumbers.push("...");
      for (let i = totalPages - maxPageNumbers + 2; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      pageNumbers.push("...");
      for (let i = leftDotIndex; i <= rightDotIndex; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push("...");
      pageNumbers.push(totalPages);
    }
  }

  return (
    <>
      <nav className="fixed-nav-bar">
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <a className="navbar-brand" href="#"><img src={logo} alt="qwe" width="95" height="30" /> </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                {/* <a className="hi nav-link" to={Link} href="/previous" ><p className="qb"><span style={{ color: "black" }}>previous</span></p></a> */}
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" to={Link} href="/agent"><p><span style={{ color: "black" }}>Agent Registration</span></p></a> */}
              </li>
            </ul>
          </div>
        </nav>
      </nav>

      <div className='bgj'>
        <div>
          <div>
            <table className='table order-table'>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Order ID</th>
                  <th>Order-type</th>
                  <th>Source Address</th>
                  <th>Deliver to</th>
                  <th>Destination Address</th>
                  <th>OrderStatus</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((orderInfo, k) => {
                  return (
                    <tr key={k}>
                      <td>{orderInfo?.date_info}</td>
                      <td>{orderInfo?.order_id}</td>
                      <td>{orderInfo?.order_type}</td>
                      <td>{orderInfo?.source_info?.address}</td>
                      <td>{orderInfo?.Destination_info?.name}</td>
                      <td>{orderInfo?.Destination_info?.address}</td>
                      <td>
                        {/* {orderInfo?.Your_order_status} */}
                        <button type="submit" onClick={() => track(k)}>
                          TRACK
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* Pagination */}
            <div className="pagination" style={{ display: "flex", justifyContent: "center" }}>
              {pageNumbers.map((pageNumber, index) => {
                if (pageNumber === "...") {
                  return <span key={index} className="pagination-item dots">...</span>;
                }

                return (
                  <button
                    key={index}
                    className={`pagination-item ${currentPage === pageNumber ? "active" : ""}`}
                    onClick={() => paginate(pageNumber)}
                    style={{ margin: "0 5px" }}
                  >
                    {/* {pageNumber} */}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orderss;

















