import React from 'react'
class ContentComponent extends React.Component{
    render(){
        return(
            <div class="card text-center"style={ {border: '30px solid green'} }>
            <div class="text-center mb-4">
              <img class="mb-4 mt-3" src="./imges/logo1.png" alt="" width="110" height="110    "/>
              <div class="card-body ">
                <p class="card-text">
                  <a href="CreateEvent.html" class="btn btn-lg btn-primary">Create New Event</a>
                </p>
                <p class="card-text">
                  <a href="SearcEvent.html" class="btn btn-primary">Add A Best Wish</a>
                </p>
                <a class="card-text" href="login.html">Log In</a>
                <p class="card-text">
                  <a class="card-text" href="Register.html">Sign Up</a>
                </p>
  
   
            </div>
          </div>
          </div>
        );
    }
}
export  default ContentComponent