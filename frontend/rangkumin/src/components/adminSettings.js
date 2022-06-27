import React from "react";
import "../styles/adminSettings.css";
import { Icon } from "@iconify/react";
import Account from "./settings/account";
import Post from "./settings/post";
import Subscription from "./settings/subscription";
import { Container, Row, Col, Card } from "react-bootstrap";

import Header from "../components/header";
import Footer from "../components/Footer";

// import { Routes, Route, Link } from "react-router-dom";

function AdminSettings() {
	const [setting, setSetting] = React.useState("account");

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
							<Card.Body
								name="account"
								onClick={() => setSetting("account")}
								className={`${
									setting === "account" ? "text-light custom-red" : ""
								} shadow icon-box text-danger`}>
								<div className="text-center py-2">
									<Icon
										className="iconify-settings"
										icon="fa-solid:user-cog"
										height="50"
									/>
								</div>
								<Card.Title className="text-center fw-bold m-1">
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
							<Card.Body
								name="post"
								onClick={() => setSetting("post")}
								className={`${
									setting === "post" ? "text-light custom-blue" : ""
								} shadow icon-box text-primary`}>
								<div className="text-center p-2">
									<Icon
										className="iconify-settings"
										icon="ic:round-post-add"
										height="50"
									/>
								</div>
								<Card.Title className="text-center fw-bold m-1">
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
							<Card.Body
								name="User"
								onClick={() => setSetting("User")}
								className={`${
									setting === "User" ? "text-light custom-green" : ""
								} shadow icon-box text-green-custom`}>
								<div className="text-center p-2">
									<Icon
										className="iconify-settings"
										icon="ic:baseline-payment"
										height="50"
									/>
								</div>
								<Card.Title className="text-center fw-bold m-1">
									User
								</Card.Title>
							</Card.Body>
						</Card>
					</Col>
				</Row>

				<hr className="my-4"></hr>

				<div className="p-5">
					{setting === "account" ? (
						<Account />
					) : setting === "post" ? (
						<Post />
					) : (
						<Subscription />
					)}
				</div>
			</Container>
			<Footer />
		</>
	);
}

export default AdminSettings;
