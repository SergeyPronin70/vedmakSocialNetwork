import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
    
    let state = props.dialogsPage;
    
    let dialogsElement = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} /> )
    let messagesElements = state.messages.map( m => <Message message={m.message} />)
    let newMessageBody = state.newMessageBody;

    let addMessageElement = React.createRef();
    
    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBoby(body);
    }

    if (!props.isAuth) return <Navigate to='/login' />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea placeholder="Enter your message" value={newMessageBody} onChange={onNewMessageChange} ref={addMessageElement}></textarea>
            </div>
            <div>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;