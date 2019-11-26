import React from 'react';
import { NavLink } from 'react-router-dom';

// styles
import classes from './DialogItem.module.css';
const { dialog, activeLink, avatar } = classes;

const DialogItem = (props) => {
    let path = '/dialogs/' + props.state.id;

    return (
        <div className={dialog}>
            <img className={avatar} src={props.state.avatar} alt="avatar" />
            <NavLink to={path} activeClassName={activeLink}>{props.state.name}</NavLink>
        </div>
    )
}

export default DialogItem;