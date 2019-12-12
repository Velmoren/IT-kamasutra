import React from 'react';

// files
import contentLogo from './coffee-cup.svg';

// styles
import classes from './ProfileInfo.module.css';
const { logo, descriptionBlock } = classes;

const ProfileInfo = () => {
    return (
        <>
            <div className={logo}>
                <img src={contentLogo} alt='some' />
                <img src={contentLogo} alt='some' />
                <img src={contentLogo} alt='some' />
            </div>
            <div className={descriptionBlock}>
                ava + descr
            </div>
        </>
    )
}

export default ProfileInfo;