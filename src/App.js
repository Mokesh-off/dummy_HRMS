

import React, { Component } from 'react';

import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';

import Content from './Components/Content/Content.jsx';
import Routes from './Routes/Routes';

class App extends Component {  
  render() {
    return (
      <div id="outer">
      <Routes />

      </div>
    );
  }
}

export default App;

























// import React, { Component } from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// import Login from './Components/Login/Login'
// import MainContent from './Components/MainContent/MainContent'
// // import NotFound from './NotFound.jsx'

// class App extends Component {
//   render () {
//     return (
//       <Router>
//         <div>
//           <Login /> 
//           {/* <ul>
            
//             <li><Link to={'/Login'}>Login</Link></li>
//             <li><Link to={'/home'}>Home</Link></li>
//           </ul> */}
//           <Switch>
            
//             <Route path='/Login' component={Login} />
//             <Route path='/home' component={MainContent} />
//             {/* <Route component={NotFound} />  */}
//           </Switch> 
//         </div>
//       </Router>
//     )
//   }
// }
// export default App








