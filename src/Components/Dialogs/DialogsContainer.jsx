import React from 'react';
import { updateNewMessageTextAction, sendMessageCreation } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { WithAuthRedirect } from './../Hoc/WithAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (props) => {
    return {
        dialogs: props.dialogsPage.dialogs,
        messages: props.dialogsPage.messages,
        newMessageBody: props.dialogsPage.newMessageBody
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreation());
        },
        updateNewMessageText: (body) => {
            dispatch(updateNewMessageTextAction(body));
        },
    }
}

export default compose(WithAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Dialogs)