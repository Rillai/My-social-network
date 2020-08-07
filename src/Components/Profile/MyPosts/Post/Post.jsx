import React from 'react';
import './Post.css'

const Post = (props) => {

    return (
        <div className='postitem'>
            <div className='postheader'>
                <img className='postimg' src="https://sun9-43.userapi.com/c857132/v857132019/1a9f43/0l-4Zsw25Dg.jpg?ava=1" />
                <div>
                    <span className='postname'> Карев Андрей</span>
                </div>
            </div>
            <div className='posttext'> {props.message}</div>
        </div>
)}
export default Post;