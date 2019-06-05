import React from 'react'
import WishCard from './WishCard'
import { NavLink } from 'react-router-dom'
import { getUsers, EventWishes } from './statics/Api'
import { CardGroup,Button,Jumbotron, Container, CardColumns, Card, Row, DropdownButton, Dropdown, ButtonToolbar, Form, Col, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faPen,faLink,faSearch, faGift, faCity, faTimes } from "@fortawesome/free-solid-svg-icons";

class CreateWishComponent extends React.Component{
    constructor(){
        super()
        this.onInputChange = this.onInputChange.bind(this);
        this.state={
            from:'',
            body:'',
            image:''
        }
    }
    onInputChange({ target: { name, value } }) {
        console.log(name,value)
        this.setState({
            [name]:value
        })
        console.log( this.state.from)
    }
 render(){
     return(
        <Container>
        <Row> 
            <Col>
<InputGroup  className="mb-3">
<InputGroup.Prepend>
<InputGroup.Text>From:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </InputGroup.Text>
</InputGroup.Prepend>
<FormControl aria-label="Amount (to the nearest dollar)"
name="from"
type="text" 
defaultValue ={this.state.from }
onChange={this.onInputChange}
/>
<InputGroup.Append>
<InputGroup.Text>   <FontAwesomeIcon icon={faUser} /></InputGroup.Text>
</InputGroup.Append>
</InputGroup>

<InputGroup  className="mb-3">
<InputGroup.Prepend>
<InputGroup.Text>Wishing you</InputGroup.Text>
</InputGroup.Prepend>
<FormControl  as="textarea" rows="9" aria-label="Amount (to the nearest dollar)"
name="body"
defaultValue ={this.state.body }
onChange={this.onInputChange}
/>
<InputGroup.Append>
<InputGroup.Text>   <FontAwesomeIcon icon={faPen} /></InputGroup.Text>
</InputGroup.Append>
</InputGroup>

<InputGroup  className="mb-3">
<InputGroup.Prepend>
<InputGroup.Text>Image URL :&nbsp; </InputGroup.Text>
</InputGroup.Prepend>
<FormControl aria-label="Amount (to the nearest dollar)"
name="image"
defaultValue ={this.state.image }
onChange={this.onInputChange}/>
<InputGroup.Append>
<InputGroup.Text>   <FontAwesomeIcon icon={faLink} /></InputGroup.Text>
</InputGroup.Append>
</InputGroup>

<NavLink to='/MyEvents'>
<Button variant="primary" type="submit">
                    Add
                         </Button>
</NavLink>
</Col>
<Col>
<WishCard wish={
    {from:this.state.from,
    body:this.state.body,
    image:this.state.image}
    }/>

</Col>
      

</Row>


    </Container>
     );
 }   
}
export default CreateWishComponent