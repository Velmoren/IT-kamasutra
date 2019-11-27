// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App/App';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import store from './redux/state';

// styles
import './index.css';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)} />, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree);
