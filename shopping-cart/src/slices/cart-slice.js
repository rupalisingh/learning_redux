import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const initialState = { items: [], totalQunatity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemtoCart(state, action) {
      const newItem = action.payload;
      const existingItems = state.items.find((item) => item.id === newItem.id);
      state.totalQunatity++;
      if (!existingItems) {
        state.items.push({
          id: newItem.id,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItems.quantity++;
        existingItems.totalPrice += existingItems.price;
      }
    },
    removeItemtoCart(state, action) {
      const id = action.payload;
      const ExistingItem = state.items.find((item) => item.id === id);
      state.totalQunatity--;
      if (ExistingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        ExistingItem.quantity--;
      }
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "sending...",
        message: "sending cart data",
      })
    );
    const sendRequest = async () => {
      const response = await fetch("sample.com", {
        method: "PUT",
        body: JSON.stringify(cart),
      });
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!!",
          message: "SEnd cart data successfully",
        })
      );
    } catch (error) {
      uiActions.showNotification({
        status: "error",
        title: "Error!!",
        message: "Sending Cart Data Failed!",
      })
    }
  };
};

export const cartSliceReducer = cartSlice.reducer;
export const cartSliceActions = cartSlice.actions;

export default cartSlice;
