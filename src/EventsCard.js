import React from 'react'
import {Card, Row, DropdownButton, Dropdown, ButtonToolbar, Form, Col, InputGroup, FormControl } from 'react-bootstrap'
class EventsCard extends React.Component {
    constructor() {
        super()
    }
    render() {
    
          const{category,endDate,id,location,startDate,title}=this.props.events

        const count=0;
        const publishDate=15/5/2019
        return (
            <>
   <Card  as={Col} className="text-center">
    <Card.Body>
      <Card.Title>Title: {title}</Card.Title>
      <Card.Text>
            ID: {id}
      </Card.Text>
      <Card.Text>
       Category: {category}
      </Card.Text>
      <Card.Text>
        Location: {location}
      </Card.Text>
      <Card.Text>
        Date and Time: from :{startDate} to :{endDate}
      </Card.Text>
      <Card.Text>
        <small className="text-muted">wishes: {count}</small>
        <small className="text-muted">publish Date :{publishDate}</small>
      </Card.Text>
    </Card.Body>
  </Card>
</>
        );
    }
}
export default EventsCard