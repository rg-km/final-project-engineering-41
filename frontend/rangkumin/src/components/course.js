import React from "react";

import Header from "./Header.js";
import Footer from "./Footer.js";
import ListCourses from "./ListCourses.js";

import '../styles/course.css';

import { Button, Container } from "react-bootstrap";
import { Icon } from "@iconify/react";

export default function course() {
	return (
		<>
			<Header />
			<Container fluid style={{ backgroundColor: "#F9F9F9" }}>
				<Container>
					<div className="my-4 d-flex align-items-center justify-content-between w-100">
						<div className="mt-2 w-75">
							<h1>Courses</h1>
							<a href="#" className="text-decoration-none text-secondary fs-5">
								All
							</a>
							<a
								href="#"
								className="text-decoration-none text-secondary mx-4 fs-5">
								Popular
							</a>
							<a href="#" className="text-decoration-none text-secondary fs-5">
								Newest
							</a>
						</div>
						<div id="search" className="input-group mb-3 w-25">
							<span class="input-group-text" id="search-input">
								<Icon
									icon="ant-design:search-outlined"
									color="#000"
									height="25"
								/>
							</span>
							<input
								class="form-control me-2"
								type="text"
								placeholder="Search"
								id="search-input"
								aria-label="Search"></input>
						</div>
					</div>
					<div className="d-flex justify-content-end align-items-center mb-5">
						{/* FIlter Kategorie */}
						<button className="btn-categories py-2 px-4 mx-4">
							<Icon icon="iconoir:language" color="#501559" height="25"/>
							<span className="ms-2">Bahasa</span>
						</button>
						<button className="btn-filter p-2">
							<Icon
								icon="akar-icons:settings-horizontal"
								color="black"
								height="25"
							/>
						</button>
						
					</div>
					<ListCourses />
				</Container>
			</Container>
			<Footer />
		</>
	);
}
