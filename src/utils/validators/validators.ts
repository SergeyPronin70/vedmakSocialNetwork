export type FieldValidatorType = (value: string) => string | undefined

export const reqired: FieldValidatorType = (value) => {
    if (value) return undefined;
    return 'Field is reqired'
}

export const maxLengthCreator = (maxLength: number): FieldValidatorType => value => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined
}