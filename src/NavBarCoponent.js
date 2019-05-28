import React from 'react'
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
      <a class="nav-item   btn btn-outline-primary my-1 mr-2"  href="Home.html">Home </a>
    </li>

    <li class="nav-item">
      <a class="nav-item btn btn-outline-primary  my-1 mr-2"  href="MyEvents.html">Events</a>
    </li>
    <li class="nav-item">
      <a class="nav-item btn btn-outline-primary my-1 mr-2" href="MyWishes.html">Wishes</a>
    </li>
    <li class="nav-item">
      <a class="nav-item btn btn-outline-primary my-1 mr-2" href="About.html">About</a>
    </li>
  </ul>
  <form class="form-inline my-2 my-lg-0">
    <button id="loginbtn" class="navbar btn btn-outline-success my-2 mr-2 my-sm-0" type="submit">Log In</button>
    <button id="registerbtn" class="navbar btn btn-outline-success my-2 mr-2 my-sm-0" type="submit">Sign
      Up</button>
  </form>
</div>
</nav>
        );
    }

}
 export  default NavBarCoponent

