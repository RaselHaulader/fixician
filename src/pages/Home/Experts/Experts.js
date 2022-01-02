import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import expert1 from '../../../Images/Experts/expert1.jpg';
import expert2 from '../../../Images/Experts/expert2.jpg';
import expert3 from '../../../Images/Experts/expert3.jpg';

const Experts = () => {
    return (
        <div >
             <h2 className="text-center fw-bold my-5">Meet Our Experts</h2>
           <div className="d-flex justify-content-center">
           <Card className="border-0" style={{ width: '60rem' }}>
            <Row>
                <Col xs={6} md={4} >
                <Card.Img variant="top" src={expert1}/>
                <Card.Body className="bg-light">
                    <Card.Title className="text-center mt-3 fs-4 fw-bold">Md Rasel Haulader</Card.Title>
                    <Card.Text className="text-center">
                        Chairman
                    </Card.Text>
                </Card.Body>
                </Col>
                <Col xs={6} md={4}>
                <Card.Img variant="top" src={expert2}/>
                <Card.Body className="bg-light">
                    <Card.Title className="text-center mt-3 fs-4 fw-bold">Sujan Shaikh</Card.Title>
                    <Card.Text className="text-center">
                        Managing Director
                    </Card.Text>
                </Card.Body>
                </Col>
                <Col xs={6} md={4} >
                <Card.Img variant="top" src={expert3}/>
                <Card.Body className="bg-light">
                    <Card.Title className="text-center mt-3 fs-4 fw-bold">Tahmina Chowdhuri</Card.Title>
                    <Card.Text className="text-center">
                        Vice Managing Director
                    </Card.Text>
                </Card.Body>
                </Col>
            </Row>   
            </Card>
           </div>
        </div>
    );
};

export default Experts;