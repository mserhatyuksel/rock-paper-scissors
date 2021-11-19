import { createSlice, configureStore } from "@reduxjs/toolkit";
import calcHouseValue, { calculateResult } from "../util";

const initialState = {
  selected: "",
  score: 0,
  houseValue: 0,
  result: "",
  choices: [
    {
      classes:
        "bg-paper border-borderColor-paper shadow-paperShadow translate-x-6",
      selectedClasses: "bg-paper border-borderColor-paper shadow-paperShadow",
      img: "./images/icon-paper.svg",
      alt: "paper",
    },
    {
      classes:
        "bg-scissors border-borderColor-scissors shadow-scissorsShadow translate-x-32",
      selectedClasses:
        "bg-scissors border-borderColor-scissors shadow-scissorsShadow",

      img: "./images/icon-scissors.svg",
      alt: "scissors",
    },
    {
      classes:
        "bg-rock border-borderColor-rock shadow-rockShadow -translate-x-40 translate-y-52",
      selectedClasses: "bg-rock border-borderColor-rock shadow-rockShadow",
      img: "./images/icon-rock.svg",
      alt: "rock",
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
      state.score -= 1;
    },
    housePicked(state) {
      state.houseValue = calcHouseValue();
    },
    calcResult(state) {
      state.result = calculateResult(state.selected, state.houseValue);
    },
  },
});

const store = configureStore({
  reducer: slice.reducer,
});
export const sliceAction = slice.actions;
export default store;
