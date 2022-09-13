import React from "react";
import classes from './MyInput.module.css'

const MyInput: React.FC<PropsType> = ({...props}) => {
    return (
        <input {...props} className={classes.myInput} />
    )
} 

export default MyInput;

type PropsType = {
    value: any
    onChange: (e: any) => void
    placeholder: string
}