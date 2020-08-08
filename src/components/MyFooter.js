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
                        <Link to='/impressum'>Impressum</Link>
                    </Col>
                    <Col className="text-center">
                        <Link to='/ueberuns'><nobr>Über Uns</nobr></Link>
                    </Col>
                    <Col className="text-center">
                        <a href='/'>CatBot</a>
                    </Col>
                    <Col className="text-center">
                        <a href='https://www.instagram.com/antlerbuddy/' target="_blank" rel="noopener noreferrer">Künstlerin</a>
                    </Col>
                    <Col className="text-center">
                        <Link to='/datenschutz'>Datenschutz</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}