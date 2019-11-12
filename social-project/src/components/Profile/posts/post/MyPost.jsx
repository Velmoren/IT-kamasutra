import React from 'react';

// files
import avatarImg from './settings.svg'

// styles
import classes from './MyPost.module.css';
const { item } = classes;

const MyPost = (props) => {
    return (
        <div className={item}>
            <img src={avatarImg} alt="avatarImg" />
            <span>{props.message}</span>
            <div>
                <span>Like {props.countLikes}</span>
            </div>
        </div>
    )
}

export default MyPost;