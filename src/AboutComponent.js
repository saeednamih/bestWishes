import React,{createContext} from 'react';

import './LoginPageComponent.css';

const {Provider,Consumer}=createContext({
    user:'saeed'
})
const Header =()=><div>Header</div>;
const Footer =()=><div>Footer</div>;
const Dasshborad =()=><div>Dasshborad <Profile/> </div>;
const Profile =()=>(
    <Consumer>
        {user=>(
            <div>helo {user} Profile</div>
        )}

</Consumer>
);

export default class About extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user:''
        }
    }
    componentDidMount(){
        this.setState({
            user:'saeed',
            log:()=>this.log()
        })
    }
    log(){
        console.log("log out called");
    }
    render() {
        return(
            <>
              <Provider value={this.state.user}>
            <Header/>
            <Dasshborad user={this.state.user}/>
            <Footer/>
            </Provider>
            <h1>fdshhdsbjdsb</h1>
            </>
                );
        }
    }