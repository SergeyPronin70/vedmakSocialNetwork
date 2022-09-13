import React from "react";
import classes from './MyButton.module.css'

const MyButton: React.FC<PropsInterface> = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myButton}> 
            {children}
        </button>
    )
} 

export default MyButton;

interface PropsInterface {
    children: any
    onClick?: () => void
}