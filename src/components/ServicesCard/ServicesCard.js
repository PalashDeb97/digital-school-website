import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServicesCard = () => {
    let {id} = useParams()
    const [details, setDetails] = useState([]);
    const [singleDetails, setSingleDetails] = useState({});

    useEffect( () => {
        fetch('/fakeDetails.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    },[]);

    useEffect( () => {
        const fullDetails = details.find((detail) => detail.id === id);
        setSingleDetails(fullDetails)
    }, [details]);

    

    return (
        <Container className="mt-5 mb-5">
            <h1 className="text-center fw-bold mb-5">FULL DETAILS</h1>
            <Row xs={1} md={1} className="g-4">
            <Col>
            <Card>
                <Card.Img variant="top" src={singleDetails?.image} />
                <Card.Body>
                <Card.Title>{singleDetails?.courseName}</Card.Title>
                <Card.Text>Price : $ {singleDetails?.price}</Card.Text>
                <Card.Text>{singleDetails?.details}</Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
    );
};

export default ServicesCard;