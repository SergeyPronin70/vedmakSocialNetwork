import React from "react"
import styles from './FormsControls.module.css'
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form';
import MyInput from "../MyInput";
import { FieldValidatorType } from "../../../utils/validators/validators";

const FormControl: React.FC<FormControlPropsType> = ({ input, meta: { touched, error }, children }) => {
    const hasError = touched && error;
    return <div className={styles.formControl + ' ' + (hasError ? styles.error : "")}>
        <div>
            {children}
        </div>
        {hasError && <span>{error}</span>}
    </div>
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    //const {input, meta, child, ...restProps} = props;
    const { input, meta, ...restProps } = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    )
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    //const {input, meta, child, ...restProps} = props;
    const { input, meta, ...restProps } = props;
    return (
        //@ts-ignore
        <FormControl {...props}><MyInput  {...input} {...restProps} /></FormControl>
    )
}

export function CreateField<FormKeysType extends string> (placeholder: string | undefined, name: FormKeysType, 
    component: React.FC<WrappedFieldProps>,
    validators: Array<FieldValidatorType>, props = {}, text = '') { 
    return <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props} /> {text}
    </div>}

export type GetStringKeys<T> = Extract< keyof T, string >

type FormControlPropsType = {
    meta: WrappedFieldMetaProps,
    children: React.ReactNode,
    input: any
}