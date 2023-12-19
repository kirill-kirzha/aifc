import { InputGroup, InputWrapper, InputContent } from "./Input.styles";
import {ChangeEvent, useRef} from "react";
import {useSetFocusInsideInput} from "../../hooks/useSetFocusInsideInput";

export type IInputTypes = 'primary' | 'inline'

export interface IInputProps {
    variant: IInputTypes
    placeholder?: string
    isFocused?: boolean
    className?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    maskEvent?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ variant, placeholder, onChange, maskEvent, className }: IInputProps & Partial<HTMLInputElement>) => {

    const inputRef = useRef(null)

    const isFocused = useSetFocusInsideInput(inputRef)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e)
        }
        if(maskEvent) {
            maskEvent(e)
        }
    }

    return (
        <InputWrapper className={className}>
            <InputGroup variant={variant} isFocused={isFocused} onChange={handleChange} >
                <InputContent
                    ref={inputRef}
                    placeholder={placeholder}
                />
            </InputGroup>
        </InputWrapper>
    );
};