import { applyMiddleware, combineReducers, createStore, compose, Action } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import friendsReducer from './friends-reducer';
import usersReducer from "./users-reducer";
import authReducer from './auth-reducer';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import {reducer as formReduser} from 'redux-form'
import appReducer from "./app-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friends: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReduser,
    app: appReducer
});

type RootReduserType = typeof rootReducer; // (globalstate: appstatetype) => appstatetype
export type AppStateType = ReturnType<RootReduserType>

export type InferActionTypes<T> = T extends {[key: string]: (...args: any[])=>infer U} ? U : never

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.__store__ = store;


export default store;