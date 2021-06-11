import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import './Collaborators.scss';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import user_services from '../../services/userService';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Button, MenuList, Popover } from "@material-ui/core";

const styles = {
    underline: {
        marginLeft:'20px',
        marginTop:'10px',
        width:'300px',
        "& .MuiInput-underline:before": {
            position: 'fixed'
        },
        "& .MuiInput-underline:after": {
            position: 'fixed'
        }
    }
};

class Collaborators extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openStatus:false,
            collaborators:'',
            collabData:[]
        }
        
    }
    
    handleInput = (e) =>{
        console.log('search value', e.target.value);
        this.setState({
            collaborators:e.target.value
        });
        let Data = {
            searchWord: e.target.value
        }
        user_services.searchCollab(Data).then((data) => {
            this.setState({
                collabData:data.data.data.details
            });
            console.log('searchCollab', data);
        }).catch(error => {
            console.log('searchCollab', error);
        });
    }

    addColaborator(val){
        // let Data={
        //     email: val.email,
        //     firstName: val.firstName,
        //     lastName: val.lastName,
        //     userId: val.userId
        // }
        let collaborators = val;
        console.log("----------------------->",collaborators);
        console.log("----------------------->",this.props.note.id);
        user_services.addCollab(collaborators,this.props.note.id).then((data) => {
            
            console.log('data', data);
        }).catch(error => {
            console.log('searchCollab', error);
        });
    }

    colabArr=(val)=>{
        return (
                    <MenuItem  
                        style={{cursor:"pointer"}}>
                        <div style={{
                            width:"350px",
                            display:"flex",
                            justifyContent:"space-between"
                        }}>
                            <div>
                            {val.email}
                            </div>
                            <div>
                            {val.firstName}
                            </div>
                        </div>
                    </MenuItem>
                
           )
    }

    saveCollab=()=>{
        this.props.getNote();
    }

    closeDialog=()=>{

        this.props.getCloseStatus(false);
        
    }

    render() {
        const { classes } = this.props;
        const userList = this.state.collabData.map((values, index) => {
            return (
              <MenuItem key={index} onClick={() => this.addColaborator(values)}>
                {values.email}
              </MenuItem>
            );
          });
        return (
            <div>
                <Dialog
                    open={this.props.open}>
                <div
                    className="dialog-body" 
                    style={{
                    width:"570px",
                    minHeight:"160px",
                    padding:"15px",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-between"
                }}>
                <div
                 style={{borderBottom: "2px solid #e4d6d6"}}>
                Collaborators
                </div>
                
                <div>
                    <div>
                    <div className="name-txt">{localStorage.getItem('first')} {localStorage.getItem('last')}  (Owner)</div>
                    <div className="email-txt">{localStorage.getItem('email')}</div>
                    </div>
                    <TextField
                        className={classes.underline}
                        name="collaborators"
                        multiline
                        placeholder = "Search"
                        onChange={this.handleInput}
                        />
                </div>

                <div className='collab-btn'>
                    <div className='collab-btn-cnt'>
                    <span onClick={this.closeDialog}>Cancel</span>
                    <span onClick={this.saveCollab}>Save</span>
                    </div>
                </div>
                </div>
                <div style={{
                    maxHeight:"350px",
                    overflow:"scroll"
                }}>
                    <MenuList>{userList}</MenuList>
                {/* <Menu
                    id="simple-menu"
                    open={this.props.openStatus}
                >
                    {this.state.collabData.map(this.colabArr)}
                </Menu> */}
                </div>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(Collaborators);
