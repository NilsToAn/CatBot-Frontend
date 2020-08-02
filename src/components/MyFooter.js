import React from 'react'
import '../css/MyFooter.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function MyFooter(){
    return (
        <div className="MyFooter">
            <Container className='FooterContainer'>
                <Row >
                    <Col className="text-center">
                        <a href='/ueberuns'>Über uns</a>
                    </Col>
                    <Col className="text-center">
                        <a href='/impressum'>Impressum</a>
                    </Col>
                    <Col className="text-center">
                        <a href='/conni'>Künstlerin</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}