// import React, { Component } from 'react'

// class Dash extends from Component{
// this.state = {
//     "LeaveReq":[
//         {
//             id : 100,
//             notification: [
//                 {
//                     notificationId : 1,
//                     description : "I need leave for my personal activities"
//                 },
//                 {
//                     notificationId : 2,
//                     description : "I need leave for my personal activities"
//                 }
//             ]
//         },

//         {
//             id : 101,
//             notification: [
//                 {
//                     notificationId : 1,
//                     description : "I need leave for my personal activities"
//                 },
//                 {
//                     notificationId : 2,
//                     description : "I need leave for my personal activities"
//                 }
//             ]
//         }
//     ]
// }


// render(){
//     return(
//         <div id="dashboardOuter">
//           {
//               this.state.LeaveReq.map( (data,i) => <span key={data.id}> 
//               {data.notification[i].description}
//               </span> )
              
//           }
//         </div>
//     );
// }


// }
// export default Dash



import React, { Component } from 'react';
import './Dashboard.css'
class Dash extends Component{


sFunc(){
    alert('hi');
}

state = {
    "LeaveReq":[
        {
            id : 100,
            notification: [
                {
                    notificationId : 1,
                    description : "I need leave for my personal activities"
                },
                {
                    notificationId : 2,
                    description : "I need leave for my personal activities"
                }
            ]
        },

        {
            id : 101,
            notification: [
                {
                    notificationId : 1,
                    description : "I need leave for my personal activities"
                },
                {
                    notificationId : 2,
                    description : "I need leave for my personal activities"
                }
            ]
        }
    ]
}


  render(){
    return(
        <div id="dashboardOuter">
          {
              
              this.state.LeaveReq.map( (data,i) => <div className='card' onClick={this.sFunc} key={data.id}> 
              {data.notification[i].description}
              <hr></hr>
              </div> 
              
              )

          }
        </div>
        );
    }
}

export default Dash;