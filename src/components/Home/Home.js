import React from 'react';
import { Container } from 'react-bootstrap';
import Servicess from '../Servicess/Servicess';
import './Home.css';

const Home = () => {
    
    return (
        <Container>
            <div className="d-flex img-size">
                <img src="./img.png" alt="" />
                <div className="d-flex align-items-center">
                    <div>
                        <h1>Become an instructor.</h1>
                        <p>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
                    </div>
                </div>
            </div>
            <h1 className="text-center mt-5 fw-bold">SERVICES</h1>
            <Servicess/>
        </Container>
    );
};

export default Home;