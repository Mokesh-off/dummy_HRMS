import React, { Component } from 'react'
import './Content.css'
import '../SideNav/SideNav.css'
import MyLeaveRecord from '../myLeaveRecord/myLeaveRecord'

class Content extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this)
  };
  setNewNumber (x) {
    this.setState({ data: this.state.data = x })
  }
  render () {
    return (
      <div className='bodyContent'>
        <div className='sidenav'>
          <button onClick={() => this.setNewNumber('Leave_Request')}>Leave Request</button>
          <button onClick={() => this.setNewNumber('Request_Status')}>Request Status</button>
          <button onClick={() => this.setNewNumber('Leave_Approval')}>Leave Approval</button>
          <button onClick={() => this.setNewNumber('My_Leave')}>My Leave</button>
          <button onClick={() => this.setNewNumber('Leave_Records')}>Leave Records</button>
          <button onClick={() => this.setNewNumber('Leave_Policy')}>Leave Policy</button>
          <button onClick={() => this.setNewNumber('Configure_Holiday')}>Leave plan</button>

        </div>

        {this.state.data === 0
          ? <div id='mainContainer'>
          <div className='columnDiv'>
            <h1>Content</h1>
            </div>
          </div>
			:		this.state.data === 'Leave_Request'
				  ? <div id='mainContainer'>
  <div className='columnDiv'>
  <h1>Leave_Request</h1>
		 		    </div>
		 		  </div>
			:			this.state.data == 'Request_Status' ?
              <div id='mainContainer'>
  <div className='columnDiv'>
  <h1>Request_Status</h1>
				 </div>
			 </div>
			 :			 this.state.data == 'Leave_Approval' ?
  <div id='mainContainer'>
                  <div className='columnDiv'>
                    <h1>Leave_Approval</h1>
                  </div>
                </div>
			 :			 this.state.data == 'My_Leave' ?
       <div id='mainContainer'>
                       <div className='columnDiv'>
                         <h1>My_Leave</h1>
                       </div>
                       <div>
                       <MyLeaveRecord />
                       </div>
                     </div>
			 :			 this.state.data == 'Leave_Records' ?
       <div id='mainContainer'>
                       <div className='columnDiv'>
                         <h1>Leave_Records</h1>
                       </div>
                     </div>
			 :			 this.state.data == 'Leave_Policy' ?
       <div id='mainContainer'>
                       <div className='columnDiv'>
                         <h1>Leave_Policy</h1>
                       </div>
                     </div>
			 :			 this.state.data == 'Configure_Holiday' ?
       <div id='mainContainer'>
                       <div className='columnDiv'>
                         <h1>Configure_Holiday</h1>
                       </div>
                     </div>
			 :
       <div id='mainContainer'>
                       <div className='columnDiv'>
                         <h1>Leave_Records</h1>
                       </div>
                     </div>
        }
      </div>
    )
  }
}
export default Content
