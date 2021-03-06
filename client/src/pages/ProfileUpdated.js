import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row} from "reactstrap";



const ProfileUpdated = () => {
    return (
        <>
            <Container style={{
                textAlign: "center",
                width: 900,
                height: "auto",
                paddingTop: 20,
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
                        <p>Your profile has been updated.</p>

                        <li className="nav-link">
                            <Link to={"/"}>Return Home</Link>
                        </li>
                    </Col>
                    <Col sm="2">
                    </Col>
                </Row>
      
            </Container>
        </>


    )
}

export default ProfileUpdated;