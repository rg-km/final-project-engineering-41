import React, { Component } from "react";
import { Card, InputGroup, Form, Button, Alert } from "react-bootstrap";
import headReset from "../assets/forgotPass/headReset.png";
import lockForgot from "../assets/forgotPass/lock.svg";
import { useState } from "react";
import '../styles/forgotPage.css'

function ResetPass() {
    const [show, setShow] = useState(false);

        return(
            <div className="bg-forgot">
                {!show && <Card style={{ width: '20rem', borderRadius: "10px"}}>
                <Card.Body>
                    <Card.Title><img style={{width: "250px"}} src={headReset}></img></Card.Title>
                </Card.Body>
                <InputGroup style={{padding: 20, marginTop: "-20px"}} className="mb-1">
                    <InputGroup.Text style={{backgroundColor: "white"}} id="basic-addon1"><img src={lockForgot}></img></InputGroup.Text>
                    <Form.Control
                    placeholder="Enter your password"
                    type="password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup style={{padding: 20, marginTop: "-20px"}} className="mb-1">
                    <InputGroup.Text style={{backgroundColor: "white"}} id="basic-addon1"><img src={lockForgot}></img></InputGroup.Text>
                    <Form.Control
                    placeholder="Confirm your password"
                    type="password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    />
                    <Form.Text className="mb-3" style={{fontSize: "10px"}} id="passwordHelpBlock" muted>
                    *Nullam aliquet condimentum mattis. Mauris purus turpis, volutpat ut magna in, tempor bibendum justo.
                    </Form.Text>
                </InputGroup>
                <Button onClick={() => setShow(true)} style={{backgroundColor: "#FF725E", border: "none", color: "white", fontWeight: "bold", margin: "50px", marginTop: "-5px"}} size='xl' type="email" className="mb-3">
                     Confirm Password            
                </Button>
                </Card>}
                <Alert show={show} style={{backgroundColor: "white", color: "black", borderRadius: "15px"}}>
                    <Alert.Heading style={{fontWeight: "bold", marginTop: "10px"}}>Reset Password Berhasil</Alert.Heading>
                    <div className="d-flex justify-content-end">
                    <Button style={{backgroundColor: "#FF725E", color: "white", borderColor: "#FF725E", borderRadius: "15px", marginTop: "10px"}} onClick={() => setShow(false)}>
                        Tutup
                    </Button>
                    </div>
                </Alert>
            </div>
        )
}

export default ResetPass;