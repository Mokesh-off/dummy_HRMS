import React, { Component } from 'react';
import './Header.css';
class Header extends Component{
  render(){
    return(
      <div id="header">
      {/* <p className="headerText">Tringapps</p> */}
      <span className="logo1">tring</span><span className="logo2">apps</span>
      <span className="profile">Home</span>
      </div>
        );
    }
}

export default Header;