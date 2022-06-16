import '../styles/register.css';
import React, {Component} from 'react';
import ellipseReg from '../assets/registerPage/ellipseReg.png';
import vectorReg from '../assets/registerPage/vectorReg.png';
import logo from '../assets/loginPage/logo.png';
import phone from '../assets/Icons/phone.svg';
import mail from '../assets/Icons/mail.svg';
import lock from '../assets/Icons/lock.svg';
import { Form, Button, InputGroup } from 'react-bootstrap';

export function RightSideRegister() {
    
        return (
      <body>
        <div className='side'>
          <img className='ellipseReg' src={ellipseReg} alt="ellipseReg" />
          <img className='vectorReg' src={vectorReg} alt="3D Model" />
          <img className='logo-register' src={logo} alt="logo-register" />
          </div>
        <h1 fontSize="4xl" className='text-signup'>Sign Up</h1>
        <h4 fontSize="4xl" className='text2-signup'><center>Please Enter Your Detail.</center></h4>
        {/* Dekstop Form */}
        <Form style={{width: "30%"}} className='form-register'>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nama</Form.Label>
            <Form.Control type="name" placeholder="Masukkan nama anda" />
          </Form.Group>
          <Form.Label>Gender</Form.Label>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                    <div class="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                      <label className="form-check-label" for="inlineRadio1">Laki - Laki</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                      <label className="form-check-label" for="inlineRadio2">Perempuan</label>
                    </div>
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Label>No. Telepon</Form.Label>
          <InputGroup>
          <InputGroup.Text style={{backgroundColor: "white"}} id="basic-addon1"><img src={phone}></img></InputGroup.Text>
          <Form.Control placeholder="Masukkan nomor telepon" />
          </InputGroup>
          </Form.Group>
      <Form.Group  className="mb-3">
          <Form.Label>Email</Form.Label>
          <InputGroup>
        <InputGroup.Text style={{backgroundColor: "white"}} id="basic-addon1"><img src={mail}></img></InputGroup.Text>
        <Form.Control type="text" placeholder="Masukkan email anda" />
      </InputGroup>
      </Form.Group>
      <Form.Group  className="mb-3">
          <Form.Label>Password</Form.Label>
          <InputGroup>
        <InputGroup.Text style={{backgroundColor: "white"}} id="basic-addon1"><img src={lock}></img></InputGroup.Text>
        <Form.Control type="text" placeholder="Masukkan password anda" />
      </InputGroup>
      </Form.Group>
          <div className="d-grid gap-2 mb-3">
          <Button style={{backgroundColor: "#FF725E", border: "none", color: "white", fontWeight: "bold"}} size='xl' type="submit">
                     Login              
          </Button>
          </div>
          <Form.Text className="text-muted">
          Already have an account? <a className='sign-up-button' href='#'>Sign In</a>
            </Form.Text>
        </Form>
        {/* Mobile Form */}
        {/* <Form className='mobile-login-form'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="*******" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <div className="d-grid gap-2">
          <Button style={{backgroundColor: "#FF725E", border: "none", color: "black", fontWeight: "bold"}} size='xl' type="submit">
                     Login              
          </Button>
          </div>
          <Form.Text className="text-muted">
          Don’t have any account? <a className='sign-up-button' href='#'>Sign Up</a>
            </Form.Text>
        </Form> */}
      </body>
        )
}
