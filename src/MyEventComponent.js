import React from 'react'
import EventComponent  from './EventComponent'
import {getUserEventsByUserID} from './statics/Api'
class MyEventComponent extends React.Component {
  constructor(){
    super()
    this.state={
      events:[]
    }
  }
   componentDidMount(){
    this.setState({
      events:getUserEventsByUserID(1)
    })
    console.log(this.state.events);
  }
  render() {
    return (
      <>
        <section class="jumbotron text-center">
          <div class="container">
            <h1 class="jumbotron-heading">My Events</h1>
            <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator,
        etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
            <p>
              <a href="createEvent.html" class="btn btn-primary my-2">Create A New Event</a>
              <a href="SearcEvent.html" class="btn btn-secondary my-2">Search  Event</a>
            </p>
          </div>
        </section>


      </>
    )
  }
}
export default MyEventComponent