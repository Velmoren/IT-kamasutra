// import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messagesReducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => { dispatch(updateNewMessageTextActionCreator(text)) },
        actionAddMessage: () => { dispatch(addMessageActionCreator()) }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;