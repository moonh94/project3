import React from "react";

import { Container, Row, Col } from "reactstrap";

function Footer() {
    return (
        <div 
        style={{
            width: "100%",
            height: 90,
            position: "static",
            left: 0,
            right: 0,
            bottom: 0,
            background: "#E9ECEF",
            paddingTop: 20,
            marginTop: 40,
            
        }} >
            <Container>
                <Row>
                    <Col sm="2">
                        Contact Us
                </Col>
                    <Col sm="2">
                        About Us
                </Col>
                    <Col sm="2">
                        FAQ
                </Col>
                </Row>
            </Container>
         </div>
    )
}

export default Footer;