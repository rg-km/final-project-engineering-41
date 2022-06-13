import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import logoWhite from "../assets/headerFooter/Logo-White.png";

import "../styles/header.css";

export default function Header() {
	return (
		<>
			<Container fluid style={{ backgroundColor: "#13222C" }}>
				{/* NavBar */}
				<Navbar expand="lg">
					<Container className="mt-3">
						<div style={{ width: "30%" }}>
							<Navbar.Brand href="#home" width="30%">
								<img
									src={logoWhite}
									alt="Logo img"
									width="180"
									height="auto"
									className="d-inline-block align-top"></img>
							</Navbar.Brand>
						</div>
						<div>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="text-end">
									<Nav.Link
										href="#"
										className="px-3"
										style={{ color: "white" }}>
										Home
									</Nav.Link>
									<Nav.Link
										href="#"
										className="px-3"
										style={{ color: "white" }}>
										Course
									</Nav.Link>
									<Nav.Link
										href="#"
										className="px-3"
										style={{ color: "white" }}>
										About Us
									</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</div>
						{/* kalo login berubah */}
						<div className="text-end" style={{ width: "30%" }}>
							<button className="btn-Header ">Log In</button>
						</div>
					</Container>
				</Navbar>
			</Container>
		</>
	);
}
