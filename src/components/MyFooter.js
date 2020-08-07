import React from 'react'
import '../css/MyFooter.css'
import { Container, Row, Col } from 'react-bootstrap'
import {
    Link
  } from "react-router-dom";

export default function MyFooter(){
    return (
        <div className="MyFooter">
            <Container className='FooterContainer'>
                <Row >
                    <Col className="text-center">
                        <Link to='/'>Startseite</Link>
                    </Col>
                    <Col className="text-center">
                        <Link to='/ueberuns'>Über uns</Link>
                    </Col>
                    <Col className="text-center">
                        <Link to='/impressum'>Impressum</Link>
                    </Col>
                    <Col className="text-center">
                        <Link to='/datenschutz'>Datenschutz</Link>
                    </Col>
                    <Col className="text-center">
                        <Link to='/conni'>Künstlerin</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}