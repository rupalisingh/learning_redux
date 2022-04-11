import { createSlice } from "@reduxjs/toolkit"


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


export const AuthAction = AuthSlice.actions
export const AuthReducers = AuthSlice.reducer

