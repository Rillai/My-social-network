import React from 'react';
import './Profileinfo.css';
import preLoader from '../../../assets/images/preLoader.svg'

const Profileinfo = (props) => {
    if (!props.profile) {
        return <img src={preLoader} />
    }
    return (
        <div className='Profile_ProfileInfo'>
            <div className='Profileinfo_Block'>
                <img className='ProfileInfo_Ava' src='https://sun9-19.userapi.com/c856524/v856524939/15ec8a/8onXgwqF4GY.jpg?ava=1' />
                <div className='ProfileInfo_Information'>
                    <div className='ProfileInfo_Name'>{props.profile.fullName}</div>
                    <input className='ProfileInfo_Status' value={props.profile.aboutMe} placeholder='Set a status message' />
                </div>
            </div>
            <div className='ProfileInfo_Description'>
                Kavo tavo zag-zag
            </div>
        </div>
    )
}
export default Profileinfo;