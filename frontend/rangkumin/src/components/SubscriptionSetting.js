import React from "react";
import { Container, Form ,Button, Row, Col, Card} from "react-bootstrap";
import profilePicture from "../assets/settings/profilePicture.png";
import vector3d from "../assets/settings/3dassets.png";
import UserSetting from "./user/passwordSetting.js";
import "../styles/settings.css"

export default function SubscriptionSettings () {
    return (
        <Container>
        <UserSetting />
        <h2 style={{fontWeight: "bold"}} className="mt-4" >Personal Info</h2>
        <h5 style={{color: "gray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h5>
        <Card style={{borderColor: "#F55139", width: "45%"}} className="mt-4">
        <Card.Body>
            <Card.Title>Basic</Card.Title>
            <Card.Title>Rp. 6.000 / month</Card.Title>
            <Card.Text style={{color: "gray"}}>
            23 days Remaining
            </Card.Text>
            <Button style={{backgroundColor: "white", borderColor: "#F55139", borderRadius: "5px", color: "#F55139"}} className= "mt-2 mb-2" variant="primary" type="submit">Cancel Subscription</Button>
        </Card.Body>
        </Card>
        <hr></hr>
        <Form>
        <Row>
            <Col>
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" placeholder="*********" />
            </Col>
            <Col>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control className="mb-4" type="password" placeholder="*********" />
            </Col>
        </Row>
        <Form.Text disabled>*Donec iaculis varius nunc vitae porta. Vestibulum nec sem quis dolor convallis.</Form.Text>
        <Button style={{width: "20%",backgroundColor: "#F55139", borderStyle: "none", borderRadius: "5px", marginLeft: "80%"}} className= "mt-4 mb-2" variant="primary" type="submit">
           Update Password
        </Button>
        </Form>
        </Container>
    )
}