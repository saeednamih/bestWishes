import React from 'react';
import './RegisterPageComponent.css'
export default class RegisterPageComponent extends React.Component {
    render() {
        return (
            <>
     
            <div className="row">
                <div className="col-sm-3 ">
                </div>
                <div className="col-sm-6">
                    <form>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Birth Date:</label>
                            <input type="date" className="form-control" id="exampleInputDate" aria-describedby="Date" />
                        </div>
                        <div className="form form-group">

                            <label>Gender:</label>
                            <div className="form-check form-check-inline">

                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                <label className="form-check-label" htmlFor="inlineRadio3">Other</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">User Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="Enter email or user Name"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                         </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="LoginButton">
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </div>
                     </form>
    </div>
                    <div className="col">
                    </div>
                </div>
           
            </>
        );
    }
}