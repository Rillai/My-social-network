import React from 'react';
import './Dialogs.css'
import Dialogitem from './Dialogitem/Dialogitem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogElements = props.dialogs.map(d => <Dialogitem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = props.messages.map(m => <Message message={m.message} key={m.id} />);
    let newMessageText = React.createRef();

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onNewMessageChange = () => {
        let text = newMessageText.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className="dialogs">
            <div className="dialogs-items">
                {dialogElements}
            </div>
            <div className="messages">
                {messagesElements}
                <div>
                    <div><input
                        type="text" className='messageArea'
                        onChange={onNewMessageChange}
                        ref={newMessageText}
                        value={props.newMessageBody}
                        placeholder='Enter your message'></input></div>

                    <div><button onClick={onSendMessage}>Send</button></div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;