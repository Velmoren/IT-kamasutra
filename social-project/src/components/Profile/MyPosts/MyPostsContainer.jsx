import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../storeContext';

const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {store => {

            let addPost = () => {
                store.dispatch(addPostActionCreator());
            }

            let onPostChange = (text) => {
                store.dispatch(updateNewPostTextActionCreator(text))
            }

            let state = store.getState()

            return (
                <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                />
            )
        }
        }
    </StoreContext.Consumer>
}

export default MyPostsContainer;