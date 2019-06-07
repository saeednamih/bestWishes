import React from 'react'
import WishCard from './WishCard'
import { NavLink } from 'react-router-dom'
import { getUsers, EventWishes } from './statics/Api'
import { CardGroup,Button,Jumbotron, Container, CardColumns, Card, Row, DropdownButton, Dropdown, ButtonToolbar, Form, Col, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow,faClock,faCalendar,faSearch, faGift, faCity, faTimes } from "@fortawesome/free-solid-svg-icons";
class AddWishToEvent extends React.Component {
    constructor(){
        super()
        this.state={
            events:[],
            wishes:[]
        }
    }
    async componentDidMount() {
        const result = await EventWishes();
        console.log(result)
      
        console.log(this.state.events[0])
    }
    render() {
        const{category,endDate,id,location,startDate,title}=this.state.events

        return (
            <>
                    <Container>
                        <Row> 
                        <InputGroup  className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text>Title</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Amount (to the nearest dollar)"
     type="text" 
     disabled 
     value ={title}/>
         <InputGroup.Append>
      <InputGroup.Text>   <FontAwesomeIcon icon={faGift} /></InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
                        <InputGroup className="mb-3">
  <InputGroup.Prepend>
    <InputGroup.Text>Category</InputGroup.Text>
  </InputGroup.Prepend>
  
  <FormControl 
   type="text" disabled
   value ={category}/>
  <InputGroup.Append>
      <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
    </InputGroup.Append>
  <InputGroup.Prepend>
    <InputGroup.Text>Location</InputGroup.Text>
  </InputGroup.Prepend>
  <FormControl 
   type="text" disabled
   value ={location}/>
  <InputGroup.Append>
      <InputGroup.Text>  <FontAwesomeIcon icon={faLocationArrow} /> </InputGroup.Text>
    </InputGroup.Append>
</InputGroup>

<InputGroup className="mb-3">
  <InputGroup.Prepend>
    <InputGroup.Text>Start Date</InputGroup.Text>
  </InputGroup.Prepend>
  <FormControl 
   type="text" disabled
   value ={startDate}/>
  <InputGroup.Append>
      <InputGroup.Text> <FontAwesomeIcon icon={faCalendar} /></InputGroup.Text>
    </InputGroup.Append>
  <InputGroup.Prepend>
    <InputGroup.Text>End Date</InputGroup.Text>
  </InputGroup.Prepend>
  <FormControl 
 type="text" disabled
 value ={endDate}/>
  <InputGroup.Append>
      <InputGroup.Text> <FontAwesomeIcon icon={faCalendar} /></InputGroup.Text>
    </InputGroup.Append>
</InputGroup>

        <NavLink to='/CreateWish'>
<Button variant="primary" type="submit">
    Add a wish
  </Button>
</NavLink>

  </Row>
  
         
                    </Container>
            <Row>

            </Row>
            <Container>
            <CardColumns>
                { this.state.wishes.map(wish=> <WishCard wish={wish} /> )}
           
            </CardColumns>
            </Container>
           </>

        );
    }
}
export default AddWishToEvent