import React from 'react';
import MyPost from './MyPost/MyPost';

// styles
import classes from './MyPosts.module.css';
const { postsBlock, addPost, posts } = classes;

const MyPosts = (props) => {

    let postsElements = props.posts.map((post, index) => <MyPost message={post.message} countLikes={post.countLikes} key={index} />);

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text)
    }

    return (
        <h3 className={postsBlock}>
            my posts
            <div className={addPost}>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost} >Add Post</button>
                </div>
            </div>
            <div className={posts}>
                {postsElements}
            </div>
        </h3>
    )
}

export default MyPosts;