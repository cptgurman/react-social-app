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
            { id: 3, message: 'Lorem ipsum dolor sit amet consectetur.' },]
        },
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('state changed');
    },

    addPost(){
        let newPost = {
            id: 5,
            text: this._state.profilePage.newPostText,
            likes: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    textareaChange(text) {
        let newPostText = text;
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber(this._state);
    },

    subsbcribe(observer){
        this._callSubscriber = observer;
        }

}

window.store = store;
export default store;
 