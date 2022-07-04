export type InputDefaultType = {
    className?: string
    placeholder?: string
    value?: string | number
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>
    onBlur?: React.FocusEventHandler<HTMLInputElement>
}