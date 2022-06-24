import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import profilePicture from "../assets/settings/profilePicture.png";
import vector3d from "../assets/settings/3dassets.png";
import UserSetting from "./user/userSetting";
import "../styles/settings.css";
import Header from "./header";
import Footer from "./Footer";

export default function AccountSettings() {
	return (
		<>
			<Header />
			<Container>
				<UserSetting />
				<h2 style={{ fontWeight: "bold" }} className="mt-4">
					Personal Info
				</h2>
				<h5 style={{ color: "gray" }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
				</h5>
				{/* <h4 className="mt-5">Your Profile Picture</h4>
			<img
				style={{ width: "154px" }}
				className="mt-4"
				src={profilePicture}></img>
			<br></br>
			<Button
				style={{
					width: "15%",
					backgroundColor: "#F55139",
					borderStyle: "none",
					borderRadius: "5px",
				}}
				className="mt-4">
				Change Profile Picture
			</Button>
			<br></br>
			<Button
				style={{
					width: "15%",
					backgroundColor: "white",
					borderColor: "#F55139",
					borderRadius: "5px",
					color: "#F55139",
				}}
				className="mt-3">
				Delete
			</Button> */}
				<Form style={{ marginTop: "50px" }}>
					<Form.Group
						style={{ width: "50%" }}
						className="mb-3"
						controlId="formBasicNama">
						<Form.Label>Nama</Form.Label>
						<Form.Control type="nama" placeholder="Via Listi Anggraeny" />
					</Form.Group>
					<Form.Group style={{ width: "50%" }} className="mb-3">
						<Form.Label>Gender</Form.Label>
						<Form.Select>
							<option>Perempuan</option>
							<option>Laki - Laki</option>
						</Form.Select>
					</Form.Group>
					<Form.Group
						style={{ width: "50%" }}
						className="mb-3"
						controlId="formBasicNoTelp">
						<Form.Label>Nomor Telepon</Form.Label>
						<Form.Control type="notelp" placeholder="62 893 9201 29" />
					</Form.Group>
					<Form.Text className="text-muted">
						*Donec iaculis varius nunc vitae porta. Vestibulum nec sem quis
						dolor convallis.s
					</Form.Text>
					<br></br>
					<hr></hr>
					<Button
						style={{
							width: "15%",
							backgroundColor: "#F55139",
							borderStyle: "none",
							borderRadius: "5px",
							marginLeft: "80%",
						}}
						className="mt-2 mb-2"
						variant="primary"
						type="submit">
						Simpan Perubahan
					</Button>
					<hr></hr>
				</Form>
				<img
					src={vector3d}
					className="mt-5"
					style={{
						width: "40%",
						position: "absolute",
						top: "70%",
						right: "5%",
					}}></img>
			</Container>
			<Footer />
		</>
	);
}
