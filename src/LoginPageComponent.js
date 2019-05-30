import React from 'react';
import  {getUsers, checkUser} from './statics/Api'
import './LoginPageComponent.css';

export default class LoginPageComponent extends React.Component {
    constructor(){
        super()
        this.onSubmit=this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.state={
            username:'',
            password:''
        }
    }
    // componentDidMount(){
    //     this.setState.users=;
    //     console.log(this.state.users)
    // }
    onSubmit(event){
        event.preventDefault();

        const {username, password} = this.state;

        checkUser(username, password)
        .then(result => {
            if(result.status.code == 200){
                alert(`Hello userId  ${result.userId}`);
            }else{
                alert(result.status.error)
            }
        })

    }

    onInputChange({ target: { name, value } }){
        this.setState({
            [name]:value
        });
        console.log(name, value);
    }

    render() {
        return (
            <>
                  <div className="row">
                    <div className="col-sm-3">
                    </div>
                    <div className="col-sm-6">
                        <form  onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">User Name</label>
                                <input type="email" name="username" className="form-control"  aria-describedby="emailHelp"
                                    placeholder="Enter email or user Name"  onChange={this.onInputChange}/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" name="password"  password="userName" className="form-control" placeholder="Password"
                                onChange={this.onInputChange} />
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
        );
    }
}

