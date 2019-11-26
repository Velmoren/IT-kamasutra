import avatar1 from '../media/img/smile-1.png';
import avatar2 from '../media/img/smile-2.png';
import avatar3 from '../media/img/smile-3.png';

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
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    actionAddPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            countLikes: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;


