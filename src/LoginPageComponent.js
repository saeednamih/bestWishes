import React from 'react';

import './LoginPageComponent.css';
import {login } from './statics/Api'
import BestWishes from '../assets/imges/BestWishes.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Form, Nav, Button, Col, Row, Card, Container } from 'react-bootstrap'

export default class LoginPageComponent extends React.Component {
    constructor() {
        super()
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }
    async onSubmit(event) {
        event.preventDefault();
        const { email, password } = this.state
        const result = await login(this.state.email, this.state.password);
    }
    onInputChange({ target: { name, value } }) {
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={BestWishes} />
                            <Card.Body>
                                <Card.Text>
                                    <Form onSubmit={this.onSubmit}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>
                                                <FontAwesomeIcon icon={faUser} />    Email address</Form.Label>
                                            <Form.Control
                                                name="email"
                                                placeholder="Enter your Email"
                                                aria-label="Enter your Email"
                                                defaultValue={this.state.email.value}
                                                onBlur={this.onInputChange}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label> <FontAwesomeIcon icon={faEye} /> Password</Form.Label>

                                            <Form.Control
                                                name="password"
                                                placeholder="password"
                                                aria-label="password"
                                                defaultValue={this.state.password.value}
                                                onBlur={this.onInputChange}
                                            />
                                        </Form.Group>
                                        <Button style={{ width: '100px' }} variant="primary" type="submit">Log In</Button>
                                        <Form.Row style={{ marginTop: '10px' }}>
                                            <Button style={{ width: '100px' }} variant="primary" type="submit">Sign Up</Button>
                                        </Form.Row>
                                    </Form>
                                </Card.Text>
                                <Nav.Link href="#pricing">I forgot my password</Nav.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        );
    }
}

