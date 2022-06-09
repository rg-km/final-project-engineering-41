import '../App.css';
import React, {Component} from 'react';
import ellipse from '../assets/loginPage/ellipse.png';
import model3d from '../assets/loginPage/object3d.png';
import logo from '../assets/loginPage/logo.png';
import { Form, Button, Container } from 'react-bootstrap';
import { Center } from '@chakra-ui/react';

export class LeftSideLogin extends Component {
    
    render() {
        return (
      <body>
        <div className='side'>
        <img className='ellipse' src={ellipse} alt="ellipse" />
        <img className='model3d' src={model3d} alt="3D Model" />
        <img className='logo-login' src={logo} alt="logo-login" />
        <h1 className='text-ellipse'>Pellentesque a tempus <br></br>massa. Nullam </h1>
        <h1 fontSize="4xl" className='text-signin'>Sign In</h1>
        <h4 fontSize="4xl" className='text2-signin'><center>Welcome Back Please Enter Your Detail.</center></h4>
        {/* Dekstop Form */}
        <Form className='form-login'>
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
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <div className="d-grid gap-2">
          <Button className='button-login' variant="danger" size='xl' type="submit">
                     Login              
          </Button>
          </div>
          <Form.Text className="text-muted">
          Don’t have any account? <a>Sign Up</a>
            </Form.Text>
        </Form>
        {/* Mobile Form */}
        <Form className='mobile-login-form'>
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
          <Button className='button-login' variant="danger" size='xl' type="submit">
                     Login              
          </Button>
          </div>
          <Form.Text className="text-muted">
          Don’t have any account? <a>Sign Up</a>
            </Form.Text>
        </Form>
        </div>
      </body>
        )
    }
}