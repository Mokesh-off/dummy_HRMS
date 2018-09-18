import React, { Component } from 'react'

class Login extends Component{

	render(){
			  return(
			    <div>
			    <h1>Login page</h1>
						{/* <p onClick={this.submit}>test</p> */}
			    </div>
			  );
			}
		}
		
		export default Login

// import React, { Component } from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Redirect,
//   withRouter
// } from "react-router-dom";
// class Login extends Component{

// 	submit () {
// 		console.log('sub')
// 		this.props.history.push('/Home')
// 		// browserHistory.push('/Home')
// 		<Redirect to='/Home' />
// 	}

// 	render(){
// 	  return(
// 	    <div>
// 	    <h1>Login page</h1>
// 				<p onClick={this.submit}>test</p>
// 	    </div>
// 	  );
// 	}
// }

// export default Login