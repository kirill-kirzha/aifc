import {Input} from "../../ui-kit/Input";
import {AuthorizationLayout, AuthorizationForm, LogoText, AuthorizationTypography} from "./AuthorizationPage.styles";
import {Button} from "../../ui-kit/Button";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

//@ts-ignore
const tg = window.Telegram.WebApp;

export const AuthorizationPage = () => {
    const navigate = useNavigate()
    const [company, setCompany] = useState<string>()
    const [user, setUser] = useState<string>()
    const [password, setPassword] = useState<string>()

    const dataFulfilled = company && user && password

    const handleRegister = () => {
        if(dataFulfilled) {
            localStorage.setItem('USER_COMPANY', company)
            localStorage.setItem('USER_NAME', user)
            localStorage.setItem('USER_PASSWORD', password)
            navigate('/')
        } else {
            tg.showAlert('Пожалуйста, заполните все данные')
        }
    }

    return (
        <AuthorizationLayout>
            <LogoText>AIfc</LogoText>
            <AuthorizationForm>
                <AuthorizationTypography>Регистрация</AuthorizationTypography>
                <Input
                    variant={'inline'}
                    placeholder={'Название вашего проекта'}
                    onChange={e => setCompany(e.target.value)}
                />
                <Input
                    variant={'inline'}
                    placeholder={'Имя пользователя'}
                    onChange={e => setUser(e.target.value)}
                />
                <Input
                    variant={'inline'}
                    placeholder={'Пароль'}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button  variant={'primary'} onClick={handleRegister}>Зарегистрироваться</Button>
            </AuthorizationForm>
        </AuthorizationLayout>
    );
};