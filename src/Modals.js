import React from 'react'
import { Image ,Button, Jumbotron, Container, CardColumns, Card, Row, DropdownButton, Dropdown, ButtonToolbar, Form, Col, InputGroup, FormControl } from 'react-bootstrap'

class Modal extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.handleClose = this.handleClose.bind(this);
      this.state = {
        show: true,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    // handleShow() {
    //   this.setState({ show: true });
    // }
  
    render() {
      console.log(this.props.wish);
     // const{body,from,image}=this.props.wish
      this.setState({show:this.props.show})
      return (
        <>
          {/* <Button variant="primary" onClick={this.handleShow}>
            Launch demo modal
          </Button> */}
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title> 
              <Image  variant="top" style={{ height: '150px' }} src={"image"} fluid />
   
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                From : {"from"}
              </p>
              <p>
                {"body"}
              </p>
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
      );
    }
  }
  
export default Modal