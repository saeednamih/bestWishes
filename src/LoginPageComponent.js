import React from 'react';

import './LoginPageComponent.css';

export default class LoginPageComponent extends React.Component {
    render() {
        return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="my-1">Best <span className="mr-2">Wishes</span></span>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active ">
                            <a className="nav-item   btn btn-outline-primary my-1 mr-2" href="Home.html">Home </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-item btn btn-outline-primary  my-1 mr-2" href="MyEvents.html">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item btn btn-outline-primary my-1 mr-2" href="MyWishes.html">Wishes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-item btn btn-outline-primary my-1 mr-2" href="About.html">About</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button id="loginbtn" className="navbar btn btn-outline-success my-2 mr-2 my-sm-0" type="submit">Log In</button>
                        <button id="registerbtn" className="navbar btn btn-outline-success my-2 mr-2 my-sm-0" type="submit">Sign Up</button>
                    </form>
                </div>
            </nav>
            <div className="row">
                <div className="col-sm-3">
                </div>
                <div className="col-sm-6">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">User Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="Enter email or user Name"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                                <div className="LoginButton">
                                    <button type="submit" className="btn btn-primary">Log In</button>
                                    <p></p>
                                    <p><button type="submit" className=" registerbtn btn btn-primary">Sign Up</button></p>
                                    <p><a href="">I forgot my password</a></p>
                                </div>
                    </form>
                </div>
                        <div className="col-sm-3">
                        </div>
            </div>
           
        </>
        ) ;  
         }
        }
        
