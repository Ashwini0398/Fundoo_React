import React, { Component } from 'react';
import Icons from '../Icons/Icons';
import "./Display.scss"
import pin from '../../assests/pin.svg';
import user_services from '../../services/userService';

class Displaynotes extends Component {
    constructor(props){
        super(props)
    }

    onDelete = () => {
        let Data = {
            noteIdList: [this.props.value.id],
            isDeleted: true,
        };
        user_services.deleteNote(Data).then((data) => {
            console.log('Delete Note', data);
            
        }).catch(error => {
            console.log('Delete error', error);
        })
        console.log("delete", Data);
    }

    render() {
        console.log(this.props.value.description)
        return (
            <div className="disp-note">
                <div className="note">
                <div className="title-pin">
                    {this.props.value.title}
                    <img src={pin} className="pin-inp" alt="" />
                </div>
                    {this.props.value.description}
                    <div className="disp-icn">
                    <Icons 
                    delete={()=>{
                        this.onDelete();
                        this.props.get();
                    }}/>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Displaynotes;
