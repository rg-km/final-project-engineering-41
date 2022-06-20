import React from 'react'
import '../styles/adminSettings.css'
import { Icon } from '@iconify/react';
import Account from './settings/account';
import Post from './settings/post';
import Subscription from './settings/subscription';

import { Routes, Route, Link } from 'react-router-dom'

function Settings() {

    const [setting, setSetting] = React.useState("account")
 
    return (
        <div className="p-5">
            <h1 className='fw-bold'>Settings</h1>
            <div className="d-flex justify-content-around my-5">
                <div name="account" onClick={() => setSetting("account")} className={`${setting === "account" ? "text-light custom-red" : ""} shadow icon-box text-danger`}>
                    <Icon className="iconify-settings" icon="fa-solid:user-cog" />
                    <div className='h5 mt-2'>Account</div>
                </div>
                <div name="post" onClick={() => setSetting("post")} className={`${setting === "post" ? "text-light custom-blue" : ""} shadow icon-box text-primary`}>
                    <Icon className="iconify-settings" icon="ic:round-post-add" />
                    <div className='h5 mt-2'>Post</div>
                </div>
                <div name="subscription" onClick={() => setSetting("subscription")} className={`${setting === "subscription" ? "text-light custom-green" : ""} shadow icon-box text-green-custom`}>
                    <Icon className="iconify-settings" icon="ic:baseline-payment" />
                    <div className='h5 mt-2'>Subscription</div>
                </div>
            </div>
            <hr></hr>

            {setting === "account" ? <Account /> : setting === "post" ? <Post /> : <Subscription />}
        </div>
    )
}

export default Settings