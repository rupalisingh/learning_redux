import { configureStore } from "@reduxjs/toolkit";
import { uiReducers } from "../slices/ui-slice";
import {cartSliceReducer} from "../slices/cart-slice"

const store = configureStore({
  reducer: {
    ui: uiReducers,
    cart : cartSliceReducer
  },
});

export default store;
