import React from 'react'

import { Image,Modal,Card, Button, Row, DropdownButton, Dropdown, ButtonToolbar, Form, Col, InputGroup, FormControl, Container } from 'react-bootstrap'


class PopUp extends React.Component{
constructor(){
    super();
this.state={show:true}
this.handleShow = this.handleShow.bind(this);
this.handleClose = this.handleClose.bind(this);
}

handleClose() {
  this.setState({ show: false });
}
componentWillReceiveProps(nextProps) {
    this.handleShow();
}
handleShow() {
    this.setState({ show: this.props.show });
  }
render(){
    console.log( this.props.wish);
    const { from, body, image } = this.props.wish
    return(<Modal     show={this.state.show} onHide={this.handleClose}>
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
      </Modal>);
}
    
}
export default PopUp