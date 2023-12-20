import {Button} from "../../ui-kit/Button";
import {ReactComponent as LegendIcon} from './legend.svg'
import {
    AppointmentCalendarWrapper,
    AppointmentLayout,
    AppointmentTitle,
    TimeSelectorDates,
    TimeSelectorWrapper,
    TimeSelectorDate,
    AppointmentActions,
    StyledDatePicker,
    TimeSelectorDesc,
    TimeSelectorLegend,
    TimeSelectorSelected,
    FormTitle,
    AppointmentForm,
    StyledTextArea,
    StaffMember,
    StaffMemberCard,
    StaffMemberIcon,
    StaffMemberTitle,
    StaffMemberContacts,
    StaffMemberCreds
} from './AppointmentPage.styles'
import {appointmentData} from "./AppointmentPage.data";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {useState} from "react";
import {getMonthByNumber} from "../../utils/GetMonthByNumber";
import {Dropdown} from "../Dropdown/Dropdown";
import AvatarIcon from './avatar.png'
import { ReactComponent as InstIcon } from './inst.svg'
import { ReactComponent as TgIcon } from './telegram.svg'
import {useNavigate} from "react-router-dom";

// @ts-ignore
const tg = window.Telegram.WebApp

export interface IAppointmentItem {
    time: string
}

export const AppointmentPage = () => {
    const [selectedTime, setSelectedTime] = useState<string>('')
    const [selectedDate, setSelectedDate] = useState<number>()
    const [selectedMonth, setSelectedMonth] = useState<number>()
    const navigate = useNavigate()

    const handleSelectTime = (time: string) => {
        setSelectedTime(time)
    }

    const handleSelectDate = (date: any) => {
        const strDate = date.toString()
        const selected = new Date(strDate)

        setSelectedDate(selected.getDate())
        setSelectedMonth(selected.getMonth())
    }

    const handleGetBack = () => {
        navigate(-1)
    }

    const handleMakeAppointment = () => {
        tg.showAlert('Вы успешно записались на консультацию!')
        handleGetBack()
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AppointmentLayout>
            <AppointmentTitle>Запись на консультацию</AppointmentTitle>
            <AppointmentCalendarWrapper>
                <StyledDatePicker onAccept={handleSelectDate} />
                <TimeSelectorWrapper>
                    <p>Выберите свободный временной слот</p>
                    <TimeSelectorDates>
                        {appointmentData.map((time) => (
                            <TimeSelectorDate
                                key={time.time}
                                isSelected={time.time === selectedTime}
                                onClick={() => handleSelectTime(time.time)}
                            >
                                {time.time}
                            </TimeSelectorDate>
                        ))}
                    </TimeSelectorDates>
                    <TimeSelectorDesc>
                        <TimeSelectorLegend>
                            <LegendIcon />
                            слот занят
                        </TimeSelectorLegend>
                        <TimeSelectorSelected>
                            {selectedDate || selectedMonth ?
                                `вы выбрали: ${selectedDate} ${getMonthByNumber(Number(selectedMonth))}, ${selectedTime}`
                                : 'время не выбрано'
                            }
                        </TimeSelectorSelected>
                    </TimeSelectorDesc>
                </TimeSelectorWrapper>
            </AppointmentCalendarWrapper>
            <AppointmentForm>
                <FormTitle>Выберите сферу работы вашего проекта</FormTitle>
                <Dropdown />
                <FormTitle>Расскажите немного о вашем проекте</FormTitle>
                <StyledTextArea placeholder={'Добавить комментарий...'} />
            </AppointmentForm>
            <StaffMember>
                <StaffMemberTitle>Специалист</StaffMemberTitle>
                <StaffMemberCard>
                    <StaffMemberIcon>
                        <img src={AvatarIcon} alt={'специалист'}/>
                    </StaffMemberIcon>
                    <StaffMemberCreds>
                        <p>Олег Логинов</p>
                        <p>Консультант AIFC</p>
                    </StaffMemberCreds>
                    <StaffMemberContacts>
                        <InstIcon />
                        <TgIcon />
                    </StaffMemberContacts>
                </StaffMemberCard>
            </StaffMember>
            <AppointmentActions>
                <Button variant={'primary-reverted'} onClick={handleGetBack}>Отменить</Button>
                <Button variant={'primary'} onClick={handleMakeAppointment}>Записаться</Button>
            </AppointmentActions>
        </AppointmentLayout>
        </LocalizationProvider>
    );
};