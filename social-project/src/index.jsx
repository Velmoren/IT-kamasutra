// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

// styles
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);
