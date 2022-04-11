import { createSlice, configureStore } from "@reduxjs/toolkit";
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

const AuthInitialState = {isAuthenticated : false}

const AuthSlice = createSlice({
  name : "Auth",
  initialState : AuthInitialState,
  reducers : {
    login(state){
      state.isAuthenticated = true
    },
    logout(state){
      state.isAuthenticated = false
    }
  }
})



const store = configureStore({
  reducer : {counter : counterSlice.reducer, auth : AuthSlice.reducer}
});

export const CounterAction = counterSlice.actions
export const AuthAction = AuthSlice.actions

export default store;
