import React from 'react';
import { NavLink } from 'react-router-dom';

// files
import logoImage from './hotdog.svg'

// styles
import classes from './Header.module.css';
const { header, logo, title, login_block } = classes;

const Header = (props) => {
    return (
        <header className={header}>
            <div className={logo}>
                <img src={logoImage} alt="logo" />
            </div>
            <div className={title}>
                <span>BURGER CHAT</span>
            </div>
            <div className={login_block}>
                {props.isAuth ? <span>{props.login}</span> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;