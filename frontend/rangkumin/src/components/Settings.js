import React from "react";
import { Container, Card, CardGroup, Col, } from "react-bootstrap";
import profilePicture from "../assets/settings/profilePicture.png";
import "../styles/settings.css"

export default function Settings () {
    return (
        <Container>
        <h2 style={{fontWeight: "bold"}} className="mt-4" >Personal Info</h2>
        <h5 style={{color: "gray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h5>
        <h4 className="mt-5">Your Profile Picture</h4>
        <img style={{width: "154px"}} className="mt-4" src={profilePicture}></img>
        </Container>
    )
}