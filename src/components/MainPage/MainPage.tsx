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
    MainPageInfo,
    ProjectCard,
    ProjectAvatar,
    ProjectCardActions,
    ProjectCardLeft,
    ProjectCardRight,
    ProjectTitle,
    MenuWarning
} from "./MainPage.styles";
import {useNavigate} from "react-router-dom";
import {Input} from "../../ui-kit/Input";
import {ReactComponent as UserIcon} from './user.svg'
import Action1 from './action1.png'
import Action2 from './action2.png'
import Action3 from './action3.png'
import {MainPageAction} from "./MainPageAction";
import {Footer} from "../Footer/Footer";
import ProjectIcon from './project.png'
import {Button} from "../../ui-kit/Button";

export const MainPage = () => {
    const navigate = useNavigate()
    const username = localStorage.getItem('USER_NAME')
    const companyName = localStorage.getItem('USER_COMPANY')
    const goToAppointment = () => {
        navigate('/appointment')
    }

    const handleLogOut = () => {
        navigate('/authorization')
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
                    <ProjectCard>
                        <ProjectCardLeft>
                            <ProjectTitle>
                                {companyName}
                            </ProjectTitle>
                            <ProjectAvatar>
                                <img src={ProjectIcon} alt={'проект'} />
                            </ProjectAvatar>
                        </ProjectCardLeft>
                        <ProjectCardRight>
                            <p>Действующий тариф: -</p>
                            <p>Баланс: -</p>
                            <ProjectCardActions>
                                <p>Пополнить баланс</p>
                                <p>Редактировать</p>
                            </ProjectCardActions>
                        </ProjectCardRight>
                    </ProjectCard>
                </MainPageSection>
                <MainPageSection>
                    <MenuTypography>Расписание</MenuTypography>
                    <MenuWarning>Расписание пока отсутствует😢</MenuWarning>
                </MainPageSection>
                <MainPageSection>
                    <MenuTypography>Подписка</MenuTypography>
                    <MenuWarning>Подписка пока отсутствует😢</MenuWarning>
                </MainPageSection>
            </MainPageContent>
            <Footer />
            <Button variant={'cancel-primary'} onClick={handleLogOut}>Выйти из аккаунта</Button>
        </MainPageLayout>
    );
};