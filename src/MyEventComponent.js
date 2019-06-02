import React from 'react'
import EventComponent from './EventComponent'
import { getUsers, myEvents } from './statics/Api'
import EventsTable from './EventsTable'
import EventsCard from './EventsCard'
import { Button, Jumbotron, Container, CardColumns, Card, Row, DropdownButton, Dropdown, ButtonToolbar, Form, Col, InputGroup, FormControl } from 'react-bootstrap'

class MyEventComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      events: [],
      filteredArrary:[],
      input:'',
      filterBy:''
    }
    this.textInput = React.createRef();
    this.onInputChange=this.onInputChange.bind(this);
    this.onSelcetFilter=this.onSelcetFilter.bind(this);
  }
  async componentDidMount() {
    const result = await myEvents();

    this.setState({
      events: result,
      filteredArrary:result
    })
  }
  onSelcetFilter(event){
    if(event.target.value==''){
      this.textInput.current.disabled=true;
      this.setState({filterBy:''});
    }
    else
    {
      this.setState({filterBy:event.target.value});
      this.textInput.current.disabled=false;
    }
  
  }
  onInputChange() {
   if(this.textInput.current.value==''){
     this.setState({
      filteredArrary:this.state.events,
      input:''
     })
   }else{
     const temp=this.state.events.filter(event=>{
       console.log(`${this.state.filterBy}`);
      if((event[`${this.state.filterBy}`]).includes(this.textInput.current.value))
        return true;
       else
        return false;
     });
     this.setState({
      input:this.textInput.value,
      filteredArrary:temp
     })
   }
  }
  render() {
    return (
      <>
        <Jumbotron fluid>
          <Container>
            <Col></Col>
            <Col xs={6}>
              <h1>My Events</h1>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <Form.Control as="select"
                    name='selectFilter'
                    
                      onChange={this.onSelcetFilter} >
                    <option value=''>Filter By :</option>
                    <option value='id'>Event ID</option>
                    <option value='category'>Category</option>
                    <option value='location'>Location</option>
      
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
              <Row> <a href="createEvent.html" class="btn btn-primary my-2">Create A New Event</a>
                <a href="SearcEvent.html" class="btn btn-secondary my-2">Search  Event</a></Row>
            </Col>
            <Col></Col>
          </Container>
        </Jumbotron>
        <Row>
          <Container>
            {this.state.filteredArrary.map(event => <EventsCard events={event} />)}
          </Container>
        </Row>
      </>
    )
  }
}
export default MyEventComponent