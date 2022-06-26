import React from "react";
import { Icon } from "@iconify/react";
import userIcon from "../../assets/userIcon.png";
import "../../styles/table.css";

function TableRow({ IDUser, namaUser, email, noTelpon, title}) {
	const [state, setState] = React.useState(title);

	const changeStatus = (e) => {
		setState(e.target.value);
		console.log(e.target.value);
	};

	return (
		<tr style={{ backgroundColor: "#fff", borderBottom: "1px solid #E3E3E3" }}>
			<th className="p-2 py-3">
				<div className="d-flex align-items-center">
					{/* <img style={{ maxWidth: "30px" }} src={userIcon} alt="" /> */}
					<div className="ms-3 fw-normal">{IDUser}</div>
				</div>
			</th>
			<th className="text-muted">{namaUser}</th>
			<th className="fw-normal">{email}</th>
			<th className="fw-normal">{noTelpon}</th>
			<th style={{ width: "350px" }} className="position-relative">
				<div className="d-flex select-set">
					<select
						onClick={changeStatus}
						style={{ border: "none", outline: "none" }}
						className={`${
							state === "Unpaid" ? "custom-red" : "custom-green"
						} fw-bolder py-1 d-flex rounded-3 width-paid align-items-center text-light px-1 justify-content-between`}>
						<option
							value={title}
							className={`${
								title === "Unpaid" ? "custom-red" : "custom-green"
							}`}
							style={{ fontSize: "1rem", paddingLeft: "5px" }}>
							{title}
						</option>
						<option
							value={title === "Unpaid" ? "Paid" : "Unpaid"}
							className={`${
								title === "Unpaid" ? "custom-green" : "custom-red"
							}`}
							style={{ fontSize: "1rem", paddingLeft: "5px" }}>
							{title === "Unpaid" ? "Paid" : "Unpaid"}
						</option>
					</select>
					<Icon
						style={{ right: "53%" }}
						className="text-light position-absolute"
						icon="gridicons:dropdown"
					/>
				</div>
			</th>
			<th className="">
				<div className="text-danger d-flex justify-content-center w-50 border border-danger rounded-3">
					<Icon icon="ant-design:download-outlined" />
				</div>
			</th>
		</tr>
	);
}

export default TableRow;
