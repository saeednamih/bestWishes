    import ReactDOM from 'react-dom';//browser
    import React from 'react';
     import NavBarCoponent from './NavBarCoponent';
     import MainComponent from './MainComponent';
     import About from './AboutComponent'
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
    import AddWishToEvent from './AddWishToEvent'
    import {BrowserRouter,Route,Switch} from 'react-router-dom'
    import bestWisheContext from './bestWisheContext'
        class App extends React.Component{
            constructor(){
                super()
                this.login=this.login.bind(this);
                this.logout=this.logout.bind(this);
            this.state={
                email:'',
                username:'',
                id:-1,
                login:this.login,
                logout:this.logout
            }

            }
            login(email,id,username) {
                const user = {email,id,username};  
                this.setState({
                    ...user,
                    login:this.login,
                    logout:this.logout
                 })
            console.log(this.state)
            }
            logout() {
                this.setState({ name: '', userID: -1 ,username:'' });
            }
            render(){
                return(
                    <bestWisheContext.Provider value={this.state}>
                    <BrowserRouter>
                    <NavBarCoponent/>
                    <Switch>
                    <Route exact path="/" component={MainComponent} />
                    <Route  path="/CreateNewEvent" component={CreateEventComponent} />
                    <Route  path="/CreateWish" component={CreateWishComponent} />
                    
                    <Route  path="/ShowWishesAtEvent" component={AddWishToEvent} />
                    <Route  path="/SearchEvent" component={SearchComponent} />
                    <Route  path="/Login" component={LoginPageComponent} />
                    <Route  path="/Register" component={RegisterPageComponent} />
                    <Route  path="/MyEvents" component={MyEventComponent} />
                    <Route  path="/MyWishes" component={MyWishesComponent } />
                    <Route  path="/About" component={About} />
                    </Switch>
                    </BrowserRouter>
                    </bestWisheContext.Provider>
                );
            }
        }

                        

        ReactDOM.render(<App/>,document.querySelector("#container"));