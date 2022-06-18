import './App.css';
import { LeftSideLogin } from './components/LeftSideLogin';
import { RightSideRegister } from './components/RightSideRegister';
import ForgotPass from './components/ForgotPass.js';
import ResetPass from './components/resetPass';
import Header from './components/header';
import Footer from './components/Footer';
import UserSetting from './components/user/userSetting';
import AccountSettings from './components/AccountSettings';
import PasswordSettings from './components/PasswordSetting';
import SubscriptionSettings from './components/SubscriptionSetting';
import Hero from './components/hero'
import Modal from './components/props/modal'
import FooterCopy from './components/footerCopy'
import { Routes, Route } from 'react-router-dom'
import CardSubscribe from './components/cardSubscribe'
import React from 'react';
import Nav from './components/nav.js';
import HeaderLogin from './components/headerCopy.js'
import Homepage from './components/Homepage';
import AdminSettings from './components/adminSettings.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [state, setState] = React.useState(false)
  const [logo, setLogo] = React.useState("BNI")
  console.log(logo)

  return (
    
    <>
    {/* LOGIN PAGE */}
      {/* <LeftSideLogin /> */}
    {/* REGISTER PAGE */}
      {/* <RightSideRegister /> */}
    {/* FORGOT PASSWORD PAGE */}
      {/* <ForgotPass /> */}
      {/* <ResetPass /> */}
    {/* USER SETTING PAGE */}
      {/* <Header />
      <AccountSettings /> */}
      {/* <PasswordSettings /> */}
      {/* <SubscriptionSettings /> */}
      {/* <Footer /> */}
    {/* HOME PAGE */}
      {/* <Homepage /> */}
    {/* SUBSCRIPTION PAGE */}
    {/* <Hero /> */}
    {/* <CardSubscribe /> 
    <Footer /> */}
    {/* ADMIN PAGE */}
    {/* <Header /> */}
    <AdminSettings />
    {/* <Footer /> */}
      </>
  
  );
}

export default App;
