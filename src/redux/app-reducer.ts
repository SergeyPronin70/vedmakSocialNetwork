import { ThunkAction } from "redux-thunk";
import { getAuthUserData } from "./auth-reducer";
import { AppStateType, InferActionTypes } from "./redux-store";

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }

}

export const actions = {
    initializedSuccess: () => ({ type: 'INITIALIZED_SUCCESS' as const })
}

export const initializeApp = (): ThunkType => (dispatch): any => {
   let promise = dispatch( getAuthUserData() );
   Promise.all([promise]).then( () => dispatch(actions.initializedSuccess()) )
}

export default appReducer;

export type InitialStateType = typeof initialState
type ActionTypes = InferActionTypes<typeof actions>
type GetStateType = () => AppStateType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>