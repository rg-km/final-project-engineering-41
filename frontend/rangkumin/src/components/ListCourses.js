import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/listCourses.css";
import CoursesImg from "../assets/Courses-img.png";
import { Icon } from "@iconify/react";
import courseData from "../data/course.json";

export default function ListCourses() {
	return (
		<>
			<Container>
				{courseData.map((course) => {
					return (
						<div className="d-flex justify-content-center">
							<Card className="card-Courses p-2 mb-5" style={{ width: "90%" }}>
								<Card.Body>
									<div className="d-flex">
										<div className="card-Courses-Img">
											<img src={course.image} className="img-fluid rounded"></img>
										</div>
										<div className="card-Courses-Content ms-4">
											<Card.Title>
												<h3 className="fw-bold lh-base">
													{course.title}
												</h3>
											</Card.Title>
											<Card.Text>
												<p className="text-muted mt-3">
													{course.materi}
												</p>
											</Card.Text>
											<div className="d-flex justify-content-between">
												<div>
													<Icon icon="bi:award" color="#FF9900" height="25" />
													<span id="course-vote" className="ps-2">
														{course.vote}
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
														{course.category}
													</span>
												</div>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</div>
					);
				})}
			</Container>
		</>
	);
}
