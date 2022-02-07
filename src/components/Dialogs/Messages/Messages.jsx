import react from 'react';
import css from './Messages.module.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';



const MessageComponent = (props) => {
    return <div className={css.message}>
        {props.messageText}
    </div>
}


export default MessageComponent;