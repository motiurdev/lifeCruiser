import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css'

const Navigation = () => {
    const { user, logOut, admin } = useAuth()
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className='lh-lg'>Life Cruiser</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ms-5">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                        <NavLink to="/experience" className="nav-link">Experience</NavLink>
                        <NavLink to="/contact" className="nav-link">Contact us</NavLink>
                        {admin &&
                            <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>}
                    </Nav>
                    <Nav className='ms-5 d-flex align-items-center'>
                        {user.displayName && <span className='text-white'>{user.displayName}</span>}
                        <NavLink to="/experience" className="nav-link"><i class="fas fa-user-circle fs-3"></i></NavLink>
                        {user.email ? <button onClick={() => logOut()} type="button" className="btn btn-color">logout</button>
                            : <NavLink to="/login" className="nav-link">Login</NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;