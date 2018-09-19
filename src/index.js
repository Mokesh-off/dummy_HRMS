import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Routes from './Routes/Routes';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><App /></div>, document.getElementById('root'));

registerServiceWorker();
