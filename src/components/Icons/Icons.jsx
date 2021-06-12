import React, { Component } from 'react';
import './Icons.scss';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import UnarchiveOutlinedIcon from '@material-ui/icons/UnarchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Popper from './popper';
import user_services from '../../services/userService';
import Dialog from '@material-ui/core/Dialog';
import Collaborators from '../Collaborators/Collaborators';

class Icons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            openStatus:false
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

    onSetColor = (color) => {
        if(this.props.colorval === "update"){
        let Data = {
            color: color.code,
            noteIdList: [this.props.val.id]
        };
        user_services.changeColor(Data).then((data) => {
            console.log('Color Note', data);
            this.props.get();
        }).catch(error => {
            console.log('Color error', error);
        });
        console.log("Color", Data);
    }else{
        this.props.getColor(color.code);
    }
    }

    onSetStatus =(val)=>{
        this.setState({
            openStatus:val
        });
    }

    dialogopen = ()=>{
        this.setState({
            openStatus:true
        });
    }

    render() {
        return (
            <div>
                <div className="icon-open-content">
                    <div className="note-icons-hover">
                        <AddAlertOutlinedIcon className="i-disp" />
                    </div>
                    <div className="note-icons-hover">
                        <PersonAddOutlinedIcon className="i-disp" onClick={this.dialogopen}/>
                    </div>
                    <div className="note-icons-hover">
                        <Popper putColor={(Data) => {
                            this.onSetColor(Data);
                        }} />
                    </div>
                    <div className="note-icons-hover">
                        <ImageOutlinedIcon className="i-disp" />
                    </div>
                    <div className="note-icons-hover">
                        <ArchiveOutlinedIcon className="i-disp" onClick={() => {
                            this.props.archive()
                        }} />
                    </div>
                    <div>
                        <div className="note-icons-hover">
                            <MoreVertOutlinedIcon className="i-disp" onClick={this.menuClick} />
                        </div>

                        <Menu
                            id="simple-menu"
                            keepMounted
                            anchorEl={this.state.anchorEl}
                            onClose={this.handleClose}
                            open={Boolean(this.state.anchorEl)}
                        >
                            <MenuItem onClick={() => { this.handleClose(); this.props.delete() }}>Delete Node</MenuItem>
                            <MenuItem >Add Label</MenuItem>
                            <MenuItem >Add Drawing</MenuItem>
                            <MenuItem >Make a Copy</MenuItem>
                            <MenuItem >Show Checkboxes</MenuItem>

                        </Menu>

                    </div>
                </div>
                <Collaborators 
                    open={this.state.openStatus} 
                    note={this.props.val} 
                    getCloseStatus={(Data) => {
                        this.onSetStatus(Data);
                    }}
                    getNotes={()=>{this.props.get()}}/>
            </div>
        );
    }
}

export default Icons;
