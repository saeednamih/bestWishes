import React from 'react';

import './RegisterPageComponent.css'
import { login } from './statics/Api'
import BestWishes from '../assets/imges/BestWishes.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Form, Nav, Button, Col, Row, Card, Container } from 'react-bootstrap'
export default class RegisterPageComponent extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={BestWishes} />
                            <Card.Body>
                                <Card.Text>
                                    <Form>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formFirstname">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control 
                                                 type="text"
                                                  placeholder="first name"
                                                 />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridLastname">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control 
                                                type="Lastname"
                                                 placeholder="last name"
                                                  />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Group controlId="formEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control 
                                             type="email" 
                                             placeholder="Enter email"
                                            />
                                        </Form.Group>

                   

                                        <Form.Group controlId="formGridpassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control 
                                            type="password"
                                             placeholder="Password"
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formGridPassword2">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control 
                                            type="password"
                                             placeholder="Password"
                                            />
                                        </Form.Group>

    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={3}>
        Gender :
      </Form.Label>
      <Col sm={9    }>
        <Form.Check
          type="radio"
          label="male"
          name="Gender"
          id="male"
        />
        <Form.Check
          type="radio"
          label="female"
          name="Gender"
          id="female"

        />
      </Col>
    </Form.Group>

        
                                        <Button variant="primary" type="submit">
                                            Submit
                                            </Button>
                                    </Form>
                                </Card.Text>
                             
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col></Col>
                </Row>
            </Container>


        );
    }
}
{/* <div className="row">
<div className="col-sm-3 ">
</div>
<div className="col-sm-6">
    <form>
        <div className="row">
            <div className="col">
                <input type="text" className="form-control" placeholder="First name" />
            </div>
            <div className="col">
                <input type="text" className="form-control" placeholder="Last name" />
            </div>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Birth Date:</label>
            <input type="date" className="form-control" id="exampleInputDate" aria-describedby="Date" />
        </div>
        <div className="form form-group">

            <label>Gender:</label>
            <div className="form-check form-check-inline">

                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                <label className="form-check-label" htmlFor="inlineRadio3">Other</label>
            </div>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">User Name</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Enter email or user Name" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="LoginButton">
            <button type="submit" className="btn btn-primary">Sign Up</button>
        </div>
    </form>
</div>
<div className="col">
</div>
</div> */}
