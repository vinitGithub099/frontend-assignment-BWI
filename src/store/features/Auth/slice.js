const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserCredentials: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { updateUserCredentials } = userSlice.actions;
export default userSlice.reducer;
