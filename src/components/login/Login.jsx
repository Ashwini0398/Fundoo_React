import React, { Component } from 'react';
import './Login.scss'

class Login extends Component {
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
                    </form>
                </div>
                
                </>
           
        );
    }
}

export default Login;
