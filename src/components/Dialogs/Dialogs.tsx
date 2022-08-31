import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { InjectedFormProps, reduxForm } from "redux-form";
import { CreateField, Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, reqired } from "../../utils/validators/validators";
import { InitialStateType } from "src/redux/dialogs-reducer";

const Dialogs: React.FC<PropsType> = (props) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />)
    let messagesElements = state.messages.map(m => <Message message={m.message} />)

    let addNewMessage = (values: {newMessageBody: string}) => {
        props.sendMessage(values.newMessageBody);
        values.newMessageBody = '';
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormType, MessageFormPropsType> & MessageFormPropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
            { CreateField<NewMessageFormTypeKeys>('Enter your message', 'newMessageBody', Textarea, [reqired, maxLength50]) }
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<NewMessageFormType, MessageFormPropsType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;

type NewMessageFormType = {
    newMessageBody: string
    
}
type NewMessageFormTypeKeys = Extract< keyof NewMessageFormType, string >

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
}
type MessageFormPropsType = {}