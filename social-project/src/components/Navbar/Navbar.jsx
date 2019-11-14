import React from 'react';
import { NavLink } from 'react-router-dom';

// styles
import classes from './Navbar.module.css'
const { nav, item, activeLink } = classes;

const Navbar = () => {
    return (
        <nav className={nav}>
            <div className={item}>
                <NavLink to="/profile" exact activeClassName={activeLink}>Profile</NavLink>
            </div>
            <div className={item}>
                <NavLink to="/dialogs" activeClassName={activeLink}>Messages</NavLink>
            </div>
            <div className={item}>
                <NavLink to="/news" activeClassName={activeLink}>News</NavLink>
            </div>
            <div className={item}>
                <NavLink to="/music" activeClassName={activeLink}>Music</NavLink>
            </div>
            <div className={item}>
                <NavLink to="/settings" activeClassName={activeLink}>Settings</NavLink>
            </div>
        </nav >
    )
}

export default Navbar;