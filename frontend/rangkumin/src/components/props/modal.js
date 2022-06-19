import React from 'react'
import LogoBlack from '../../assets/LogoBlack.png'
import BNI from '../../assets/BNI.png'

function Modal({ setState, logo }) {
    return (
        <div onClick={() => setState(false)} className='modal-window'>
            <div className='pop-up'>
                <div className='header bg-light d-flex justify-content-between align-items-center'>
                    <img src={LogoBlack} alt="" style={{ height: "70%"}}/>
                    <img src={require(`../../assets/${logo}.png`)} alt="" style={{ height: "70%"}}/>
                </div>

                <div className='shadow radius-custom bg-light mx-4 my-4 p-3'>
                    <div className='d-flex justify-content-between'>
                        <h2 className='account fs-4'>Amount</h2>
                        <div className="d-flex">
                            Rp <h1 className="text-danger fs-5">27.000,00</h1>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <h3 className='fs-4'>OrderID</h3>
                        <h3 className='fs-5'>OrderRangkumin-78A9G001</h3>
                    </div>
                </div>

                <h5 className='px-5 text-center mb-3'>Please&nbsp;
                    <span className="text-danger">
                        Complete Your&nbsp;
                    </span>
                    Payment Before:&nbsp;
                    <span className='text-danger'>
                        10 Januari&nbsp;
                    </span>
                    at 12.00
                </h5>

                <div className='mx-4 shadow bg-light py-2'>
                    <h1 className='account px-3 fs-4'>Account Number</h1>
                    <div className='text-center'>
                        <h2 className='fs-5'>857814177893155</h2>
                    </div>

                </div>

                <button className="m-4 rounded-4 d-flex justify-content-center" style={{ borderRadius : "10px" }}>Konfirmasi Pembayaran</button>

            </div>
        </div>
    )
}

export default Modal