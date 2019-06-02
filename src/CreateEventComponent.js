import React from 'react'
import { NavLink } from 'react-router-dom'
import { ButtonGroup,ToggleButton ,Button,  Container, Row,  Dropdown, ButtonToolbar, Form, Col, InputGroup, FormControl } from 'react-bootstrap'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow,faClock,faCalendar,faSearch, faGift, faCity, faTimes } from "@fortawesome/free-solid-svg-icons";



class CreateEventComponent extends React.Component {
    render() {
        // return (
        //     <div class="container-fluid">
        //         <div class="row mt-5">
        //             <div class="col-md-2">
        //             </div>
        //             <div class="col-md-8">
        //                 <div>
        //                     <div class="form-group">
        //                         <label for="slctCategory">Category</label>
        //                         <select class="form-control" id="slctCategory">
        //                             <option value="">Select Category</option>
        //                             <option value="Angular">Birthday</option>
        //                             <option value="JavaScript">Wedding</option>
        //                             <option value="React">Baby</option>
        //                             <option value="Node">Game</option>
        //                         </select>
        //                         <span class="error hidden">*</span>
        //                     </div>
        //                     <div class="form-group">
        //                         <label for="txtTitle">Title</label>
        //                         <input type="text" class="form-control" id="txtTitle"
        //                             placeholder="Please Enter Your Event Name" />
        //                     </div>
        //                     <div class="form-group">
        //                         <label for="txtTime txtTime">When</label>
        //                         <input type="date" id="txtDate" />
        //                         <input type="time" id="txtTime" />
        //                         <span class="error hidden">*</span>
        //                     </div>
        //                     <div class="form-group">
        //                         <label for="where">Where</label>
        //                         <input type="text" class="form-control" id="where"
        //                             placeholder="Please Enter The Location" />
        //                     </div>
        //                     <NavLink to='/MyEvents'>
        //                         <button id="cerateEvent" class="btn btn-primary btn-block">Cerate Event</button>
        //                     </NavLink>
        //                     <NavLink to='/MyEvents'>
        //                         <button id="back" class="btn btn-primary btn-block">Back To  My Events</button>
        //                     </NavLink>
        //                 </div>
        //             </div>
        //             <div class="col-md-2 event-preview">
        //             </div>
        //         </div>
        //         <div class="row mt">
        //             <div id="eventsGallery" class="container-fluid">
        //             </div>

        //         </div>
        //     </div>
        // );
        return (
     
              <Container>
                <Row> 
                <Col md={{ span: 3, offset: 3 }}>  
                    <h4 >Create New Event</h4>
                    <hr />
                    </Col>
                    </Row>
                    <Form onSubmit={this.onSubmit}>
                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="formControlTitle">
                      <Form.Label>Title</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faGift} />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          
                        />
                      </InputGroup>
         
         
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formControlCategory">
                      <Form.Label>Category</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faSearch} />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          
                        />
                      </InputGroup>
         
         
                    </Form.Group>
                  </Form.Row>   
                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="formControlStratDate">
                      <Form.Label>Start Date</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faCalendar} />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          type="Date"
                        />
                      </InputGroup>
         
         
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formControlStartTime">
                      <Form.Label>StratTime</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faClock} />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          type="time"
                        />
                      </InputGroup>
         
         
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="formControlEndDate">
                      <Form.Label>End Date</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faCalendar} />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          type="Date"
                        />
                      </InputGroup>
         
         
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formControlEndTime">
                      <Form.Label>End Time</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faClock} />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          type="time"
                        />
                      </InputGroup>
         
         
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="formControlStartDate">
                      <Form.Label>Location</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faLocationArrow} />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          
                        />
                      </InputGroup>
         
         
                    </Form.Group>
                    <Col md="4">
                    <Button  style={{marginTop:'51px'}} variant="primary" type="submit">
                    Submit
                         </Button>
                    </Col>
                    </Form.Row>
               </Form>
               
                    

              </Container>

          );
    }
}
export default CreateEventComponent