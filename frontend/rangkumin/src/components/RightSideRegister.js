import "../App.css";
import React, { Component, useState } from "react";
import ellipseReg from "../assets/registerPage/ellipseReg.png";
import vectorReg from "../assets/registerPage/vectorReg.png";
import logo from "../assets/loginPage/logo.png";
import phone from "../assets/Icons/phone.svg";
import mail from "../assets/Icons/mail.svg";
import lock from "../assets/Icons/lock.svg";
import { Form, Button, InputGroup } from "react-bootstrap";
import axios from "axios";

export default function RightSideRegister() {
	const [Username, setUsername] = useState("");
	const [Email, setEmail] = useState("");
	const [Nama, setNama] = useState("");
	const [Password, setPassword] = useState("");
	const [NoTelp, setNotelp] = useState("");
	// const [Role, setRole] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("username", Username);
		formData.append("email", Email);
		// formData.append("nama", nama);
		formData.append("password", Password);
		formData.append("notelp", NoTelp);
		formData.append("role", "user");

		const res = await axios.post(
			"http://localhost:8080/api/user/register",
			formData,
			{
				withCredentials: true,
			}
		);

		const { username, email, password, Notelp} = res.data;
		console.log(res);

		setUsername(username);
		setEmail(email);
		// setNama(nama);
		setPassword(password);
		setNotelp(Notelp);
		// setRole(role);
	};

	const handleChangeUsername = (e) => {
		setUsername(e.target.value);
		console.log(Username);
	};

	const handleChangePassword = (e) => {
		setPassword(e.target.value);
		console.log(Password);
	};

	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
		console.log(Email);
	};

	const handleChangeNoTelp = (e) => {
		setNotelp(e.target.value);
		console.log(NoTelp);
	};

	return (
		<body>
			<div className="side">
				<img className="ellipseReg" src={ellipseReg} alt="ellipseReg" />
				<img className="vectorReg" src={vectorReg} alt="3D Model" />
				<img className="logo-register" src={logo} alt="logo-register" />
			</div>
			<h1 fontSize="4xl" className="text-signup">
				Sign Up
			</h1>
			<h4 fontSize="4xl" className="text2-signup">
				<center>Please Enter Your Detail.</center>
			</h4>
			{/* Dekstop Form */}
			<Form
				style={{ width: "30%" }}
				className="form-register"
				onSubmit={(e) => {
					handleSubmit(e);
				}}
				// onSubmit={handleSubmit()}
			>
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>Nama</Form.Label>
					<Form.Control type="name" placeholder="Masukkan nama anda" />
				</Form.Group>
				{/* <hr className="my-4"></hr> */}
				{/* <Form.Label>Gender</Form.Label>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <div class="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"></input>
              <label className="form-check-label" for="inlineRadio1">
                Laki - Laki
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"></input>
              <label className="form-check-label" for="inlineRadio2">
                Perempuan
              </label>
            </div>
          </Form.Group> */}
				<Form.Group className="mb-3">
					<Form.Label>No. Telepon</Form.Label>
					<InputGroup>
						<InputGroup.Text
							style={{ backgroundColor: "white" }}
							id="basic-addon1">
							<img src={phone}></img>
						</InputGroup.Text>
						<Form.Control
							placeholder="Masukkan nomor telepon"
							onChange={(e) => handleChangeNoTelp(e)}
						/>
					</InputGroup>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Email</Form.Label>
					<InputGroup>
						<InputGroup.Text
							style={{ backgroundColor: "white" }}
							id="basic-addon1">
							<img src={mail}></img>
						</InputGroup.Text>
						<Form.Control
							type="text"
							placeholder="Masukkan email anda"
							onChange={(e) => handleChangeEmail(e)}
						/>
					</InputGroup>
				</Form.Group>
				<hr className="my-4"></hr>
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>Username</Form.Label>
					<Form.Control
						type="name"
						placeholder="Masukkan username anda"
						onChange={(e) => handleChangeUsername(e)}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Password</Form.Label>
					<InputGroup>
						<InputGroup.Text
							style={{ backgroundColor: "white" }}
							id="basic-addon1">
							<img src={lock}></img>
						</InputGroup.Text>
						<Form.Control
							type="text"
							placeholder="Masukkan password anda"
							onChange={(e) => handleChangePassword(e)}
						/>
					</InputGroup>
				</Form.Group>
				<div className="d-grid gap-2 mb-3">
					<Button
						style={{
							backgroundColor: "#FF725E",
							border: "none",
							color: "white",
							fontWeight: "bold",
						}}
						size="xl"
						type="submit"
						to ="/login"
						>
						Login
					</Button>
				</div>
				<Form.Text className="text-muted">
					Already have an account?{" "}
					<a className="sign-up-button" href="/login">
						Sign In
					</a>
				</Form.Text>
			</Form>
			{/* Mobile Form */}
			{/* <Form className='mobile-login-form'>
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
            <Button style={{backgroundColor: "#FF725E", border: "none", color: "black", fontWeight: "bold"}} size='xl' type="submit">
                       Login              
            </Button>
            </div>
            <Form.Text className="text-muted">
            Don’t have any account? <a className='sign-up-button' href='#'>Sign Up</a>
              </Form.Text>
          </Form> */}
		</body>
	);
}
