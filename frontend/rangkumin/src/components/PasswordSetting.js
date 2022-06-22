import React from "react";
import { Container, Form ,Button, Row, Col} from "react-bootstrap";
import profilePicture from "../assets/settings/profilePicture.png";
import vector3d from "../assets/settings/3dassets.png";
import UserSetting from "./user/passwordSetting.js";
import "../styles/settings.css"

export default function PasswordSettings () {
    return (
        <Container>
        <UserSetting />
        <h2 style={{fontWeight: "bold"}} className="mt-4" >Password Setting</h2>
        <h5 style={{color: "gray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h5>
        <Form style={{marginTop: "50px"}}>
        <Form.Group style={{width: "50%"}} className="mb-5" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control style={{width: "90%",backgroundColor: "#FFA79A"}} type="email" placeholder="vialistiii30@gmail.com" />
            <Button className="mt-3" style={{backgroundColor: "white", borderColor: "#F55139", borderRadius: "5px", color: "#F55139"}}>Change Email</Button>
        </Form.Group>
        <Form.Group style={{width: "50%"}} className="mb-5" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control  style={{width: "90%"}} type="password" placeholder="************" />
            <Button className="mt-3" style={{backgroundColor: "white", borderColor: "#F55139", borderRadius: "5px", color: "#F55139"}}>Change Password</Button>
        </Form.Group>
        </Form>
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