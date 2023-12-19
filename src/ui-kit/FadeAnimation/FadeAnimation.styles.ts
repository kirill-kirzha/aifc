import styled, { css } from "styled-components";
import { Transition } from "@headlessui/react";

export const FadeAnimationWrapper = styled(Transition)<{ fullSize?: boolean }>`
  ${({ fullSize }) =>
    fullSize &&
    css`
      width: 100%;
      height: 100%;
    `}
`;
