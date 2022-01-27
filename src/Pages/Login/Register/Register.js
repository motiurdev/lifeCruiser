import React, { useState } from 'react';
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { user, registerUser, isLoading, authError } = useAuth()
    const navigate = useNavigate()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogin = { ...loginData }
        newLogin[field] = value;
        setLoginData(newLogin)
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        registerUser(loginData.email, loginData.password, loginData.displayName, navigate)
        setLoginData("")
    }
    return (
        <Container>
            <div className='login-form'>
                {!isLoading && <Form onSubmit={handleOnSubmit}>
                    <h2 className='text-center py-3'>Register Form</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Name"
                            name="displayName"
                            onChange={handleOnChange}
                            required
                        />
                    </Form.Group>
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
                </Form>}
                <Link to="/login" className="nav-link text-white text-center">Already Have an Account! Login.</Link>
                {isLoading && <Spinner animation="grow" />}
                {user.email && <Alert variant="success">
                    User create successfully
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

export default Register;