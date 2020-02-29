import avatar1 from '../assets/images/smile-1.png';
import avatar2 from '../assets/images/smile-2.png';
import avatar3 from '../assets/images/smile-3.png';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

const messagesReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, { id: 6, message: body, sender: 'message-my' }]
            }

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }

        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default messagesReducer;