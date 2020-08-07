import React from 'react';
import styles from './Users.css';
import standartUserAva from '../../assets/images/standartUserAva.jpg'

export let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (<div>
        <div>
            {pages.map(p => {
                return <span
                    className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div className='users' key={u.id}>
                <div>{u.photos.large
                    ?<img alt="error" className='userImg' src={u.photos.large} />
                    :<img alt="error" className='userImg' src={standartUserAva} />}

                    </div>
                <div>{u.followed 
                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} className='userFollowButton'
                        onClick={() => { props.unfollow(u.id) }}>Unfollow</button>

                    : <button disabled={props.followingInProgress.some(id => id === u.id)} className='userFollowButton'
                        onClick={() => { props.follow(u.id) }}>Follow</button>}</div>
                <div className='userFullName'>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}
                    </div>
                </div>
                <div className='userLocation'>
                    {/* <div>
                        {u.location.country}
                    </div>
                    <div>
                        {u.location.city}
                    </div> */}
                </div>
            </div>)
        }
    </div>)
}