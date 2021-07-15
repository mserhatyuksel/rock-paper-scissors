import { createSlice, configureStore } from "@reduxjs/toolkit";
import calcHouseValue, { calculateResult } from "../util";

const initialState = {
    selected: "",
    score: 0,
    houseValue: 0,
    result: "",
    visibleHouse: false,
    visibleResult: false,
    choices: [
        {
            classes: "border-blue-500",
            img: "./images/icon-paper.svg",
            alt: "paper",
        },
        {
            classes: "border-pink-600 self-end",
            img: "./images/icon-rock.svg",
            alt: "rock",
        },
        {
            classes: "border-yellow-500",
            img: "./images/icon-scissors.svg",
            alt: "scissors",
        },
    ],
};

const slice = createSlice({
    name: "choice",
    initialState,
    reducers: {
        userSelected(state, action) {
            state.selected = action.payload;
        },
        increment(state) {
            state.score += 1;
        },
        decrement(state) {
            if (state.score > 0) {
                state.score -= 1;
            }
        },
        housePicked(state) {
            state.houseValue = calcHouseValue();
        },
        calcResult(state) {
            state.result = calculateResult(state.selected, state.houseValue);
        },
        toggleVisibleHouse(state) {
            state.visibleHouse = !state.visibleHouse;
        },
        toggleVisibleResult(state) {
            state.visibleResult = !state.visibleResult;
        },
    },
});

const store = configureStore({
    reducer: slice.reducer,
});
export const sliceAction = slice.actions;
export default store;
