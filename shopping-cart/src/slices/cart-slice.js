import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQunatity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemtoCart(state, action) {
      const newItem = action.payload;
      const existingItems = state.items.find(item => item.id === newItem.id)
      state.totalQunatity++
      if(!existingItems){
          state.items.push({
              id : newItem.id,
              quantity : 1,
              price : newItem.price,
              totalPrice : newItem.price,
              name : newItem.title

          })
      }else{
          existingItems.quantity++
          existingItems.totalPrice += existingItems.price
      }
    },
    removeItemtoCart(state, action) {
        const id = action.payload
        const ExistingItem = state.items.find(item => item.id === id)
        state.totalQunatity--
        if(ExistingItem.quantity === 1){
            state.items = state.items.filter(item => item.id !== id)
        }else{
            ExistingItem.quantity--
        }
    },
  },
});

export const cartSliceReducer = cartSlice.reducer
export const cartSliceActions = cartSlice.actions

export default cartSlice

