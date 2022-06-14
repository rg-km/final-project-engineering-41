import React, { Component } from "react";
import { Card, InputGroup, Form, Button } from "react-bootstrap";
import headForgot from "../assets/forgotPass/headForgot.png";
import mailForgot from "../assets/forgotPass/mail.svg";

export default class ForgotPass extends Component {
    render(){
        return(
            <div className="bg-forgot">
                <Card style={{ width: '20rem', borderRadius: "10px"}}>
                <Card.Body>
                    <Card.Title><img style={{width: "250px", marginLeft: "20px"}} src={headForgot}></img></Card.Title>
                </Card.Body>
                <InputGroup style={{padding: 20, marginTop: "-10px"}} className="mb-1">
                    <InputGroup.Text style={{backgroundColor: "white"}} id="basic-addon1"><img src={mailForgot}></img></InputGroup.Text>
                    <Form.Control
                    placeholder="Enter your email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Button style={{backgroundColor: "#FF725E", border: "none", color: "white", fontWeight: "bold", margin: "50px", marginTop: "-5px"}} size='xl' type="email" className="mb-3">
                     Confirm Email             
                </Button>
                </Card>
            </div>
        )
    }
}