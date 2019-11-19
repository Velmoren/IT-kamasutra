import React from 'react';
import MyPost from './MyPost/MyPost';

// styles
import classes from './MyPosts.module.css';
const { postsBlock, addPost, posts } = classes;

const MyPosts = (props) => {

    let postsElements = props.state.posts.map(post => <MyPost message={post.message} countLikes={post.countLikes} key={post.id} />)

    return (
        <h3 className={postsBlock}>
            my posts
            <div className={addPost}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={posts}>
                {postsElements}
            </div>
        </h3>
    )
}

export default MyPosts;