import React, {Component} from 'react';
import './SideNav.css';

class SideNav extends Component{
//   constructor(props) {
//     super(props);
    
//     this.state = {
//        data: 0
//     }
//     this.setNewNumber = this.setNewNumber.bind(this)
//  };
//  setNewNumber() {
//     this.setState({data: this.state.data = 'about'})
//  }

  render(){
    return(
      <div className="sidenav">
        <button onClick = {this.setNewNumber}>About</button>
        <Content1 myNumber = {this.state.data}></Content1>
        <button>Services</button>
        <button>Client</button>
        <button>Contacts</button>
      </div>
    );
  }
}

class Content1 extends React.Component {
  // componentWillMount() {
  //    console.log('Component WILL MOUNT!')
  // }
  // componentDidMount() {
  //    console.log('Component DID MOUNT!')
  // }
  // componentWillReceiveProps(newProps) {    
  //    console.log('Component WILL RECIEVE PROPS!')
  // }
  // shouldComponentUpdate(newProps, newState) {
  //    return true;
  // }
  // componentWillUpdate(nextProps, nextState) {
  //    console.log('Component WILL UPDATE!');
  // }
  // componentDidUpdate(prevProps, prevState) {
  //    console.log('Component DID UPDATE!')
  // }
  // componentWillUnmount() {
  //    console.log('Component WILL UNMOUNT!')
  // }
  render() {
     return (
        <div>
           <h3>{this.props.myNumber}</h3>
        </div>
     );
  }
}


export default SideNav;