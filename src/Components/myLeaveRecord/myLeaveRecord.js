import React, {Component} from "react"
import './MyLeaveRecord.css'

import lists from './MyLeaveRecord.js'

import Details from './Detail.js'

class MyLeaveRecord extends Component {
 constructor(props){
	 super(props);
	 this.state={
		 "employee":lists,
		 "detailStatus": false,
		 resultValue:""
	 }
	// this.getData = this.getData.bind(this);
 }
	getData (target,employee) {
		//console.log(target);
		this.setState({resultValue  : this.state.employee.find(value => value.id == target.id)});
		
		//console.log(this.props.resultValue);
		this.setState({detailStatus : this.state.detailStatus = true});
	}
	getComponent() {
		if (this.state.detailStatus) {  // show the modal if state showModal is true
		  return <Details />;
		} else {
		  return null;
		}
	  }
	
	render() {
    return(
			<div>
				<table>
					<thead>
					<tr>
						<th>Type of leave</th>
						<th>Apply Date</th>
						<th>Apply Time</th>
						<th>Status</th>
					</tr>
					</thead>
					<tbody>
						{
							this.state.employee.map((employee) =>
							<tr key={employee.id} onClick={this.getData.bind(this,employee)}>
							<td>{employee.type}</td>
							<td>{employee.applyDate}</td>
							<td>{employee.applyTime}</td>
							<td>{employee.state}</td>
							</tr>
						)
						}
					</tbody>
				</table>
				
					<Details show={this.state.detailStatus == true}/>
				
			</div>
    );
  }
}

export default MyLeaveRecord 