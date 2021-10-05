import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar className="nav-bg" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                <img className="logo" src="./logo.png" alt="" /> 
            </Navbar.Brand>
            <Nav className="ms-auto">
                <Stack direction="horizontal" gap={3}>
                    <NavLink
                    className="btn-color"
                    to="/home"
                    activeStyle={{
                        fontWeight: "bold"
                    }}
                    >
                    Home
                    </NavLink>
                    <NavLink
                    className="btn-color"
                    to="/servicess"
                    activeStyle={{
                        fontWeight: "bold"
                    }}
                    >
                    Services
                    </NavLink>
                    <NavLink
                    className="btn-color"
                    to="/about"
                    activeStyle={{
                        fontWeight: "bold"
                    }}
                    >
                    About
                    </NavLink>
                    <NavLink
                    className="btn-color"
                    to="/contact"
                    activeStyle={{
                        fontWeight: "bold"
                    }}
                    >
                    Contact
                    </NavLink>
                </Stack>
            </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;