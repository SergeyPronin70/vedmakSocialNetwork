import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Field, InjectedFormProps } from 'redux-form';
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

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Navigate to='/profile' />
    }
    
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        <div>
            <b>For testing use:</b>
        Email: free@samuraijs.com
        Password: free
        </div>
    </div>
}

const mapStateToProps = (state: AppStateType ): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login }) (Login);


type LoginFormOwnPropsType = {
    captchaUrl: string | null
}
type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: any) => void
}
export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
export type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>