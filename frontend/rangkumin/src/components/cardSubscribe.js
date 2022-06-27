import React from "react";

// Table Props
import TablePlan from "./props/tablePlan";
import PackageList from "./props/packageList";

// Card Subsrcibe Style
import "../styles/cardSubscribe.css";
import Header from "./header";
import Footer from "./Footer";

function CardSubscribe() {
	const [state, setState] = React.useState("Free");
	return (
		<>
			<Header />
			<div className="w-100 d-flex flex-column align-items-center responsive-padding justify-content-center">
				<div className="text-center py-5">
					<h3 className="fw-bold">Choose Your Plan</h3>
					<p className="text-muted">
						Sed quam sem, varius in finibus nec, lacinia at leo.
					</p>
				</div>
				{/* Render Package List  */}
				<div className="d-flex w-100 gap-5 justify-content-between flex-column flex-md-row">
					<PackageList
						setState={setState}
						state={state}
						add="false"
						title="Free"
						desc="Perfect to get started"
						price="Rp.0"
						btn="Subscribe"
						link="/course"
					/>
					<PackageList
						setState={setState}
						state={state}
						add="true"
						title="Basic"
						desc="Best for intermediate"
						price="Rp. 399,999"
						btn="Coming Soon"
					/>
					<PackageList
						setState={setState}
						state={state}
						add="true"
						title="Premium"
						desc="Toolset for professional"
						price="Rp. 499,999"
						btn="Coming Soon"
					/>
				</div>

				{/* Render Table  */}
				<div className="w-100 mt-5 d-flex justify-content-center">
					<table className="w-100">
						<tr className="bg-custom-color">
							<th className="ps-3">Fitur</th>
							<th className="text-center">Basic</th>
							<th className="text-center">Premium</th>
							<th className="text-center">Platinum</th>
						</tr>
						<TablePlan
							title="UI/UX Design"
							basic="true"
							premium="true"
							platinum="true"
						/>
						<TablePlan
							bg="true"
							title="Front-end Development"
							basic="false"
							premium="true"
							platinum="true"
						/>
						<TablePlan
							title="Back-end Development"
							basic="false"
							premium="true"
							platinum="true"
						/>
						<TablePlan
							bg="true"
							title="Admin Database"
							basic="false"
							premium="true"
							platinum="true"
						/>
						<TablePlan
							title="Product Design"
							basic="true"
							premium="true"
							platinum="true"
						/>
						<TablePlan
							bg="true"
							title="Admin Database"
							basic="false"
							premium="true"
							platinum="true"
						/>
					</table>
				</div>
				<div className="mt-4 text-muted w-100">
					*Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
					purus sit amet luctus venenatis, lectus magna<br></br> fringilla urna,
					porttitor rhoncus dolor purus non consectetur adipiscing elit ut
					aliquam ipsum dolor sit amet,<br></br> consectetur adipiscing elit ut
					aliquam,
				</div>
			</div>
			<Footer />
		</>
	);
}

export default CardSubscribe;
