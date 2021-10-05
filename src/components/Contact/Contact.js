import React from 'react';
import { Container, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container>
           <div className="d-flex img-size">
                <img src="./Contact.png" alt="" />
                <div className="d-flex align-items-center">
                    <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="fw-bold">Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@gmail.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="fw-bold">Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <button className="btn bg-info text-light">Submit</button>
                    </Form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Contact;