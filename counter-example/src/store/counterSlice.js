import { createSlice } from "@reduxjs/toolkit";


const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleShow(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterReducers =  counterSlice.reducer
export const CounterAction = counterSlice.actions
