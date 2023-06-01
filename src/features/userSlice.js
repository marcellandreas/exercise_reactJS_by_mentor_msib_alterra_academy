import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "Guest@email.com",
  },
  reducers: {
    setUserEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setUserEmail } = userSlice.actions;
export default userSlice.reducer;
