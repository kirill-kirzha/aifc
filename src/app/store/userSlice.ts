import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type TClubVariants = 'Бутово' | 'Чехов' | 'Подольск'

type User = {
    userName: string
    name: string
    lastName: string
    phone: string
    club: string
}

const initialState: User = {
    userName: '',
    name: '',
    lastName: '',
    phone: '',
    club: 'Чехов'
}

const userSlice = createSlice({
    name: 'schedule',
    initialState: initialState,
    reducers: {
        registerUser(state, action: PayloadAction<Pick<User, 'phone' | 'club'>>) {
            state.phone = action.payload.phone
            state.club = action.payload.club
        },
        authorizeUser(state, action: PayloadAction<Pick<User, 'phone'>>) {
            state.phone = action.payload.phone
        },
        setUserName(state, action: PayloadAction<Pick<User, 'userName'>>) {
            state.userName = action.payload.userName
        },
        logout(state) {
            state.phone = ''
        }
    },
});

export const { authorizeUser, registerUser, setUserName, logout } = userSlice.actions;

export default userSlice.reducer;