import React from 'react'
import {NavLink} from 'react-router-dom'

class EventComponent extends React.Component{
    constructor(){
        super();
    }
    render(){
       // const {title,catagory,date,where}=this.props.event
        return(
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                  <img class="img img-responsive full-width" src=".\assets\imges\addWish.jpg"/>
                <div class="card-body">
                  <p class="card-text">{"Aaaa"}</p>

                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

        );
    }
}
export default EventComponent