import React from 'react'
import TableRow from '../props/table.js'
import Table from 'react-bootstrap/Table';
import { Icon } from '@iconify/react';
import Profile from '../../assets/Profile.png'
import BannerRight from '../../assets/Banner-Right.png'
import '../../styles/settings.css'
import ProfileIcon from '../../assets/profile-icon.png'

function Account() {
    return (
        <>
            <div className='d-flex mt-5 align-items-center justify-content-between'>
                <div>
                    <h3 className='fw-bold fs-2'>Personal Info</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
            </div>
            <div>
                <div>
                    <div className="d-flex mt-5 justify-content-between align-items-center flex-column-reverse flex-md-row">
                        {/* <div>
                            <p className='h4 fw-bolder'>Your profile picture</p>
                            <div className="d-flex py-5 align-items-center">
                                <img className="profile-account" src={ProfileIcon} alt="" />
                                <div className="d-flex ms-5 flex-column">
                                    <button className='custom-button-2 text-light'>Change Photo Profile</button>
                                    <button className="custom-button-3 d-flex align-items-center justify-content-center mt-3 bg-light border border-danger text-danger rounded-3"><Icon icon="ci:trash-full" />Delete</button>
                                </div>
                            </div>
                            <p className='text-muted'>*Ukuran Foto profile blabla. 200 x 200</p>
                        </div> */}
                        <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                            <img className="banner" src={BannerRight} alt="" />
                        </div>
                    </div>

                    <div>
                        <p>Nama</p>
                        <input className='my-2' value="Via Listi Anggraeny"></input>
                    </div>
                    <div className='mt-2'>
                        <p>Gender</p>
                        <div className='d-flex align-items-center position-relative'>
                            <select style={{ border: "1px solid #928b8b", outline: "none" }} className='my-2 p-2 rounded-3 custom-width'>
                                <option value="Perempuan">Perempuan</option>
                                <option value="Laki-laki">Laki-laki</option>
                            </select>
                            <div style={{ right: "60%" }} className="position-absolute">
                                <Icon className="text-danger" icon="gridicons:dropdown" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div>
                            <p>Nomor Telpon</p>
                            <input className='my-2' value="62 893 9201 29"></input>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <p className='py-3 text-muted'>*Donec iaculis varius nunc vitae porta. Vestibulum nec sem quis dolor convallis.</p>
                        <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                            <button style={{ height: "fit-content" }} className='mt-3 d-flex align-items-center custom-button-2'>Simpan Perubahan</button>
                        </div>
                    </div>
                    <hr></hr>
                    <div>
                        <p>Email</p>
                        <div className='d-flex align-items-center'>
                            <input style={{ color: "#D9D9D9" }} className="input-color my-3" value="vialistiii30@gmail.com" />
                            <button style={{ maxWidth: "200px" }} className='custom-button bg-light border border-danger text-danger'>Change Email</button>
                        </div>
                    </div>

                    <div>
                        <p>Password</p>
                        <div className='d-flex align-items-center'>
                            <input style={{ color: "#D9D9D9" }} className="input-color my-3" value="abcdefgh" type="password" />
                            <button style={{ maxWidth: "200px" }} className='custom-button bg-light border border-danger text-danger'>Change Password</button>
                        </div>
                    </div>
                    <hr></hr>
                    <h3 className="mt-5 fw-bold">Change Password</h3>
                    <div className='d-flex w-100 align-items-center'>
                        <div className='my-3 w-100'>
                            <p>New Password</p>
                            <input type="password" value="abcdefghi" style={{ width: "80%" }} />
                        </div>
                        <div className='my-3 w-100'>
                            <p>Confirm Password</p>
                            <input type="password" value="abcdefghi" style={{ width: "80%" }} />
                        </div>
                    </div>
                    <div className='d-flex mt-5 flex-column flex-md-row justify-content-between'>
                        <p className='my-2'>*Donec iaculis varius nunc vitae porta. Vestibulum nec sem quis dolor convallis.</p>
                        <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                            <button style={{ height: "fit-content" }} className='mt-3 d-flex align-items-center custom-button-2'>Update Password</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Account