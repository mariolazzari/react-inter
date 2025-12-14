import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      state.data.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
