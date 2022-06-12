import React from "react";
import "../styles/cardsubscribe.css";
import { IoMdCheckboxOutline } from "react-icons/io";
import { Row, Col, Card } from "react-bootstrap";

export default function cardSubscribe() {
	return (
		<>
			<Row className="row justify-content-center md-3 w-100">
				<Col>
					<Card
						style={{ width: "100%" }}
						className="card-Subs mb-5 p-2 mx-2 text-start md-3">
						<Card.Body>
							<Card.Title className="fw-600 fs-2">Free</Card.Title>
							<p className="fs-6 text-secondary">Perfect to get started</p>
							<div className="Subs-Card-Price my-4">
								<label className="fs-2 fw-bold">Rp. 0</label>
								<label className="fw-400 fs-6"> /month</label>
							</div>
							<label className="fs-5 mb-3">Free include:</label>
							<div className="mb-5">
								<ul className="list-unstyled">
									<li className="fs-6 fw-400 py-2">
										<IoMdCheckboxOutline
											size={20}
											style={{ color: "#F55139" }}
										/>
										Dapat mengakses max.2 materi
									</li>
									<li className="fs-6 fw-400 py-2">
										<IoMdCheckboxOutline
											size={20}
											style={{ color: "#F55139" }}
										/>{" "}
										Lorem ipsum dolor sit amet.
									</li>
									<li className="fs-6 fw-400 py-2">
										<IoMdCheckboxOutline
											size={20}
											style={{ color: "#F55139" }}
										/>{" "}
										Lorem ipsum dolor sit amet.
									</li>
									<li className="fs-6 fw-400 py-2">
										<IoMdCheckboxOutline
											size={20}
											style={{ color: "#F55139" }}
										/>{" "}
										Lorem ipsum dolor sit amet.
									</li>
								</ul>
							</div>
							<button
								className="btn-Custom px-2 py-3"
								style={{ width: "100%" }}>
								Berlangganan
							</button>
							<label className="text-center fs-6 mt-2 text-secondary">
								*Syarat dan ketentuan berlaku
							</label>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card
						style={{ width: "100%" }}
						className="card-Subs mb-5 p-2 mx-2 text-start md-3">
						<Card.Body>
							<Card.Title className="fw-600 fs-2">Free</Card.Title>
							<p className="fs-6 text-secondary">Perfect to get started</p>
							<div className="Subs-Card-Price my-4">
								<label className="fs-2 fw-bold">Rp. 0</label>
								<label className="fw-400 fs-6"> /month</label>
							</div>
							<label className="fs-5 mb-3">Free include:</label>
							<div className="mb-5">
								<ul className="list-unstyled">
									<li className="fs-6 fw-400 py-2">
										<IoMdCheckboxOutline
											size={20}
											style={{ color: "#F55139" }}
										/>
										Dapat mengakses max.2 materi
									</li>
									<li className="fs-6 fw-400 py-2">
										<IoMdCheckboxOutline
											size={20}
											style={{ color: "#F55139" }}
										/>{" "}
										Lorem ipsum dolor sit amet.
									</li>
									<li className="fs-6 fw-400 py-2">
										<IoMdCheckboxOutline
											size={20}
											style={{ color: "#F55139" }}
										/>{" "}
										Lorem ipsum dolor sit amet.
									</li>
									<li className="fs-6 fw-400 py-2">
										<IoMdCheckboxOutline
											size={20}
											style={{ color: "#F55139" }}
										/>{" "}
										Lorem ipsum dolor sit amet.
									</li>
								</ul>
							</div>
							<button
								className="btn-Custom px-2 py-3"
								style={{ width: "100%" }}>
								Berlangganan
							</button>
							<label className="text-center fs-6 mt-2 text-secondary">
								*Syarat dan ketentuan berlaku
							</label>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card
						style={{ width: "100%" }}
						className="card-Subs mb-5 p-2 mx-2 text-start md-3">
						<Card.Body>
							<Card.Title className="fw-600 fs-2">Free</Card.Title>
							<p className="fs-6 text-secondary">Perfect to get started</p>
							<div className="Subs-Card-Price my-4">
								<label className="fs-2 fw-bold">Rp. 0</label>
								<label className="fw-400 fs-6"> /month</label>
							</div>
							<label className="fs-5 mb-3">Free include:</label>
							<div className="mb-5">
								<ul className="list-unstyled">
									<li className="fs-6 fw-400 py-2">
										<IoMdCheckboxOutline
											size={20}
											style={{ color: "#F55139" }}
										/>
										Dapat mengakses max.2 materi
									</li>
									<li className="fs-6 fw-400 py-2">
										<IoMdCheckboxOutline
											size={20}
											style={{ color: "#F55139" }}
										/>{" "}
										Lorem ipsum dolor sit amet.
									</li>
									<li className="fs-6 fw-400 py-2">
										<IoMdCheckboxOutline
											size={20}
											style={{ color: "#F55139" }}
										/>{" "}
										Lorem ipsum dolor sit amet.
									</li>
									<li className="fs-6 fw-400 py-2">
										<IoMdCheckboxOutline
											size={20}
											style={{ color: "#F55139" }}
										/>{" "}
										Lorem ipsum dolor sit amet.
									</li>
								</ul>
							</div>
							<button
								className="btn-Custom px-2 py-3"
								style={{ width: "100%" }}>
								Berlangganan
							</button>
							<label className="text-center fs-6 mt-2 text-secondary">
								*Syarat dan ketentuan berlaku
							</label>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
}
