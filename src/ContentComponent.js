import React from 'react'
import UpcomingComponent from './UpcomingComponent'
import {NavLink} from 'react-router-dom'
class ContentComponent extends React.Component{
    render(){
        return(
          <>
           <div class="row mt-5"></div>
           <div  class="row m-5 ">
              <UpcomingComponent/>
              <div class="col-sm-6 make_filter mt-5 ">
            <div class="card text-center"style={ {border: '1px solid grew'} }>
            <div class="text-center mb-4">
              <img class="mb-4 mt-3" src="./assets/imges/logo1.png" alt="" width="110" height="110    "/>
              <div class="card-body ">
                <p class="card-text">
                  <NavLink to="/CreateNewEvent">
                  <label  class="btn btn-lg btn-primary">Create New Event</label>
                  </NavLink>
                </p>
                <p class="card-text">
                <NavLink to="/SearchEvent">
                  <label href="SearcEvent.html" class="btn btn-primary">Add A Best Wish</label>
                  </NavLink>
                </p>
                <NavLink to="/Login">
                <label class="card-text" href="login.html">Log In</label>
                </NavLink>
                <p class="card-text">
                <NavLink to="/Register">
                  <a class="card-text" href="Register.html">Sign Up</a>
                  </NavLink>
                </p>
  
   
            </div>
          </div>
          </div>
          </div>

          <UpcomingComponent/>
          </div>
          </>
        );
    }
}
export  default ContentComponent