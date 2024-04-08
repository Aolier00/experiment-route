import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  username: null,
  modules: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      console.log(action);
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state.modules = action.payload.modules;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.username = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
