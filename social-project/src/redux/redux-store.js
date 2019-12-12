import { createStore } from 'redux';
import { combineReducers } from 'redux';

// redusers
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import sidebarReducer from './sidebarReducer';

let redusers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebarPage: sidebarReducer
});

let store = createStore(redusers)

export default store;