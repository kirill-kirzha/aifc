import styled from "styled-components";
import {rem} from "../../app/styles/styles";
import {css} from "styled-components";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

interface IDate {
    isSelected: boolean
}

export const AppointmentLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15% 5% 5% 5%;
  background: #fff;
  gap: ${rem(25)}
`

export const AppointmentTitle = styled.p`
  color: var(--color-bg);
  font-size: 21px;
  font-weight: 700;
  text-align: center;
`

export const AppointmentCalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(15)};
`

export const TimeSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(10)};
  p {
    color: var(--color-primary);
    font-size: 14px;
    font-weight: 700;
  }
`

export const TimeSelectorDates = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: ${rem(15)};
`

export const TimeSelectorDate = styled.button<IDate>`
  background: #D0D0D0;
  text-align: center;
  border-radius: ${rem(20)};
  padding: ${rem(10)};
  color: var(--color-bg);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  
  ${({ isSelected }) => isSelected &&
        css `
          background: var(--color-active);
          color: #fff
        `
}
`

export const AppointmentActions = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledDatePicker = styled(DatePicker).attrs({
    label: 'Выберите дату',
    closeOnSelect: true,
    minDate: dayjs(new Date())
})`
  border-radius: ${rem(20)};
  border: 1px solid black;
  color: #fff;
  //background: black;
`