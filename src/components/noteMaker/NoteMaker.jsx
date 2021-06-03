import React, { Component } from 'react';
import Createnotes from '../createNotes/Createnotes';
import user_services from '../../services/userService'; 
import Displaynotes from '../displayNotes/Displaynotes';
import './notemaker.scss'

class NoteMaker extends Component {

constructor(props)
{
    super(props);
    this.state={
        notes:[]
    }
    
    this.getNotes();

}

getNotes = () =>{
    user_services.getAllNotes().then((data) =>{
        console.log(data);
        this.setState({
            notes:data.data.data.data
        });
        

    }).catch(error=>{
      console.log("error",error);
    })
}

note=(val)=>{
    return( <Displaynotes value={val}/>)
}

    render() {
        return (
            <>
            <div className="note-disp">
              {this.state.notes.map(this.note)}
            </div>
            </>
        );
    }
}

export default NoteMaker;
