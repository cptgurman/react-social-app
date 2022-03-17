import css from './Dialogs.module.css';
import React from 'react';
import DialogComponent from './Dialog/Dialog';
import MessageComponent from './Messages/Messages';
import { updateTextMessageActionCreator, sendTextMessageActionCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {
    let messages = props.data.messagesData.map(element => <MessageComponent key={element.id} messageText={element.message} />)
    let dialogs = props.data.dialogsData.map(dialog => <DialogComponent key={dialog.id} name={dialog.name} path={dialog.id.toString()} />)

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
                {dialogs}
            </div>

            <div className={css.messages}>
                <div>
                    {messages}
                </div>
                <div className={css.typemessage}>
                    <textarea cols="30" rows="10" placeholder='Enter message' onChange={updateMessage} ref={mesText} value={props.data.messageText} />
                    <button onClick={sendMessage}> send message </button>
                </div>
            </div>


        </div>



    );
}

export default Dialogs;