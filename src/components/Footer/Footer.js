import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const angleIcon = <FontAwesomeIcon icon={faAngleDoubleRight} />
    
    return (
        <div className="footer-bg pt-5 pb-1">
            <Container>
                <Row>
                    <Col xs={{ order: 'first' }}>
                        <img className="logo-size" src="./logo.png" alt="" />
                        <p className="text-color">Free Online Literature with more than 2000 Classic Texts. Also includes Study Guides to the most read books and Help for Teachers.</p>
                    </Col>
                    <Col xs>
                        <h4 className="title-color">Footer Navbar</h4>
                        <Stack gap={3}>
                            <NavLink
                            className="btn-color"
                            to="/home"
                            >
                            {angleIcon} Home
                            </NavLink>
                            <NavLink
                            className="btn-color"
                            to="/servicess"
                            >
                            {angleIcon} Services
                            </NavLink>
                            <NavLink
                            className="btn-color"
                            to="/about"
                            >
                            {angleIcon} About
                            </NavLink>
                            <NavLink
                            className="btn-color"
                            to="/contact"
                            >
                            {angleIcon} Contact
                            </NavLink>
                        </Stack>
                    </Col>
                    <Col xs={{ order: 'last' }}>
                        <h4 className="btn-color">News Letter</h4>
                        <div className="search">
                            <h6 className="btn-color">Name*</h6>
                            <input className="search-input" type="text" placeholder="Search" />
                            <button className="search-btn">View All Events</button>
                        </div>
                    </Col>
                </Row>
                <p className="text-light text-center mt-5">Copyright 2021 by Palash</p>
            </Container>
        </div>
        
    );
};

export default Footer;