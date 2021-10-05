import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
           <div className="d-flex img-size">
                <img src="./About.png" alt="" />
                <div className="d-flex align-items-center">
                    <div>
                        <h1>Changing learning for the better.</h1>
                        <p>Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;