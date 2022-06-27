import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import profilePicture from "../assets/settings/profilePicture.png";
import vector3d from "../assets/settings/3dassets.png";
import { Icon } from "@iconify/react";

export default function userSetting({nama, noTelp}) {
	return (
		<>
			<Container>
				<h2 style={{ fontWeight: "bold" }} className="mt-4">
					Personal Info
				</h2>
				<h5 style={{ color: "gray" }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
				</h5>

				<Form style={{ marginTop: "50px" }}>
					<Form.Group
						style={{ width: "50%" }}
						className="mb-3"
						controlId="formBasicNama">
						<Form.Label>Nama</Form.Label>
						<Form.Control type="nama" placeholder={nama} />
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
						<Form.Control type="notelp" placeholder={noTelp} />
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
		</>
	);
}
