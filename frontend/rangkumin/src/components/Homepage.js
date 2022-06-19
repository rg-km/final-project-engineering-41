import React from 'react'

import '../styles/homepage.css'

import { Container, Row, Col, Card } from 'react-bootstrap'

import {TbMathSymbols} from "react-icons/tb";
import {IoMdCheckboxOutline} from "react-icons/io";

import heroReading from '../assets/homePage/hero-reading.png'
import contentCard from '../assets/homePage/content-card.png'
import Math from '../assets/homePage/Math.png'
import SD from '../assets/homePage/SD.png'
import heroBoy from '../assets/homePage/hero-boy-reading.png'
import SMP from '../assets/homePage/SMP.png'
import SMA from '../assets/homePage/SMA.png'
import CatOnBooks from '../assets/homePage/catonbooks.png'

import ListCourses from './ListCourses.js'
import Header from './header'
import Footer from './Footer'


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
                                        <label>Matematika</label>
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
        <Container fluid className="mt-Custom10" style={{ background: "#EBE7D9"}}>
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

        <Container>
            {/* Subscribstion */}
            <div className='mt-Custom20 text-center mb-5'>
                <h2 className='fw-bold'>Berlangganan</h2>
                <p className='text-secondary'>Sed quam sem, varius in finibus nec, lacinia at leo.</p>
                <div align="center" className='mb-4'>
                    <div className='subs-Month p-1' style={{ width: "15%" }}>
                        <div className='btn-Custom fw-bold'>
                            Monthly
                        </div>
                    </div>
                </div>
                
                <Row className="row justify-content-center md-3 w-100">
				<Col>
					<Card
						style={{ width: "100%" }}
						className="card-Subs mb-5 p-2 mx-2 text-start md-3">
						<Card.Body>
							<Card.Title className="fw-600 fs-2">Free</Card.Title>
							<p className="fs-6 text-secondary">Perfect to get started</p>
							<div className="Subs-Card-Price my-4">
								<label className="fs-2 fw-bold">Rp. 0</label>
								<label className="fw-400 fs-6"> /month</label>
							</div>
							<label className="fs-5 mb-3">Free include:</label>
							<div className="mb-5">
								<ul className="list-unstyled">
									<li className="fs-6 fw-400 py-2">
										<IoMdCheckboxOutline
											size={20}
											style={{ color: "#F55139" }}
										/>
										Dapat mengakses max.2 materi
									</li>
									<li className="fs-6 fw-400 py-2">
										<IoMdCheckboxOutline
											size={20}
											style={{ color: "#F55139" }}
										/>{" "}
										Lorem ipsum dolor sit amet.
									</li>
									<li className="fs-6 fw-400 py-2">
										<IoMdCheckboxOutline
											size={20}
											style={{ color: "#F55139" }}
										/>{" "}
										Lorem ipsum dolor sit amet.
									</li>
									<li className="fs-6 fw-400 py-2">
										<IoMdCheckboxOutline
											size={20}
											style={{ color: "#F55139" }}
										/>{" "}
										Lorem ipsum dolor sit amet.
									</li>
								</ul>
							</div>
							<button
								className="btn-Custom px-2 py-3"
								style={{ width: "100%" }}>
								Berlangganan
							</button>
							<label className="text-center fs-6 mt-2 text-secondary">
								*Syarat dan ketentuan berlaku
							</label>
						</Card.Body>
					</Card>
				</Col>
			</Row>
            </div>
            {/* End Subscribtion */} 

            {/* Banner */}
            <div className='Banner-Container mt-Custom10 d-flex justify-content-center'>
                <div className='Banner-Content p-5 d-flex'>
                    <div className='Banner-Content-Text align-middle'>
                        <p className='fs-3 fw-bold'>Log in to enjoy more benefits.</p>
                        <p>Vivamus luctus nibh eget interdum eleifend. Curabitur suscipit elementum semper.</p>
                        <button className="btn-Custom py-2 px-5"> Log In </button>
                    </div>
                    <div className='Banner-Content-Image text-end'>
                        <img src={CatOnBooks} style={{ width: "60%" }}></img>
                    </div>
                </div>
            </div>
            {/* End Banner */}

            {/* Latest Courses */}
            <div className='Latest-Container mt-Custom10'>
                <div className='d-flex justify-content-between mb-4'>
                    <div>
                        <h2 className='fw-bold'>Latest Courses</h2>
                    </div>
                    <div>
                        <button className='btn-Custom py-2 px-4'>See More...</button>
                    </div>
                </div>
                <ListCourses/>
            </div>
            {/* End Latest Courses */}
        </Container>
        {/* End Content */}
        <div className='mt-Custom10'>
            <Footer/>
        </div>
    </>
  )
}

export default Homepage