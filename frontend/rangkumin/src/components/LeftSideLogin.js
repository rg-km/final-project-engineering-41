import "../App.css";
import "../styles/loginReg.css";
import React, { Component, useState } from "react";
import ellipse from "../assets/loginPage/ellipse.png";
import model3d from "../assets/loginPage/object3d.png";
import logo from "../assets/loginPage/logo.png";
import { Form, Button, Container } from "react-bootstrap";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";

// Zustand
import formData from "../stores/formData";
import userData from "../stores/userData";

// import UserData from "../data/user.json";

export function LeftSideLogin() {
	const { emailData, passwordData } = formData((state) => state);
	const {fetch, user} = userData(s => s)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const navigate = useNavigate();

	const navigateToHomepage = (e) => {
		e.preventDefault()
		
		fetch({
			username: email,
			password
		}, navigate)
	};

	const navigateToSignup = () => {
		navigate("/signup");
	};

	React.useEffect(() => {

	}, []);

	return (
		<>
			<div className="side">
				<img className="ellipse" src={ellipse} alt="ellipse" />
				<img className="model3d" src={model3d} alt="3D Model" />
				<img className="logo-login" src={logo} alt="logo-login" />
				<h1
					style={{ color: "white", fontWeight: "bold" }}
					className="text-ellipse">
					Pellentesque a tempus <br></br>massa. Nullam{" "}
				</h1>
				<h1 fontSize="4xl" className="text-signin">
					Sign In
				</h1>
				<h4 style={{ color: "gray" }} fontSize="4xl" className="text2-signin">
					<center>Welcome Back Please Enter Your Detail.</center>
				</h4>
				{/* Dekstop Form */}
				<Form className="form-login">
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Username</Form.Label>
						<Form.Control
							style={{ width: "150%" }}
							type="text"
							placeholder={emailData}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							style={{ width: "150%" }}
							type="password"
							placeholder={passwordData}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						
					</Form.Group>
					{/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Remember Me" />
					</Form.Group> */}
					<div className="d-grid gap-2 mb-2">
						<Button
							style={{
								width: "150%",
								backgroundColor: "#FF725E",
								border: "none",
								color: "white",
								fontWeight: "bold",
							}}
							size="xl"
							type="submit"
							onClick={navigateToHomepage}
							>
							Login
						</Button>
						{console.log("user", user)}
					</div>
					<Form.Text className="text-muted">
						Don???t have any account?{" "}
						<Link className="sign-up-button" to="/signup">
							Sign Up
						</Link>
					</Form.Text>
				</Form>
				{/* Mobile Form */}
				{/* <Form className="mobile-login-form">
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter your email" />
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="*******" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Remember me" />
					</Form.Group>
					<div className="d-grid gap-2">
						<Button
							style={{
								backgroundColor: "#FF725E",
								color: "white",
								border: "none",
								fontWeight: "bold",
							}}
							size="xl"
							type="submit"
							onClick={navigateToHomepage}>
							Login
						</Button>
					</div>
					<Form.Text className="text-muted">
						Already have an account?{" "}
						<a className="sign-up-button" href="/signup">
							Sign In
						</a>
					</Form.Text>
				</Form> */}
			</div>
		</>
	);
}
