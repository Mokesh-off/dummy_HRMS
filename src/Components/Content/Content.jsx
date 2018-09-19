import React, { Component } from 'react'
import './Content.css'
import '../SideNav/SideNav.css'
import MyLeaveRecord from '../myLeaveRecord/myLeaveRecord'
import Profile from '../profile/Profile'
import LeavePolicy from '../LeavePolicy/LeavePolicy'
import LeaveRequestForm from '../LeaveRequest/LeaveRequestForm'
class Content extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: 0,
      parentdropDown : "parentoption",
      childDropDown : "close"
    }
    this.setNewNumber = this.setNewNumber.bind(this)
    this.dropDownEvent = this.dropDownEvent.bind(this)
  };
  setNewNumber (x) {
    this.setState({ data: this.state.data = x })
  }
  dropDownEvent(){
  console.log(this.state);
     this.setState({ parentdropDown : this.state.parentdropDown = (this.state.parentdropDown == "parentoption active")?"parentoption":"parentoption active"})
     this.setState({ childDropDown : this.state.childDropDown = (this.state.childDropDown == "close")?"open":"close" })

  }
  render () {
    return (
      <div className='bodyContent'>
        <div className='sidenav'>
            <button onClick={() => this.setNewNumber('Profile')}>Profile</button>
          <div className={this.state.dropDown} onClick={() => this.dropDownEvent()}><button>Leave</button></div>
          <div className={'childoptions ' + this.state.childDropDown}>
            <button onClick={() => this.setNewNumber('Leave_Request')}>Leave Request</button>
            {/* <button onClick={() => this.setNewNumber('Request_Status')}>Request Status</button> */}
            <button onClick={() => this.setNewNumber('Leave_Approval')}>Leave Approval</button>
            <button onClick={() => this.setNewNumber('My_Leave')}>My Leave</button>
            <button onClick={() => this.setNewNumber('Leave_Records')}>Leave Records</button>
            <button onClick={() => this.setNewNumber('Leave_Policy')}>Leave Policy</button>
            <button onClick={() => this.setNewNumber('Configure_Holiday')}>Leave plan</button>
          </div>

        </div>

        {this.state.data === 0
          ? <div id='mainContainer'>
          <div className='columnDiv'>
            <h1>Content</h1>
            </div>
          </div>

:			this.state.data == 'Profile' ?
    <div id='mainContainer'>
      <div className='columnDiv'>
        <Profile />
      </div>
    </div>

			:		this.state.data === 'Leave_Request'
				  ? <div id='mainContainer'>
  <div className='columnDiv'>
  <h1>Leave_Request</h1>
<LeaveRequestForm/>
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
                         <LeavePolicy/>
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
