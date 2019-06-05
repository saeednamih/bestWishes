import React from 'react'


import { Image,Modal,Card, Button, Row, DropdownButton, Dropdown, ButtonToolbar, Form, Col, InputGroup, FormControl, Container } from 'react-bootstrap'
class WishCard extends React.Component {
  constructor() {
    super()
    this.state = {
      show: false,
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


handleClose() {
  this.setState({ show: false });
}

handleShow() {
  this.setState({ show: true });
}
  render() {
    const { from, body, image } = this.props.wish
    return (
<>
      <Card>
        <Card.Img variant="top" style={{ height: '150px' }} src={image} />
        <Card.Body>
          <Card.Title>Wish You</Card.Title>
          <Card.Text>
            from: {from}
          </Card.Text>
          <Card.Text>
            {body}
          </Card.Text>

        </Card.Body>

   
            <ButtonToolbar>
            
              <Button onClick={this.handleShow} variant="outline-secondary" size="sm">
               View
                  </Button>
              <Button variant="outline-secondary" size="sm">
                Edit
            </Button>
            </ButtonToolbar>
     
      </Card>
      <>
        <Modal   
         
          centered={false}
        show={this.state.show} onHide={this.handleClose}>
          <Modal.Header   closeButton>
            <Modal.Title>
              <Image variant="top" style={{ height: '150px' }} src={image}/>
              </Modal.Title>
          </Modal.Header>
          <Modal.Body
         scrollable={true}
          >
            <p>From : {from}</p>
            <p>wish you : {body}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
</>
        );
    }
}
export default WishCard