import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "../Header";
import Footer from "../Footer";
import { Icon } from "@iconify/react";

export default function userSetting() {
	return (
		<>
			<Header />
			<Container>
				<h2 className="fw-bold mt-5 mb-3">Settings</h2>
				<Row className="justify-content-center w-100">
					<Col className="d-flex justify-content-end">
						<Card
							style={{
								width: "50%",
								background: "#FFFFFF",
								boxShadow: "0px 2px 10px 2px rgba(0, 0, 0, 0.23)",
								borderRadius: "20px",
								border: "none",
							}}>
							<Card.Body>
								<div className="text-center py-2">
									<Icon icon="fa-solid:user-cog" color="#f55139" height="50" />
								</div>
								<Card.Title
									className="text-center fw-bold m-1"
									style={{ color: "#f55139" }}>
									Account
								</Card.Title>
							</Card.Body>
						</Card>
					</Col>
					<Col className="d-flex justify-content-center">
						<Card
							style={{
								width: "50%",
								background: "#FFFFFF",
								boxShadow: "0px 2px 10px 2px rgba(0, 0, 0, 0.23)",
								borderRadius: "20px",
								border: "none",
							}}>
							<Card.Body>
								<div className="text-center p-2">
									<Icon
										icon="material-symbols:post-add-rounded"
										color="#1771a8"
										height="50"
									/>
								</div>
								<Card.Title
									className="text-center fw-bold m-1"
									style={{ color: "#1771a8" }}>
									Post
								</Card.Title>
							</Card.Body>
						</Card>
					</Col>
					<Col className="d-flex justify-content-start">
						<Card
							style={{
								width: "50%",
								background: "#FFFFFF",
								boxShadow: "0px 2px 10px 2px rgba(0, 0, 0, 0.23)",
								borderRadius: "20px",
								border: "none",
							}}>
							<Card.Body>
								<div className="text-center p-2">
									<Icon icon="ic:outline-payment" color="#0fa958" height="50" />
								</div>
								<Card.Title
									className="text-center fw-bold m-1"
									style={{ color: "#0fa958" }}>
									Subscription
								</Card.Title>
							</Card.Body>
						</Card>
					</Col>
				</Row>

				<hr className="my-4"></hr>

				{/* Lanjut disini */}
			</Container>
			<Footer />
		</>
	);
}
