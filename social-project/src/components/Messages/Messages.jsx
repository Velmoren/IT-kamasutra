import React from 'react';
import { NavLink } from 'react-router-dom';

// styles
import classes from './Messages.module.css';
const { dialogs, dialogsItems, dialog, messagesItems, meesage, active } = classes;

const Messages = (props) => {
    return (
        <div className={dialogs}>
            <div className={dialogsItems}>
                <div className={dialog + ' ' + active}>
                    <NavLink to='/messages/1'>Dimych</NavLink>
                </div>
                <div className={dialog}>
                    <NavLink to='/messages/2'>Andrey</NavLink>
                </div>
                <div className={dialog}>
                    <NavLink to='/messages/3'>Sveta</NavLink>
                </div>
                <div className={dialog}>
                    <NavLink to='/messages/4'>DimySanyach</NavLink>
                </div>
                <div className={dialog}>
                    <NavLink to='/messages/5'>Viktor</NavLink>
                </div>
                <div className={dialog}>
                    <NavLink to='/messages/6'>Valera</NavLink>
                </div>
            </div>
            <div className={messagesItems}>
                <div className={meesage}>Hi</div>
                <div className={meesage}>How is yuor it-camasutra</div>
                <div className={meesage}>Yo</div>
            </div>
        </div>
    )
}

export default Messages;