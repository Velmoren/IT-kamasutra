import React from 'react';
import MyPost from './post/MyPost';

// files

// styles
import classes from './MyPosts.module.css';
const { posts, addPost } = classes;

const MyPosts = () => {
    return (
        <div className={posts}>
            my posts
            <div className={addPost}>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div>
                <MyPost message='Hi, how are you?' countLikes={15} />
                <MyPost message="It's my first post" countLikes={25} />
            </div>
        </div>
    )
}

export default MyPosts;