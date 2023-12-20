import styled, {css} from "styled-components";
import {rem} from "../../app/styles/styles";

interface IActionBackground {
    src: string
}

export const MainPageLayout = styled.div`
  display: flex;
  flex-direction: column;
`

export const MainPageInfo = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  padding: 5%;
  gap: ${rem(10)};
`

export const MainPageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(15)};
  justify-content: space-between;
`

export const UserIconWrapper = styled.div`
  background: var(--color-primary);
  border-radius: ${rem(25)};
  display: flex;
  align-items: center;
  padding: ${rem(5)};
  
  svg {
    width: ${rem(35)};
    height: ${rem(35)};
  }
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(15)};
`

export const UserName = styled.p`
  color: var(--color-primary);
  font-size: 21px;
  font-weight: 700;
`

export const MainPageTypography = styled.p`
  color: var(--color-bg);
  font-size: 14px;
  font-weight: 700;
`

export const ActionWrapper = styled.div<IActionBackground>`
  position: relative;
  display: flex;
  height: ${rem(115)};
  flex: 1 1 33%;
  
  ${({src}) => src &&
          css`
          background-image: url(${src});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
  `}
  
  p {
    display: flex;
    color: #FFFFFF;
    font-size: 13px;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 6%;
  }
`

export const MainPageActions = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: ${rem(10)};
`

export const MainPageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(10)};
  background: var(--color-primary);
  padding: 10% 5% 5% 5%;
  margin-top: -10%;
`

export const MainPageSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuTypography = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text);
`

export const ProjectCard = styled.div`
  background: var(--color-action);
  color: #fff;
  display: flex;
  border-radius: ${rem(25)};
  padding: ${rem(10)};
  align-items: center;
  gap: ${rem(15)}
`

export const ProjectCardLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(5)};
  align-items: center;
`

export const ProjectTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
`

export const ProjectAvatar = styled.div`
  display: flex;
  background: var(--color-bg);
  border: 1px solid #fff;
  border-radius: ${rem(20)};
  img {
    width: ${rem(65)};
    height: ${rem(60)}
  }
`

export const ProjectCardRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(5)};
`

export const ProjectCardActions = styled.div`
  color: var(--color-third);
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 700;
  gap: ${rem(5)};
`