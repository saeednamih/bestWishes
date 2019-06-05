
import React from 'react';
import UpcomingComponent from './UpcomingComponent'
import { NavLink } from 'react-router-dom'
import { Image, Navbar, Nav, Card, NavDropdown, CardColumns, ToggleButton, Button, Container, Row, Dropdown, ButtonToolbar, Form, Col, InputGroup, FormControl } from 'react-bootstrap'
// import Background from '../assets/imges/celebrateBack.jpg'
import logo from '../assets/imges/logo1.png'
export default class MainComponent extends React.Component {
    render() {
        const center = {

            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '50%',
            height: '60px',
            width: '60px'

        }
        // md={{ span: 3, offset: 3 }}
        return (
            <Container  >
                  <>
           <div class="row mt-5"></div>
           <div  class="row m-5 ">
             <Col></Col>
              <div class="col-sm-6 make_filter mt-5 ">
            <div class="card text-center"style={ {border: '1px solid grew'} }>
            <div class="text-center mb-4">
            <Image src={logo}  style={{width:'60px', height:'110' }} />
              <div class="card-body ">
                <p class="card-text">
                  <NavLink to="/CreateNewEvent">
                  <label  class="btn btn-lg btn-primary">Create New Event</label>
                  </NavLink>
                </p>
                <p class="card-text">
                <NavLink to="/SearchEvent">
                  <label class="btn btn-primary">Add A Best Wish</label>
                  </NavLink>
                </p>
                <NavLink to="/Login">
                <label class="card-text">Log In</label>
                </NavLink>
                <p class="card-text">
                <NavLink to="/Register">
                  <a class="card-text" >Sign Up</a>
                  </NavLink>
                </p>
  
   
            </div>
          </div>
          </div>
          </div>

          <Col></Col>
          </div>
          </>
               
            </Container>

            //    <div class="row mt-5"></div>
            //    <div  class="row m-5 ">
            //       {/* <UpcomingComponent/> */}
            //       <div class="col-sm-6 make_filter mt-5 ">
            //     <div class="card text-center"style={ {border: '1px solid grew'} }>
            //     <div class="text-center mb-4">
            //       <img class="mb-4 mt-3" src={logo} alt="" width="110" height="110    "/>
            //       <div class="card-body ">
            //         <p class="card-text">
            //           <NavLink to="/CreateNewEvent">
            //           <label  class="btn btn-lg btn-primary">Create New Event</label>
            //           </NavLink>
            //         </p>
            //         <p class="card-text">
            //         <NavLink to="/SearchEvent">
            //           <label href="SearcEvent.html" class="btn btn-primary">Add A Best Wish</label>
            //           </NavLink>
            //         </p>
            //         <NavLink to="/Login">
            //         <label class="card-text" href="login.html">Log In</label>
            //         </NavLink>
            //         <p class="card-text">
            //         <NavLink to="/Register">
            //           <a class="card-text" href="Register.html">Sign Up</a>
            //           </NavLink>
            //         </p>


            //     </div>
            //   </div>
            //   </div>
            //   </div>

            //   {/* <UpcomingComponent/> */}
            //   </div>
            //   </>

        );
    }
}

        // return <div className="container mt-5">
        //     <div className="row mt-5"></div>
        //     <div className="row mt-5 ">
        //         <div className="col-sm ">col-sm</div>
        //         <div className="col-sm-8 make_filter ">
        //             <div className="card text-center w-75  bg-light  border-dark  ">
        //                 <div className="card-header ">
        //                     welcome
        //             </div>
        //                 <div className="card-body ">
        //                     <p className="card-text">
        //                         <a href="events.html" className="btn btn-lg btn-primary">Create New Event</a>
        //                     </p>
        //                     <p className="card-text">
        //                         <a href="eventsearch.html" className="btn btn-primary">Add a best wish</a>
        //                     </p>
        //                     <a className="card-text" href="login.html">Log In</a>

        //                 <p className="card-text">
        //                     <a className="card-text" href="Register.html">Sign Up</a>
        //                 </p>


        //             </div>
        //             {/* <!-- <div className=" card-footer text-muted">
        //                 2 days ago
        //         </div> --> */}
        //         </div>
        //     </div>
        //     <div className="col-sm">col-sm</div>
        // </div>
        // </div>