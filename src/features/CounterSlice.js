import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { tableDatas } from './data/dataForTable';

const initialState = {
    dataTable: tableDatas(),
    buttonState: "Показать",
    navigatorLinkNav: `table/2`,
    currentDay: "15.08.2024",
    flagForNextDay: false,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        btnTableClick: state => {
            state.buttonState = state.buttonState == "Показать" ? "Скрыть" : "Показать";
            state.currentDay = state.currentDay == "15.08.2024" ? "16.08.2024" : "15.08.2024";
            state.flagForNextDay = state.flagForNextDay ? false : true;
        },
        toggleNavLink: state => {
            state.navigatorLinkNav = state.navigatorLinkNav == `table/2` ? `/` : `table/2`
        },
    },
});

 export const { btnTableClick, toggleNavLink } = counterSlice.actions;

export default counterSlice.reducer;