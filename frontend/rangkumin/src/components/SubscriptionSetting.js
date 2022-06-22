import React from "react";
import { Container, Form ,Button, Row, Col, Card, Table} from "react-bootstrap";
import profilePicture from "../assets/settings/profilePicture.png";
import vector3d from "../assets/settings/3dassets.png";
import UserSetting from "./user/subsSetting.js";
import "../styles/settings.css"

export default function SubscriptionSettings () {
    return (
        <Container>
        <UserSetting />
        <h2 style={{fontWeight: "bold"}} className="mt-4" >Subscription Info</h2>
        <h5 style={{color: "gray", marginBottom: "4%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h5>
        <Row xs={1} md={2} className="g-4 d-flex justify-content-center">
        <Card style={{margin: "20px",backgroundColor: "rgba(245, 81, 57, 0.12)",borderColor: "#F55139", width: "45%", marginBottom: "40px"}} className="mt-4">
        <Card.Body>
            <Card.Title style={{fontWeight: "bold"}}>Basic</Card.Title>
            <Card.Title style={{fontWeight: "bold"}}>Rp. 6.000 / month</Card.Title>
            <Card.Text style={{color: "gray"}}>
            23 days Remaining
            </Card.Text>
            <Button style={{backgroundColor: "transparent", borderColor: "#F55139", borderRadius: "5px", color: "#F55139"}} className= "mt-2 mb-2" variant="primary" type="submit">Cancel Subscription</Button>
        </Card.Body>
        </Card>
        <Card style={{margin: "20px",backgroundColor: "#F55139",borderColor: "#F55139", width: "45%", marginBottom: "40px"}} className="mt-4">
        <Card.Body>
            <Card.Title style={{fontWeight: "bold", color: "white"}}>Premium</Card.Title>
            <Card.Title style={{fontWeight: "bold", color: "white"}}>Rp. 12.000 / month</Card.Title>
            <Card.Text style={{color: "white"}}>
            23 days Remaining
            </Card.Text>
            <Button style={{backgroundColor: "white", borderColor: "#F55139", borderRadius: "5px", color: "#F55139"}} className= "mt-2 mb-2" variant="primary" type="submit">Upgrade Now</Button>
        </Card.Body>
        </Card>
        </Row>
        <hr></hr>
        <h2 style={{fontWeight: "bold"}} className="mt-4 mb-4" >Payment History</h2>
        <Table>
      <thead style={{backgroundColor: "#F5F5F5"}}>
        <tr>
          <th >Date</th>
          <th>Details</th>
          <th>Amount</th>
          <th>Download</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>6/12/2022</td>
          <td>Regular Plan</td>
          <td>Rp. 6000</td>
          <td><a style={{textDecoration: "none", color: "#F55139"}} href="#">Invoice 12 July</a></td>
        </tr>
        <tr>
          <td>6/12/2022</td>
          <td>Regular Plan</td>
          <td>Rp. 6000</td>
          <td><a style={{textDecoration: "none", color: "#F55139"}} href="#">Invoice 12 July</a></td>
        </tr>
        <tr>
          <td>6/12/2022</td>
          <td>Regular Plan</td>
          <td>Rp. 6000</td>
          <td><a style={{textDecoration: "none", color: "#F55139"}} href="#">Invoice 12 July</a></td>
        </tr>
      </tbody>
    </Table>
        </Container>
    )
}