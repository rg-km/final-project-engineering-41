import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import LogoWhite from "../assets/headerFooter/Logo-White.png";

import Social1 from "../assets/headerFooter/Social-1.png";
import Social2 from "../assets/headerFooter/Social-2.png";
import Social3 from "../assets/headerFooter/Social-3.png";

import "../styles/footer.css";

export default function Footer() {
	return (
		<>
			<Container fluid style={{ backgroundColor: "#13222C" }}>
				<Container>
					<div className="text-center mt-5 py-5">
						<img
							src={LogoWhite}
							alt="Logo image"
							width="25%"
							height="auto"
							className="d-inline-block align-top"></img>
						<p className="footer-Text fw-400 mt-3">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt.
						</p>
						<Nav className="justify-content-center mt-2 fs-Custom">
							<Nav.Item>
								<Nav.Link
									href="/"
									className="px-3 lh-base"
									style={{ color: "white" }}>
									Home
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									href="/course"
									className="px-3 lh-base"
									style={{ color: "white" }}>
									Course
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									href="/aboutUs"
									className="px-3 lh-base"
									style={{ color: "white" }}>
									About Us
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									href="/login"
									className="px-3 lh-base"
									style={{ color: "white" }}>
									Login
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									href="#"
									className="px-3 lh-base"
									style={{ color: "white" }}>
									Contact
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									href="#"
									className="px-3 lh-base "
									style={{ color: "white" }}>
									FAQs
								</Nav.Link>
							</Nav.Item>
						</Nav>

						{/* SosialMedia */}
						<Nav className="justify-content-center mt-4">
							<Nav.Item>
								<Nav.Link href="#" className="">
									<img
										src={Social1}
										alt="Logo image"
										width="50"
										height="auto"
										className=""></img>
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="#" className="">
									<img
										src={Social2}
										alt="Logo image"
										width="50"
										height="auto"
										className=""></img>
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="#" className="">
									<img
										src={Social3}
										alt="Logo image"
										width="50"
										height="auto"
										className=""></img>
								</Nav.Link>
							</Nav.Item>
						</Nav>

						<div className="text-center mt-3">
							<p className="footer-Text fw-400">
								Copyright © 2022. Rangkumin TEAM. All rights reserved.
							</p>
						</div>
					</div>
				</Container>
			</Container>
		</>
	);
}
