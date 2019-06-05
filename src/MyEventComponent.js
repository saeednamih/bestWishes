// import React from 'react'
// import WishCard from './WishCard'
// import EventComponent from './EventComponent'
// import { getUsers, myEvents } from './statics/Api'
// import EventsTable from './EventsTable'
// import EventsCard from './EventsCard'
// import FilterTool from './FilterTool'
// import {NavLink} from 'react-router-dom'

// import { Button, Jumbotron, Container, CardColumns, Card, Row, DropdownButton, Dropdown, ButtonToolbar, Form, Col, InputGroup, FormControl } from 'react-bootstrap'

// class MyEventComponent extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       events: [],
//       filteredArrary:[],
//       input:'',
//       filterBy:''
//     }
//     this.textInput = React.createRef();
//     this.onInputChange=this.onInputChange.bind(this);
//     this.onSelcetFilter=this.onSelcetFilter.bind(this);
//     this.onEventClick=this.onEventClick.bind(this);
//   }
//   async componentDidMount() {
//     const result = await myEvents();

//     this.setState({
//       events: result,
//       filteredArrary:result
//     })
//   }
//   onSelcetFilter(event){
//     if(event.target.value==''){
//       this.textInput.current.disabled=true;
//       this.setState({filterBy:''});
//     }
//     else
//     {
//       this.setState({filterBy:event.target.value});
//       this.textInput.current.disabled=false;
//     }
  
//   }
//   onEventClick(){

//   }
//   onInputChange() {
//    if(this.textInput.current.value==''){
//      this.setState({
//       filteredArrary:this.state.events,
//       input:''
//      })
//    }else{
//      const temp=this.state.events.filter(event=>{
//        console.log(`${this.state.filterBy}`);
//       if((event[`${this.state.filterBy}`]).includes(this.textInput.current.value))
//         return true;
//        else
//         return false;
//      });
//      this.setState({
//       input:this.textInput.value,
//       filteredArrary:temp
//      })
//    }
//   }
//   render() {
//     return (
//       <>
//           <Container>

//             <Col xs={6}>
//               <h1>My Events</h1>
//               <InputGroup className="mb-3">
//                 <InputGroup.Prepend>
//                   <Form.Control as="select"
//                     name='selectFilter'
                    
//                       onChange={this.onSelcetFilter} >
//                     <option value=''>Filter By :</option>
//                     <option value='id'>Event ID</option>
//                     <option value='category'>Category</option>
//                     <option value='location'>Location</option>
      
//                   </Form.Control>
//                 </InputGroup.Prepend>
//                 <FormControl 
//                 aria-describedby="basic-addon1"
//                 name="filterinput"
//                 placeholder="Type To Filte"
//                 defaultValue={this.state.input}
//                 onChange={this.onInputChange}
//                 ref={this.textInput} 
//                 disabled={true}/>
                 
//               </InputGroup>
//               <Row>
//               <NavLink to="/CreateNewEvent">
//                   <label  class="btn btn-primary my-2">Create New Event</label>
//                   </NavLink>
//                   <NavLink to="/SearchEvent">
//                   <label  style={{marginLeft:'10px'}} class="btn btn-secondary my-2">Search  Event</label>
//                   </NavLink>
//                     </Row>
//             </Col>

//           </Container>
//         <Row>
//           <Container>
//           <CardColumns>
//           <NavLink to="/ShowWishesAtEvent">
//             {this.state.filteredArrary.map(event => <EventsCard events={event}/>)}
//             </NavLink>
//             </CardColumns>
//           </Container>
//         </Row>
       
//       </>
//     )
//   }
// }
// export default MyEventComponent

import React from 'react'
import FilterTool from './FilterTool'
 import EventsCard from './EventsCard'

import { getUsers, myEvents } from './statics/Api'
import WishCard from './WishCard'
import { ButtonGroup, CardColumns, ToggleButton, Button, Container, Row, Dropdown, ButtonToolbar, Form, Col, InputGroup, FormControl } from 'react-bootstrap'
 import {NavLink} from 'react-router-dom'
class MyEventComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      events: [],
      filtereEvents: []
    }
    this.onInputChange = this.onInputChange.bind(this);
  }
  async componentDidMount() {
    const result = await myEvents();
    this.setState({
      events: result,
      filtereEvents: result
    })
  }
  onInputChange(inputText, filterBy) {
    
    if (inputText == '') {
      this.setState({
        filtereEvents: this.state.events,
      })
    } else {
      const temp = this.state.events.filter(event => {
        console.log(filterBy,inputText  );
        if ((event[`${filterBy}`]).includes(inputText))
          return true;
        else
          return false;
      });
      this.setState({
        filtereEvents: temp
      })
    }
  }
  render() {
    return (
      <>
    
      
        <FilterTool pageTitle='My Events'
          filterBy={['id','category', 'location']}
          onInputChange={this.onInputChange} />
        <Row>
          <Container>
            <CardColumns>
            <NavLink to="/ShowWishesAtEvent">
            {this.state.filtereEvents.map(event => <EventsCard key={event.id} events={event}/>)}
            {this.state.filtereEvents.map(event => <EventsCard events={event}/>)}
            </NavLink>

            </CardColumns>
          </Container>
        </Row>
      </>
    )
  }
}
export default MyEventComponent