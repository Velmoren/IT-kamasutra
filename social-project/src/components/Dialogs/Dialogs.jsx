import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

// styles
import classes from './Dialogs.module.css';
const { dialogs, dialogsItems, messages } = classes;

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem state={dialog} key={dialog.id} />);

    let messageElements = props.state.messages.map(message => <Message state={message} key={message.id} />);

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