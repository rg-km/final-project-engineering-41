import React, { useState } from "react";
import TableRow from "../props/table.js";
import Table from "react-bootstrap/Table";
import { Icon } from "@iconify/react";
import userData from "../../stores/userData.js";
import axios from "axios";

function Subscription() {
	const { fetchUserList, userList } = userData((s) => s);

	React.useEffect(() => {
		fetchUserList();
	}, []);

	return (
		<>
			<div className="d-flex mt-5 align-items-center justify-content-between">
				<div>
					<h2 className="fw-bold">User Info</h2>
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
			<div className="mt-5 d-flex justify-content-center">
				<table className="w-100 flex justify-content-center">
					<thead>
						<tr style={{ backgroundColor: "#F5F8F8" }}>
							<th className="ps-4 py-3">User</th>
							<th>Nama User</th>
							<th>Email</th>
							<th>NoTelpon</th>
							<th>Status</th>
							{/* <th>Invoice</th> */}
						</tr>
					</thead>
					<tbody>
						{userList.map((user, id) => (
							<TableRow
								key={id}
								title="Paid"
								IDUser={user.id}
								namaUser={user.username}
								email={user.email}
								noTelpon={user.notelp}
							/>
						))}
						{/* <TableRow title="Unpaid" class="text-danger" />
                        <TableRow title="Paid" class="" /> */}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default Subscription;
