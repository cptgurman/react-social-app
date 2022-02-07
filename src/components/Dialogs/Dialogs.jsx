import react from 'react';
import css from './Dialogs.module.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import DialogComponent from './Dialog/Dialog';
import MessageComponent from './Messages/Messages';




const Dialogs = (props) => {

    return (

        <div className={css.dialogs}>
            <div className={css.pageName}>
                Диалоги
            </div>

            <div className={css.dialogsItems}>
                {props.dialogsData.map(dialog => <DialogComponent key={dialog.id} name={dialog.name} path={dialog.id.toString()} />)}
            </div>

            <div className={css.messages}>
                {props.messagesData.map(element => <MessageComponent key={element.id} messageText={element.message} />)}
            </div>
        </div>



    );
}

export default Dialogs;