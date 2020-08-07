import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: []
        },
        dialogsPage: {
            newMessageBody: '',
            messages: [],
            dialogs: [
                { id: '1', name: 'Igor' },
                { id: '2', name: 'Trollola' },
                { id: '3', name: 'Punk' },
                { id: '4', name: 'Srun' },
            ],
        },
        sidebar: {},
    },
    _callsubscriber() {
        console.log('State was changed');
    },

    getstate() {
        return this._state;
    },

    sybscribe(observer) {
        this._callsubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sideBarReducer(this._state.sidebar, action);

        this._callsubscriber(this._state);
    },
}

export default store;
window.store = store;