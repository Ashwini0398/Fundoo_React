import React, { Component } from 'react';
// import { ButtonComp } from '../registration/Registration';
import TextField from '@material-ui/core/TextField';
import './Login.scss';
import Button from '@material-ui/core/Button';


export default class Login extends Component {
    render() {
        return (
                <>
                 <div className="login-frame">
                 <form className="login-form">
                    <div className="login-cont">    
                        <div className="login-fundoo">
                            <span className="f">F</span>
                            <span className="u">u</span>
                            <span className="n">n</span>
                            <span className="d">d</span>
                            <span className="o">o</span>
                            <span className="u">o</span>
                        </div>
                        <div className="login-fundoo-account">
                            Sign in
                        </div>
                        <div> Use your Fundoo Account</div>
                    </div>
                    <div className="login-input">
                    <TextField 
                         id="userName"
                         type="text"
                         name="fName"
                        label="User Name"
                        variant="outlined" 
                        />
                    <span className="forget">Forget email?</span>
                    <TextField 
                         id="password"
                         type="password"
                         name="fName"
                        label="Password"
                        variant="outlined" 
                        />
                    <span className="forget">Forget Password?</span>
                    </div>
                    <div className="div-but-content"><span className="Text">Sign in Instead</span>
                                    <Button className="button" variant="contained" color="primary" href="#contained-buttons" onClick={this.Next}>
                                        Next
                                     </Button>
                                </div>

                    </form>
                </div>
                
                </>
           
        );
    }
}