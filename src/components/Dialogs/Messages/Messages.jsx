
import css from './Messages.module.css';




const MessageComponent = (props) => {
    return <div className={css.message}>
        {props.messageText}
    </div>
}


export default MessageComponent;