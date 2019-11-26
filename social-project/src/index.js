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
        <App
            state={state}
            actionAddPost={store.actionAddPost.bind(store)}
            updateNewPostText={store.updateNewPostText.bind(store)}
        />, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree);
