import React from 'react'
import LogoBlack from '../../assets/LogoBlack.png'
import { Link } from 'react-router-dom'

function Modal({ setState, logo }) {
    return (
        <div onClick={() => setState(false)} className='modal-window'>
            <div className='pop-up'>
                <div className='header bg-light d-flex justify-content-between'>
                    <img className="logo-black" src={LogoBlack} alt="" />
                    <img className="logo-black" src={require(`../../assets/${logo}.png`)} alt="" />
                </div>

                <div className='shadow radius-custom bg-light mx-4 p-3'>
                    <div className='d-flex justify-content-between'>
                        <h2 className='account'>Amount</h2>
                        <div className="d-flex">
                            Rp <h1 className="text-danger">27.000,00</h1>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <h3>OrderID</h3>
                        <h3>OrderBobook-78A9G001</h3>
                    </div>
                </div>

                <h5 className='px-5 text-center'>Please&nbsp;
                    <span className="text-danger">
                        Complete Your&nbsp;
                    </span>
                    Payment Before:&nbsp;
                    <span className='text-danger'>
                        10 Januari&nbsp;
                    </span>
                    at 12.00
                </h5>

                <div className='mx-4 shadow bg-light'>
                    <h1 className='account px-3'>Account Number</h1>
                    <div className='text-center'>
                        <h2>857814177893155</h2>
                    </div>

                </div>

                <Link to="/plan"
                    className="m-4 bg-danger rounded-3 d-flex justify-content-center">
                    Konfirmasi Pembayaran
                </Link>

            </div>
        </div>
    )
}

export default Modal