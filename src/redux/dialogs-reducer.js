const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'
const SEND_MESSAGE_TEXT = 'SEND_MESSAGE_TEXT'


let initialState = {
    dialogsData: [{ name: 'Дмитрий', id: 1 },
    { name: 'Саша', id: 2 },
    { name: 'Паша', id: 3 },
    { name: 'Даниил', id: 4 },
    { name: 'Виктор', id: 5 }],

    messagesData: [{ id: 1, message: 'Lorem ipsum dolor sit amet.' },
    { id: 2, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: 3, message: 'Lorem ipsum dolor sit amet consectetur.' },],

    messageText: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            state.messageText = action.messageText;
            return state;
        case SEND_MESSAGE_TEXT:
            let message = {
                id: 5,
                message: state.messageText,
            };
            state.messagesData.push(message);
            state.messageText = '';
            return state;
        default:
            return state;
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

export default dialogsReducer;