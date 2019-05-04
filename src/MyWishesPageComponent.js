import React from 'react';
import BestWishes from '../assets/images/BestWishes.png';
export default class MyWishesPageComponent extends React.Component{
    render(){
        return(
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="my-1"style={{fontSize: '130%'}}>Best  <span className="mr-2" style={{fontSize: '130%',fontWeight:'bold'}}>Wishes</span></span>
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active ">
              <a className="nav-item   btn btn-outline-primary my-1 mr-2"  href="Home.html">Home </a>
            </li>
    
            <li className="nav-item">
              <a className="nav-item btn btn-outline-primary  my-1 mr-2"  href="MyEvents.html">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-item btn btn-outline-primary my-1 mr-2" href="MyWishes.html">Wishes</a>
            </li>
            <li className="nav-item">
              <a className="nav-item btn btn-outline-primary my-1 mr-2" href="About.html">About</a>
            </li>
          </ul>
          <form id='form'className="form-inline my-2 my-lg-0">
            <button id="loginbtn" className="navbar btn btn-outline-success my-2 mr-2 my-sm-0" type="submit">Log In</button>
            <button id="registerbtn" className="navbar btn btn-outline-success my-2 mr-2 my-sm-0" type="submit">Sign
              Up</button>
          </form>
        </div>
      </nav>

  <main role="main">

    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">My Wishes</h1>
        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator,
          etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        <p>
          <a href="createEvent.html" className="btn btn-primary my-2">Create A New Event</a>
          <a href="SearcEvent.html" className="btn btn-secondary my-2">Search  Event</a>
        </p>
      </div>
    </section>

    <div className="album py-5 ">

      <div className="container">
          <form>
              <div className="form-group row">
                  <div className="col-md-4">
                  <label  className="col-form-label mr-2">Search By :</label>
                  </div>
              </div>
              
        <div className="form-group row">
            <div className="col-md">
                <input type="radio" id="searchById" name="search" aria-label="Radio button for following text input" defaultChecked/>
            <label htmlFor="eventId" className="col-form-label mr-2">Event ID :</label>
            <input type="text"  id="eventId" placeholder="Event ID"/>
            </div>
        </div>
        <div className="form-group row">
          
            <div className="col-md">
              <input type="radio" id="searchByCat" name="search" aria-label="Radio button for following text input"/> 
            <label htmlFor="category" className="col-form-label mr-1">Category:</label>
            <select id="category"style={{width: '150px'}} id="0" style={{width: '120px'}} disabled  >
              
                <option>Birthday</option>
                <option>baby</option>
                <option>new car</option>
                <option>new job</option>
                <option>wedding</option>
              </select>
            </div>
            <div className="col-md">
            <label htmlFor="from" className="col-form-label mr-1">From:</label>
            <input type="Date"style={{width: '150px'}}  id="from" placeholder="from" disabled/ >
          </div>
          <div className="col-md">
              <label htmlFor="to" className="col-form-label mr-1">To:</label>
              <input type="Date"style={{width: '150px'}}  id="to" placeholder="to" disabled/>
            </div>
            <div className="col-md">
            <label htmlFor="location1" className="col-form-label mr-1">where:</label>
            <input type="text" id="location1"  style={{width: '150px'}} id="where" placeholder="Location" disabled/>
            </div>
        </div>
        <div className="form-group row">
        <button className="btn btn-primary btn-lg ">Filter</button>
        </div>
      </form>

        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img className="img img-responsive full-width" src={BestWishes}/>
              <div className="card-body">
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img className="img img-responsive full-width" src=""/>
              <div className="card-body">
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img className="img img-responsive full-width" src=""/>
              <div className="card-body">
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img className="img img-responsive full-width" src=""/>
              <div className="card-body">
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>

  </main>
            </>
        );
    }
}