import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
import DataTable from "react-data-table-component";
import styled from "styled-components";
import logo from "./nav-logo.png";
const Previous = () => {
    const items = [
        {
            DeliveryId: 1223311,
        CustomerName: "saikrishna",
        SourceAddress: "Radidurg",
        DestinationAddress: "Durgam cheruvu",
        Status: "Completed"
        },
        {
            DeliveryId: 1223312,
        CustomerName: "manoja",
        SourceAddress: "Radidurg",
        DestinationAddress: "Durgam cheruvu",
        Status: "Reject"
        },
        {
            DeliveryId: 1223313,
        CustomerName: "soumya",
        SourceAddress: "Radidurg",
        DestinationAddress: "Durgam cheruvu",
        Status: "Pending"
        },
        {
            DeliveryId: 1223314,
        CustomerName: "sandhya",
        SourceAddress: "Radidurg",
        DestinationAddress: "Durgam cheruvu",
        Status: "Completed"
        },
        {
            DeliveryId: 1223315,
        CustomerName: "Arun",
        SourceAddress: "Radidurg",
        DestinationAddress: "Durgam cheruvu",
        Status: "In-transist"
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
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#"><img src={logo} alt="qwe" height="35" width="60"/> <span style={{ color: 'white' }}>De<span style={{ color: 'red' }}>l</span>ivery</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    {/* <ul class="navbar-nav"> */}
      {/* <li class="nav-item active">
        <a as={Link} to="/agent">Home <span class="sr-only">(current)</span></a>
      </li> */}
      {/* <nav><Link to="/tracking">Tracking</Link></nav> */}
      {/* <li class="nav-item">
        <a class="nav-link" to={Link} href="/tracking" ><h5><span style={{color:"white"}}>Tracking</span></h5></a>
      </li> */}
      {/* <li class="nav-item">
        <div className="wer">
        <a class="nav-link" to={Link} href="/agent"><h5><span style={{color:"white"}}>Agent Registration</span></h5></a>
        </div>
      </li> */}
      
    {/* </ul> */}
  </div>
</nav>
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav> */}
            {/* <Navbar bg="dark" variant="secondary" className='justify-content-start'>
                <Navbar.Brand className="justify-content-end" href="#home">
                    <img src="https://image.similarpng.com/very-thumbnail/2020/06/Fast-delivery-logo-design-vector-PNG.png" alt="Sample Brand Logo" width="35" className='align-top d-inline-block' height="35" />
                    <span style={{ color: 'white' }}>De<span style={{ color: 'red' }}>l</span>ivery</span>
                </Navbar.Brand>
            </Navbar> */}
            <div className=''>

                <DataTable
                    // title="Covid-19 Stats"
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

        </>
    )
}
export default Previous;