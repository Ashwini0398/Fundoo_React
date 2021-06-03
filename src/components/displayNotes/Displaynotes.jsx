import React, { Component } from 'react';
import "./Display.scss"

class Displaynotes extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props.value.description)
        return (
            <div className="disp-note">
                <div className="note">
                <div>
                    {this.props.value.title}
                </div>
                    {this.props.value.description}
                </div>
            </div>
        );
    }
}

export default Displaynotes;
