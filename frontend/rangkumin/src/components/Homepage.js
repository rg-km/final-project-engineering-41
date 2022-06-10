import React from 'react'

import '../styles/homepage.css'

import { Container, Row, Col, Card } from 'react-bootstrap'


import { TbMathSymbols } from "react-icons/tb";

import heroReading from '../assets/hero-reading.png'
import contentCard from '../assets/content-card.png'
import Header from './Header'

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

            {/* About & Categories */}
            <div className='hero-About'>
                <div>

                </div>
                <div>

                </div>
                <div className='hero-Content'>
                    <p>aku</p>
                </div>
            </div>
            {/* End About & Categories */}
        </Container>
        {/* End Content */}
    </>
  )
}

export default Homepage