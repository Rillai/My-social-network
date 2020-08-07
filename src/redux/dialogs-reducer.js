const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    newMessageBody: '',
    messages: [],
    dialogs: [
        { id: '1', name: 'Igor' },
        { id: '2', name: 'Trollola' },
        { id: '3', name: 'Punk' },
        { id: '4', name: 'Srun' },
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 5, message: body }],
            };
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
            };
        default:
            return state;
    }
};

export const sendMessageCreation = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextAction = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;