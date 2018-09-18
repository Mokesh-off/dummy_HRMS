import React from 'react';

class Popup extends React.Component {
    state={
        "leavePolicyJSON":[
                           {id:1,
                            Type:"",
                            Name:"Priviledge Leave",
                            Days:"24",
                            Terms:"Abc"
                            },
                            {id:2,
                                Type:"CL",
                                Name:"CasualLeave",
                                Days:"10",
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
    
    change = (e) => {
      //this.props.onChange({[e.target.name]:e.target.value});
      this.setState({[this.state.leavePolicyJSON[0].Type] : [e.target.value]});
      localStorage.setItem('LeavePolicyData',JSON.stringify(this.state.leavePolicyJSON));
    };

  render() {

    if(!this.props.show) {
      return null;
    }
    return (
      
      <div className="popup-backdrop">
     
        <div className="popup">
          Enter Leave Type <input type="Text" onChange={e=>this.change(e)}></input><br></br>
          Enter Leave Type <input type="Text" ></input><br></br>
          <button className="popup-close" onClick={this.props.onClose}>close</button>
          {this.props.children}
      <span>{localStorage.getItem('LeavePolicyData')}</span>
      </div>
      </div>
      
    );
  }
}


export default Popup;

