import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messagesReducer'
import Dialogs from './Dialogs';
import StoreContext from '../../storeContext'

const DialogsContainer = (props) => {

    return <StoreContext.Consumer>

        {store => {

            // акшены
            const actionAddMessage = () => {
                store.dispatch(addMessageActionCreator())
            }

            const updateNewMessageText = (text) => {
                store.dispatch(updateNewMessageTextActionCreator(text))
            }

            let state = store.getState();

            return (
                <Dialogs
                    updateNewMessageText={updateNewMessageText}
                    actionAddMessage={actionAddMessage}
                    dialogs={state.messagesPage.dialogs}
                    messages={state.messagesPage.messages}
                    newMessageText={state.messagesPage.newMessageText}
                />
            )
        }}
    </StoreContext.Consumer>

}

export default DialogsContainer;