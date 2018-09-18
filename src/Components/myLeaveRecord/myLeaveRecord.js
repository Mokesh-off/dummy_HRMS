import React, {Component} from "react"
import './MyLeaveRecord.css'


// import MyLeaveDetail from ""

class MyLeaveRecord extends Component {
 constructor(props){
	 super(props);
	 this.state={
		 "employee":[
			 {key:"1",type:"LOP",applyDate:"12-01-2018",applyTime:"15:01",state:"decline"},
			 {key:"2",type:"CL",applyDate:"12-02-2018",applyTime:"15:02",state:"decline"},
			 {key:"3",type:"EL",applyDate:"24-05-2018",applyTime:"20:01",state:"decline"},
			 {key:"4",type:"LOP",applyDate:"12-07-2018",applyTime:"15:01",state:"decline"},
			 {key:"5",type:"EL",applyDate:"10-08-2018",applyTime:"25:01",state:"decline"}
		 ]
	 }
	 this.getData = this.getData.bind(this);
 }
	getData () {
		// <MyLeavesDetail/>
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
							this.state.employee.map((data,i) =>
							<tr>
							<td>{data.type}</td>
							<td>{data.applyDate}</td>
							<td>{data.applyTime}</td>
							<td>{data.state}</td>
							</tr>
						)
						}
					</tbody>
				</table>
			</div>
    );
  }
}

export default MyLeaveRecord 