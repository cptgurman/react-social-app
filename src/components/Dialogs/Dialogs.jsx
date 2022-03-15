import css from './Dialogs.module.css';
import React from 'react';
import DialogComponent from './Dialog/Dialog';
import MessageComponent from './Messages/Messages';
import { sendTextMessageActionCreator, updateTextMessageActionCreator } from '../../redux/state';






const Dialogs = (props) => {

    let mesText = React.createRef();

    let updateMessage = () => {
        let text = mesText.current.value;
        props.dispatch(updateTextMessageActionCreator(text));
    }

    let sendMessage = () => {
        props.dispatch(sendTextMessageActionCreator());
    }

    return (

        <div className={css.dialogs}>
            <div className={css.pageName}>
                Диалоги
            </div>

            <div className={css.dialogsItems}>
                {props.data.dialogsData.map(dialog => <DialogComponent key={dialog.id} name={dialog.name} path={dialog.id.toString()} />)}
            </div>

            <div className={css.messages}>
                {props.data.messagesData.map(element => <MessageComponent key={element.id} messageText={element.message} />)}
                <div className={css.typemessage}>
                    <textarea cols="30" rows="10" onChange={updateMessage} ref={mesText} value={props.data.messageText} />
                    <button onClick={sendMessage}> send message </button>
                </div>
            </div>


        </div>



    );
}

export default Dialogs;