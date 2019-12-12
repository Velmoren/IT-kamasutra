// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import store from './redux/redux-store';
import { Provider } from './storeContext';

// styles
import './index.css';


let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
});
