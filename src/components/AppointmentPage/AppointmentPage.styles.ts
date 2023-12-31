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
`

export const TimeSelectorDesc = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TimeSelectorLegend = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(8)};
  color: var(--color-third);
  font-size: 12px;
  font-weight: 700;
  
  svg {
    width: ${rem(14)};
    height: ${rem(14)};
  }
`

export const TimeSelectorSelected = styled.p`
  color: var(--color-bg);
  font-size: 12px;
  font-weight: 700;
`

export const AppointmentForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(20)};
`

export const FormTitle = styled.p`
  color: var(--color-bg);
  font-size: 14px;
  font-weight: 700;
`

export const StyledTextArea = styled.textarea`
  display: flex;
  width: 100%;
  min-height: ${rem(200)};
  background: var(--color-third);
  color: var(--color-primary);
  border-radius: ${rem(20)};
  padding: ${rem(15)}
`

export const StaffMember = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(15)};
`

export const StaffMemberTitle = styled.p`
  color: var(--color-primary);
  font-size: 14px;
  font-weight: 700;
`

export const StaffMemberCard = styled.div`
  display: flex;
  align-items: center;
`

export const StaffMemberIcon = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`

export const StaffMemberCreds = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(10)};
  color: var(--color-third);
  font-size: 12px;
  font-weight: 400;
  padding-left: 10%;
  
  p {
    &:first-child {
      color: var(--color-primary);
        font-size: 16px;
        font-weight: 700;
    }
  }
`

export const StaffMemberContacts = styled.div`
  display: flex;
  gap: ${rem(15)};
  align-items: center;
  padding-left: 30%;
`