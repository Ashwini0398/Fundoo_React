import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './Registration.scss';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

export default class Registration extends Component {


        
    render() {
        
        return (
            <>
                <div className="reg-frame">
                    <div className="reg-cont">
                        <div className="reg-fundoo">
                            <span className="f">F</span>
                            <span className="u">u</span>
                            <span className="n">n</span>
                            <span className="d">d</span>
                            <span className="o">o</span>
                            <span className="u">o</span>
                        </div>
                        <div className="reg-fundoo-account">
                            Create Your Fundoo Account
                    </div>
                        <div className="input-field">
                            <div className="reg-content-names">
                                <TextField 
                                    id="firstName"
                                    type="text"
                                    name="fName"
                                    label="First Name"
                                    variant="outlined" 
                                    size="small" 
                                    pattern="^[A-Z]{1}[a-z]{2,}[][A-Z]{1}{a-z}{2,}$"
                                    />
                                <TextField 
                                    id="lastName"
                                    type="text"
                                    name="lName"
                                    label="LastName"
                                    variant="outlined" 
                                    size="small" 
                                    />
                            </div>
                            <div className="reg-content-username">
                                <TextField 
                                id="username"
                                type="text"
                                name="uName"
                                label="User Name"
                                variant="outlined"
                                size="small" 
                                />
                            </div>
                            <div className="message">You can use letters,numbers & periods</div>
                            <div className="reg-content-security">
                                <TextField 
                                    id="password" 
                                    type="password"
                                    name="password"
                                    label="Password" 
                                    variant="outlined" 
                                    size="small"
                                     />
                                <TextField 
                                    id="Confirm" 
                                    type="password"
                                    name="cPassword/"
                                    label="Confirm Password" 
                                    variant="outlined" 
                                    size="small" 
                                    />
                            </div>
                            <div className="message">Use 8 or more characters with a mix of letters, number & symbols</div>
                            <div className="show-checkbox">
                                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                                <span>Show password</span>
                            </div>
                            <div className="div-but-content"><span className="Text">Sign in Instead</span>
                                <Button className="button" variant="contained" color="primary" href="#contained-buttons" onClick={this.Next}>
                                    Next
                                 </Button>
                            </div>

                        </div>
                    </div>

                    <div>
                    </div>
                    <div className="logo-cont">
                        <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" />
                        <span class="fig-caption">One account. All of Fundoo working for you.</span>
                    </div>
                </div>
            </>
        );
    }
}

