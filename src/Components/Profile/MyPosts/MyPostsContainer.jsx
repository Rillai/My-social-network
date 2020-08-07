import React from 'react';
import { addPost, updateNewPostText } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (props) => {
    return {
        posts: props.profilePage.posts,
        newPostText: props.profilePage.newPostText,
    }
}
const MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPostText })(MyPosts);
export default MyPostsContainer;