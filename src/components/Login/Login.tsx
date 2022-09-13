import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { InjectedFormProps } from 'redux-form';
import { reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';
import { reqired } from '../../utils/validators/validators';
import { CreateField, GetStringKeys, Input } from '../common/FormsControls/FormsControls';
import style from '../common/FormsControls/FormsControls.module.css'

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = 
    ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
           
                { CreateField<LoginFormValuesTypeKeys>('Email', 'email', Input, [reqired]) }
                { CreateField<LoginFormValuesTypeKeys>('Password', 'password', Input, [reqired], {type: 'password'} ) }
                { CreateField<LoginFormValuesTypeKeys>(undefined, 'rememberMe', Input, [], {type: 'checkbox'}, 'remember me' ) }

                {/* <Field placeholder={'Email'} name={'email'} component={ Input } validate={[ reqired ]} />
                <Field placeholder={'Password'} name={'password'} component={Input} validate={[ reqired ]} type={'password'} /> 
                <Field component={Input} name={'rememberMe'} type={'checkbox'} /> remember me */}
            
            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && CreateField<LoginFormValuesTypeKeys>('Symbols from image', 'captcha', Input, [reqired], {} ) }

            { error && <div className={ style.formSummaryError }>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({
    //уникальное имя для формы
    form: 'login'
})(LoginForm)

export const LoginPage: React.FC = () => {
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const dispatch = useDispatch()
    
    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Navigate to='/profile' />
    }
    
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
        <div>
            <b>For testing use:</b>
        Email: free@samuraijs.com
        Password: free
        </div>
    </div>
}


type LoginFormOwnPropsType = {
    captchaUrl: string | null
}

export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
export type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>