import React from 'react';

// files
import logoImage from './hotdog.svg'

// styles
import classes from './Header.module.css';
const { header, logo, title } = classes;

const Header = () => {
    return (
        <header className={header}>
            <div className={logo}>
                <img src={logoImage} alt="logo" />
            </div>
            <div className={title}>
                <span>BURGER CHAT</span>
            </div>
        </header>
    )
}

export default Header;