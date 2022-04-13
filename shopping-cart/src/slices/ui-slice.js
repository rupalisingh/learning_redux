import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartisVisible: false };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
        state.cartisVisible = !state.cartisVisible
    },
  },
});

export const uiReducers = uiSlice.reducer
export const uiActions = uiSlice.actions
export default uiSlice;
