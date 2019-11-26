import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

// styles
import classes from './Dialogs.module.css';
const { dialogs, dialogsItems, messages, button } = classes;

const Dialogs = (props) => {

    // ссылки на элемент
    let newMessageElement = React.createRef();

    // акшены
    const actionAddMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    }

    // перебор и вывод данных
    let dialogsElements = props.state.messagesPage.dialogs.map(dialog => <DialogItem state={dialog} key={dialog.id} />);
    let messageElements = props.state.messagesPage.messages.map(message => <Message state={message} key={message.id} />);

    return (
        <div className={dialogs}>
            <div className={dialogsItems}>
                {dialogsElements}
            </div>
            <div className={messages}>
                {messageElements}
                <textarea ref={newMessageElement} ></textarea>
                <button onClick={actionAddMessage} className={button}>send</button>
            </div>
        </div>
    )
}

export default Dialogs;