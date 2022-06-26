import React from "react";
import TableRow from "../props/table.js";
import Table from "react-bootstrap/Table";
import { Icon } from "@iconify/react";
import TablePost from "../props/tablepost.js";
import Modal from "react-bootstrap/Modal";
import coursesData from "../../stores/coursesData.js";

function MyVerticallyCenteredModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			// className="modal-dialog modal-dialog-scrollable"
			centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter" className="fw-bold">
					Add Post
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="py-3">
					<p>Judul Materi</p>
					<input
						type="text"
						placeholder="Masukan Judul"
						className="form-control"
					/>
				</div>
				<div className="py-3">
					<p>Kategori</p>
					<input
						type="text"
						placeholder="Masukan Kategori"
						className="form-control"
					/>
				</div>
				<div className="py-3">
					<p>Mata Pelajaran</p>
					<input
						type="text"
						placeholder="Masukan Mata Pelajaran"
						className="form-control"
					/>
				</div>
				<div className="py-3">
					<p>Materi</p>
					<textarea
						class="form-control"
						aria-label="With textarea"
						placeholder="Masukan Materi"></textarea>
				</div>
				<div className="py-3">
					<p>Thumbnail</p>
					<input
						type="file"
						placeholder="Title"
						className="form-control"
						accept="img"
					/>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<button className="custom-button-2" onClick={props.onHide}>
					Close
				</button>
				<button className="custom-button-2">Submit</button>
			</Modal.Footer>
		</Modal>
	);
}

function Post() {
	const [modalShow, setModalShow] = React.useState(false);
	const { courses, fetch } = coursesData((s) => s);

	React.useEffect(() => {
		fetch();
	}, []);
	return (
		<>
			<div className="d-flex mt-5 align-items-center justify-content-between">
				<div>
					<h2 className="fw-bold">Post Courses</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
				</div>
				<div
					style={{ border: "1px solid #D9D9D9" }}
					className="p-1 search-input">
					<Icon
						style={{ maxWidth: "30px" }}
						icon="ant-design:search-outlined"
					/>
					<input style={{ color: "#D9D9D9" }} placeholder="Search.." />
				</div>
			</div>
			<div className="d-flex flex-column  align-items-center justify-content-center mt-5">
				<table className="w-100 flex justify-content-center">
					<thead>
						<tr style={{ backgroundColor: "#F5F8F8" }}>
							<th className="py-3 ps-4">IdPost</th>
							<th>Author</th>
							<th>Judul</th>
							<th>Pelajaran</th>
							<th>Kategori</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{courses.map((course, id) => (
							<TablePost
								key={id}
								author={id}
								judul={course.NamaMateri}
								kategori={course.KategoriTingkat}
								mataPelajaran={course.NamaSubject}
								idMateri={course.IDMateri}
							/>
						))}
					</tbody>
				</table>

				<div className="d-flex w-100 mt-5 justify-content-end">
					<button
						className="custom-button-2"
						onClick={() => setModalShow(true)}>
						Add Post
					</button>
				</div>

				<MyVerticallyCenteredModal
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
			</div>
		</>
	);
}

export default Post;
