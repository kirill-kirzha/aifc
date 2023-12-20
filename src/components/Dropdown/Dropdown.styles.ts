import styled from "styled-components";
import {rem} from "../../app/styles/styles";

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropdownVariant = styled.div`
  color: var(--color-primary);
  font-size: 15px;
  font-weight: 600;
  line-height: 18px;
  padding: ${rem(15)};
  text-align: center;
  border-top: 1px solid var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &:first-child {
    border-top: none;
  }
`;

export const DropdownVariantsWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  flex: 1 1 auto;
  background: var(--color-third);
  max-height: 150px;
  border-bottom-left-radius: ${rem(20)};
  border-bottom-right-radius: ${rem(20)};
`;

export const DropdownContent = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  margin-top: -15px;
`