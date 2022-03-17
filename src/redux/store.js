import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"


let store = {
    _state: {
        profilePage: {
            postsData: [{ id: 1, text: 'Hi how are you?', likes: 15 },
            { id: 2, text: 'First projct', likes: 22 }],

            newPostText: 'текст из ньюпоста'
        },

        dialogsPage: {
            dialogsData: [{ name: 'Дмитрий', id: 1 },
            { name: 'Саша', id: 2 },
            { name: 'Паша', id: 3 },
            { name: 'Даниил', id: 4 },
            { name: 'Виктор', id: 5 }],

            messagesData: [{ id: 1, message: 'Lorem ipsum dolor sit amet.' },
            { id: 2, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
            { id: 3, message: 'Lorem ipsum dolor sit amet consectetur.' },],

            messageText: '',
        },

        sidebar: {},

    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('state changed');
    },

    subsbcribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;
