import { createStore, combineReducers } from 'redux';

// redusers
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer'

let redusers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer
});

let store = createStore(redusers)

export default store;