import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsEl = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
    let newPostEl = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onNewPostChange = () => {
        let text = newPostEl.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className="postsblock">
            <h3> All posts </h3>

            <div><input
                onChange={onNewPostChange}
                ref={newPostEl}
                value={props.newPostText}
                className='postsArea'
                placeholder="What's new?" /></div>

            <div><button onClick={onAddPost}>Post</button></div>

            <div className='posts'>{postsEl}</div>
        </div>
    )
}

export default MyPosts;