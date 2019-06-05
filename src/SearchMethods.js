import React from 'react'
import { DropdownButton, ToggleButton, Button, Container, Row, Dropdown, ButtonToolbar, Form, Col, InputGroup, FormControl } from 'react-bootstrap'
import SearchInputText from './SearchInputText'
class SearchMethods extends React.Component {
    constructor() {
        super()
        this.showSearchMethod = this.showSearchMethod.bind(this)
        this.state={
            select:'ID'
        }
    }
    showSearchMethod({ target: { name, value } }) {
        console.log(name, value)
        this.setState({
          select:value
        })
    }
    render() {
        return (
            <>

                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select Search Method</Form.Label>
                        <Form.Control
                            as="select"
                            name="select"

                            onChange={this.showSearchMethod}>
                            <option value="ID">Search By Event Id</option>
                            <option value="Details">Search Bt Event Details</option>
                        </Form.Control>
                    </Form.Group>
                   {this.state.select=="ID"?
                    <SearchInputText input="ID" type="text"/>:<>
                     <SearchInputText input="Title" type="text"/>
                    <SearchInputText input="Category" type="text"/>
                    <SearchInputText input="Start Date" type="Date"/>
                    <SearchInputText input="End Date" type="Date"/>
                    <SearchInputText input="Location" type="text"/>
                   
                    </>
                    }
                   


                    <Button   variant="primary" type="submit">
                     Submit
                </Button> 
                </Form>
            </>
        );
    }
}
export default SearchMethods