import { ThunkAction } from "redux-thunk";
import { AppStateType, InferActionTypes } from "./redux-store";

let initialState = {
    dialogs: [
        { id: 1, name: 'Lambert', avatar: 'https://mtdata.ru/u7/photo8A3C/20886543783-0/original.jpg' },
        { id: 2, name: 'Ziri', avatar: 'https://cs4.pikabu.ru/post_img/big/2015/05/22/6/1432282614_1753581065.jpg' }
    ] as Array<DialogType>,
    messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'Eredin is coming' }
    ] as Array<MessageType>
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case 'SEND_MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 3, message: body }],
            };

        default:
            return state;
    }
}

export const actions = {
    sendMessage: (newMessageBody: string) => ({ type: 'SEND_MESSAGE', newMessageBody } as const)
}

export default dialogsReducer;

type DialogType = {
    id: number,
    name: string,
    avatar: any,
}
type MessageType = {
    id: number,
    message: string,
}
type ActionTypes = InferActionTypes<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

