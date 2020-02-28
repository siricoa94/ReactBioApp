import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import firebaseInit from '../config/firebaseConfig';

class Login extends Component {
    constructor(props) {
        
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    };

    login = e => {
        e.preventDefault();
        firebaseInit.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log("You are logged in");
        }).catch((error) => {
            console.log(error);
            console.log("hello andrew:" + this.state);
            console.log("hello andrew:" + this.state.email);
            console.log("hello andrew:" + this.state.password);
        });
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render () {
        return (
            <div>
                <form>
                    <div>
                        <label></label>
                        <input onChange={this.onChange} value={this.state.email} type="email" name="email" aria-describedby="emailHelp" placeholder="Enter Email Please"></input>
                        <small id="emailHelp">We Might Share your email with someone, just kidding :D</small>
                    </div>
                    <div>
                        <label></label>
                        <input onChange={this.onChange} value={this.state.password} type="password" name="password" placeholder="Enter Password Please"></input>
                    </div>
                    <button type="submit" onClick={this.login}>Login</button>
                    <button onClick={this.signup}>Sign Up</button>
                </form>
            </div>
        );
    };
}

export default Login;