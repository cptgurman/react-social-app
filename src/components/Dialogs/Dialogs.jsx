import react from 'react';
import css from './Dialogs.module.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';


const DialogComponent = (props) => {

    return <div className={css.dialog}>
        <NavLink to={props.path}>{props.name}</NavLink>
    </div>
}

const MessageComponent = (props) => {
    return <div className={css.message}>
        {props.messageText}
    </div>
}



const Dialogs = (props) => {

    let dialogsData = [
        { name: 'Дмитрий', id: '1' },
        { name: 'Саша', id: '2' },
        { name: 'Паша', id: '3' },
        { name: 'Даниил', id: '4' },
        { name: 'Виктор', id: '5' }
    ]

    let dialogsElements = dialogsData.map(dialog => <DialogComponent name={dialog.name} path={dialog.id} />);

    let messagesData = [
        { message: 'Lorem ipsum dolor sit amet.' },
        { message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { message: 'Lorem ipsum dolor sit amet consectetur.' },
    ]

    let messageElement = messagesData.map(element => <MessageComponent messageText={element.message} />)
    return (

        <div className={css.dialogs}>
            <div className={css.pageName}>
                Диалоги
            </div>

            <div className={css.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={css.messages}>
                {messageElement}
            </div>
        </div>



    );
}

export default Dialogs;