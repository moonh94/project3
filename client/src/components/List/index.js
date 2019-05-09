import React from "react";
import { Container, Col, Row } from "reactstrap";
function List({ children }) {
    return (
        <Container className="list-overflow-container" style={{
            textAlign: "center",
            width: 900,
            height: "auto",
            paddingTop: 20,
            paddingBottom: 20,
            marginTop: 50,
            border: 10,
            borderStyle: "solid",
            borderWidth: 1,
            background: "white",
            opacity: .9
        }}>
            <Row>
                <Col sm="2">
                </Col>
                <Col sm="8">
                    <ul className="list-group">{children}</ul>
                </Col>

                <Col sm="2">
                </Col>

            </Row>
        </Container >
    );
}

export default List;