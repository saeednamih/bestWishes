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
    import RegisterPageComponent from './RegisterPageComponent'
    import LoginPageComponent from './LoginPageComponent'
    import MyWishesComponent from './MyWishesComponent'
    import {BrowserRouter,Route,Switch} from 'react-router-dom'
        class App extends React.Component{
            render(){
                return(
                    <BrowserRouter>
                    <NavBarCoponent/>
                    <Switch>
                    <Route exact path="/" component={ContentComponent} />
                    <Route  path="/CreateNewEvent" component={CreateEventComponent} />
                    <Route  path="/SearchEvent" component={SearchComponent} />
                    <Route  path="/Login" component={LoginPageComponent} />
                    <Route  path="/Register" component={RegisterPageComponent} />
                    <Route  path="/MyEvents" component={MyEventComponent} />
                    <Route  path="/MyWishes" component={MyWishesComponent } />
                    <Route  path="/About" component={ContentComponent} />
                    </Switch>
                    </BrowserRouter>
                );
            }
        }

                        

        ReactDOM.render(<App/>,document.querySelector("#navBar"));