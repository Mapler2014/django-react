import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col, Form, FormControl } from "react-bootstrap";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password:""
        };
    }
    onChange = e => {
        this.setState( { [e.target.name]: e.target.value });
    };
    OnSignupClick = () => {
        const userData = { 
        username: this.state.username,
        password: this.state.password
        };
        console.log("Sign up " + userData.username + " " + userData.password);
    };
    

    render() {
        return (
            <Container>
                <Row>
                    <Col md="4">
                        <h1>Sign up</h1>
                        <Form>
                            <Form.Group controlId="usernameID">
                                <Form.Label>User name</Form.Label>
                                <Form.Control 
                                    type = "text"
                                    name = "username"
                                    placeholder="Enter user name"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                                <FormControl.Feedback type = "invalid"></FormControl.Feedback>
                            </Form.Group>

                            <Form.Group controlId="passwordId">
                                <Form.Label>Your password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Enter passwrod"
                                    value={this.password}
                                    onChange={this.onChange}
                                />
                                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                        <Button 
                        color="primary"
                        onClick={this.OnSignupClick}
                        >Sign up</Button>
                        <p className="mt-2">
                            Already have account? <Link  to="/login">Login</Link>
                        </p>
                    
                    </Col>
                </Row>
            </Container>

        );
    }
}
export default Signup;