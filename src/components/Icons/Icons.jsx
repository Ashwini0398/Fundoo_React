import React, { Component } from 'react';
import './Icons.scss';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Popper from './popper';
import user_services from '../../services/userService';


class Icons extends Component {
    constructor(props) {
        super(props);
        this.state={
            anchorEl : null
        }
        
    }
    handleClose = () => {
        this.setState({
           anchorEl: null
        })
        
      };
    
    menuClick = (event) => {
        this.setState({
            
            anchorEl: event.currentTarget
        })
    }

    onSetColor=(color)=>{
        let Data = {
            color: color.code,
            noteIdList: [this.props.val]
        };
        user_services.changeColor(Data).then((data) =>{
            console.log('Color Note',data);
            this.props.getAllNotes();
          }).catch(error=>{
            console.log('Color error',error);
        })
          console.log("Color",Data);
    }

    render() {
        return (
            <div>
                <div className="icon-open-content">
                <div className="note-icons-hover">
                        <AddAlertOutlinedIcon className="i-disp"/>
                </div>
                <div className="note-icons-hover">
                        <PersonAddOutlinedIcon className="i-disp"/>
                </div>
                <div className="note-icons-hover">
                        <Popper putColor={(Data) => {
                            this.onSetColor(Data)
                            }} />
                </div>
                <div className="note-icons-hover">
                        <ImageOutlinedIcon className="i-disp"/>
                </div>
                <div className="note-icons-hover">
                        <ArchiveOutlinedIcon className="i-disp"/>
                </div>
            <div>
                <div className="note-icons-hover">
                        <MoreVertOutlinedIcon className="i-disp" onClick={this.menuClick}/>
                </div>
              
                    <Menu
                        id="simple-menu"
                        keepMounted
                        anchorEl={this.state.anchorEl}
                        onClose={this.handleClose}
                        open={Boolean(this.state.anchorEl)}
                    >
                        <MenuItem onClick={()=>{this.handleClose();this.props.delete()}}>Delete Node</MenuItem>

                    </Menu>

            </div>
                 </div>
            </div>
        );
    }
}

export default Icons;
