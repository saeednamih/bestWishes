import React from 'react'
import FilterTool from './FilterTool'


import { getUsers, myEvents } from './statics/Api'
import WishCard from './WishCard'
import { ButtonGroup, CardColumns, ToggleButton, Button, Container, Row, Dropdown, ButtonToolbar, Form, Col, InputGroup, FormControl } from 'react-bootstrap'

class MyWishesComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      wishes: [],
      filteredWishes: []
    }
    this.onInputChange = this.onInputChange.bind(this);
  }
  async componentDidMount() {
    const result = await myEvents();
    this.setState({
      wishes: result[0].wishes,
      filteredWishes: result[0].wishes
    })
  }
  onInputChange(inputText, filterBy) {
    if (inputText == '') {
      this.setState({
        filteredWishes: this.state.wishes,
      })
    } else {
      const temp = this.state.wishes.filter(wish => {
        if ((wish[`${filterBy}`]).includes(inputText))
          return true;
        else
          return false;
      });
      this.setState({
        filteredWishes: temp
      })
    }
  }
  render() {
    return (
      <>
        <FilterTool pageTitle='My wishes'
          filterBy={['from', 'body']}
          onInputChange={this.onInputChange} />
        <Row>
          <Container>
            <CardColumns>
              {this.state.filteredWishes.map(wish => <WishCard key={wish.id} wish={wish} />)}
              {this.state.filteredWishes.map(wish => <WishCard key={wish.id} wish={wish} />)}
              {this.state.filteredWishes.map(wish => <WishCard key={wish.id} wish={wish} />)}
            </CardColumns>
          </Container>
        </Row>
      </>
    )
  }
}
export default MyWishesComponent