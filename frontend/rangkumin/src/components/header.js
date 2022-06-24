import React  from "react";
// Import Logo & Icon
import Logo from "./../assets/Logo.png";
// import Profile from "./../assets/Profile.png";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/header.css";
import userData from "../stores/userData";
import { Button, Dropdown, Modal } from "react-bootstrap";

function Header() {
	const navigate = useNavigate();
	const { user, doLogout } = userData((s) => s);
	const [active, setActive] = React.useState(false);
	const [show, setShow] = React.useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	React.useEffect(() => {}, [user]);

	const ToSettings = () => {
		navigate("/settings/:roles");
	};

	const ToLogout = () => {
		// alert("Logout Success");
		doLogout(navigate);
	};

	return (
		<>
			<div className="nav-bar px-5 py-5">
				<a href="/">
					<img className="logo-responsive" src={Logo} alt="" />
				</a>
				<div className="h-100 d-none d-md-flex text-light align-items-center ">
					<Link className="link" to="/">
						Home
					</Link>
					<Link className="link " to="/course">
						Course
					</Link>
					<Link className="link" to="/aboutUs">
						About Us
					</Link>
				</div>
				{JSON.stringify(user) !== "{}" ? (
					<>
						<Dropdown>
							<Link
								to="#"
								style={{ maxWidth: "230px" }}
								className="d-none d-md-flex align-items-center justify-content-center text-decoration-none">
								<Dropdown.Toggle
									id="dropdown-autoclose-true"
									style={{
										borderRadius: "25px",
										padding: "1px",
										backgroundColor: "rgba(186,53,33,0.54)",
										border: "none",
									}}
									className="d-flex align-items-center text-light pe-3">
									<Icon
										style={{
											backgroundColor: "#F55139",
											borderRadius: "50%",
											padding: "8px",
										}}
										className="text-light fs-1"
										icon="ant-design:setting-outlined"
									/>
									<div className="ps-3">{user.username}</div>
									{/* <img className="icon" src={Profile} alt="" /> */}
								</Dropdown.Toggle>
							</Link>

							<Dropdown.Menu>
								<Dropdown.Item className="link" onClick={ToSettings}>
									Settings
								</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item className="link" onClick={handleShow}>
									Logout
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</>
				) : (
					<a
						href="/login"
						className="d-none d-md-flex align-items-center justify-content-center text-decoration-none">
						<button className="btn-Custom px-4 py-2">Log In</button>
					</a>
				)}

				{/* Modal ToLogout */}
				<Modal show={show} onHide={handleClose} animation={false}>
					<Modal.Header closeButton>
						<Modal.Title>Yakin Ingin Logout?</Modal.Title>
					</Modal.Header>
					{/* <Modal.Body></Modal.Body> */}
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={ToLogout}>
							LogOut
						</Button>
					</Modal.Footer>
				</Modal>

				{/* Menu Bar Icon  */}
				<Icon
					onClick={() => setActive(!active)}
					className="text-light d-md-none"
					icon="bytesize:menu"
				/>
			</div>

			{/* Menu Bar for Mobile & Tablet */}
			<div className={`${active ? "active-transition" : ""} responsive-menu`}>
				<ul className="d-flex flex-column justify-content-center align-items-center h-100 list-unstyled">
					<li>Home</li>
					<Link to="/">
						<li>Course</li>
					</Link>
					<li>About Us</li>
					<Link to="/settings">
						<li>Settings</li>
					</Link>
				</ul>
			</div>
		</>
	);
}

export default Header;
