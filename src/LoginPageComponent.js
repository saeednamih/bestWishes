import React from 'react';
import { getUsers, login } from './statics/Api'
import './LoginPageComponent.css';
import { Form, Button, Col, Row, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import  BestWishes from '../assets/imges/BestWishes.png'
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
        const {email,password}=this.state
        const result= await login(this.state.email, this.state.password);

       console.log(result.userId);
    }

    onInputChange({ target: { name, value } }) {
        this.setState({
            [name]: value
        });
        // console.log(name, value);
    }

    render() {
        return (
            <>
                {/* <div className="row">
                    <div className="col-sm-3">
                    </div>
                    <div className="col-sm-6">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">User Name</label>
                                <input type="email" name="username" className="form-control" aria-describedby="emailHelp"
                                    placeholder="Enter email or user Name" onChange={this.onInputChange} />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" name="password" password="userName" className="form-control" placeholder="Password"
                                    onChange={this.onInputChange} />
                            </div>
                            <div className="LoginButton">
                                <button type="submit" className="btn btn-primary">Log In</button>
                                <p></p>
                                <p><button type="submit" className=" registerbtn btn btn-primary">Sign Up</button></p>
                                <p><a href="">I forgot my password</a></p>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-3">
                    </div>
                </div> */}
                <Row>
                    <Col></Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={BestWishes}/>
                    <Card.Body>
                        <Card.Title>Log In</Card.Title>
                        <Card.Text>
                        <Form onSubmit={this.onSubmit}>
                                <Form.Row>
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
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
          
                             </Form.Text>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
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
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>
                                </Form.Row>
                                <Row>
                        <Button variant="primary" type="submit">Log In</Button>
                        </Row>
                        <Row  style={{marginTop:'10px'}}>
                        <Button variant="primary" type="submit">Sign Up</Button>
                        </Row>
                            </Form>
                        </Card.Text>

                        <p><a href="">I forgot my password</a></p>
                    </Card.Body>
                </Card>
                    </Col>

                    <Col></Col>
                </Row>

               
           
            </>


        );
    }
}

