import React from 'react'
import {NavLink} from 'react-router-dom'

class NavBarCoponent extends React.Component{
    render(){
        return(
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<span class="my-1" style={{fontSize: '130%'}} >Best  <span class="mr-2" style={{fontSize: '80%',fontWeight: 'bold'}}>Wishes</span></span>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active ">
      <NavLink  to='/' class="nav-item   btn btn-outline-primary my-1 mr-2">Home</NavLink> 
    </li>

    <li class="nav-item">
      <NavLink to='/MyEvents' class="nav-item btn btn-outline-primary  my-1 mr-2">Events </NavLink>
    </li>
    <li class="nav-item">
      <NavLink to="/MyWishes" class="nav-item btn btn-outline-primary my-1 mr-2">Wishes</NavLink>
    </li>
    <li class="nav-item">
      <NavLink to="/About" class="nav-item btn btn-outline-primary my-1 mr-2" >About</NavLink>
    </li>
  </ul>
  <form class="form-inline my-2 my-lg-0">
  <label>sdsasadadd</label>
  <NavLink to="/Login">
  <button id="loginbtn" class="navbar btn btn-outline-success my-2 mr-2 my-sm-0" type="submit">Log In</button>
  </NavLink> 
  <NavLink to="/Register">
    <button id="registerbtn" class="navbar btn btn-outline-success my-2 mr-2 my-sm-0" type="submit">Sign
      Up</button>
      </NavLink> 
  </form>
</div>
</nav>
        );
    }

}
 export  default NavBarCoponent

