import { createSlice } from "@reduxjs/toolkit";

const setToken = (token) => {
  localStorage.setItem("token", token);
  localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
};

const deleteToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("lastLoginTime");
}

const tokenSlice = createSlice({
  name: "token",
  initialState: { value: "" },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
      setToken(action.payload);
    },
    logout: (state, action) => {
      state.value = "";
      deleteToken();
    },
  },
});

export const { logout } = tokenSlice.actions;
export const { login } = tokenSlice.actions;

export default tokenSlice.reducer;
