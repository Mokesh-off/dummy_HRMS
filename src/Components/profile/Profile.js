
import React,{ Component } from 'react'
import profile from '../../Assets/images/profile_icon.png'
import './Profile.css'


class Profile extends Component {
  constructor (props) {
    super (props)
    this.state = {
      image : profile,
      fullName : "Tanya Sharma",
      designation : "Finance Manager",
      employeeId : "0045",
      birthday : "30/08/1993",
      mobileNumber : "+91-9765483291",
      emailId : "tanyasharma2@gmail.com",
      address : "34, Thana Street, Pursaiwalkam, Chennai",
      department : "Finance",
      workLocation : "Chennai",
      casualLeaves : "5",
      seekLeaves : "4",
      doj : "05/08/2015",
     
    }
  }
    render () {
        return (
          
            <div className="profile">
              <div className="desc">
                <img src={this.state.image} alt="Profile" /><br/>
                <label name="fullName" >{this.state.fullName}</label>
                <label name="designation">{this.state.designation}</label>
              </div>
              <div className="otherDetails">
                <div className="other">
                  <span><b>Personal Details</b></span>
                  
                  <label>
                    Full Name
                    <span name="fullName" id="fullName" >{this.state.fullName}</span>
                  </label>
                  <label>
                    Employee Id
                    <span name="employeeId" id="eid" >{this.state.employeeId}</span>
                  </label>
                  <label>
                    Birthday 
                    <span name="birthday" id="dob" >{this.state.birthday}</span>  
                  </label>
                  <span><b>Contact Details</b></span>
                  <label>
                    Mobile Number 
                    <span name="mobileNumber" id="mobile" >{this.state.mobileNumber}</span>  
                  </label>
                  <label>
                    Email Id
                    <span name="emailId" id="email" >{this.state.emailId}</span>  
                  </label>
                  <label>
                    Address 
                    <span name="address" id="address" >{this.state.address}</span>  
                  </label>     
                  <span><b>Work Details</b></span>           
                  <label>
                    Department
                    <span name="department" id="dept" >{this.state.department}</span>
                  </label>
                  <label>
                    Work location 
                    <span name="workLocation" id="work" >{this.state.workLocation}</span>  
                  </label>
                  <label>
                    Date of Joining
                    <span name="doj" id="doj" >{this.state.doj}</span>  
                  </label>
                </div><br/><br/>
                <div className="leaves">
                  <label>Number of Remaining Casual leaves: <span><b>{this.state.casualLeaves}</b></span></label><br/><br/>
                  <label>Number of Remaining Seek leaves : <span><b>{this.state.seekLeaves}</b></span></label>
                </div>
              </div>
              
            </div>
          
        )
    }
}

export default Profile


