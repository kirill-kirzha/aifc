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
    TimeSelectorSelected
} from './AppointmentPage.styles'
import {appointmentData} from "./AppointmentPage.data";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {useState} from "react";
import {getMonthByNumber} from "../../utils/GetMonthByNumber";

export interface IAppointmentItem {
    time: string
}

export const AppointmentPage = () => {
    const [selectedTime, setSelectedTime] = useState<string>('')
    const [selectedDate, setSelectedDate] = useState<number>()
    const [selectedMonth, setSelectedMonth] = useState<number>()

    const handleSelectTime = (time: string) => {
        setSelectedTime(time)
    }

    const handleSelectDate = (date: object) => {
        const strDate = date.toString()
        const selected = new Date(strDate)

        setSelectedDate(selected.getDate())
        setSelectedMonth(selected.getMonth())
    }

    console.log(selectedDate, selectedMonth)

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
                            вы выбрали: {selectedDate} {getMonthByNumber(Number(selectedMonth))}, {selectedTime}
                        </TimeSelectorSelected>
                    </TimeSelectorDesc>
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