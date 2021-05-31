import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './Registration.scss';
import Checkbox from '@material-ui/core/Checkbox';


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
                        <div className="reg-content-names">
                            <TextField id="firstName" label="FirstName" variant="outlined" size="small" />
                            <TextField id="lastName" label="LastName" variant="outlined" size="small" />
                        </div>
                        <div className="reg-content-username">
                            <TextField id="username" label="UserName" variant="outlined" size="small" />
                            <span>You can use letters,numbers & periods</span>
                        </div>
                        <div className="reg-content-security">
                            <TextField id="password" label="Password" variant="outlined" size="small" />
                            <TextField id="Confirm" label="Confirm Password" variant="outlined" size="small" />
                        </div>
                        <span className="message">Use 8 or more characters with a mix of letters, number & symbols</span>
                    </div>
                    <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                    <div>
                        
                    </div>
                    <div className="logo-cont">
                        <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" />
                        <span class="fig-caption">One account. All of Google working for you.</span>
                    </div>
                </div>
            </>
        );
    }
}

