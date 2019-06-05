import React from 'react'
import WishCard from './WishCard'
import EventComponent from './EventComponent'
import { getUsers, myEvents } from './statics/Api'
import EventsTable from './EventsTable'
import EventsCard from './EventsCard'
import {NavLink} from 'react-router-dom'

import { Button, Jumbotron, Container, CardColumns, Card, Row, DropdownButton, Dropdown, ButtonToolbar, Form, Col, InputGroup, FormControl } from 'react-bootstrap'

class FilterTool extends React.Component {
  constructor() {
    super()
    this.state = {
      input:'',
      filterBy:''
    }
    this.textInput = React.createRef();
    this.onInputChange=this.onInputChange.bind(this);
    this.onSelcetFilter=this.onSelcetFilter.bind(this);
  }
  onSelcetFilter(event){
    this.textInput.current.value="";
    if(event.target.value==''){
      this.textInput.current.disabled=true;
      this.setState({filterBy:''});     
    }
    else
    {
      this.setState({filterBy:event.target.value});
      this.textInput.current.disabled=false;
    }
    this.onInputChange();
  }
  onInputChange() {
    this.setState({input:this.textInput.current.value});

    this.props.onInputChange(this.textInput.current.value,this.state.filterBy);
   }
  render() {
    return (
      <>
          <Container>
          <h4 >{this.props.pageTitle}</h4>
            <hr />
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <Form.Control as="select"
                    name='selectFilter'
                      onChange={this.onSelcetFilter} >
                    <option value=''>Filter By :</option>
                    {this.props.filterBy.map(
                      item=><option value={item} key={item}>{item}</option>
                      )}
      
                  </Form.Control>
                </InputGroup.Prepend>
                <FormControl 
                aria-describedby="basic-addon1"
                name="filterinput"
                placeholder="Type To Filte"
                defaultValue={this.state.input}
                onChange={this.onInputChange}
                ref={this.textInput} 
                disabled={true}/>
              </InputGroup> 
                    </Container>
      </>
    )
  }
}
export default FilterTool