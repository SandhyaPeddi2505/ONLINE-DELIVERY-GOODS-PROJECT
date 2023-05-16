import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
import DataTable from "react-data-table-component";
import styled from "styled-components";
import "./userPreviousOrders.scss";
import logo from "./sk.png";
const Orderss = () => {
    const items = [
        {
            DeliveryId: 1223311,
        CustomerName: "saikrishna",
        SourceAddress: "Raidurg",
        DestinationAddress: "Durgam cheruvu",
        Status: "Completed"
        },
        {
            DeliveryId: 1223312,
        CustomerName: "manoja",
        SourceAddress: "Raidurg",
        DestinationAddress: "Durgam cheruvu",
        Status: "Completed"
        },
        {
            DeliveryId: 1223313,
        CustomerName: "sowmya",
        SourceAddress: "Raidurg",
        DestinationAddress: "Durgam cheruvu",
        Status: "Completed"
        },
        {
            DeliveryId: 1223314,
        CustomerName: "sandhya",
        SourceAddress: "Raidurg",
        DestinationAddress: "Durgam cheruvu",
        Status: "Completed"
        },
        {
            DeliveryId: 1223315,
        CustomerName: "Arun",
        SourceAddress: "Raidurg",
        DestinationAddress: "Durgam cheruvu",
        Status: "Completed"
        }];
        function getCssClass(Status) {
        if (Status === "Completed") return "high";
        if (Status === "Pending") return "small";
        else if (Status === "Reject") return "medium";
        return "low";
        }
    const StyledCell = styled.div`
  &.low {
    color: orange !important;
    font-size:20px;
    text-align: center;

    // width: 100%;
    // height: 100%;
  }
  &.medium {
    color: red;
    font-size:20px;
    text-align: center;

    // width: 100%;
    // height: 100%;
  }
  &.high {
    color: green !important;
    font-size:20px;
    text-align: center;

    // width: 100%;
    // height: 100%;
  }
  &.small {
    color: yellow;
    font-size:20px;
    text-align: center;
    // width: 100%;
    // height: 100%;
    border-radius: 5px;
  }
`;


    return (
        <>
        <nav class="fixed-nav-bar">
      <nav class="navbar navbar-expand-lg navbar-dark ">
        <a class="navbar-brand" href="#"><img src={logo} alt="qwe" width="95" height="30"  /> </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
           
            {/* <li class="nav-item"> */}
              {/* <a class="hi nav-link" to={Link} href="/previous" ><p className="qb"><span style={{ color: "black" }}>previous</span></p></a> */}
            {/* </li> */}
           
            <li class="nav-item">
              
                {/* <a class="nav-link" to={Link} href="/agent"><p><span style={{ color: "black" }}>Agent Registration</span></p></a> */}
              
            </li>

          </ul>
        </div>
      </nav>
      </nav>
            <div className='bgj'>
                <div className="pre-table">
                    <div className="blur">
                <DataTable
                    defaultSortAsc="false"
                    // responsive
                    // defaultSortAsc={false}
                    // striped
                    // highlightOnHover
                    data={items}
                    columns={[
                        {
                            name: "Number",
                            selector: (row, index) => index + 1,
                            disableSortBy: true
                        },
                        {
                            name: "DeliveryId",
                            selector: "DeliveryId",
                            sortable: true
                        },
                        {
                            name: "Customer Name",
                            selector: "CustomerName",
                            sortable: true
                        },
                        {
                            name: "Source Address",
                            selector: "SourceAddress",
                            sortable: true
                        },
                        {
                            name: "Destination Address",
                            selector: "DestinationAddress",
                            sortable: true
                        },
                        {
                            name: "Status",
                            selector: "Status",
                            sortable: true,
                            cell: (row) => (
                                <StyledCell className={getCssClass(row.Status)}>
                                    {row.Status}
                                </StyledCell>
                            )
                        }
                    ]}
                />
                </div>
                </div>
                
            </div>

        </>
    )
}
export default Orderss;