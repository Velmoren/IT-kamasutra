import React from 'react';
import { NavLink } from 'react-router-dom';

// styles
import classes from './DialogItem.module.css';
const { dialog, activeLink } = classes;

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={dialog}>
            <NavLink to={path} activeClassName={activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;