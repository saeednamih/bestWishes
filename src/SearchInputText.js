import React from 'react'
import { NavLink } from 'react-router-dom'
import { ButtonGroup,ToggleButton ,Button,  Container, Row,  Dropdown, ButtonToolbar, Form, Col, InputGroup, FormControl } from 'react-bootstrap'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow,faClock,faCalendar,faSearch, faGift, faCity, faTimes } from "@fortawesome/free-solid-svg-icons";



function SearchInputText(props) {
 return(
    <Form>
    <Form.Group    controlId="formControlTitle">
      <InputGroup size="sm" className="mb-1"    >
        <InputGroup.Prepend>
          <InputGroup.Text>
            {props.input}
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control  
        aria-label="Small" 
        aria-describedby="inputGroup-sizing-sm"
           type={props.type} />
           
      </InputGroup>
    </Form.Group>   

                </Form> 
 );
}
export default SearchInputText;