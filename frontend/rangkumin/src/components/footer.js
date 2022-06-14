import React from 'react'
import Logo from './../assets/Logo.png'

// Icons from React-Icos 
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
        <div className='footer mt-5 text-center d-flex flex-column align-items-center py-5'>
            <img className="logo-footer" src={Logo} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>sed do eiusmod tempor incididunt.</p>
            <div className="d-flex">
                <a href="/">Home</a>
                <a href="/">About Us</a>
                <a href="/">Course</a>
                <a href="/">Login</a>
                <a href="/">Contact</a>
                <a href="/">FAQs</a>
            </div>
            <div className="d-flex my-3 social-media">
                <FaFacebook className='social-media-img' />
                <FaInstagram className='social-media-img' />
                <FaTwitter className='social-media-img' />
            </div>
            <p className='mt-3'>Copyright © 2022. Rangkumin TEAM. All rights reserved.</p>
        </div>
    )
}

export default Footer