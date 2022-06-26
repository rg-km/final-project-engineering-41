import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import userIcon from "../../assets/userIcon.png";

function TablePost({ author, judul, kategori, mataPelajaran, idMateri }) {
	return (
		<tr style={{ borderBottom: "1px solid #D9D9D9" }}>
			<th className="py-4 ps-5 fw-bold">{idMateri}</th>
			<th className="fw-normal">{author}</th>
			<th className="fw-normal">{judul}</th>
			<th className="fw-normal">{mataPelajaran}</th>
			<th className="fw-normal">{kategori}</th>
			<th>
				<div className="d-flex">
					<div
						style={{ backgroundColor: "#00B929" }}
						className="px-3 d-flex justify-content-center align-items-center text-light rounded-3">
						<Link to="Modal-Post-Edit">
							<Icon icon="bx:edit-alt" />
						</Link>
					</div>
					<div className="ms-3 px-3 border border-danger text-danger">
						<Icon icon="ci:trash-full" />
					</div>
				</div>
			</th>
		</tr>
	);
}

export default TablePost;
