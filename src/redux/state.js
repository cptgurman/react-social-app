let rerenderEntireTree = () => {
    console.log('state changed');
}

let state = {
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
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        text: state.profilePage.newPostText,
        likes: 0
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let textareaChange = (text) => {
    let newPostText = text;
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state);
}

export const subsbcribe =(observer) =>{
rerenderEntireTree = observer;
}

export default state;
 