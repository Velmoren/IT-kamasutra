import React from 'react';

// styles
import classes from './Navbar.module.css'
const { nav, item, active } = classes;

const Nav = () => {
    return (
        <nav className={nav}>
            <div className={`${item} ${active}`}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={item}>
                <a href='/messages'>Messages</a>
            </div>
            <div className={item}>
                <a href='/news'>News</a>
            </div>
            <div className={item}>
                <a href='/music'>Music</a>
            </div>
            <div className={item}>
                <a href='/settings'>Settings</a>
            </div>
        </nav >
    )
}

export default Nav;