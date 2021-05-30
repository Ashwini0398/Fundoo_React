import React, { Component } from 'react';
import './Registration.scss';

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
                    </div>
                    <div className="logo-cont">logo</div>
                </div>
            </>
        );
    }
}

