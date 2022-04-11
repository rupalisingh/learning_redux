import { configureStore } from "@reduxjs/toolkit";
import {counterReducers} from "../store/counterSlice"
import { AuthReducers } from "./AuthSlice";




const store = configureStore({
  reducer : {counter : counterReducers, auth : AuthReducers}
});


export default store;
