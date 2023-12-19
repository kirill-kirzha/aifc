import styled from "styled-components";
import {rem} from "../../app/styles/styles";

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${rem(15)};
  background: var(--color-bg);
  display: flex;
  justify-content: space-between;
`
export const FooterMenuItem = styled.div`
  display: flex;
  flex: 1 1 25%;
  flex-direction: column;
  gap: ${rem(5)};
  align-items: center;
  color: var(--color-text);
  font-size: 14px;
  font-weight: 700;
  
  svg {
    width: ${rem(30)};
    height: ${rem(30)};
  }
`