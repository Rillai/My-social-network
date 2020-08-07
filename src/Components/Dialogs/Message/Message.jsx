import React from 'react';
import '.././Dialogs.css'

const Message = (props) => {
    return <div className="dialog"><img className='dialog_ava' src='https://sun9-36.userapi.com/_rotzGKoEgg9ak8YKvkqsMu3qVZNJeB0qrmIyQ/r8yir_fNaCk.jpg?ava=1'/> {props.message}</div>
}
export default Message;