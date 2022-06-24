import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { Icon } from "@iconify/react";
import Thumbnail from "../assets/courseDetail/Thumbnail-Img.jpg";

import SD from "../assets/courseDetail/SD.svg";
import SMP from "../assets/courseDetail/SMP.svg";
import SMA from "../assets/courseDetail/SMA.svg";

import "../styles/courseDetail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "./header";

export default function CourseDetail() {
	const { id } = useParams();

	const [detail, setDetail] = useState({});

	const fetchDetail = async () => {
		try {
			const response = await axios.get(`http://localhost:8080/api/materibyid`, {
				params: {
					id,
				},
				withCredentials: true,
			});

			if (response?.data?.materi?.length > 0) {
				setDetail(response?.data?.materi?.[0]);
			}
		} catch (error) {}
	};

	useEffect(() => {
		fetchDetail();
	}, []);

	return (
		<>
			<Header />
			<div className="position-relative" id={"id"}>
				<div
					className="position-absolute top-50 start-0 translate-middle-y postCategories px-5 py-2"
					id="postCategories">
					<div className="d-flex align-items-center">
						<Icon icon="arcticons:speed-math" color="black" height="55" />
						<label className="fw-bold fs-5 px-2">{detail?.NamaSubject}</label>
					</div>
				</div>
				<div className="w-100 thumbnail">
					<img className="img-fluid" src={""}></img>
				</div>
			</div>

			<Container>
				<div className="d-flex justify-content-between w-100">
					<div className="w-70 my-5" style={{ width: "70%" }}>
						<h2 className="fw-bolder ">{detail?.NamaMateri}</h2>
						<p className="fs-1-5 lh-base m-4">{detail?.File}</p>
						{/* AuthorDetail */}
						<div className="Card-Detail px-5 py-3">
							<div className="d-flex align-items-center">
								<Image
									className="rounded-circle"
									src="https://via.placeholder.com/100"
									alt="profile"
								/>
								<div className="ml-2 d-flex align-items-center">
									<div className="mx-5">
										<label className="fw-bold fs-1-5 pb-3">Author</label> <br />
										<label className="fs-1-5 text-secondary">{"Admin"}</label>
									</div>
									<div className="fs-1-5">
										<Icon icon="fa:calendar" color="#898989" />
										<span className="ml-1 text-secondary px-2">
											{detail?.Tanggal}
										</span>
									</div>
								</div>
							</div>
						</div>
						{/* End AuthorDetail */}
						<p className="fs-1-5 lh-base m-4">0</p>
						{/* Vote */}
						<div className="Card-Detail px-5 py-3">
							<div className="d-flex align-items-center justify-content-between">
								<div>
									<Icon icon="bi:award" color="#FF9900" height="40" />
									<label id="totalVote" className="ms-2">
										{"vote"}
									</label>
									<label className="ms-1 text-secondary">Votes</label>
								</div>

								<div className="ms-2 d-flex align-items-center">
									<label className="lh-base ">Menyukai Materinya?</label>
									<div className="mx-5 text-center">
										<Icon icon="fa:thumbs-up" color="#898989" />
										<br />
										<label className="fw-bold fs-1-5">Vote</label>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* SideBar */}
					<div
						className="py-5 px-3 ms-4"
						style={{ width: "30%", border: "1px solid #E3E3E3" }}>
						<div>
							<div className="my-2">
								<h5 className="fw-bold mb-3">Jenjang Pendidikan</h5>
								<a href="#">
									<img src={SD} alt="kategori-SD" className="img-fluid"></img>
								</a>
								<a href="#">
									<img
										src={SMP}
										alt="kategori-SMP"
										className="img-fluid my-2"></img>
								</a>
								<a href="#">
									<img src={SMA} alt="kategori-SMA" className="img-fluid"></img>
								</a>
							</div>

							<hr style={{ border: "1px solid #717171" }}></hr>

							<div className="my-2">
								<h5 className="fw-bold mb-3">Popular Categories</h5>
								<button
									className="btn-categories py-2 px-4"
									style={{
										border: "2px solid #CBCBCB",
										borderRadius: "15px",
									}}>
									<Icon icon="iconoir:language" color="#501559" height="25" />
									<span className="ms-2">Bahasa</span>
								</button>
							</div>

							<hr style={{ border: "1px solid #717171" }}></hr>

							<div className="my-2">
								<h5 className="fw-bold mb-3">Popular Courses</h5>
								<div className="Card-Detail d-flex align-items-center p-2">
									<img
										src={Thumbnail}
										className="img-fluid rounded"
										alt="IMG"
										style={{ width: "50%" }}></img>
									<div className="px-2">
										<label className="fw-bold">Lorem Ipsum Neque</label>
										<div className="mt-3">
											<Icon icon="bx:category" color="#f55139" />
											<label style={{ fontSize: "14px", lineHeight: "17px" }}>
												Matematika
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
			{/* <Footer /> */}
		</>
	);
}
