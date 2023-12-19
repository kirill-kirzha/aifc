import {ActionWrapper} from "./MainPage.styles";

export interface IMainPageAction {
    src: string
    title: string
    onClick: () => void
}

export const MainPageAction = ({ src, title, onClick }: IMainPageAction) => {
    return (
        <ActionWrapper onClick={onClick} src={src}>
            <p>{title}</p>
        </ActionWrapper>
    );
};