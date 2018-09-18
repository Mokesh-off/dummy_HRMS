import React, { Component } from 'react'

import Login from '../Components/Login/Login.jsx'
import MainContent from '../Components/MainContent/MainContent.js'

class Routes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Submit: false
    }
    this.setNew = this.setNew.bind(this)

  };

  setNew () {
    this.setState({ Submit: this.state.Submit = true })
  }

  render () {
    return (
      this.state.Submit ? <MainContent />:
            <button onClick={() => this.setNew()}>Submit</button>
          );
          }

        }
export default Routes;


























// import React from "react";
// import {BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Content from '../Components/Content/Content'
// import Login from '../Components/Login/Login'
// // /home/tringapps/Desktop/reactApp/HRMS/src/Components/Login/Login.jsx
// // /home/tringapps/Desktop/reactApp/HRMS/src/Components/Content/Content.jsx
// const Routes = () => (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/">Login</Link>
//         </li>
//         <li>
//           <Link to="/Home">Home</Link>
//         </li>
//         <li>
//           <Link to="/topics">Topics</Link>
//         </li>
//       </ul>

//       <hr />

//       <Route exact path="/" component={Login} />
//       <Route path="/Home" component={Content} />
//       <Route path="/topics" component={Topics} />
//     </div>
//   </Router>
// );

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// );

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>Components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//       </li>
//     </ul>

//     <Route path={`${match.url}/:topicId`} component={Topic} />
//     <Route
//       exact
//       path={match.url}
//       render={() => <h3>Please select a topic.</h3>}
//     />
//   </div>
// );

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// );

// export default Routes;