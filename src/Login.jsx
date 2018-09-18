import React, { Component } from "react";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
          email: '',
          password: '',
          error: '',
        };
    
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
      }
    
      dismissError() {
        this.setState({ error: '' });
      }
    
      handleSubmit(evt) {
        evt.preventDefault();
    
        if (!this.state.email) {
          alert("Email is required");
        }
    
        if (!this.state.password) {
          alert("Password is required");
        }
    
        //return this.setState({ error: '' });
        else if (this.state.email && this.state.password){
            alert("Login Successfull");
        }
      }
    
      handleEmailChange(evt) {
        this.setState({
          email: evt.target.value,
        });
      };
    
      handlePassChange(evt) {
        this.setState({
          password: evt.target.value,
        });
      }
    
      render() {
        return (
            <div className="Login">  

            <form onSubmit={this.handleSubmit}>
              <div className="Login">
              <table><tr><td>
              <label>Email</label></td><td>
              <input type="email" data-test="email" value={this.state.email} onChange={this.handleEmailChange} />
    
              </td></tr><tr><td><label>Password</label></td>
              <td><input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
    
              </td></tr></table>
              <input className="btn" type="submit" value="Log In" data-test="submit" />
              </div>
            </form>
          </div>
    );
  }
}