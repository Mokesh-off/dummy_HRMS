import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
// import SideNav from './Components/SideNav/SideNav.jsx';
import Content from './Components/Content/Content.jsx';

class App extends Component {  
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

export default App;
