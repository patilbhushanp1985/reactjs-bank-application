import React, { Component } from 'react';
import './LoginComponent.css'
import { validateUser } from './validateUser';

class LoginComponent extends Component {
    render() {
        return (
        <div className="login-component-container">
            <h4>Login:</h4>
            <div className="pull-left">
                Username&nbsp;
            </div>
            <div className="pull-right">
                <input type="txt" name="username" id="username" placeholder="enter username"/>
            </div><br/>
            <div className="pull-left">
                Password&nbsp;
            </div>
            <div className="pull-right">
                <input type="password" name="password" id="password" placeholder="enter password"/>
            </div><br/>
            <div className="pull-right">
                <button id="submitLogin" onClick={validateUser}>Login</button>&nbsp;
                <button type="reset">Reset</button>
            </div>
        </div>
        );
    } 
}

export default LoginComponent;