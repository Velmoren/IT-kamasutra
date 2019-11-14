import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let dialogs = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sanya' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' }
];

let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is yuor it-camasutra' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' }
]

let posts = [
    { id: 1, message: 'Hi, how are you?', countLikes: 12 },
    { id: 2, message: 'It is my first post', countLikes: 11 }
]


ReactDOM.render(<App dialogs={dialogs} messages={messages} posts={posts} />, document.getElementById('root'));
