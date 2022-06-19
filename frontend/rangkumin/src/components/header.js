import React from 'react';
// Import Logo & Icon 
import Logo from './../assets/Logo.png'
import Profile from './../assets/Profile.png'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'

import '../styles/header.css'

function Header() {
    const [active, setActive] = React.useState(false)
    return (
        <>
            <div className='nav-bar px-5'>
                <img className="logo-responsive" src={Logo} alt="" />
                <div className='h-100 d-none d-md-flex text-light align-items-center '>
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="/">Course</Link>
                    <Link className='link' to="/">About Us</Link>
                </div>
                <Link to="/settings" style={{ maxWidth: "230px" }} className="d-none d-md-flex align-items-center justify-content-center ">
                    <div style={{ borderRadius: "25px", padding: "2px", paddingLeft: "5px", backgroundColor: "rgba(186,53,33,0.54)" }} className='profile d-flex align-items-center'>
                        <div className="ps-3">
                            Via Listi A
                        </div>
                        <img className="icon" src={Profile} alt="" />
                    </div>
                    <Icon style={{ backgroundColor: "#F55139", borderRadius: "50%", padding: "8px" }} className='text-light fs-1 ms-3' icon="ant-design:setting-outlined" />
                </Link>
                {/* Menu Bar Icon  */}
                <Icon onClick={() => setActive(!active)} className='text-light d-md-none' icon="bytesize:menu" />
            </div>

            {/* Menu Bar for Mobile & Tablet */}
            <div className={`${active ? "active-transition" : ""} responsive-menu`}>
                <ul className="d-flex flex-column justify-content-center align-items-center h-100">
                    <li>Home</li>
                    <Link to="/">
                        <li>Course</li>
                    </Link>
                    <li>About Us</li>
                    <Link to="/settings">
                        <li>Settings</li>
                    </Link>
                </ul>
            </div>
        </>

    );
}

export default Header;