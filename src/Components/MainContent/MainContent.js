import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
// import SideNav from './Components/SideNav/SideNav.jsx';
import Content from '../Content/Content.jsx';
// adding new comment
class MainContent extends Component {  
  render() {
    return (
      <div id="outer">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default MainContent;
