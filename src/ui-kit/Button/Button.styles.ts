import styled from "styled-components";
import {IButtonProps} from "./Button";
import {rem} from "../../app/styles/styles";
import {css} from "styled-components";

export const ButtonWrapper = styled.button<IButtonProps>`
  padding: ${rem(13)} ${rem(20)};
  text-align: center;
  cursor: pointer;
  font-weight: 500;
  font-size: ${rem(18)};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${rem(8)};
  
  a {
    color: inherit;
    text-decoration: none;
  }
  transition: all 0.3s ease-in;
  
  svg {
    width: 24px;
    height: 24px;
  }
  
${({ variant }) => {
    switch (variant) {
        case 'primary':
            return css`
              color: var(--color-text);
              background: var(--color-primary);
              border: 1px solid transparent;
              border-radius: ${rem(25)};
              
              &:hover {
                background: transparent;
                border: 1px solid var(--color-primary);
                color: var(--color-primary)
              }
          `
        case 'filled':
            return css`
            color: var(--color-text-dark);
            background: var(--color-action);
            border-radius: ${rem(25)};
            
            &:hover {
              background: var(--color-inactive);
            }
          `
        case 'primary-reverted':
            return css`
              background: transparent;
              border: 1px solid var(--color-primary);
              color: var(--color-primary);
              border-radius: ${rem(25)};
            
            &:hover {
              color: var(--color-text);
              background: var(--color-primary);
              border: 1px solid transparent;
            }
          `
        case 'cancel-primary':
            return css`
            color: var(--color-cancel);
            background: transparent;
            border: 1px solid var(--color-cancel);
            border-radius: ${rem(25)};
            
            &:hover {
              color: var(--color-text-dark);
              background: var(--color-cancel);
              border: 1px solid transparent;
            }
          `
    }
}
}
  ${({disabled}) => disabled &&
     css`
       color: var(--color-text-dark);
       background: var(--color-warning);
       border-radius: ${rem(10)};
    `
}
`