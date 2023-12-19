import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type User = {
    userName: string
    company: string
    password: string
}

const initialState: User = {
    userName: '',
    company: '',
    password: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUserName(state, action: PayloadAction<string>) {
            state.userName = action.payload
        },
    },
});

export const { setUserName } = userSlice.actions;

export default userSlice.reducer;