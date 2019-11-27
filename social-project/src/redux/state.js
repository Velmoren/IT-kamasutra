import avatar1 from '../media/img/smile-1.png';
import avatar2 from '../media/img/smile-2.png';
import avatar3 from '../media/img/smile-3.png';

import profileReducer from '../redux/profileReducer';
import messagesReducer from '../redux/messagesReducer';
import sidebarReducer from '../redux/sidebarReducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', countLikes: 12 },
                { id: 2, message: 'It is my first post', countLikes: 11 }
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogs: [
                { id: 1, name: 'Dimych', avatar: avatar1 },
                { id: 2, name: 'Andrey', avatar: avatar2 },
                { id: 3, name: 'Sveta', avatar: avatar3 },
                { id: 4, name: 'Sanya', avatar: avatar1 },
                { id: 5, name: 'Viktor', avatar: avatar2 },
                { id: 6, name: 'Valera', avatar: avatar3 }
            ],
            messages: [
                { id: 1, message: 'Hi', sender: 'message-my' },
                { id: 2, message: 'How is yuor it-camasutra, How is yuor it-camasutra', sender: 'message-his' },
                { id: 3, message: 'Yo, How is yuor it-camasutra', sender: 'message-my' },
                { id: 4, message: 'Yo', sender: 'message-his' },
                { id: 5, message: 'Yo', sender: 'message-my' }
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;


