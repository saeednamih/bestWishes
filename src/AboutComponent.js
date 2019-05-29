import React from 'react';

import './LoginPageComponent.css';

export default class About extends React.Component {
    render() {
        return(
        <>
    
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
        
