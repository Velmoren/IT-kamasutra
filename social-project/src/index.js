import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import state from './redux/state'

// styles
import './index.css';

ReactDOM.render(<App state={state} />, document.getElementById('root'));
