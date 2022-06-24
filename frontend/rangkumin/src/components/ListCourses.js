import React, { useEffect } from "react";

import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/listCourses.css";
// import CoursesImg from "../assets/Courses-img.png";
import { Icon } from "@iconify/react";

import coursesData from "../stores/coursesData";
import { Link } from "react-router-dom";

export default function ListCourses() {
	const { courses, fetch } = coursesData((s) => s);

	useEffect(() => {
		fetch();
	}, []);

	return (
		<>
			<Container>
				{courses?.map((course, idx) => {
					return (
						<Link
							to={`/courseDetail/${course.ID}`}
							className="text-decoration-none"
							key={idx}>
							<div className="d-flex justify-content-center align-items-center">
								<Card
									className="card-Courses p-2 mb-5"
									style={{ width: "90%" }}>
									<Card.Body>
										<div className="d-flex">
											<div className="card-Courses-Img">
												<img
													src={
														course?.Thumbnail ||
														"https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/depression/1296x728_HEADER_How-crafting-can-help-depression.jpg?w=1155&h=1528"
													}
													className="img-fluid rounded"></img>
											</div>
											<div className="card-Courses-Content ms-4">
												<Card.Title>
													<h3 className="fw-bold lh-base">
														{course.NamaMateri}
													</h3>
												</Card.Title>
												<Card.Text>
													<p className="text-muted mt-3 text-materi">
														{course.File}
													</p>
												</Card.Text>
												<div className="d-flex justify-content-between">
													<div>
														<Icon icon="bi:award" color="#FF9900" height="25" />
														<span id="course-vote" className="ps-2">
															{course?.Vote}
														</span>
														<span> Votes</span>
													</div>
													<div>
														<Icon
															icon="bx:category"
															color="#F55139"
															height="25"
														/>
														<span id="course-category" className="ps-2">
															{course.NamaSubject}
														</span>
													</div>
												</div>
											</div>
										</div>
									</Card.Body>
								</Card>
							</div>
						</Link>
					);
				})}
			</Container>
		</>
	);
}
