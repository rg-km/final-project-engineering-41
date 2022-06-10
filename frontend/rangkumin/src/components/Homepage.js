import React from 'react'

import '../styles/homepage.css'

import { Container, Row, Col, Card } from 'react-bootstrap'

import {TbMathSymbols} from "react-icons/tb";
import {IoMdCheckboxOutline} from "react-icons/io";

import heroReading from '../assets/hero-reading.png'
import contentCard from '../assets/content-card.png'
import Math from '../assets/Math.png'
import SD from '../assets/SD.png'
import heroBoy from '../assets/hero-boy-reading.png'
import Header from './Header'
import SMP from '../assets/SMP.png'
import SMA from '../assets/SMA.png'

function Homepage() {
  return (
    <>
        <Container fluid style={{ backgroundColor : "#13222C", }}>   
            <Header />
            {/* Hero */}
            <Container className='mt-5'>
                <Row className='align-items-center'>
                    <Col>
                        <div className="hero-text py-5">
                            <div style={{ width: "60%" }}>
                                <div aria-label='popUp-newCourses' className='popUp-newCourses d-flex justify-content-start p-1'>
                                    <span className="badge rounded-pill align-middle">New</span>
                                    <label className='px-2 fw-bold text-white'>Rumus Bangun Datar 2 Dimensi</label>
                                </div>
                            </div>
                            <label className='hero-title fw-bold text-white' >Lorem ipsum dolor sit amet.</label>
                            <p className='text-white hero-sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique vulputate laoreet. In consectetur ultrices urna sed pulvinar. Etiam at porttitor orci. Vivamus interdum lacus.</p>
                            
                            <button className="btn-Custom px-4 p-2">See Courses</button>
                            <button className="btn-Custom px-4 mx-4 p-2">Berlangganan</button>
                        </div>
                    </Col>
                    <Col className="d-flex align-items-center mb-5">
                        <img src={heroReading} className='img-fluid' alt='img-hero'></img>
                    </Col>
                </Row>
            </Container> 
            {/* End Hero */} 
        </Container>
        {/* Content */}
        <Container className='mt-5'>
            {/* Popular Courses */}
            <div className='text-center mb-5'>
                <p className='fs-6 text-secondary'>Our Courses</p>
                <h2 className='mb-5' style={{ fontWeight:"700" }}>Browse Our Best Courses</h2>
                <div className='position-relative'>
                    <div className='position-absolute card-Bg start-0 translate-middle-y'></div>
                    <Row>
                        <Col className='d-flex justify-content-center'>
                            <Card style={{ width: '14rem' }} className="card-Custom mb-5 p-2 text-start">
                                <Card.Img variant="top" src={contentCard} className="img-fluid rounded"/>
                                <Card.Title className='fw-bold fs-6 mt-2'>Neque porro est qui dolorem ipsum</Card.Title>
                                <div className='d-flex justify-content-between'>
                                    <div className='mt-4'>
                                        <TbMathSymbols className='me-2' size={25} style={{ color:"#F55139" }}/>
                                        <label >Matematika</label>
                                    </div>
                                    <div className='mt-4'>
                                        <a className='text-decoration-none fw-bold card-Text' href="#">See More...</a>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            {/* End Popular Courses */}
        </Container>

        {/* About & Categories */}
        <Container fluid className="my-5" style={{ background: "#EBE7D9"}}>
            <Container>
                <div className='hero-About my-5 d-flex p-5 '>
                    <div className='hero-Right-Content d-flex align-items-center'>
                        <img src={heroBoy} className="img-fluid"></img>
                    </div>
                    <div className='hero-Left-Content ps-4'>
                        <h2 className='fw-bold mb-3' style={{ fontSize: "48px" }}>Praesent pharetra hendrerit dapibus. Integer.</h2>
                        <p className='text-secondary '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique vulputate laoreet. In consectetur ultrices urna sed pulvinar. Etiam at porttitor orci. Vivamus interdum lacus.</p>
                        <Row>
                            <Col className='d-flex justify-content-start my-3' lg={6} >
                                <div className='bg-Icon'>
                                    <img src={Math} style={{ width:"15%" }}></img>
                                    <span className='px-2'>100+ Materi</span>
                                </div>
                            </Col>
                            <Col className='d-flex justify-content-start my-3' lg={6} >
                                <div className='bg-Icon'>
                                    <img src={Math} style={{ width:"15%" }}></img>
                                    <span className='px-2'>100+ Materi</span>
                                </div>
                            </Col>
                            <Col className='d-flex justify-content-start my-3' lg={6} >
                                <div className='bg-Icon'>
                                    <img src={Math} style={{ width:"15%" }}></img>
                                    <span className='px-2'>100+ Materi</span>
                                </div>
                            </Col>
                            <Col className='d-flex justify-content-start my-3' lg={6} >
                                <div className='bg-Icon'>
                                    <img src={Math} style={{ width:"15%" }}></img>
                                    <span className='px-2'>100+ Materi</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                 {/*Categories*/}
                <div className='position-relative d-flex'>
                    <div className="position-absolute top-0 start-50 translate-middle mb-5" style={{width:"100%"}} > 
                        <Row className=''>
                            <Col className='d-flex justify-content-center'>
                                <Card className='card-Categories' style={{ width: '60%' }}>
                                    <Card.Body>
                                        <Card.Img variant="top" src={SD} className="rounded mx-auto p-2 d-block" style={{ width: "50%" }}/>
                                        <Card.Title className='text-center fw-bold m-1'>SD</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='d-flex justify-content-center'>
                                <Card className='card-Categories' style={{ width: '60%' }}>
                                    <Card.Body>
                                        <Card.Img variant="top" src={SMP} className="rounded mx-auto p-2 d-block" style={{ width: "50%" }}/>
                                        <Card.Title className='text-center fw-bold m-1'>SMP</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='d-flex justify-content-center'>
                                <Card className='card-Categories' style={{ width: '60%' }}>
                                    <Card.Body>
                                        <Card.Img variant="top" src={SMA} className="rounded mx-auto p-2 d-block" style={{ width: "50%" }}/>
                                        <Card.Title className='text-center fw-bold m-1 '>SMA</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </Container>
        {/* End About & Categories */}

        {/* Subscribstion */}
        <Container>
            <div className='subscription text-center'>
                <h2 className='fw-bold'>Berlangganan</h2>
                <p className='text-secondary'>Sed quam sem, varius in finibus nec, lacinia at leo.</p>
                <div align="center" className='mb-4'>
                    <div className='subs-Month p-1' style={{ width: "15%" }}>
                        <div className='btn-Custom fw-bold'>
                            Monthly
                        </div>
                    </div>
                </div>
                
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <div style={{ width: '400px' }} className="card-Subs mb-5 p-2 text-start">
                            <Card.Body>
                                <Card.Title className='fw-bold fs-1'>Free</Card.Title>
                                <div className='Subs-Card-Price my-4'>
                                    <p className='fs-2 fw-bold'>Rp. 0</p>
                                    <label className='fw-700'>/month</label>
                                </div>
                                <label className='fs-5 mb-4'>Mauris hendrerit, vestibulum.</label>
                                <div className='mb-5'>
                                    <ul className='list-unstyled'>
                                        <li className='fs-6 fw-400 py-2'><IoMdCheckboxOutline size={25} style={{ color:"#F55139" }}/> Lorem ipsum dolor sit amet, consectetur</li>
                                        <li className='fs-6 fw-400 py-2'><IoMdCheckboxOutline size={25} style={{ color:"#F55139" }}/> Lorem ipsum dolor sit amet, consectetur</li>
                                        <li className='fs-6 fw-400 py-2'><IoMdCheckboxOutline size={25} style={{ color:"#F55139" }}/> Lorem ipsum dolor sit amet, consectetur</li>
                                        <li className='fs-6 fw-400 py-2'><IoMdCheckboxOutline size={25} style={{ color:"#F55139" }}/> Lorem ipsum dolor sit amet, consectetur</li>
                                    </ul>
                                </div>
                                <button className='btn-Custom p-2' style={{ width: "100%" }}>Berlangganan</button>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <div style={{ width: '400px' }} className="card-Subs mb-5 p-2 text-start">
                            <Card.Body>
                                <Card.Title className='fw-bold fs-1'>Free</Card.Title>
                                <div className='Subs-Card-Price my-4'>
                                    <p className='fs-2 fw-bold'>Rp. 0</p>
                                    <label className='fw-700'>/month</label>
                                </div>
                                <label className='fs-5 mb-4'>Mauris hendrerit, vestibulum.</label>
                                <div className='mb-5'>
                                    <ul className='list-unstyled'>
                                        <li className='fs-6 fw-400 py-2'><IoMdCheckboxOutline size={25} style={{ color:"#F55139" }}/> Lorem ipsum dolor sit amet, consectetur</li>
                                        <li className='fs-6 fw-400 py-2'><IoMdCheckboxOutline size={25} style={{ color:"#F55139" }}/> Lorem ipsum dolor sit amet, consectetur</li>
                                        <li className='fs-6 fw-400 py-2'><IoMdCheckboxOutline size={25} style={{ color:"#F55139" }}/> Lorem ipsum dolor sit amet, consectetur</li>
                                        <li className='fs-6 fw-400 py-2'><IoMdCheckboxOutline size={25} style={{ color:"#F55139" }}/> Lorem ipsum dolor sit amet, consectetur</li>
                                    </ul>
                                </div>
                                <button className='btn-Custom p-2' style={{ width: "100%" }}>Berlangganan</button>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <div style={{ width: '400px' }} className="card-Subs mb-5 p-2 text-start">
                            <Card.Body>
                                <Card.Title className='fw-bold fs-1'>Free</Card.Title>
                                <div className='Subs-Card-Price my-4'>
                                    <p className='fs-2 fw-bold'>Rp. 0</p>
                                    <label className='fw-700'>/month</label>
                                </div>
                                <label className='fs-5 mb-4'>Mauris hendrerit, vestibulum.</label>
                                <div className='mb-5'>
                                    <ul className='list-unstyled'>
                                        <li className='fs-6 fw-400 py-2'><IoMdCheckboxOutline size={25} style={{ color:"#F55139" }}/> Lorem ipsum dolor sit amet, consectetur</li>
                                        <li className='fs-6 fw-400 py-2'><IoMdCheckboxOutline size={25} style={{ color:"#F55139" }}/> Lorem ipsum dolor sit amet, consectetur</li>
                                        <li className='fs-6 fw-400 py-2'><IoMdCheckboxOutline size={25} style={{ color:"#F55139" }}/> Lorem ipsum dolor sit amet, consectetur</li>
                                        <li className='fs-6 fw-400 py-2'><IoMdCheckboxOutline size={25} style={{ color:"#F55139" }}/> Lorem ipsum dolor sit amet, consectetur</li>
                                    </ul>
                                </div>
                                <button className='btn-Custom p-2' style={{ width: "100%" }}>Berlangganan</button>
                            </Card.Body>
                        </div>
                    </Col>
                    
                </Row>
            </div> 
        </Container>
        {/* End Subscribtion */}
        {/* End Content */}
    </>
  )
}

export default Homepage