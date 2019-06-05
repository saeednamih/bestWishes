import React from 'react'
import SearchMethods from './SearchMethods'
import { ButtonGroup,ToggleButton ,Button,  Container, Row,  Dropdown, ButtonToolbar, Form, Col, InputGroup, FormControl } from 'react-bootstrap'
import MyEventComponent from './MyEventComponent'
class SearchComponent extends React.Component {
    render() {
        return (
            <>
        
                <Row > 
                <Col  md="2">
                <SearchMethods/>
                </Col>
                <Col md="10">
                <MyEventComponent/>
                </Col>
                </Row>
               </>
        );
    }
}
export default SearchComponent