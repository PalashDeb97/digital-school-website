import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Servicess = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])

    return (
        <Container>
            <Row xs={1} md={3} className="g-4 mt-5 mb-5">
                {
                    services.map(service => 
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={service?.image} />
                                <Card.Body>
                                <Card.Title>{service?.courseName}</Card.Title>
                                <Card.Text>Price: ${service?.price}</Card.Text>
                                <NavLink to={`/servicess/${service?.id}`}>
                                    <button className="btn btn-info text-light">Details</button>
                                </NavLink>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default Servicess;