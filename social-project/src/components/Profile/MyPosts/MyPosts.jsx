import React from 'react';
import MyPost from './MyPost/MyPost';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';

// styles
import classes from './MyPosts.module.css';
const { postsBlock, addPost, posts } = classes;

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <MyPost message={post.message} countLikes={post.countLikes} key={post.id} />);

    const actionAddPost = () => {
        props.dispatch(addPostCreator());
    }

    const actionChangePost = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewPostTextCreator(text))
    }

    return (
        <h3 className={postsBlock}>
            my posts
            <div className={addPost}>
                <div>
                    <textarea onChange={actionChangePost} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={actionAddPost} >Add Post</button>
                </div>
            </div>
            <div className={posts}>
                {postsElements}
            </div>
        </h3>
    )
}

export default MyPosts;