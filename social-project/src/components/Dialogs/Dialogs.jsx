import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageCreator, updateNewMessageTextCreator } from '../../redux/messagesReducer'

// styles
import classes from './Dialogs.module.css';
const { dialogs, dialogsItems, messages, button } = classes;

const Dialogs = (props) => {

    // акшены
    const actionAddMessage = () => {
        props.dispatch(addMessageCreator())
    }

    const actionChangeMessage = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewMessageTextCreator(text))
    }

    // перебор и вывод данных
    let dialogsElements = props.messagesPage.dialogs.map(dialog => <DialogItem state={dialog} key={dialog.id} />);
    let messageElements = props.messagesPage.messages.map(message => <Message state={message} key={message.id} />);

    return (
        <div className={dialogs}>
            <div className={dialogsItems}>
                {dialogsElements}
            </div>
            <div className={messages}>
                {messageElements}
                <textarea onChange={actionChangeMessage} value={props.newMessageText}></textarea>
                <button onClick={actionAddMessage} className={button}>send</button>
            </div>
        </div>
    )
}

export default Dialogs;