import React from "react";

const MySelect: React.FC<PropsType> = ({ options, defaultValue, value, onChange }) => {
   
    return (
        <select
        value={value}
        onChange={ event => onChange(event.target.value) }
        >
            <option disabled value=''>{defaultValue}</option>
                        
            {options.map(option => {
                return <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            })}
        </select>
    )
}

export default MySelect;

type PropsType = {
    options: Array<{value: string, name: string}>
    defaultValue: string
    value: string
    onChange: (value: string) => void
}