import { stopSubmit } from "redux-form";
import { authAPI, ResultCodesEnum, ResultCodesForCaptcha, securityAPI } from "../api/api";
import { BaseThunkType, InferActionTypes } from "./redux-store";

let initialState = {
    userId: null as (null | number),
    email: null as (null | string),
    login: null as (null | string),
    isAuth: false,
    captchaUrl: null as (null | string)
}

const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload,
            }
        case 'GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'SET_USER_DATA' as const,
        payload: { userId, email, login, isAuth }
    } ),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'GET_CAPTCHA_URL_SUCCESS' as const,
        payload: { captchaUrl }
    } ),
}


export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let meData = await authAPI.me();
    if (meData.resultCode === ResultCodesEnum.Success) {
        let { id, email, login } = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: any): ThunkType => async (dispatch) => {
    let loginData = await authAPI.login(email, password, rememberMe, captcha)
    if (loginData.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData());
    } else {
        if (loginData.resultCode === ResultCodesForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        } else {
            let message = loginData.messages.length > 0 ? loginData.messages[0] : 'Some error'
            dispatch(stopSubmit('login', { _error: message }));
        }
    }
}
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
}


export const logout = (): ThunkType => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
}
export default authReducer;

type InitialStateType = typeof initialState
type ThunkType = BaseThunkType<ActionTypes | ReturnType<typeof stopSubmit>>
type ActionTypes = InferActionTypes<typeof actions>
