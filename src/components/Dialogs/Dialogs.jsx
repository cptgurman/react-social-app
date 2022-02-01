import react from 'react';
import css from './Dialogs.module.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';


const DialogComponent = (props) => {
    let path = props.id;

    return <div className={css.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const MessageComponent = (props) => {

    return <div className={css.message}>
        {props.messageText}
    </div>
}

const Dialogs = (props) => {
    return (

        <div className={css.dialogs}>
            <div className={css.pageName}>
                Диалоги
            </div>

            <div className={css.dialogsItems}>
                <DialogComponent name='Дмитрий' id='1' />
                <DialogComponent name='Саша' id='2' />
                <DialogComponent name='Паша' id='3' />
                <DialogComponent name='Даниил' id='4' />
                <DialogComponent name='Виктор' id='5' />
            </div>

            <div className={css.messages}>
                <MessageComponent messageText='Lorem ipsum dolor sit amet.' />
                <MessageComponent messageText='Lorem ipsum dolor sit amet consectetur adipisicing elit.' />
                <MessageComponent messageText='Lorem ipsum dolor sit amet consectetur.' />
            </div>
        </div>



    );
}

export default Dialogs;