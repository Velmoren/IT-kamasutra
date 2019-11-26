import React from 'react';
import MyPost from './MyPost/MyPost';

// styles
import classes from './MyPosts.module.css';
const { postsBlock, addPost, posts } = classes;

const MyPosts = (props) => {

    // ссылка на элемент
    let newPostElement = React.createRef();

    let postsElements = props.state.profilePage.posts.map(post => <MyPost message={post.message} countLikes={post.countLikes} key={post.id} />);

    const actionAddPost = () => {
        props.actionAddPost();
    }

    const actionChangePost = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <h3 className={postsBlock}>
            my posts
            <div className={addPost}>
                <div>
                    <textarea onChange={actionChangePost} ref={newPostElement} value={props.state.profilePage.newPostText}></textarea>
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