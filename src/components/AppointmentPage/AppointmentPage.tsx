import {Button} from "../../ui-kit/Button";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
    AppointmentCalendarWrapper,
    AppointmentLayout,
    AppointmentTitle,
    TimeSelectorDates,
    TimeSelectorWrapper,
    TimeSelectorDate,
    AppointmentActions,
    StyledDatePicker
} from './AppointmentPage.styles'
import {appointmentData} from "./AppointmentPage.data";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {useState} from "react";

export interface IAppointmentItem {
    time: string
}

export const AppointmentPage = () => {
    const [selectedTime, setSelectedTime] = useState<string>('')
    const [selectedDate, setSelectedDate] = useState<string>('')

    const handleSelectTime = (time: string) => {
        setSelectedTime(time)
    }

    const handleSelectDate = (date: string) => {
        setSelectedDate(date)
    }

    console.log(selectedDate)

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
                    {/*<TimeSelectorDesc>*/}
                    {/*    <TimeSelectorLegend></TimeSelectorLegend>*/}
                    {/*    <TimeSelectorSelected></TimeSelectorSelected>*/}
                    {/*</TimeSelectorDesc>*/}
                </TimeSelectorWrapper>
            </AppointmentCalendarWrapper>
            {/*<AppointmentForm>*/}
            {/*    <FormTitle>Выберите сферу работы вашего проекта</FormTitle>*/}
            {/*    <FormTitle>Расскажите немного о вашем проекте</FormTitle>*/}
            {/*</AppointmentForm>*/}
            {/*<StaffMember>*/}
            {/*    <StaffMemberTitle>Специалист</StaffMemberTitle>*/}
            {/*    <StaffMemberCard>*/}
            {/*        <StaffMemberIcon>*/}
            {/*            <icon />*/}
            {/*        </StaffMemberIcon>*/}
            {/*        <StaffMemberCreds>*/}
            {/*            <p>Олег Логинов</p>*/}
            {/*            <p>Консультант AIFC</p>*/}
            {/*        </StaffMemberCreds>*/}
            {/*        <StaffMemberContacts>*/}
            {/*            <icon />*/}
            {/*            <icon />*/}
            {/*        </StaffMemberContacts>*/}
            {/*    </StaffMemberCard>*/}
            {/*</StaffMember>*/}
            <AppointmentActions>
                <Button variant={'primary'}>Отменить</Button>
                <Button variant={'primary'}>Записаться</Button>
            </AppointmentActions>
        </AppointmentLayout>
        </LocalizationProvider>
    );
};