
import React from 'react';//JSX

import 'bootstrap/dist/css/bootstrap.css';
export default class MyComponent extends React.Component {
    render() {
        return <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#"></a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="navbar-brand" href="home.html"> Home |<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="navbar-brand" href="MyEvents.html">Events |</a>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-brand" href="wishessearch.html">Wishes |</a>
                        </li>
                        <li className="nav-item">
                            <a className="navbar-brand" href="About.html">About |</a>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button id="loginbtn" className="navbar-brand btn btn-outline-primary my-2 my-sm-0" type="submit">Log
            In</button>
                        <button id="registerbtn" className="navbar-brand btn btn-outline-primary my-2 my-sm-0" type="submit">Sign
            Up</button>
                    </form>
                </div>
            </nav>
        }
    }