import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container,
        Button,
        Row,
        Col,
        Form,
        FormControl
} from "react-bootstrap";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };
    OnLoginClick = () => {
        const userData = {
            username: this.state.username,
            password: this.state.password
        };
        console.log("Login "+ userData.username+ " "+ userData.password);
    };
    render() {
        return(
            <Container>
                <Row>
                    <Col md = '4'>
                        <Form>
                            <Form.Group controlId="usernameID">
                                <Form.Label>User name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    placeholder="enter user name"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                                <FormControl.Feedback type="invalid"></FormControl.Feedback>
                            </Form.Group>

                            <Form.Group controlId="passwordId">
                                <Form.Label>Your password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="enter password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                        <Button color="primary" onClick={this.OnLoginClick}>Login</Button>
                        <p className="mt-2">
                            Don't have account? <Link to={"/signup"}Signup></Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default Login;