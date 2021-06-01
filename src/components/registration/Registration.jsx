import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './Registration.scss';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';



let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
let UserNameRegex = RegExp("^([a-zA-Z0-9]*[+._-]*[a-zA-Z0-9]+@[a-zA-Z]+.{3}[a-zA-z.]*[a-zA-z]{2})+$");
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;


export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            lName: '',
            uName:'',
            password:'',
            cPassword: '',
            fNameError: false,
            lNameError: false,
            uNameError:false,
            passwordError:false,
            cPasswordError:false
        }
    }
    validationTest = (test,val) => {
        if(test.test(val)){
            console.log("Value",val);
            console.log("test result",test.test(val));
        return true
        }
        else{
        return false;
        }
    }

    
    validation = () => {
        let isError = false;
        const errors= this.state;
        errors.lNameError= this.validationTest(nameRegex,this.state.lName) === true ? false : true;
        errors.fNameError= this.validationTest(nameRegex,this.state.fName) === true ? false : true;
        errors.uNameError=this.validationTest(UserNameRegex,this.state.uName) === true? false : true;
        errors.passwordError=this.validationTest(passwordRegex,this.state.password) === true? false : true;
        errors.cPasswordError=this.validationTest(passwordRegex,this.state.cPassword) === true? false : true;

        this.setState({
            ...errors,
        },console.log(errors));
        console.log("errors.lNameError---",errors.lNameError);
        console.log("errors.fNameError---",errors.fNameError);
        console.log("errors.uNameError---",errors.uNameError);
        console.log("errors.passwordError---",errors.passwordError);
        console.log("errors.cPasswordError---",errors.cPasswordError);
        return isError = errors.lNameError && errors.fNameError && errors.uNameError &&  errors.passwordError && errors.cPasswordError

    }
    Next = () => {
        var isValidated = this.validation();
        console.log("validation---",isValidated);
        if(!isValidated && (this.state.password === this.state.cPassword)){
            console.log("validation successfull");
        }
    }

    change = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
        
      }

    
    
    render() {
        let styles = {
            helperText: {

                 color: 'red',
                 fontWeight: 'bold',
                 fontSize: '.8em',
                 marginLeft: '1px',
            }
        }
 
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
                        <div className="input-field">
                            <div className="reg-content-names">
                                <TextField 
                                    id="firstName"
                                    type="text"
                                    name="fName"
                                    label="First Name"
                                    variant="outlined" 
                                    size="small" 
                                    onChange={e => this.change(e)}
                                    helperText={this.state.fNameError ? "Enter first name" :''} 
                                    FormHelperTextProps={{ style: styles.helperText }}/>
                                <TextField 
                                    id="lastName"
                                    type="text"
                                    name="lName"
                                    label="LastName"
                                    variant="outlined" 
                                    size="small" 
                                    onChange={e => this.change(e)}
                                    helperText={this.state.lNameError ? "Enter Last name" : ''}
                                    FormHelperTextProps={{ style: styles.helperText }}/>
                            </div>
                            <div className="reg-content-username">
                                <TextField 
                                id="username"
                                type="text"
                                name="uName"
                                label="User Name"
                                variant="outlined"
                                size="small" 
                                onChange={e => this.change(e)}
                                helperText={this.state.uNameError ? "Enter User name" : ''}
                                FormHelperTextProps={{ style: styles.helperText }}/>
                            </div>
                            <div className="message">You can use letters,numbers & periods</div>
                            <div className="reg-content-security">
                                <TextField 
                                    id="password" 
                                    type="password"
                                    name="password"
                                    label="Password" 
                                    variant="outlined" 
                                    size="small"
                                    onChange={e => this.change(e)}
                                    helperText={this.state.passwordError ? "Enter Password" : ''}
                                    FormHelperTextProps={{ style: styles.helperText }} />
                                <TextField 
                                    id="Confirm" 
                                    type="password"
                                    name="cPassword"
                                    label="Confirm Password" 
                                    variant="outlined" 
                                    size="small" 
                                    onChange={e => this.change(e)}
                                    helperText={this.state.cPasswordError ? "Enter Confirm Password" : ''}
                                    FormHelperTextProps={{ style: styles.helperText }}/>
                            </div>
                            <div className="message">Use 8 or more characters with a mix of letters, number & symbols</div>
                            <div className="show-checkbox">
                                <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                                <span>Show password</span>
                            </div>
                            
                            <div className="div-but-content"><span className="Text">Sign in Instead</span>
                                    <Button className="button" variant="contained" color="primary" href="#contained-buttons" onClick={this.Next}>
                                        Next
                                     </Button>
                                </div>

                        </div>
                    </div>

                    <div>
                    </div>
                    <div className="logo-cont">
                        <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" />
                        <span class="fig-caption">One account. All of Fundoo working for you.</span>
                    </div>
                </div>
            </>
        );
    }
}

// export class ButtonComp extends Component{
//     render() {
//         return(
        
//             <div className="div-but-content"><span className="Text">Sign in Instead</span>
//                                     <Button className="button" variant="contained" color="primary" href="#contained-buttons" onClick={this.Next()}>
//                                         Next
//                                      </Button>
//                                 </div>
            
//         );
//     }
// }
