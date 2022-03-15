const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'
const SEND_MESSAGE_TEXT = 'SEND_MESSAGE_TEXT'

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
        }
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                text: this._state.profilePage.newPostText,
                likes: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_MESSAGE_TEXT) {
            this._state.dialogsPage.messageText = action.messageText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE_TEXT) {
            let message = {
                id: 5,
                message: this._state.dialogsPage.messageText,
            };
            this._state.dialogsPage.messagesData.push(message);
            this._state.dialogsPage.messageText = '';
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: text
    }
}

export const updateTextMessageActionCreator = (messageText) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        messageText: messageText
    }
}

export const sendTextMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE_TEXT
    }
}


window.store = store;
export default store;
