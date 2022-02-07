import react from 'react';
import css from './Dialog.module.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';


const DialogComponent = (props) => {

    return <div className={css.dialog}>
        <NavLink to={props.path}>{props.name}</NavLink>
    </div>
}

export default DialogComponent;