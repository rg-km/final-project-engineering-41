import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/header";
import Footer from "../components/Footer";

import AboutVector from "../assets/AboutUs/AboutVector.svg";
import TeamGilang from "../assets/AboutUs/Gilang.png";
import TeamDaffa from "../assets/AboutUs/Daffa.png";
import TeamVia from "../assets/AboutUs/Via.png";
import TeamDea from "../assets/AboutUs/Dea.png";
import TeamRidwan from "../assets/AboutUs/Ridwan.png";


export default function AboutUs() {
	return (
		<>
			<Header />
			<div className="p-5 text-center" style={{ backgroundColor: "#13222C" }}>
				<h1 className="fw-bold text-light">About Us</h1>
			</div>
			<div className="py-5" style={{ backgroundColor: "#F9F9F9" }}>
				<Container>
					<div className="d-flex align-items-center justify-content-between mb-5">
						<div className="w-50">
							<h2 className="fw-bold" style={{ color: "#BA3521" }}>
								{" "}
								What Is Rangkumin ?
							</h2>
							<p className="pe-5">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
								varius nunc at faucibus. Scelerisque quam blandit tempor
								consequat. Vel duis nullam facilisis egestas ut placerat felis
								elementum. Sem quam eget nisl vitae morbi egestas diam.
								Facilisis tincidunt ultrices nulla amet.
							</p>
						</div>
						<div className="w-50">
							<img
								src={AboutVector}
								alt="About-Us Image"
								className="img-fluid"></img>
						</div>
					</div>

					{/* TEAM INFO */}
					<h2 className="fw-bold text-center mb-4" style={{ color: "#BA3521" }}>
						Meet Our Team
					</h2>
					<Row className="d-flex justify-content-center">
						<Col className="d-flex justify-content-center my-2">
							<div
								className="text-center p-2"
								style={{
									width: "280px",
									boxShadow: "0px 5px 21px 2px rgba(0, 0, 0, 0.05)",
									borderRadius: "10px",
								}}>
								<img
									src={TeamGilang}
									alt="Image Team Gilang"
									className="img-fluid"></img>
								<div className="text-center my-3" style={{ color: "#BA3521" }}>
									<h5 className="fw-bold">Gilang Ramadhana A</h5>
									<p>Team Leader & Front-End</p>
								</div>
							</div>
						</Col>
						<Col className="d-flex justify-content-center my-2">
							<div
								className="text-center p-2"
								style={{
									width: "280px",
									boxShadow: "0px 5px 21px 2px rgba(0, 0, 0, 0.05)",
									borderRadius: "10px",
								}}>
								<img
									src={TeamDaffa}
									alt="Image Team Gilang"
									className="img-fluid"></img>
								<div className="text-center my-3" style={{ color: "#BA3521" }}>
									<h5 className="fw-bold">Asyam Daffa’ Tsaqif</h5>
									<p>Front-End</p>
								</div>
							</div>
						</Col>
						<Col className="d-flex justify-content-center my-2">
							<div
								className="text-center p-2"
								style={{
									width: "280px",
									boxShadow: "0px 5px 21px 2px rgba(0, 0, 0, 0.05)",
									borderRadius: "10px",
								}}>
								<img
									src={TeamVia}
									alt="Image Team Gilang"
									className="img-fluid"></img>
								<div className="text-center my-3" style={{ color: "#BA3521" }}>
									<h5 className="fw-bold">Via Listi Anggraeny</h5>
									<p>Front-End</p>
								</div>
							</div>
						</Col>
						<Col className="d-flex justify-content-center my-2">
							<div
								className="text-center p-2"
								style={{
									width: "280px",
									boxShadow: "0px 5px 21px 2px rgba(0, 0, 0, 0.05)",
									borderRadius: "10px",
								}}>
								<img
									src={TeamDea}
									alt="Image Team Gilang"
									className="img-fluid"></img>
								<div className="text-center my-3" style={{ color: "#BA3521" }}>
									<h5 className="fw-bold">Dea Ashari Oktavia</h5>
									<p>Back-End</p>
								</div>
							</div>
						</Col>
						<Col className="d-flex justify-content-center my-2">
							<div
								className="text-center p-2"
								style={{
									width: "280px",
									boxShadow: "0px 5px 21px 2px rgba(0, 0, 0, 0.05)",
									borderRadius: "10px",
								}}>
								<img
									src={TeamRidwan}
									alt="Image Team Gilang"
									className="img-fluid"></img>
								<div className="text-center my-3" style={{ color: "#BA3521" }}>
									<h5 className="fw-bold">Ahmad Ridwan</h5>
									<p>Back-End</p>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<Footer />
		</>
	);
}
