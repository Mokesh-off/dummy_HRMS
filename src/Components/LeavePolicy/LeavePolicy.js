import React, { Component } from 'react'
import './LeavePolicy.css'
import Popup from './Popup';
//import Header from '../Header/Header';
class LeavePolicy extends Component{
    state={
        "leavePolicyJSON":[
                           {id:1,
                            Type:"PL",
                            Name:"Priviledge Leave",
                            Days:"24",
                            Terms:"Abc"
                            },
                            {id:2,
                                Type:"CL",
                                Name:"CasualLeave",
                                Days:"20",
                                Terms:"Abc"
                            },
                            {id:3,
                                Type:"SL",
                                Name:"Sick Leave",
                                Days:"20",
                                Terms:"Abc"
                            },  
                        ],
        isOpen: false
    }
    openPopup = () => {
        this.setState({
          isOpen: true
        });
      }
    
      closePopup = () => {
        this.setState({
          isOpen: false
        });
      }
    
   render(){
       // localStorage.setItem('LeavePolicyData',JSON.stringify(this.state.leavePolicyJSON));
        return(
          <div className="Policy">
          <h1 className="header">Leave Policy(2018)</h1>
          <hr></hr>
      <form>    
      <table>
        <thead>
          <tr>
            <th>Leave Type</th>
            <th>Leave Name</th>
            <th>NO.of Days</th>
            <th>Terms</th>
           </tr>
         </thead>

       <tbody>
       {this.state.leavePolicyJSON.map((data,i)=><tr key={data.id}>
           <td>{data.Type}</td>
           <td>{data.Name}</td>
           <td>{data.Days}</td>
           <td>{data.Terms}</td>
           </tr>)}
  </tbody>
</table>
</form>
    <div className="App">
        <button onClick={this.openPopup}>
          Click Me!
        </button>

        <Popup show={this.state.isOpen} onClose={this.closePopup}>
        </Popup>
      </div>
      
</div>
        );
      }
}

export default LeavePolicy