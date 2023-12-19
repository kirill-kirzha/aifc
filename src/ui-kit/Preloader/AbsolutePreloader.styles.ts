import styled from "styled-components";
import { Preloader } from "./Preloader";

export const AbsolutePreloader = styled(Preloader)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
