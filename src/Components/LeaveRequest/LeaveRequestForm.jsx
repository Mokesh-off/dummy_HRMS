import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './LeaveRequestForm.css'

class LeaveRequestForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
          Name: '',
          Number_of_Days: '',
          From: moment(),
          To: '',
          Type: '',
          Reason: ' '
       }
    // var arrDisabledDates = {};
    // arrDisabledDates[new Date('20/08/2018')] = new Date('03/22/2013');
    // arrDisabledDates[new Date('02/10/2018')] = new Date('02/10/2018');
    // arrDisabledDates[new Date('19/10/2018')] = new Date('19/10/2018');
    // arrDisabledDates[new Date('07/09/2018')] = new Date('07/09/2018');


    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.DateFromChange = this.DateFromChange.bind(this)
    this.DateToChange = this.DateToChange.bind(this)

  }

diff(props){
   var one_day=1000*60*60*24;
}
  handleChange =(e)=> {
    console.log(e);
    this.setState({[e.target.name]: e.target.value})
  }
  DateFromChange(date) {
     this.setState({From : this.state.From = date });
   }
   DateToChange(date) {
      this.setState({To : this.state.To = date });
    }
  handleSubmit (e){
    e.preventDefault();
    alert("Leave Request submitted successfully!!!");

  }

  // dateChange (e) {
  //   this.setState({[e.target.name]: e.target.value});
  // }
  isWeekday = (date) => {
    const day = date.day()
    return day !== 0 && day !== 6
  }
  isHoliday = (date) =>{
    const dt= date()
    var dd=!(dt.setDate(dt.getDate() - 5));
    return dd
  }

render(){
  return(
  <div className="main">
  <div className="container">
  <form  onSubmit={e =>this.handleSubmit(e)}>
   <div className="row">
   <div className="row-1">
       <label for="Name">Name</label>
      </div>
     <div className="row-2"   value={this.state.Name} onChange={e =>this.handleChange(e)}>
     <select name="Name" value={this.state.Name} onChange={e =>this.handleChange(e)}>
       <option value="" disabled selected>select your Name</option>
       <option value="Keshav-(ID-TRL405)">Keshav-(ID-TRL405)</option>
       <option value="Subramani-(ID-TRL406)">Subramani-(ID-TRL406)</option>
       <option value="Sathish-(ID-TRL407)">Sathish-(ID-TRL407)</option>
       <option value="Shiny-(ID-TRL408)">Shiny-(ID-TRL408)</option>
       <option value="Benjamin-(ID-TRL409)">Benjamin-(ID-TRL409)</option>
       <option value="Pooja-(ID-TRL410)">Pooja-(ID-TRL410)</option>
       </select>
     </div>
   </div>

   <div className="row">
     <div className="row-1">
       <label for="drop">Type</label>
     </div>
     <div className="row-2">
          <select name="Type" value={this.state.Type} onChange={e =>this.handleChange(e)}>
            <option value="" disabled selected>select your option</option>
            <option value="Casual Leave">Casual Leave</option>
            <option value="Emergency leave">Emergency Leave</option>
            <option value="Sick leave">Sick leave</option>
            <option value="Earned Leave">Earned Leave</option>
            <option value="maternity Leave">maternity Leave</option>
            <option value="Other Leave">Other Leave</option>
            </select>
   </div>
   </div>

   <div className="row">
     <div className="row-1">
       <label for="drop">From</label>
     </div>
     <div className="row-2" value={this.state.From} name="From"   >

         <DatePicker className="Dp"
          selected={this.state.From}
          filterDate={this.isWeekday}
          showYearDropdown
          scrollableYearDropdown
          dateFormat="DD/MM/YYYY"
          minDate={moment()}
          maxDate={moment().add(24, "months")}
          showDisabledMonthNavigation
          onChange={e=>this.DateFromChange(e)}
          yearDropdownItemNumber={2}
          value={this.state.From}
          placeholderText="Select a weekday"
          name="From"/>
     </div>
   </div>

   <div className="row">
     <div className="row-1">
       <label for="drop">To</label>
     </div>
     <div className="row-2"  name="To" value={this.state.To}  >
           <DatePicker className="Dp"
            selected={this.state.To}
            filterDate={this.isWeekday}
            showYearDropdown
            dateFormat="DD/MM/YYYY"
            onChange={e=>this.DateToChange(e)}
            value={this.state.To}
            scrollableYearDropdown
            minDate={this.state.From}
            maxDate={moment(this.state.From).add(24, "months")}
            showDisabledMonthNavigation
            yearDropdownItemNumber={2}
            placeholderText="Select a weekday"
            name="To"/>
     </div>
  </div>

  <div className="row">
    <div className="row-1">
      <label for="Number_of_Days">Number_of_Days</label>
    </div>
      <div className="row-2" value={this.state.Number_of_Days} onChange={e => this.handleChange(e)}>
       <input type="text" id="Number_of_Days"  size="40" name="Number_of_Days"  />
        </div>
</div>

    <div className="row">
      <div className="row-1">
        <label for="drop">Reason</label>
      </div>
      <div className="row-3" value={this.state.Reason} onChange={e => this.handleChange(e)}>
       <textarea placeholder="Reason"></textarea>
      </div>
   </div>

  <div className="row" >
     <input type="submit" id="submit" value="submit" />
      <input type="reset"  value="Reset" />
   </div>

 </form>
 </div>
 </div>
);
}
}
export default LeaveRequestForm;
