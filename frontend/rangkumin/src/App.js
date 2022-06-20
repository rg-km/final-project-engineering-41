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

function App() {
	const [state, setState] = React.useState(false);
	const [logo, setLogo] = React.useState("BNI");
	console.log(logo);

	return (
		<>
			<BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
		<Route path="/login" element={<LeftSideLogin />} />
		<Route path="/register" element={<RightSideRegister />} />
		<Route path="/forgotpass" element={<ForgotPass />} />
		<Route path="/resetpass" element={<ResetPass />} />
		<Route path="/userSetting" element={<UserSetting />} />
		<Route path="/accountSettings" element={<AccountSettings />} />
		<Route path="/passwordSettings" element={<PasswordSettings />} />
		<Route path="/subscriptionSettings" element={<SubscriptionSettings />} />
		<Route path="/hero" element={<Hero />} />
		<Route path="/modal" element={<Modal />} />
		<Route path="/footerCopy" element={<FooterCopy />} />
		<Route path="/cardSubscribe" element={<CardSubscribe />} />
		<Route path="/nav" element={<Nav />} />
      </Routes>
      </BrowserRouter>
		</>
	);
}

export default App;
