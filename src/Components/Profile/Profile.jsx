import React from 'react';
import './Profile.css';
import Profileinfo from './Profileinfo/Profileinfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div>
            <Profileinfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;