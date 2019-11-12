import React from 'react';
import MyPosts from './posts/MyPosts'

// files
import contentLogo from './coffee-cup.svg';

// styles
import classes from './Profile.module.css';
const { logo } = classes;

const Profile = () => {
    return (
        <>
            <div className={logo}>
                <img src={contentLogo} alt='some' />
                <img src={contentLogo} alt='some' />
                <img src={contentLogo} alt='some' />
            </div>
            <div>
                ava + descr
                </div>
            <MyPosts />
        </>
    )
}

export default Profile;