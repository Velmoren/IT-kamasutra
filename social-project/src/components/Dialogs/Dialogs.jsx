import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

// styles
import classes from './Dialogs.module.css';
const { dialogs, dialogsItems, messages } = classes;

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);

    let messageElements = props.messages.map(message => <Message message={message.message} id={message.id} key={message.id} />);

    return (
        <div className={dialogs}>
            <div className={dialogsItems}>
                {dialogsElements}
            </div>
            <div className={messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;