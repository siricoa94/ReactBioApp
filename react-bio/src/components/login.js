import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebaseInit from '../config/firebaseConfig';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }




    render () {
        return (
            <div>
                <form>
                    <div>
                        <label></label>
                        <input vaue={this.state.email} onChange={this.handleChange} type="email" name="email" aria-describedby="emailHelp" placeholder="Enter Email Please"></input>
                        <small id="emailHelp">We Might Share your email with someone, just kidding :D</small>
                    </div>
                    <div>
                        <label></label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="password"></input>
                    </div>
                    <button type="submit" onClick={this.login}>Login</button>
                    <button onClick={this.signup}>Sign Up</button>
                </form>
            </div>
        );
    };
}

export default Login;