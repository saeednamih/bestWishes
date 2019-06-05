import React from 'react'
import { NavLink } from 'react-router-dom'
import { ButtonGroup, ToggleButton, Button, Container, Row, Dropdown, ButtonToolbar, Form, Col, InputGroup, FormControl } from 'react-bootstrap'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faClock, faCalendar, faSearch, faUser, faCity, faTimes, faGift } from "@fortawesome/free-solid-svg-icons";



class CreateEventComponent extends React.Component {
  render() {

    return (

      <Container>
        <Row>
          <Col>
            <h4 >Create New Event</h4>
            <hr />
          </Col>
        </Row>
        <Form onSubmit={this.onSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="8" controlId="formControlTitle">
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Title:&nbsp; &nbsp; &nbsp; &nbsp; </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                />
                <InputGroup.Append>
                  <InputGroup.Text>   <FontAwesomeIcon icon={faGift} /></InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>


            </Form.Group>

          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="formControlCategory">
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                  Category
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control

                />
               <InputGroup.Append>
                  <InputGroup.Text>   <FontAwesomeIcon icon={faSearch} /> </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>


            </Form.Group>
            <Form.Group as={Col} md="4" controlId="formControlStartDate">
       
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                  Location
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control

                />
                       <InputGroup.Append>
                  <InputGroup.Text>     <FontAwesomeIcon icon={faLocationArrow} /> </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>


            </Form.Group>




          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="4" controlId="formControlStratDate">
     
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                  Start Date
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="Date"
                />
                                      <InputGroup.Append>
                  <InputGroup.Text>     <FontAwesomeIcon icon={faCalendar} /> </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>


            </Form.Group>
            <Form.Group as={Col} md="4" controlId="formControlStartTime">

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                  StratTime
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="time"
                />
                   <InputGroup.Append>
                  <InputGroup.Text>     <FontAwesomeIcon icon={faClock} /> </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>

           
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="4" controlId="formControlEndDate">
              
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                  End Date
                   
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="Date"
                />
                               <InputGroup.Append>
                  <InputGroup.Text>     <FontAwesomeIcon icon={faCalendar} /> </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>


            </Form.Group>
            <Form.Group as={Col} md="4" controlId="formControlEndTime">
    
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                  End Time
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="time"
                />
                             <InputGroup.Append>
                  <InputGroup.Text>     <FontAwesomeIcon icon={faClock} />  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
 

            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit">
            Submit
                         </Button>
        </Form>



      </Container>

    );
  }
}
export default CreateEventComponent