import styled from "styled-components";
import {rem} from "../../app/styles/styles";

export const AuthorizationLayout = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-bg);
  width: 100vw;
  height: 100vh;
`

export const AuthorizationForm = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
  border-top-left-radius: ${rem(110)};
  flex-direction: column;
  gap: ${rem(15)};
  background: #fff;
  padding: 10%;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  
  Button {
    margin-top: ${rem(40)};
  }
`

export const LogoText = styled.h2`
  font-family: 'League Spartan', sans-serif;
  position: absolute;
  font-size: ${rem(70)};
  top: 22%;
  right: 0;
  color: var(--color-text)
`

export const AuthorizationTypography = styled.p`
  color: var(--color-primary);
  font-size: 21px;
  font-weight: 700;
`