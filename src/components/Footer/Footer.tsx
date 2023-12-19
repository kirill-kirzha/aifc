import {ReactComponent as ChatIcon} from './chat.svg'
import {ReactComponent as HomeIcon} from './home.svg'
import {ReactComponent as PayIcon} from './pay.svg'
import {ReactComponent as SettingsIcon} from './settings.svg'
import {FooterWrapper, FooterMenuItem} from "./Footer.styles";

export const Footer = () => {
    return (
        <FooterWrapper>
            <FooterMenuItem>
                <HomeIcon />
                Главный
            </FooterMenuItem>
            <FooterMenuItem>
                <PayIcon />
                Платежи
            </FooterMenuItem>
            <FooterMenuItem>
                <SettingsIcon />
                Настройки
            </FooterMenuItem>
            <FooterMenuItem>
                <ChatIcon />
                Диалоги
            </FooterMenuItem>
        </FooterWrapper>
    );
};
