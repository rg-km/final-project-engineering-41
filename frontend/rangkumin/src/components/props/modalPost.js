import React from 'react'
import Modal from "react-bootstrap/Modal";

export default function MyVerticallyCenteredModal({props, headtitle}) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			// className="modal-dialog modal-dialog-scrollable"
			centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter" className="fw-bold">
					{headtitle}
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
