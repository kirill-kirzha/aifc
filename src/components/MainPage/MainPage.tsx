import {
    MainPageLayout,
    MainPageHeader,
    MainPageTypography,
    UserName,
    UserIconWrapper,
    UserInfo,
    MainPageActions,
    MainPageContent,
    MainPageSection,
    MenuTypography,
    MainPageInfo
} from "./MainPage.styles";
import {useNavigate} from "react-router-dom";
import {Input} from "../../ui-kit/Input";
import {ReactComponent as UserIcon} from './user.svg'
import Action1 from './action1.png'
import Action2 from './action2.png'
import Action3 from './action3.png'
import {MainPageAction} from "./MainPageAction";
import {Footer} from "../Footer/Footer";

export const MainPage = () => {
    const navigate = useNavigate()
    const username = localStorage.getItem('USER_NAME')

    const goToAppointment = () => {
        navigate('/appointment')
    }

    return (
        <MainPageLayout>
            <MainPageInfo>
                <MainPageHeader>
                    <UserIconWrapper>
                        <UserIcon />
                    </UserIconWrapper>
                    <Input
                        variant={'primary'}
                        placeholder={'Поиск по приложению'}
                    />
                </MainPageHeader>
                <UserInfo>
                    <UserName>
                        {username},
                    </UserName>
                    <MainPageTypography>готовы покорять новые вершины с ИИ?</MainPageTypography>
                </UserInfo>
                <MainPageActions>
                    <MainPageAction src={Action1} title={'Записаться на консультацию'} onClick={goToAppointment} />
                    <MainPageAction src={Action2} title={'Обратиться в техподдержку'} onClick={goToAppointment} />
                    <MainPageAction src={Action3} title={'Новости из мира ИИ'} onClick={goToAppointment} />
                </MainPageActions>
            </MainPageInfo>
            <MainPageContent>
                <MainPageSection>
                    <MenuTypography>Ваши проекты</MenuTypography>
                </MainPageSection>
                <MainPageSection>
                    <MenuTypography>Расписание</MenuTypography>
                </MainPageSection>
                <MainPageSection>
                    <MenuTypography>Подписка</MenuTypography>
                </MainPageSection>
            </MainPageContent>
            <Footer />
        </MainPageLayout>
    );
};