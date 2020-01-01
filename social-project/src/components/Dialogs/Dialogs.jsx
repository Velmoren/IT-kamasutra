import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

// styles
import classes from './Dialogs.module.css';
const { dialogs, dialogsItems, messages, button } = classes;

const Dialogs = (props) => {

    const onAddMessage = () => {
        props.actionAddMessage()
    }

    const onChangeMessage = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text)
    }

    let dialogsElements = props.messagesPage.dialogs.map((dialog, index) => <DialogItem state={dialog} key={index} />);
    let messageElements = props.messagesPage.messages.map((message, index) => <Message state={message} key={index} />);

    return (
        <div className={dialogs}>
            <div className={dialogsItems}>
                {dialogsElements}
            </div>
            <div className={messages}>
                {messageElements}
                <textarea onChange={onChangeMessage} value={props.messagesPage.newMessageText}></textarea>
                <button onClick={onAddMessage} className={button}>send</button>
            </div>
        </div>
    )
}

export default Dialogs;