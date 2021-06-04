import React, { Component } from 'react';
import Createnotes from '../createNotes/Createnotes';
import user_services from '../../services/userService'; 
import Displaynotes from '../displayNotes/Displaynotes';
import './notemaker.scss'

class NoteMaker extends Component {

constructor(props)
{
    super(props);

}


note=(val)=>{
    return( <Displaynotes value={val}/>)
}


    render() {
        // console.log(this.props.value);
        return (
            <>
            <div className="note-disp">
               {this.props.value.map(this.note)}
            </div>
            </>
        );
    }
}

export default NoteMaker;
