
import React from 'react';//JSX

export default class MainComponent extends React.Component {
    render() {
        return <div className="container mt-5">
            <div className="row mt-5"></div>
            <div className="row mt-5 ">
                <div className="col-sm ">col-sm</div>
                <div className="col-sm-8 make_filter ">
                    <div className="card text-center w-75  bg-light  border-dark  ">
                        <div className="card-header ">
                            welcome
                    </div>
                        <div className="card-body ">
                            <p className="card-text">
                                <a href="events.html" className="btn btn-lg btn-primary">Create New Event</a>
                            </p>
                            <p className="card-text">
                                <a href="eventsearch.html" className="btn btn-primary">Add a best wish</a>
                            </p>
                            <a className="card-text" href="login.html">Log In</a>
                      
                        <p className="card-text">
                            <a className="card-text" href="Register.html">Sign Up</a>
                        </p>


                    </div>
                    {/* <!-- <div className=" card-footer text-muted">
                        2 days ago
                </div> --> */}
                </div>
            </div>
            <div className="col-sm">col-sm</div>
        </div>
        </div>
    }
}
