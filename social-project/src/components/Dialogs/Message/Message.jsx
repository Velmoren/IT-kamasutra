import React from 'react';

// styles
import './Message.css'
import classes from './Message.module.css';
const { message } = classes;

const Message = (props) => {
    return (
        <div className={`${message} ${props.state.sender}`}>{props.state.message}</div>
    )
}

export default Message;