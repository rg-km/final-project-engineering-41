import React, { Component } from "react";
import { Card, InputGroup, Form, Button, Alert } from "react-bootstrap";
import headForgot from "../assets/forgotPass/headForgot.png";
import mailForgot from "../assets/forgotPass/mail.svg";
import { useState } from "react";
import '../styles/forgotPage.css'

export default function ForgotPass() {
        const [show, setShow] = useState(false);

        return(
            <div style={{alignItems: "center"}} className="bg-forgot">
                {!show && <Card style={{ width: '20rem', borderRadius: "10px"}}>
                <Card.Body>
                    <Card.Title><img style={{width: "250px", marginLeft: "20px"}} src={headForgot}></img></Card.Title>
                </Card.Body>
                <InputGroup style={{padding: 20, marginTop: "-10px"}} className="mb-1">
                    <InputGroup.Text style={{backgroundColor: "white"}} id="basic-addon1"><img style={{alignItems: "center"}} src={mailForgot}></img></InputGroup.Text>
                    <Form.Control
                    placeholder="Enter your email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                {!show && <Button onClick={() => setShow(true)} style={{backgroundColor: "#FF725E", border: "none", color: "white", fontWeight: "bold", margin: "50px", marginTop: "-5px"}} size='xl' type="email" className="mb-3">
                     Confirm Email             
                </Button>}
                </Card>}
                <Alert show={show} style={{backgroundColor: "white", color: "black", borderRadius: "15px"}}>
                    <Alert.Heading style={{fontWeight: "bold"}}>Request Reset Password Berhasil</Alert.Heading>
                    <p>
                    Kami telah mengirimkan email ke alamat email anda.
                    </p>
                    <div className="d-flex justify-content-end">
                    <Button style={{backgroundColor: "#FF725E", color: "white", borderColor: "#FF725E", borderRadius: "15px"}} onClick={() => setShow(false)}>
                        Tutup
                    </Button>
                    </div>
                </Alert>
            </div>
        )
}

