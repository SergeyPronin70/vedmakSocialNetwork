const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY ';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Lambert', avatar: 'https://mtdata.ru/u7/photo8A3C/20886543783-0/original.jpg' },
        { id: 2, name: 'Ziri', avatar: 'https://cs4.pikabu.ru/post_img/big/2015/05/22/6/1432282614_1753581065.jpg' }
    ],
    messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'Eredin is Kurva' }
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 3, message: body }],
                
            };
        
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBobyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;