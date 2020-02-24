import React, { Component } from 'react';
import '../css/index.css';
import { render } from 'react-dom';
import firebaseInit from '../config/firebaseConfig';
import Login from './login';
import Home from './home'

class Auth extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {

            },
        };
    };

    componentDidMount(){
        this.authListener();
    };
    authListener(){
        firebaseInit.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({ user });
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
            }
        });
    };
    render() {
        return(
            <div className="firebaseLogin">
               {this.state.user ? (<Home />) : (<Login/>)}
    
            </div>
        );
    };
};

export default Auth;