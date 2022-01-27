import React, { useState } from 'react';
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, isLoading, authError, loginUser, signInWithGoogle } = useAuth()

    const location = useLocation()
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogin = { ...loginData }
        newLogin[field] = value;
        setLoginData(newLogin)
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        loginUser(loginData.email, loginData.password, location, navigate)
        console.log(loginData);
    }
    return (
        <Container>
            <div className='login-form'>
                <Form onSubmit={handleOnSubmit}>
                    <h2 className='text-center py-3'>Login Form</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            onChange={handleOnChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name='password'
                            onChange={handleOnChange}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Link to="/register" className="nav-link text-white text-center">Create New Account! Register.</Link>
                <Button onClick={() => signInWithGoogle(location, navigate)} variant="dark" className='text-white d-block m-auto'><i class="fab fa-google me-2"></i>Google Sign In</Button>
                {isLoading && <Spinner animation="grow" />}
                {user.email && <Alert variant="success">
                    login successfully
                </Alert>
                }
                {
                    authError && <Alert variant="danger">
                        {authError}
                    </Alert>
                }
            </div>
        </Container>
    );
};

export default Login;