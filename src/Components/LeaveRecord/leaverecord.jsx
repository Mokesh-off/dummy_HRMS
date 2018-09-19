import React,{Component} from 'react';
import  './/leaverecord.css';

class Leaverecord extends Component{
    constructor(props){
        super(props);
        this.state={
            "employeeName":[

            {id:1,
            name:"Meena",
            sickleave:2,
            medical:5,
            vacation:6,
            total:13},
            {id2:2,
            name:"Rupali",
            sickleave:0,
            medical:8,
            vacation:2,
            total:10},
            {id:3,
            name:"Swathi" ,  
            sickleave:2,
            medical:4,
            vacation:7,
            total:13
            },
            {id:4,
            name:"Ganesh" ,  
            sickleave:2,
            medical:0,
            vacation:7,
            total:9    },
            {search:""}
             ],
             
        }
      
    }
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onClick=(e)=>{

        for( var i=0;i<this.state.employeeName.length;i++)
        { 
        if(this.state.search===(this.state.employeeName[i].name)){
            
           alert("done");
           
        }
    }
        
    };  
    
    
    
    
    render(){
        return(
            <div>
                <form  onSubmit="return false"> 
                    <div>
                <input 
                type="text" 
                name="search"
                placeholder="Search Employee...." 
                 value={this.state.search}
                 onChange = {
                    (e) => this.change(e)
                }
                /><div id="but1">< button  onClick = {
                    (e) => this.onClick(e)
                } > 
                Search 
                </button></div>
            </div>
            </form>
            
            <div id="format1">
            <table>
            <thead><tr><td><h3>Name</h3></td><td><h3>Sick Leave</h3></td><td><h3>Medical Leave</h3></td><td><h3>Vacation Leave</h3></td><td><h3>Total No. Leave taken</h3></td></tr></thead>
            <tbody>
             {this.state.employeeName.map((data,i)=><tr key={data.id}><td>{data.name}</td><td>{data.sickleave}</td><td>{data.medical}</td><td>{data.vacation}</td><td>{data.total}</td></tr>)
             }   
             </tbody>
             </table>   
            </div>
            </div>
        );
            
    }
}



export default Leaverecord;