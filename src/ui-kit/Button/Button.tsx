import {PropsWithChildren} from "react";
import {ButtonWrapper} from "./Button.styles";

export type IButtonVariants = 'primary' | 'filled' | 'disabled' | 'cancel-primary' | 'cancel-secondary'

export interface IButtonProps {
    variant: IButtonVariants
    onClick?: () => void
    disabled?: boolean
    className?: string
}

export const Button = ({variant, onClick, children, disabled, className}: IButtonProps & PropsWithChildren) => {

    return (
        <ButtonWrapper
            variant={variant}
            onClick={onClick}
            disabled={disabled}
            className={className}
        >
            {children}
        </ButtonWrapper>
    );
};