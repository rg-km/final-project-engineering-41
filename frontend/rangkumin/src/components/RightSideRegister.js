import '../App.css';
import React, {Component} from 'react';
import ellipseReg from '../assets/registerPage/ellipseReg.png';
import vectorReg from '../assets/registerPage/vectorReg.png';
import logo from '../assets/loginPage/logo.png';
import { Form, Button, Container } from 'react-bootstrap';

export class RightSideRegister extends Component {
    
    render() {
        return (
      <body>
        <div className='side'>
        <img className='ellipseReg' src={ellipseReg} alt="ellipseReg" />
        <img className='vectorReg' src={vectorReg} alt="3D Model" />
        <img className='logo-register' src={logo} alt="logo-register" />
        <h1 fontSize="4xl" className='text-signup'>Sign Up</h1>
        <h4 fontSize="4xl" className='text2-signup'><center>Please Enter Your Detail.</center></h4>
        {/* Dekstop Form */}
        {/* <Form className='form-register'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control style={{width: "150%"}} type="email" placeholder="Enter your email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control style={{width: "150%"}} type="password" placeholder="*******" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <div className="d-grid gap-2">
          <Button style={{width: "150%",backgroundColor: "#FF725E", border: "none", color: "black", fontWeight: "bold"}} size='xl' type="submit">
                     Login              
          </Button>
          </div>
          <Form.Text className="text-muted">
          Don’t have any account? <a className='sign-up-button' href='#'>Sign Up</a>
            </Form.Text>
        </Form> */}
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
        </div>
      </body>
        )
    }
}