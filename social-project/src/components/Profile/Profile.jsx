import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                state={props.state}
                actionAddPost={props.actionAddPost}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;