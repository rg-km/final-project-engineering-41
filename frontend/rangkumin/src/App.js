import "./App.css";
import { LeftSideLogin } from "./components/LeftSideLogin";
import { RightSideRegister } from "./components/RightSideRegister";
import ForgotPass from "./components/ForgotPass.js";
import ResetPass from "./components/resetPass";
import Header from "./components/header";
import Footer from "./components/Footer";
import UserSetting from "./components/user/userSetting";
import AccountSettings from "./components/AccountSettings";
import PasswordSettings from "./components/PasswordSetting";
import SubscriptionSettings from "./components/SubscriptionSetting";
import Hero from "./components/hero";
import Modal from "./components/props/modal";
import FooterCopy from "./components/footerCopy";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CardSubscribe from "./components/cardSubscribe";
import React from "react";
import Nav from "./components/nav.js";
import HeaderLogin from "./components/headerCopy.js";
import Homepage from "./components/Homepage";
import AdminSettings from "./components/adminSettings.js";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./components/AboutUs";
import Course from "./components/Course";
import CourseDetail from "./components/CourseDetail";

import CourseData from "./data/course.json";
import "../../rangkumin/src/styles/hero.css";

function App() {
	const [state, setState] = React.useState(false);
	const [logo, setLogo] = React.useState("BNI");
	console.log(logo);

	return (
		<>
			{state ? <Modal logo={logo} setState={setState} /> : ""}

			<BrowserRouter>
				<Routes>
					<Route path="/homepage" element={<Homepage />} />
					<Route path="/login" element={<LeftSideLogin />} />
					<Route path="/aboutUs" element={<AboutUs />} />
					<Route path="/signup" element={<RightSideRegister />} />
					<Route path="/course" element={<Course />} />
					<Route path="/courseDetail/:id" element={<CourseDetail />} />
					<Route path="/usersetting" element={<AdminSettings />} />
					<Route 
						path="/payment"
						element={<Hero setLogo={setLogo} setState={setState} />}
					/>
					<Route path="/subscribe" element={<CardSubscribe />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
