import React from 'react'

// Bank Logo Image 
import BNI from '../assets/BNI.png'
import Mandiri from '../assets/Mandiri.png'
import BRI from '../assets/BRI.png'
import BCA from '../assets/BCA.png'
import BTN from '../assets/BTN.png'
import VISA from '../assets/VISA.png'
import MasterCard from '../assets/MasterCard.png'

// Props
import RenderImage from './props/renderImage'
import Modal from './props/modal'
import Header from './header.js'
import Footer from './Footer'

import '../styles/hero.css'

function Hero({ setState, setLogo }) {

    return (
        <>
        <Header/>
            <div className="hero p-md-5">
                <div className='stabilizer'>

                    <h1 className='my-3 payment'>Payment</h1>
                    <div className='box-to-box d-flex flex-column-reverse flex-md-row'>
                        <div className='box responsive-box p-3'>
                            <div>
                                <h4 className='my-2 mb-3'>Metode Pembayaran</h4>
                            </div>
                            <div className="border-bank">
                                <h5 className='my-3'>Transfer Bank</h5>
                                <div className="kartu-kredit payment-image">
                                    <RenderImage logoName="BNI" setLogo={setLogo} setState={setState} image={BNI} />
                                    <RenderImage logoName="Mandiri" setLogo={setLogo} setState={setState} image={Mandiri} />
                                    <RenderImage logoName="BRI" setLogo={setLogo} setState={setState} image={BRI} />
                                    <RenderImage logoName="BCA" setLogo={setLogo} setState={setState} image={BCA} />
                                    <RenderImage logoName="BTN" setLogo={setLogo} setState={setState} image={BTN} />
                                </div>
                            </div>

                            <div className='mt-5 kartu'>
                                <h5>Kartu Kredit</h5>
                                <div className='d-flex kartu-kredit align-items-center'>
                                    <RenderImage logoName="VISA" setLogo={setLogo} setState={setState} image={VISA} />
                                    <RenderImage logoName="MasterCard" setLogo={setLogo} setState={setState} image={MasterCard} />
                                </div>
                            </div>
                        </div>

                        <div className='box-shadow ms-md-5 p-3 box'>
                            <div className='my-2 mb-3'>
                                <h4>Pemesanan</h4>
                            </div>
                            <div className='bottom mt-2'>
                                <div className='mt-3'>
                                    <h5>Paket Premium</h5>
                                    <p>Mauris non ultrices lorem. Pellentesque quis felis lacus. Sed dignissim lacinia risus, sit amet pellentesque magna sodales eget</p>
                                </div>
                                <div className='text-end'>
                                    <p>Duration : 30 Days</p>
                                    <p>Exp : 21 Agustus 2022</p>
                                </div>
                            </div>

                            <div className='py-3'>
                                <div className='d-flex justify-content-between'>
                                    <h4>SubTotal</h4>
                                    <h4>Rp 30.000</h4>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h4>Tax</h4>
                                    <h4>*</h4>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h4>Diskon</h4>
                                    <h4>10%</h4>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className='d-flex mt-3 justify-content-between'>
                                <h1>Order Total</h1>
                                <h1>Rp 27.000</h1>
                            </div>

                            <p className='absolute'>*Total Sudah Termasuk Pajak dan biaya admin</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Hero