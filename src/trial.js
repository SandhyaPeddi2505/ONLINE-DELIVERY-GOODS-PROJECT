// can you show us a neat example with clear code of reactjs using functional compoennts of "agent side order dashboard page" also add css and bootstrap

import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Card, Table } from "react-bootstrap";

const AgentSideOrderDashboardPage = () => {
  return (
    <div className="container">
      <Row className="mb-3">
        <Col>
          <Link to="/agent/order/create">
            <Button variant="primary">Create Order</Button>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Order ID</th>
                    <th>Customer Name</th>
                    <th>Order Date</th>
                    <th>Total Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>102030</td>
                    <td>John Doe</td>
                    <td>17/04/2020</td>
                    <td>$500</td>
                    <td>paid</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>302045</td>
                    <td>Jane Doe</td>
                    <td>20/04/2020</td>
                    <td>$250</td>
                    <td>unpaid</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AgentSideOrderDashboardPage;
