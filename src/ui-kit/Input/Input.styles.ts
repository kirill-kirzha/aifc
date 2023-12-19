import styled, {css} from "styled-components";
import {IInputProps} from "./Input";
import {rem} from "../../app/styles";

export const InputWrapper = styled.div`
    display: flex;
    width: 100%;
`

export const InputGroup = styled.div<IInputProps>`
  width: 100%;
  cursor: pointer;
  min-height: 100%;
  text-align: left;
  font-weight: 400;
  font-size: ${rem(17)};
  transition: all .2s ease-out;
  display: flex;
  
  ${({ variant }) => {
    switch(variant) {
        case 'primary':
            return css`
              background: transparent;
              color: var(--color-text);
              border-bottom: var(--color-bg) solid 1px;
            `
          case 'otp':
            return css`
              color: var(--color-text);
              width: 100%;
              height: 60px;
              border: 1px solid #ccc;
              border-radius: 5px;
              text-align: center;
              font-size: 32px;
              font-weight: bold;
              line-height: 1;
                `
    }
}}

  ${({ isFocused }) =>
    isFocused &&
    css`
			border-color: var(--color-action);
		`}

`

export const InputContent = styled.input`
  width: 100%;
  min-height: 100%;
  color: var(--color-text);
  background: transparent;
  padding: ${rem(12)};
  font-size: 17px;
  font-weight: 400;
  line-height: normal;

  &:-webkit-autofill {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: var(--color-text-primary);
  }

  &:-webkit-autofill:hover {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: var(--color-text-primary);
  }

  &:-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: var(--color-text-primary);
  }

  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: var(--color-text-primary);
  }
`