import React from 'react';

// styles
import classes from './Message.module.css';
const { message } = classes;

const Message = (props) => {
    return (
        <div className={message}>{props.message}</div>
    )
}

export default Message;