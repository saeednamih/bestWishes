    import ReactDOM from 'react-dom';//browser
    import React from 'react';
     import NavBarCoponent from './NavBarCoponent';
     import MainComponent from './MainComponent';
     import UpcomingComponent from './UpcomingComponent'
     import ContentComponent from './ContentComponent'
     import MyEventComponent from './MyEventComponent'
     import 'bootstrap/dist/css/bootstrap.css';
    import SearchComponent from './SearchComponent'
    import CreateEventComponent from './CreateEventComponent'
    import CreateWishComponent from './CreateWishComponent'
    import ShowingCreateWish from './ShowingCreateWishComponent'
    import AddWishToEventComponent  from './AddWishToEventComponent'


    class App extends React.Component{
        render(){
            <BrowserRouter>
            <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            </div>
            </BrowserRouter>
        }

    }
     ReactDOM.render(<NavBarCoponent />,
         document.querySelector('#navBar'));

         ReactDOM.render(<UpcomingComponent />,
            document.querySelector('#leftSide'));

            ReactDOM.render(<UpcomingComponent />,
                document.querySelector('#rightSide'));

                // ReactDOM.render(<ContentComponent />,
                //     document.querySelector('#content'));
                
                // ReactDOM.render(<MyEventComponent />,
                //     document.querySelector('#content'));

                // ReactDOM.render(<SearchComponent />,
                //     document.querySelector('#content'));
                    
                    // ReactDOM.render(<CreateEventComponent />,
                    //     document.querySelector('#content'));

                        // ReactDOM.render(<ShowingCreateWish />,
                        //     document.querySelector('#content'));

                            ReactDOM.render(<AddWishToEventComponent />,
                                document.querySelector('#content'));
                            
                        

        